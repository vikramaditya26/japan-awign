(function () {
  "use strict";

  var LANGS = ["ja", "en"];

  // Every visit opens in Japanese. A language picked with the toggle only
  // sticks for this tab, so it carries over to Privacy/Terms.
  var lang = null;
  try { lang = sessionStorage.getItem("awign_lang"); } catch (e) {}
  if (LANGS.indexOf(lang) === -1) lang = "ja";

  var answered = [];
  var revealObserver = null;
  var revealFallback = null;

  // Only opt into the hidden-then-reveal treatment when we can actually
  // drive it; otherwise the markup just renders as-is.
  var animEnabled =
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (animEnabled) document.documentElement.classList.add("anim");

  function t() {
    return I18N[lang];
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // LINE Official Account button; shows 「準備中」 until the link is set.
  function communityLink(cls, ev) {
    if (!CONFIG.COMMUNITY_URL) {
      return '<span class="btn btn--line is-soon ' + (cls || "") + '" aria-disabled="true">' +
        LINE_ICON + esc(t().communitySoon) + "</span>";
    }
    return '<a class="btn btn--line ' + (cls || "") + '" href="' + CONFIG.COMMUNITY_URL + '" target="_blank" rel="noopener" onclick="track(\'' + ev + '\')">' +
      LINE_ICON + esc(t().communityCta) + "</a>";
  }

  // The organization code with a copy button (start box and app step 3).
  function codeBox() {
    if (!CONFIG.ORG_CODE) {
      return '<div class="orgcode orgcode--soon"><span class="orgcode__l">' + esc(t().codeLabel) + '</span>' +
        '<b class="orgcode__v">' + esc(t().codeSoon) + "</b></div>";
    }
    return '<div class="orgcode"><span class="orgcode__l">' + esc(t().codeLabel) + '</span>' +
      '<b class="orgcode__v">' + esc(CONFIG.ORG_CODE) + "</b>" +
      '<button type="button" class="btn btn--ghost orgcode__copy" onclick="copyCode(this)">' + esc(t().copy) + "</button></div>";
  }

  window.copyCode = function (btn) {
    function done() {
      btn.textContent = t().copied;
      btn.classList.add("is-done");
      setTimeout(function () { btn.textContent = t().copy; btn.classList.remove("is-done"); }, 1600);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(CONFIG.ORG_CODE).then(done, done);
    } else {
      var ta = document.createElement("textarea");
      ta.value = CONFIG.ORG_CODE;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      ta.remove();
      done();
    }
    track("copy_code");
  };


  var LINE_ICON =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5C6.2 2.5 1.5 6.3 1.5 11c0 4.2 3.7 7.7 8.8 8.4.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6.1 1.5-1.7 2.3-3.4 2.3-5.3 0-4.7-4.7-8.5-10.5-8.5zM8 13.7H5.9c-.3 0-.6-.3-.6-.6V8.9c0-.3.3-.6.6-.6s.6.3.6.6v3.6H8c.3 0 .6.3.6.6s-.3.6-.6.6zm2.2-.6c0 .3-.3.6-.6.6s-.6-.3-.6-.6V8.9c0-.3.3-.6.6-.6s.6.3.6.6v4.2zm5 0c0 .3-.2.5-.4.6h-.2c-.2 0-.4-.1-.5-.2l-2.1-2.9v2.6c0 .3-.3.6-.6.6s-.6-.3-.6-.6V8.9c0-.3.2-.5.4-.6h.2c.2 0 .4.1.5.3l2.1 2.9V8.9c0-.3.3-.6.6-.6s.6.3.6.6v4.2zm3.4-2.7c.3 0 .6.3.6.6s-.3.6-.6.6H17v1.1h1.6c.3 0 .6.3.6.6s-.3.6-.6.6h-2.2c-.3 0-.6-.3-.6-.6V8.9c0-.3.3-.6.6-.6h2.2c.3 0 .6.3.6.6s-.3.6-.6.6H17v1.1h1.6z"/></svg>';

  var WA_ICON =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.35A10 10 0 1012 2zm0 1.9a8.1 8.1 0 11-4.2 15l-.3-.18-2.6.7.7-2.55-.2-.31A8.1 8.1 0 0112 3.9zm-3.6 3.7c-.17 0-.45.06-.68.31-.23.25-.9.87-.9 2.12s.92 2.46 1.05 2.63c.13.17 1.8 2.86 4.42 3.9 2.18.86 2.62.69 3.1.64.47-.04 1.5-.61 1.72-1.2.21-.6.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3-.25-.12-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.12s-.65.82-.8.99c-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.38-.44.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.37-.77-1.87-.2-.49-.4-.42-.55-.43h-.47z"/></svg>';

  /* ---------------- video ---------------- */

  function makeVideo(src, opts) {
    opts = opts || {};
    var v = document.createElement("video");
    v.src = src;
    v.muted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.preload = "metadata";
    v.loop = !!opts.loop;
    if (opts.controls) v.controls = true;
    return v;
  }

  function muteButton(video) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "vid__mute";
    b.setAttribute("aria-label", "Toggle sound");
    b.innerHTML =
      '<svg class="i-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>' +
      '<svg class="i-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 010 7M19 5a9 9 0 010 14"/></svg>';
    b.addEventListener("click", function (e) {
      e.preventDefault();
      video.muted = !video.muted;
      b.classList.toggle("unmuted", !video.muted);
      if (!video.muted) video.play().catch(function () {});
      track("video_mute_toggle", { muted: video.muted });
    });
    return b;
  }

  // Hero / app: autoplaying, looping, with our own mute control.
  function renderFeature(hostId, src) {
    var host = document.getElementById(hostId);
    host.innerHTML = "";
    if (!src) return;
    var v = makeVideo(src, { loop: true });
    v.autoplay = true;
    host.appendChild(v);
    host.appendChild(muteButton(v));
    v.play().catch(function () {});
  }

  // Example clips: controls, and they play while hovered on desktop.
  function renderClips(hostId, labels, sources, kind) {
    var host = document.getElementById(hostId);
    host.innerHTML = "";

    labels.forEach(function (label, i) {
      var wrap = document.createElement("div");
      wrap.className = "clip clip--" + kind;

      var box = document.createElement("div");
      box.className = "vid";
      // "#t=0.1" makes phones paint the first frame instead of a black box.
      var v = makeVideo(sources[i] + "#t=0.1", { loop: true, controls: true });
      box.appendChild(v);
      wrap.appendChild(box);

      var title = document.createElement("div");
      title.className = "clip__t";
      title.textContent = label;
      wrap.appendChild(title);

      wrap.addEventListener("mouseenter", function () {
        if (window.matchMedia("(hover: hover)").matches) {
          v.play().catch(function () {});
        }
      });
      wrap.addEventListener("mouseleave", function () {
        if (window.matchMedia("(hover: hover)").matches && !v.paused) {
          v.pause();
        }
      });

      host.appendChild(wrap);
    });
  }

  /* ---------------- renderers ---------------- */

  function renderText() {
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var v = t()[nodes[i].getAttribute("data-i18n")];
      if (typeof v === "string") nodes[i].textContent = v;
    }
    LANGS.forEach(function (l) {
      document.getElementById("l-" + l).classList.toggle("on", l === lang);
    });
    document.getElementById("theme-btn").setAttribute("aria-label", t().themeLabel);
  }

  function renderSetup() {
    var host = document.getElementById("setup-list");
    host.innerHTML = "";
    t().setupRows.forEach(function (r) {
      var row = document.createElement("div");
      row.className = "setup__row";
      row.innerHTML =
        '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' +
        "<span><b>" + esc(r.t) + "</b> — " + esc(r.d) + "</span>";
      host.appendChild(row);
    });
  }

  function renderDoDont() {
    var check =
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
    var cross =
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    var doHost = document.getElementById("do-list");
    doHost.innerHTML = "";
    t().do.forEach(function (item) {
      var li = document.createElement("li");
      li.innerHTML = check + "<span>" + esc(item) + "</span>";
      doHost.appendChild(li);
    });

    var dontHost = document.getElementById("dont-list");
    dontHost.innerHTML = "";
    t().dont.forEach(function (item) {
      var li = document.createElement("li");
      li.innerHTML = cross + "<span>" + esc(item) + "</span>";
      dontHost.appendChild(li);
    });
  }

  function renderAppSteps() {
    var host = document.getElementById("app-steps");
    host.innerHTML = "";

    t().appSteps.forEach(function (s, i) {
      var row = document.createElement("div");
      row.className = "stp";

      var body =
        "<div><h3>" + esc(s.t) + "</h3><p>" + esc(s.d) + "</p>";

      // Store buttons sit under step 1.
      if (i === 0) body += storeButtons();

      // The code sits on the step where it's needed.
      if (i === 2) body += '<div class="stp__extra">' + codeBox() + "</div>";

      body += "</div>";
      row.innerHTML = '<div class="stp__n">' + (i + 1) + "</div>" + body;
      host.appendChild(row);
    });
  }

  function playUrl() {
    return CONFIG.PLAY_STORE_URL + "&hl=" + (CONFIG.PLAY_STORE_HL[lang] || "en");
  }

  function storeButtons() {
    var play =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00d7fe" d="M3.6 1.8 13.8 12 3.6 22.2a1.2 1.2 0 0 1-.5-1V2.8c0-.4.2-.8.5-1z"/><path fill="#ffce00" d="m17.3 8.5 3.2 1.8c1 .6 1 2.8 0 3.4l-3.2 1.8L13.8 12z"/><path fill="#00f076" d="M3.6 1.8c.4-.3 1-.3 1.5 0l12.2 6.7-3.5 3.5z"/><path fill="#ff3a44" d="M13.8 12l3.5 3.5-12.2 6.7c-.5.3-1.1.3-1.5 0z"/></svg>';
    var apple =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.8 1.3 10.3.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.2zM13.9 5c.7-.8 1.2-2 1-3.2-1 0-2.3.7-3 1.5-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.4z"/></svg>';
    function btn(href, icon, top, name, ev) {
      return '<a class="store" href="' + href + '" target="_blank" rel="noopener" onclick="track(\'' + ev + '\')">' +
        icon + '<span><small>' + esc(top) + "</small><b>" + name + "</b></span></a>";
    }
    return '<div class="stp__extra stores">' +
      btn(playUrl(), play, t().storePlayTop, "Google Play", "play_store") +
      btn(CONFIG.APP_STORE_URL, apple, t().storeAppTop, "App Store", "app_store") +
      "</div>";
  }

  function renderQuiz() {
    var host = document.getElementById("quiz");
    host.innerHTML = "";
    answered = new Array(t().quiz.length).fill(false);

    t().quiz.forEach(function (item, qi) {
      var block = document.createElement("div");
      block.className = "qq card card--edge card--spot rv";

      var q = document.createElement("p");
      q.className = "qq__t";
      q.textContent = qi + 1 + ". " + item.q;
      block.appendChild(q);

      var opts = document.createElement("div");
      opts.className = "qq__opts";
      item.opts.forEach(function (label, oi) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "qq__opt";
        b.textContent = label;
        b.addEventListener("click", function () {
          answer(qi, oi, block);
        });
        opts.appendChild(b);
      });
      block.appendChild(opts);

      var fb = document.createElement("p");
      fb.className = "qq__fb";
      fb.textContent = item.feedback;
      block.appendChild(fb);

      host.appendChild(block);
    });

    meter();
  }

  function answer(qi, oi, block) {
    var item = t().quiz[qi];
    var btns = block.querySelectorAll(".qq__opt");
    var fb = block.querySelector(".qq__fb");
    var right = oi === item.correct;

    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      if (i === item.correct) btns[i].classList.add("ok");
      if (i === oi && !right) btns[i].classList.add("no");
    }
    fb.classList.add("show");

    if (!answered[qi]) {
      answered[qi] = true;
      meter();
      track("quiz_answer", { q: qi + 1, first_try_correct: right });
    }

    if (!right) {
      setTimeout(function () {
        for (var i = 0; i < btns.length; i++) {
          btns[i].disabled = false;
          btns[i].classList.remove("ok", "no");
        }
      }, 1200);
    }
  }

  function meter() {
    var total = answered.length;
    var done = answered.filter(Boolean).length;
    document.getElementById("q-count").textContent = done + "/" + total;
    document.getElementById("q-fill").style.width =
      (total ? (done / total) * 100 : 0) + "%";
    if (total && done === total) track("quiz_complete");
  }

  function renderPay() {
    var arrow =
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

    var cycles = t().payCycles.map(function (c) {
      return '<div class="pay__cyc"><b>' + esc(c.range) + "</b><span>" + esc(c.when) + "</span></div>";
    }).join("");
    var examples = t().payExamples.map(function (e) {
      return "<li><span>" + esc(e[0]) + "</span><b>" + arrow + esc(e[1]) + "</b></li>";
    }).join("");
    document.getElementById("pay-cycles").innerHTML =
      "<h3>" + esc(t().payCycleTitle) + "</h3>" + cycles +
      '<p class="pay__sub">' + esc(t().payExTitle) + '</p><ul class="pay__ex">' + examples + "</ul>";

    var rows = t().payMinRows.map(function (r) {
      return '<div class="pay__row' + (r.paid ? " is-paid" : "") + '"><span>' + esc(r.l) + "</span><b>" + esc(r.r) + "</b></div>";
    }).join("");
    document.getElementById("pay-min").innerHTML =
      "<h3>" + esc(t().payMinTitle) + "</h3><p>" + esc(t().payMinBody) + "</p>" + rows +
      '<p class="pay__note">' + esc(t().payMinNote) + "</p>";

    var accts = !CONFIG.PAY_ACCOUNTS.length
      ? '<li><span class="pay__acct"><b>' + esc(t().paySoon) + "</b></span></li>"
      : CONFIG.PAY_ACCOUNTS.map(function (a) {
      return '<li class="' + (a.preferred ? "is-pref" : "") + '"><span class="pay__acct"><b>' + esc(a.name) + "</b>" +
        (a.url ? '<a href="' + a.url + '" target="_blank" rel="noopener" onclick="track(\'wise_invite\')">' + esc(t().wiseCta) + " →</a>" : "") + "</span>" +
        (a.preferred ? '<span class="tag tag--good">' + esc(t().payPreferred) + "</span>" : "") + "</li>";
    }).join("");
    document.getElementById("pay-acct").innerHTML =
      "<h3>" + esc(t().payAcctTitle) + "</h3><p>" + esc(t().payAcctBody) + '</p><ul class="pay__accts">' + accts + "</ul>" +
      '<p class="pay__note">' + esc(t().paySummary) + "</p>";

    document.getElementById("pay-contact").innerHTML =
      "<p>" + esc(t().payContact) + "</p>" + communityLink("", "community_pay");
  }

  // Desktop-only QR code for the LINE add-friend link (hidden on phones by CSS).
  function lineQr() {
    if (!CONFIG.COMMUNITY_URL || !CONFIG.LINE_QR) return "";
    return '<div class="lineqr"><img src="' + CONFIG.LINE_QR + '" width="132" height="132" alt="LINE QR" />' +
      "<div><b>" + esc(t().qrTitle) + "</b><p>" + esc(t().qrBody) + "</p></div></div>";
  }

  function renderHeroCta() {
    document.getElementById("hero-cta").innerHTML =
      '<div class="herocta">' + communityLink("btn--big", "community_hero") + lineQr() + "</div>" +
      '<p class="herocta__note">' + esc(t().heroCtaNote) + "</p>";
    document.getElementById("linebar").innerHTML = CONFIG.COMMUNITY_URL ? communityLink("", "community_bar") : "";
  }

  function renderStart() {
    var steps = t().startSteps.map(function (st, i) {
      return '<li><span class="start__n">' + (i + 1) + "</span><div><b>" + esc(st.t) + "</b><p>" + esc(st.d) + "</p></div></li>";
    }).join("");
    document.getElementById("start-box").innerHTML =
      '<div class="start__main"><h2>' + esc(t().startTitle) + "</h2><p>" + esc(t().startBody) + "</p>" +
      '<ol class="start__steps">' + steps + "</ol>" +
      '<p class="start__soon">' + esc(t().startCommercial) + "</p></div>" +
      '<div class="start__cta">' + communityLink("btn--big", "community_start") + lineQr() + "</div>";
  }

  function renderFaq() {
    var host = document.getElementById("faq-list");
    host.innerHTML = "";
    t().faq.forEach(function (item) {
      var d = document.createElement("details");
      d.className = "card rv";
      d.innerHTML =
        "<summary>" + esc(item.q) + "</summary><p>" + esc(item.a) + "</p>";
      host.appendChild(d);
    });
  }

  function renderSocial() {
    var host = document.getElementById("social");
    host.innerHTML = "";
    var icons = {
      instagram:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none"/></svg>',
      facebook:
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z"/></svg>',
      twitter:
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.2L5.9 22H3.1l7-8L2 2h6.2l4.3 5.7L18.2 2zm-1 18h1.6L7.9 3.7H6.2L17.2 20z"/></svg>',
    };

    Object.keys(icons).forEach(function (k) {
      var url = CONFIG.SOCIAL[k];
      if (!url) return;
      var a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", k);
      a.innerHTML = icons[k];
      host.appendChild(a);
    });
  }

  function renderPhones() {
    document.getElementById("phones").innerHTML = CONFIG.PHONES.map(function (p) {
      return "<span>" + esc(p) + "</span>";
    }).join("");
  }

  function wireLinks() {
    var fc = document.getElementById("f-contact");
    if (CONFIG.COMMUNITY_URL) fc.href = CONFIG.COMMUNITY_URL;
    else { fc.removeAttribute("href"); fc.textContent = t().communitySoon; }
    document.getElementById("f-official").href = CONFIG.OFFICIAL_PAGE_URL;
    document.getElementById("f-about").href = CONFIG.ABOUT_URL;
  }

  /* ---------------- interaction polish ---------------- */

  // Glow that tracks the cursor across a card.
  function wireSpotlights() {
    document.querySelectorAll(".card--spot").forEach(function (card) {
      if (card.dataset.spotWired) return;
      card.dataset.spotWired = "1";
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      });
    });
  }

  function revealAll() {
    document.querySelectorAll(".rv").forEach(function (el) {
      el.classList.add("in");
    });
  }

  function wireReveals() {
    if (!animEnabled) return;

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }

    document.querySelectorAll(".rv:not(.in)").forEach(function (el) {
      revealObserver.observe(el);
    });

    // Safety net: if the observer hasn't reported anything — a background
    // tab never composites, so it doesn't fire — show everything anyway
    // rather than leave the page blank.
    clearTimeout(revealFallback);
    revealFallback = setTimeout(function () {
      if (!document.querySelector(".rv.in")) revealAll();
    }, 2000);
  }

  /* ---------------- orchestration ---------------- */

  function renderAll() {
    renderText();
    renderSetup();
    renderDoDont();
    renderAppSteps();
    renderHeroCta();
    renderStart();
    renderQuiz();
    renderPay();
    renderFaq();
    renderSocial();
    renderPhones();
    wireLinks();

    renderFeature("v-hero", CONFIG.VIDEO.hero[lang]);
    renderFeature("v-app", CONFIG.VIDEO.app[lang]);
    renderClips("clips-good", t().goodClips, CONFIG.VIDEO.good, "good");
    renderClips("clips-bad", t().badClips, CONFIG.VIDEO.bad, "bad");

    wireSpotlights();
    wireReveals();
  }

  window.setLang = function (next) {
    if (next === lang) return;
    lang = next;
    try { sessionStorage.setItem("awign_lang", next); } catch (e) {}
    renderAll();
    track("lang_switch", { lang: next });
  };

  window.toggleTheme = function () {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";

    root.classList.add("theming");
    root.setAttribute("data-theme", next);
    localStorage.setItem("awign_theme", next);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.remove("theming");
      });
    });

    track("theme_switch", { theme: next });
  };

  window.track = function (name, props) {
    var payload = Object.assign(
      { event: name, ts: Date.now(), lang: lang },
      props || {}
    );
    if (CONFIG.ANALYTICS_ENDPOINT) {
      fetch(CONFIG.ANALYTICS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(function () {});
    } else {
      console.log("[track]", payload);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    track("page_view");
  });
})();
