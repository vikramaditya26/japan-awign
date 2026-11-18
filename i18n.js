/* ============================================================
   All site copy (JA + EN) and launch config — Japan programme.
   Japanese is the default language.
   Anything not decided yet is shown as 「準備中」/ "Coming soon":
   leave the CONFIG value blank and the page shows that label.
   ============================================================ */

const I18N = {
  "ja": {
    "themeLabel": "テーマを切り替える",
    "heroTitle": "AI開発のための\n家事の動画撮影",
    "heroLede": "料理や掃除、洗濯など、ふだんの家事をしている手元をスマホで撮影するお仕事です。スマホはヘッドバンドでおでこに付けるので、顔は映らず、声も使いません。撮影した動画はAIやロボットの開発に使われ、品質チェックを通った時間に応じて報酬をお支払いします。経験は不要で、登録料もかかりません。",
    "heroCta": "LINEで友だち追加",
    "heroCtaNote": "友だち追加すると、かんたんな質問が届きます。回答いただいたあと、担当者がLINEで始め方をご案内します。",
    "qrTitle": "パソコンでご覧の方へ",
    "qrBody": "スマホのLINEアプリで、このQRコードを読み取ってください。",
    "heroVideoCap": "撮影の流れ（英語の動画です。日本語版は近日公開）",
    "stat1V": "1時間ごと",
    "stat1L": "品質チェックに合格した動画1時間ごとに報酬が発生します。単価はLINEでご案内します。",
    "stat2V": "月2回",
    "stat2L": "1日〜15日分と16日〜月末分の、月2回に分けてお支払いする予定です。",
    "stat3V": "対応スマートフォン",
    "stat3L": "以下の機種か、それより新しい機種が必要です。古い機種では撮影できないため、先にご確認ください。",
    "workTitle": "撮るのは、\n手元の作業だけ",
    "workBody": "おでこに付けたスマホが、あなたの目線で手元を撮影します。台本や演技はありません。いつもどおりに家事をしてください。",
    "workCap1": "皿洗い",
    "workCap2": "片付け・整理",
    "workCap3": "拭き掃除",
    "workCap4": "手作業・工作",
    "setupTitle": "角度を正しく",
    "setupBody": "不承認になる動画のほとんどは、ヘッドマウントの位置が原因です。撮影前に4つを確認しましょう。",
    "setupRows": [
      { "t": "額の高さに", "d": "目の高さに付けます。胸元など低い位置は不可。" },
      { "t": "少し下向きに", "d": "作業中、両手がずっと画面に入るように。" },
      { "t": "必ず横向き", "d": "スマホは横向きで。縦向きの動画は不承認です。" },
      { "t": "最後まで装着", "d": "途中で外したり、スマホを手に持ったりしないでください。" }
    ],
    "exTitle": "良い例と、悪い例",
    "exBody": "実際に撮影された動画です。上の3本は合格、下の3本は不合格でした。",
    "goodTag": "このように撮影",
    "goodHeading": "合格する動画",
    "goodSub": "承認された撮影例",
    "goodClips": ["衣類をたたむ", "食器を洗う", "アイロンがけ"],
    "badTag": "これはNG",
    "badHeading": "不合格になる動画",
    "badSub": "不合格になった撮影例",
    "badClips": ["意味のない動作", "わざとゆっくり", "暗すぎる"],
    "ddTitle": "合格するもの、しないもの",
    "ddBody": "動画はすべてスタッフが確認してから納品します。「必ず守ること」を守っていれば、報酬の対象になります。",
    "doTitle": "必ず守ること",
    "do": [
      "ヘッドマウントは最後まで装着",
      "スマホは横向きで撮影",
      "本当の作業を自然なペースで",
      "両手を画面に入れる",
      "作業に合った場所で撮影する",
      "同居の方の了承を得てから撮影する",
      "手元を明るくする",
      "カメラを安定させる",
      "Minuteアカウントは1台につき1つ"
    ],
    "dontTitle": "してはいけないこと",
    "dont": [
      "ヘッドマウントを外す・スマホを手で持つ",
      "縦向きで撮影する",
      "作業のふり・演技をする",
      "速すぎる・機械的な動き",
      "作業に合わない場所で撮影する",
      "同じ作業を重複して提出する",
      "顔・郵便物・身分証・カード・画面を映す",
      "暗い・ピンボケの映像",
      "複数のMinuteアカウントを作る・使い分ける"
    ],
    "ddNote": "「してはいけないこと」に当てはまる動画は不合格になり、その時間は報酬の対象になりません。",
    "appTitle": "作業はすべてMinuteアプリで",
    "appBody": "撮影には「Minute」というアプリを使います。タスクの確認、撮影、アップロード、合格した時間の確認まで、すべてこのアプリで行います。アプリ以外で撮影した動画は報酬の対象になりません。",
    "appVideoCap": "アプリの使い方（英語の動画です）",
    "storePlayTop": "GET IT ON",
    "storeAppTop": "Download on the",
    "appSteps": [
      { "t": "Google Play または App Store からMinuteをインストール", "d": "無料です。撮影に使うスマホにインストールしてください。iPhone 12、Pixel 6、Galaxy S21 以降の機種が必要です。" },
      { "t": "アカウントを作成（またはログイン）", "d": "はじめての方は、ログイン画面の下にある「Create an account」をタップしてください。すでにMinuteのアカウントをお持ちの方は、そのままログインしてください。" },
      { "t": "組織コードを入力", "d": "招待コード（組織コード）の入力画面が出たら、LINEでお送りしたコードを入力してください。はじめての方はどのメールアドレスでも登録できます。以前Minuteを使ったことがある方は、同じメールアドレスでログインしてください。" },
      { "t": "組織名「Awign - Residential - Japan」を確認", "d": "ログイン後にこの組織名が表示されていれば完了です。表示されない場合はコードが入っていません。コードがないと報酬をお支払いできないので、必ず確認してください。" },
      { "t": "タスクを選んで撮影開始", "d": "タスク画面から1つ選び、画面の説明に従って撮影し、その日の締め切りまでにアップロードしてください。" }
    ],
    "quizTitle": "はじめる前の5つの確認",
    "quizBody": "採点はしません。間違えても何度でもやり直せます。",
    "quizProgress": "回答済み",
    "quiz": [
      { "q": "ヘッドマウントを付けずに、スマホを手で持って撮影してもいいですか？", "opts": ["はい", "いいえ"], "correct": 1, "feedback": "ヘッドマウントは撮影中ずっと装着します。手で持った動画は削除されます。" },
      { "q": "縦向き（ポートレート）で撮影してもいいですか？", "opts": ["はい", "いいえ"], "correct": 1, "feedback": "横向きのみです。縦向きの動画は審査で不承認になります。" },
      { "q": "カメラのために作業を演技してもいいですか？", "opts": ["はい", "いいえ"], "correct": 1, "feedback": "本当の作業を普段のスピードで行ってください。演技した動画は不承認です。" },
      { "q": "郵便物の宛名や家族の顔が映っても大丈夫ですか？", "opts": ["はい", "いいえ"], "correct": 1, "feedback": "顔や個人情報は映さないでください。プライバシーを守るための大切なルールです。" },
      { "q": "作業中は両手が画面に映っている必要がありますか？", "opts": ["はい", "いいえ"], "correct": 0, "feedback": "はい。特に物をつかむ瞬間・置く瞬間は、必ず両手を映してください。" }
    ],
    "payTitle": "報酬とお支払い",
    "payBody": "お支払いは月2回の予定です。単価、最低支払額、受け取り方法は、LINEで個別にご案内します。",
    "payCycleTitle": "月2回のお支払い（予定）",
    "payCycles": [
      { "range": "1日〜15日の作業分", "when": "同月25日までにお支払い" },
      { "range": "16日〜月末の作業分", "when": "翌月10日までにお支払い" }
    ],
    "payExTitle": "例",
    "payExamples": [
      ["12月1日〜15日の作業", "12月25日まで"],
      ["12月16日〜31日の作業", "1月10日まで"],
      ["1月1日〜15日の作業", "1月25日まで"]
    ],
    "payMinTitle": "最低支払額",
    "payMinBody": "1回分の報酬が最低支払額に届かなかった場合も、なくなることはありません。次回分に繰り越してまとめてお支払いします。",
    "payMinRows": [
      { "l": "単価", "r": "LINEでご案内", "paid": false },
      { "l": "ヘッドマウント代", "r": "承認20時間で精算", "paid": true }
    ],
    "payMinNote": "ヘッドマウントはご自身でご購入ください。合格した時間が合計20時間になったら、領収書をもとに購入費用をお返しします（上限あり）。",
    "payAcctTitle": "お支払い方法",
    "payAcctBody": "日本国内の銀行口座などで受け取れるよう準備しています。",
    "payPreferred": "おすすめ",
    "paySoon": "LINEでご案内",
    "paySummary": "お支払いが近づいたら、受け取り情報の入力フォームをLINEでお送りします。それまでは何も送らなくて大丈夫です。",
    "payContact": "お支払いのことも、それ以外のことも、LINEで気軽に聞いてください。",
    "faqTitle": "よくある質問",
    "faq": [
      { "q": "どのスマホが必要ですか？", "a": "iPhone 12 以降、Google Pixel 6 以降、Samsung Galaxy S21 以降のいずれかが必要です。これより古い機種は使用できません。始める前にご確認ください。" },
      { "q": "顔や声は映りますか？", "a": "映りません。撮影するのは目線から見た手元だけで、声も使いません。鏡に映った姿や家族の顔も入らないようにしてください。" },
      { "q": "ヘッドマウントはどうすればいいですか？", "a": "スマホを横向きに固定できるヘッドバンドを、ご自身でご購入ください。おすすめの商品はLINEでお伝えします。合格した時間が合計20時間になったら、領収書をもとに購入費用をお返しします（上限あり）。" },
      { "q": "いくら稼げますか？", "a": "品質チェックに合格した動画1時間ごとに報酬が発生します。単価はLINEでご案内します。収入は、撮影した時間と合格した時間によって変わります。" },
      { "q": "いつ、どのように支払われますか？", "a": "月2回の予定です。1日〜15日の作業分は同じ月の25日まで、16日〜月末の作業分は翌月10日までにお支払いします。受け取り方法はLINEでご案内します。" },
      { "q": "すでに他の会社でMinuteを使っています。", "a": "今のアカウントと同じメールアドレスのまま、Awignの組織コードを追加してください。1つのアカウントで複数の組織に参加できます。新しいアカウントは作らないでください。" },
      { "q": "Minuteのアカウントを複数持てますか？", "a": "いいえ。スマホ1台につきアカウントは1つです。複数のアカウントを作ったり切り替えたりすると、利用停止になる場合があります。" },
      { "q": "経験は必要ですか？", "a": "必要ありません。このページの動画とルールを見れば始められます。最初の数本は担当者が確認して、LINEでアドバイスをお送りします。" },
      { "q": "どうやって応募しますか？", "a": "このページのボタンからLINEで友だち追加してください。かんたんな質問にお答えいただいたあと、担当者が1対1のトークで始め方をご案内します。電話番号や履歴書は必要ありません。" },
      { "q": "不承認になった動画はどうなりますか？", "a": "その動画は納品されず、報酬の対象にもなりません。理由は担当者からお伝えします。よくあるミスですぐに参加できなくなることはありません。" },
      { "q": "家族と住んでいます。撮影してもいいですか？", "a": "はい。ただし、撮影することを同居の方に伝えて了承を得てください。顔、郵便物、身分証、カード、スマホやPCの画面などは映さないでください。" },
      { "q": "税金はどうなりますか？", "a": "副業の収入は、金額によって確定申告が必要になる場合があります。詳しくはお住まいの地域の税務署にご確認ください。" },
      { "q": "Awignからお金を請求されることはありますか？", "a": "ありません。登録料、手数料、保証金などは一切かかりません。Awignの名前でお金を求められたら支払わずに、LINE公式アカウントまでお知らせください。" }
    ],
    "footTag": "AI・ロボティクスのための一人称視点データ収集。日本プログラム。",
    "footProgram": "プログラム",
    "footCompany": "会社情報",
    "footSupport": "サポート",
    "fTraining": "研修",
    "fStandards": "撮影ルール",
    "fApp": "Minuteアプリ",
    "fPay": "お支払い",
    "fQuestions": "よくある質問",
    "fOfficial": "プロジェクトページ",
    "fAbout": "Awign.com",
    "fContact": "LINE公式アカウント",
    "fPrivacy": "プライバシーポリシー",
    "fTerms": "利用規約",
    "footRights": "© 2026 Awign AI Operations. マイナビグループ. All rights reserved.",
    "startTitle": "はじめ方",
    "startBody": "応募フォームや面接はありません。やりとりはすべてLINEで行います。",
    "startSteps": [
      { "t": "LINEで友だち追加", "d": "下のボタンから追加してください。パソコンの方は右のQRコードをスマホで読み取ってください。" },
      { "t": "かんたんな質問に回答", "d": "お使いのスマホやお住まいの地域など、数問だけお聞きします。" },
      { "t": "担当者からご案内", "d": "組織コードとアプリの設定方法を、LINEの1対1のトークでお送りします。" }
    ],
    "codeLabel": "組織コード",
    "copy": "コピー",
    "copied": "コピーしました",
    "codeSoon": "LINEでお送りします",
    "startOrg": "このコードで組織「Awign - Residential - Japan」に参加します。コードがないと、動画の報酬をお支払いできません。",
    "startOrgSoon": "組織コードは、LINEで友だち追加して質問にお答えいただいた方にお送りしています。",
    "startNewQ": "はじめてMinuteを使う方",
    "startNewA": "お好きなメールアドレスでアカウントを作成し、すぐに撮影を始められます。",
    "startOldQ": "すでにMinuteを使っている方",
    "startOldA": "今のアカウントにコードを追加してください。新しいアカウントは作らないでください。",
    "startCommercial": "現在は、ご自宅での家事の撮影のみ募集しています。電話番号やLINE IDをお聞きすることはありません。",
    "communityCta": "LINEで友だち追加",
    "communitySoon": "LINE公式アカウント（準備中）",
    "wiseCta": ""
  },

  "en": {
    "themeLabel": "Switch theme",
    "heroTitle": "Record housework videos for AI development",
    "heroLede": "Film your hands while you cook, clean or do the laundry. The phone sits on a headband at your forehead, so your face is never in shot and your voice isn't used. The videos help train AI and robots, and you're paid for every hour that passes quality review. No experience needed, and there are no fees.",
    "heroCta": "Add us on LINE",
    "heroCtaNote": "Once you add us, you'll get a few short questions. After you answer, someone from our team will message you with how to start.",
    "qrTitle": "On a computer?",
    "qrBody": "Scan this QR code with the LINE app on your phone.",
    "heroVideoCap": "How recording works",
    "stat1V": "Per hour",
    "stat1L": "You earn for every hour of footage that passes quality review. We share the rate on LINE.",
    "stat2V": "Twice a month",
    "stat2L": "Planned as two payments a month: one for the 1st to the 15th, one for the 16th to month-end.",
    "stat3V": "Compatible phone",
    "stat3L": "You need one of these models or newer. Older phones can't record for this project, so check yours first.",
    "workTitle": "Only your hands are filmed",
    "workBody": "The phone on your forehead films what your hands are doing, from your point of view. There's no script and nothing to act out. Just do your housework the way you normally would.",
    "workCap1": "Washing up",
    "workCap2": "Sorting and organising",
    "workCap3": "Cleaning a surface",
    "workCap4": "Making something by hand",
    "setupTitle": "Getting the angle right",
    "setupBody": "Almost every rejected video comes down to the headmount sitting wrong. Four things to check before you press record.",
    "setupRows": [
      { "t": "High on the forehead", "d": "Level with your eyes, never low on your chest." },
      { "t": "Tilted slightly down", "d": "So both hands stay in shot while you work." },
      { "t": "Landscape, always", "d": "Phone horizontal. Vertical footage is rejected." },
      { "t": "On the whole time", "d": "Never take it off or hold the phone in your hand." }
    ],
    "exTitle": "See it done right, and done wrong",
    "exBody": "Six real recordings. The first three passed review and the last three didn't.",
    "goodTag": "Do it like this",
    "goodHeading": "Footage that passes",
    "goodSub": "Approved recordings",
    "goodClips": ["Folding clothes", "Cleaning utensils", "Ironing clothes"],
    "badTag": "Never do this",
    "badHeading": "Footage that gets rejected",
    "badSub": "Rejected recordings",
    "badClips": ["Not a meaningful task", "Intentionally slow", "Poor lighting"],
    "ddTitle": "What passes, and what doesn't",
    "ddBody": "A person reviews every video before it reaches the client. Get the left column right and your footage gets paid.",
    "doTitle": "Always",
    "do": [
      "Keep the headmount on the whole time",
      "Record in landscape",
      "Do real work at your natural pace",
      "Keep both hands in frame",
      "Record in the right place for the task",
      "Get the agreement of people you live with",
      "Make sure the task is well lit",
      "Hold the camera steady",
      "Use one Minute account per phone"
    ],
    "dontTitle": "Never",
    "dont": [
      "Take the headmount off or hold the phone",
      "Film in portrait",
      "Act out or fake the task",
      "Rush through at a robotic pace",
      "Record where the task doesn't belong",
      "Submit the same task twice",
      "Capture faces, mail, IDs, cards or screens",
      "Let the picture go dark or blurry",
      "Use more than one Minute account"
    ],
    "ddNote": "Anything on the Never list gets the recording rejected, and that time isn't paid.",
    "appTitle": "Everything runs through the Minute app",
    "appBody": "You record with an app called Minute. It shows your tasks, records the video, uploads it for review and keeps count of your approved hours. Anything recorded outside the app can't be paid.",
    "appVideoCap": "Full walkthrough of the app",
    "storePlayTop": "Get it on",
    "storeAppTop": "Download on the",
    "appSteps": [
      { "t": "Install Minute from Google Play or the App Store", "d": "It's free. Install it on the phone you'll record with. It needs to be an iPhone 12, Pixel 6 or Galaxy S21, or newer." },
      { "t": "Create an account, or log in if you have one", "d": "New to Minute? Tap “Create an account” under the login screen. Already have a Minute account? Just log in with it." },
      { "t": "Enter the organization code", "d": "When the app asks for an invite or organization code, enter the code we sent you on LINE. New users can sign up with any email. If you've used Minute before, log in with the same email." },
      { "t": "Check you see “Awign - Residential - Japan”", "d": "After you log in, this organization should appear. If it doesn't, the code wasn't entered and we won't be able to pay you." },
      { "t": "Pick a task and start recording", "d": "Choose a task, follow the on-screen brief, and upload before the daily cut-off." }
    ],
    "quizTitle": "Five questions before you start",
    "quizBody": "Nothing is recorded or scored. Get one wrong and you can try again straight away.",
    "quizProgress": "answered",
    "quiz": [
      { "q": "Can you hold the phone in your hand instead of wearing the headmount?", "opts": ["Yes", "No"], "correct": 1, "feedback": "The headmount stays on for the whole recording. Holding the phone gets the video deleted." },
      { "q": "Should you record in portrait (vertical)?", "opts": ["Yes", "No"], "correct": 1, "feedback": "Landscape only. Portrait footage is rejected." },
      { "q": "Should you act out the task for the camera?", "opts": ["Yes", "No"], "correct": 1, "feedback": "Do the real task at your normal speed. Staged work is rejected." },
      { "q": "Is it fine if mail with your address or a family member's face is in shot?", "opts": ["Yes", "No"], "correct": 1, "feedback": "Keep faces and personal information out of frame." },
      { "q": "Do both hands need to stay visible while you work?", "opts": ["Yes", "No"], "correct": 0, "feedback": "Yes, especially the moment you pick something up or put it down." }
    ],
    "payTitle": "How and when you get paid",
    "payBody": "Payments are planned twice a month. We'll share the hourly rate, minimum payout and how you get paid with you on LINE.",
    "payCycleTitle": "Two payment cycles a month (planned)",
    "payCycles": [
      { "range": "Work done 1–15", "when": "Paid by the 25th of the same month" },
      { "range": "Work done 16–end of month", "when": "Paid by the 10th of the next month" }
    ],
    "payExTitle": "For example",
    "payExamples": [
      ["Work 1–15 December", "paid by 25 December"],
      ["Work 16–31 December", "paid by 10 January"],
      ["Work 1–15 January", "paid by 25 January"]
    ],
    "payMinTitle": "Minimum payout",
    "payMinBody": "If a cycle doesn't reach the minimum, nothing is lost. It carries over and is added to your next payment.",
    "payMinRows": [
      { "l": "Hourly rate", "r": "Shared on LINE", "paid": false },
      { "l": "Headmount cost", "r": "Reimbursed at 20 approved hours", "paid": true }
    ],
    "payMinNote": "Buy your own headmount. Once you reach 20 approved hours in total, we pay you back against your receipt (up to a limit).",
    "payAcctTitle": "Where we pay you",
    "payAcctBody": "We're setting up payouts to Japanese bank accounts.",
    "payPreferred": "Preferred",
    "paySoon": "Shared on LINE",
    "paySummary": "When a payment is coming up, we'll send you a form on LINE for your payment details. You don't need to send anything before that.",
    "payContact": "Questions about payments, or anything else? Ask us on LINE.",
    "faqTitle": "Everything else",
    "faq": [
      { "q": "What phone do I need?", "a": "An iPhone 12 or newer, a Google Pixel 6 or newer, or a Samsung Galaxy S21 or newer. Older phones can't be used." },
      { "q": "Will my face or voice be recorded?", "a": "No. Only your hands, from your point of view. Keep mirrors and family members' faces out of frame too." },
      { "q": "What about the headmount?", "a": "Buy a headband that holds your phone sideways. We'll recommend one on LINE. Once you reach 20 approved hours, we pay you back against your receipt (up to a limit)." },
      { "q": "How much can I earn?", "a": "You earn for every hour that passes quality review. We share the rate on LINE. Your total depends on how much you record and how much is approved." },
      { "q": "How and when do I get paid?", "a": "Twice a month (planned). Work from the 1st to the 15th is paid by the 25th, and work from the 16th to month-end by the 10th of the next month. We'll tell you how you get paid on LINE." },
      { "q": "I already use Minute for another company.", "a": "Keep your existing account and email, and add our organization code. One account can belong to several organizations. Don't create a new account." },
      { "q": "Can I have more than one Minute account?", "a": "No. One account per phone. Creating or switching between accounts can get you banned." },
      { "q": "Do I need any experience?", "a": "None. The videos and rules on this page are enough to start, and someone on our team will check your first few videos and send you tips on LINE." },
      { "q": "How do I apply?", "a": "Add us on LINE with the button on this page. Answer a few short questions, and someone from our team will message you one-to-one with how to start. No phone number or CV needed." },
      { "q": "What happens to a video that isn't approved?", "a": "It isn't delivered and isn't paid. We'll tell you why. An ordinary mistake won't get you removed." },
      { "q": "I live with family. Can I record?", "a": "Yes, as long as they know and agree. Keep faces, mail, IDs, cards and screens out of frame." },
      { "q": "What about tax?", "a": "Side income may need to be declared in a tax return depending on the amount. Please check with your local tax office." },
      { "q": "Does Awign ever ask me for money?", "a": "Never. There are no fees, deposits or charges at any stage. If someone asks you to pay in Awign's name, don't pay, and let us know on LINE." }
    ],
    "footTag": "Egocentric data collection for AI and robotics. Japan programme.",
    "footProgram": "Programme",
    "footCompany": "Company",
    "footSupport": "Support",
    "fTraining": "Training",
    "fStandards": "Standards",
    "fApp": "Minute app",
    "fPay": "Payments",
    "fQuestions": "Questions",
    "fOfficial": "Project page",
    "fAbout": "Awign.com",
    "fContact": "LINE account",
    "fPrivacy": "Privacy",
    "fTerms": "Terms",
    "footRights": "© 2026 Awign AI Operations. Part of the Mynavi Group. All rights reserved.",
    "startTitle": "How to start",
    "startBody": "No application form and no interview. Everything happens on LINE.",
    "startSteps": [
      { "t": "Add us on LINE", "d": "Tap the button below. On a computer, scan the QR code with your phone." },
      { "t": "Answer a few questions", "d": "We ask which phone you use, where you live and a couple of other quick things." },
      { "t": "We message you", "d": "Someone from our team sends you the organization code and app setup steps in a one-to-one chat." }
    ],
    "codeLabel": "Organization code",
    "copy": "Copy",
    "copied": "Copied",
    "codeSoon": "Sent on LINE",
    "startOrg": "This code adds you to the organization “Awign - Residential - Japan”. Without it, we can't pay you for your videos.",
    "startOrgSoon": "We send the organization code on LINE once you've added us and answered a few questions.",
    "startNewQ": "New to Minute?",
    "startNewA": "Create your own account with any email and start recording right away.",
    "startOldQ": "Already use Minute?",
    "startOldA": "Keep your existing account and add our code to it. Don't create a new account.",
    "startCommercial": "For now we only need household tasks recorded at home. We never ask for your phone number or LINE ID.",
    "communityCta": "Add us on LINE",
    "communitySoon": "LINE account (coming soon)",
    "wiseCta": ""
  }
};

/* ============================================================
   Launch config — blank values show as 「準備中」 / "Coming soon".
   ============================================================ */

const CONFIG = {
  PLAY_STORE_URL: "https://play.google.com/store/apps/details?id=com.bakerdata.minute",
  PLAY_STORE_HL: { ja: "ja", en: "en" },
  APP_STORE_URL: "https://apps.apple.com/app/id6760918280",
  PHONES: ["iPhone 12+", "Pixel 6+", "Galaxy S21+"],
  OFFICIAL_PAGE_URL: "https://www.awign.com/business/data-annotation/robotech-egocentric",
  ABOUT_URL: "https://www.awign.com/",

  // Japan organization code (from the Fusion team). Blank = 準備中.
  ORG_CODE: "",
  ORG_NAME: "Awign - Residential - Japan",

  // LINE Official Account add-friend link for @775evhxu. A lin.ee link from
  // LINE Official Account Manager ("Add friend" tools) also works here. Blank = 準備中.
  COMMUNITY_URL: "https://line.me/R/ti/p/@775evhxu",

  // QR code image of COMMUNITY_URL, shown to desktop visitors.
  // Regenerate it if COMMUNITY_URL changes (see README).
  LINE_QR: "assets/line-qr.svg",

  // Blank values hide the icon.
  SOCIAL: {
    instagram: "",
    facebook: "",
    twitter: "",
  },

  /* Payout options for Japan. Empty list = 準備中.
     Example: { name: "銀行振込", preferred: true } */
  PAY_ACCOUNTS: [],

  /* Self-hosted MP4s. Japanese-subtitled main videos are coming;
     until then both languages use the English recordings. */
  VIDEO: {
    hero: {
      ja: "assets/video/main/training-en.mp4",
      en: "assets/video/main/training-en.mp4",
    },
    app: {
      ja: "assets/video/main/minute-en.mp4",
      en: "assets/video/main/minute-en.mp4",
    },
    good: [
      "assets/video/good/1-clothes-folding.mp4",
      "assets/video/good/2-cleaning-utensils.mp4",
      "assets/video/good/3-ironing-clothes.mp4",
    ],
    bad: [
      "assets/video/bad/1-not-a-meaningful-task.mp4",
      "assets/video/bad/2-intentionally-slow.mp4",
      "assets/video/bad/3-poor-lighting.mp4",
    ],
  },

  ANALYTICS_ENDPOINT: "",
};
