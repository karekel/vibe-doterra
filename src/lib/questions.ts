export type PersonalityType = "EL" | "EF" | "IL" | "IF";
export type PhaseType = "DETOX" | "ACTIVE" | "HEALING" | "EXPRESSION" | "AMBIVALENCE";

export interface Choice {
  text: string;
  typeVote?: PersonalityType;
  phaseVote?: Exclude<PhaseType, "AMBIVALENCE">;
}

export interface Question {
  id: number;
  text: string;
  choices: Choice[];
  isKey?: boolean;
}

export const questions: Question[] = [
  // Q1-Q10: Personality
  {
    id: 1,
    text: "初めてのコミュニティや集まり。あなたが無意識にやっていることは？",
    choices: [
      { text: "自分から話しかけて、会話のパスを回して空気を作る", typeVote: "EL" },
      { text: "素直なリアクションを見せて、笑顔で打ち解ける", typeVote: "EF" },
      { text: "全体を静かに見渡して、「誰がどんな人か」状況を把握する", typeVote: "IL" },
      { text: "無理にテンションを合わせず、心地よい距離感で自分のペースを守る", typeVote: "IF" },
    ],
  },
  {
    id: 2,
    text: "究極の2択で迷った！最後に背中を押してくれる決め手は？",
    choices: [
      { text: "「結果的にどちらが効率的で、理にかなっているか」", typeVote: "EL" },
      { text: "「理屈抜きに、心が『やりたい！』とワクワクするか」", typeVote: "EF" },
      { text: "「後悔しないよう、納得できるまで情報を調べ尽くしたか」", typeVote: "IL" },
      { text: "「自分の美意識や、譲れないこだわりに反していないか」", typeVote: "IF" },
    ],
  },
  {
    id: 3,
    text: "誰かに何かをおすすめするとき、つい熱く語ってしまうポイントは？",
    choices: [
      { text: "「ここが便利で、こういうメリットがあるよ！」という実用性", typeVote: "EL" },
      { text: "「こんな風に感動して、人生変わったの！」という自分の熱量", typeVote: "EF" },
      { text: "「AよりBの方が優れている理由はね…」という客観的な比較データ", typeVote: "IL" },
      { text: "「まるで〇〇みたいで、すごく心地いいの」という独自のニュアンス", typeVote: "IF" },
    ],
  },
  {
    id: 4,
    text: "予想外のハプニング発生！あなたの最初のアクションは？",
    choices: [
      { text: "パパッと役割分担して、みんなでスピーディに解決へ動く", typeVote: "EL" },
      { text: "「大丈夫？」と、まずは自分や周りの感情を落ち着かせる", typeVote: "EF" },
      { text: "「何が原因？」と冷静に分析して、一番確実な対処法を練る", typeVote: "IL" },
      { text: "一度深呼吸して、自分の気分を整えてからマイペースに向き合う", typeVote: "IF" },
    ],
  },
  {
    id: 5,
    text: "いざ作業！一番スイッチが入って没入できるのはどんな環境？",
    choices: [
      { text: "カフェのような、適度な人の目や活気があるオープンな場所", typeVote: "EL" },
      { text: "テンションの上がる音楽や、好きな香りに包まれたご機嫌な空間", typeVote: "EF" },
      { text: "無音、あるいはノイズが完全に遮断された、整理整頓されたデスク", typeVote: "IL" },
      { text: "誰にも邪魔されない、自分だけのこだわりが詰まった聖域", typeVote: "IF" },
    ],
  },
  {
    id: 6,
    text: "SNSの投稿を作るとき（または見るとき）、ついこだわってしまうのは？",
    choices: [
      { text: "「で、結局どうなの？」がすぐわかる、無駄のない結論とメリット", typeVote: "EL" },
      { text: "「わかる！」「最高！」と共感を生む、温度感のあるコミュニケーション", typeVote: "EF" },
      { text: "「これは本当に正しいか？」を裏付ける、納得のいくエビデンスや詳細", typeVote: "IL" },
      { text: "パッと見の「おしゃれさ」や、行間から滲み出るような独特の世界観", typeVote: "IF" },
    ],
  },
  {
    id: 7,
    text: "友達から深い悩みを相談された。あなたが自然に取っているスタンスは？",
    choices: [
      { text: "「じゃあ、こうしてみたら？」と、具体的な解決策を一緒に考える", typeVote: "EL" },
      { text: "「それは辛かったね」と、まずは思いきり感情に寄り添い、ハグする", typeVote: "EF" },
      { text: "「つまり今の状況はこうだね」と、論理的に整理して選択肢を提示する", typeVote: "IL" },
      { text: "答えは出さず、本人が「本当はどうしたいか」に気づくまで静かに待つ", typeVote: "IF" },
    ],
  },
  {
    id: 8,
    text: "頑張った自分へ、ちょっといいご褒美を買うときの基準は？",
    choices: [
      { text: "「これを買えばどれくらい生活が豊かになるか」という実用性と効果", typeVote: "EL" },
      { text: "お店で目が合った瞬間に「運命！」と感じる、理屈抜きのトキメキ", typeVote: "EF" },
      { text: "素材や背景、口コミまで徹底的にリサーチして見つけた「間違いない名品」", typeVote: "IL" },
      { text: "他人がどう思うかより、「私の空間に置きたいか」という自分だけの美意識", typeVote: "IF" },
    ],
  },
  {
    id: 9,
    text: "正直、人間関係で特に「エネルギー吸い取られるなー…」と感じるのはどんな時？",
    choices: [
      { text: "結論が出ないダラダラした話し合いや、非効率な段取りに巻き込まれた時", typeVote: "EL" },
      { text: "ギスギスした空気や、相手の顔色ばかり伺うような本音のない会話", typeVote: "EF" },
      { text: "論理ではなく、感情の起伏だけで物事が振り回されたり、曖昧にされる時", typeVote: "IL" },
      { text: "「普通はこうでしょ？」と、他人の常識や価値観を無神経に押し付けられた時", typeVote: "IF" },
    ],
  },
  {
    id: 10,
    text: "「よし、新しい私になろう！」と思い立ったとき、最初にとる行動は？",
    choices: [
      { text: "明確なゴールを設定して、逆算して今日やるべきタスクを即実行する", typeVote: "EL" },
      { text: "とりあえず髪を切る、服を買う、人に会うなど、ノリと勢いで動いてみる", typeVote: "EF" },
      { text: "いきなり動かず、まずは徹底的に情報収集して「失敗しない設計図」を作る", typeVote: "IL" },
      { text: "自分と深く対話し「なぜそれをしたいのか」という内側の納得感を完璧に固める", typeVote: "IF" },
    ],
  },
  // Q11-Q20: Phase
  {
    id: 11,
    text: "最近、あなたの中でいちばん強く渦巻いている感覚は？",
    isKey: true,
    choices: [
      { text: "「もうこれ以上はいらない」。身の回りのノイズや、余計なものを一気に削ぎ落としたい", phaseVote: "DETOX" },
      { text: "「今すぐ動きたい！形にしたい！」。前に進むエネルギーでウズウズしている", phaseVote: "ACTIVE" },
      { text: "「今はそっとしておいて」。誰にも邪魔されない、静かで安全な場所で自分を守りたい", phaseVote: "HEALING" },
      { text: "「誰かに伝えたい！共有したい！」。内側に溜まった思いや熱量を、外へ向かって放ちたい", phaseVote: "EXPRESSION" },
    ],
  },
  {
    id: 12,
    text: "予定が突然ポッカリ空いた！あなたならどう使う？",
    choices: [
      { text: "スマホの通知を切って、ひたすら部屋の断捨離や思考の整理・リセットをする", phaseVote: "DETOX" },
      { text: "「チャンス！」とばかりに、気になっていた新しい企画や行動にそのまま突っ走る", phaseVote: "ACTIVE" },
      { text: "とにかく眠る、温かいお茶を飲む。ひたすら自分を甘やかして回復に全振りする", phaseVote: "HEALING" },
      { text: "会いたかった人に連絡したり、SNSで思いを発信したり、何かをクリエイトする", phaseVote: "EXPRESSION" },
    ],
  },
  {
    id: 13,
    text: "今のあなたが、直感的に「一番嫌だ、避けたい」と感じるのは？",
    choices: [
      { text: "意味のない付き合いや、惰性で続いている「とりあえず」の予定やノイズ", phaseVote: "DETOX" },
      { text: "話が前に進まない停滞感や、誰かの都合で自分のペースが遅らされること", phaseVote: "ACTIVE" },
      { text: "自分のパーソナルスペースや心の中に、ズカズカと無神経に干渉してこられること", phaseVote: "HEALING" },
      { text: "「普通はこうでしょ」と型にはめられ、自分の意見や表現を抑え込まれること", phaseVote: "EXPRESSION" },
    ],
  },
  {
    id: 14,
    text: "今の体の状態（サイン）。一番しっくりくる表現はどれ？",
    choices: [
      { text: "なんだか体が重だるい、むくみが抜けない。いらないものが「詰まっている」感覚", phaseVote: "DETOX" },
      { text: "バリバリ動けているけど、ふとした瞬間に突然プツンと「ガス欠」しそうな危うさ", phaseVote: "ACTIVE" },
      { text: "手足が冷える、眠りが浅い。寝ている間も奥歯を噛み締めるような緊張が抜けない", phaseVote: "HEALING" },
      { text: "つい熱く話しすぎて声が枯れたり、外にエネルギーを放出しすぎてドッと疲れる", phaseVote: "EXPRESSION" },
    ],
  },
  {
    id: 15,
    text: "今の自分に「ひとつだけアイテムを渡せる」としたら、何を選ぶ？",
    choices: [
      { text: "違和感のあるものを「もうやめる」とスパッと断ち切る鋭い勇気", phaseVote: "DETOX" },
      { text: "自分の信じた道を、周りを巻き込んででもゴリゴリ進める圧倒的な推進力", phaseVote: "ACTIVE" },
      { text: "「ここからは入ってこないで」と、自分を優しくプロテクトする見えない境界線", phaseVote: "HEALING" },
      { text: "自分の世界観や熱量を、そのままの温度で受け止めてくれる最高の表現の場", phaseVote: "EXPRESSION" },
    ],
  },
  {
    id: 16,
    text: "今の頭の中（思考の状態）に近いのは？",
    choices: [
      { text: "感覚が研ぎ澄まされていて、「今の私にはこれはいらないな」がクリアに見えている", phaseVote: "DETOX" },
      { text: "「次はこうして、ああして…」と、ワクワクする未来の設計図がくっきりと見えている", phaseVote: "ACTIVE" },
      { text: "「私が悪かったのかな…」と、ふとした瞬間に自分を責めるノイズが入り込みやすい", phaseVote: "HEALING" },
      { text: "「あれもやりたい！これも伝えたい！」と、次から次へとアイデアや言葉が溢れてくる", phaseVote: "EXPRESSION" },
    ],
  },
  {
    id: 17,
    text: "人間関係において、最近ついやってしまいがちなのは？",
    choices: [
      { text: "みんなでワイワイするより、今は少し人との距離を置いて一人になりたい", phaseVote: "DETOX" },
      { text: "「一緒にこれやろうよ！」と、周りの人を自分のペースに巻き込んで動かしたくなる", phaseVote: "ACTIVE" },
      { text: "人の感情や顔色に敏感になりすぎて、物理的に近づかれるだけで少し消耗してしまう", phaseVote: "HEALING" },
      { text: "自分の美意識や価値観に「それ最高！」と深く共鳴してくれる仲間を強く求めている", phaseVote: "EXPRESSION" },
    ],
  },
  {
    id: 18,
    text: "ズバリ、「休み方」はうまくいってる？",
    choices: [
      { text: "ボーッと休むより、部屋の片付けをしたりスマホのデータを整理・削除する方がスッキリする", phaseVote: "DETOX" },
      { text: "やりたいことが多すぎて、気づいたら「休むこと」自体を忘れてフル稼働している", phaseVote: "ACTIVE" },
      { text: "休日はしっかり寝ているつもりなのに、なぜか根本的な疲れや回復が追いついていない", phaseVote: "HEALING" },
      { text: "少しリフレッシュすると、すぐにまた「あれをやりたい！」「何か作りたい！」と欲が湧く", phaseVote: "EXPRESSION" },
    ],
  },
  {
    id: 19,
    text: "あなたの直近7日間を振り返って。一番多かったアクションは？",
    choices: [
      { text: "いらないものを捨てた、合わない習慣をやめた、メルマガを解除した", phaseVote: "DETOX" },
      { text: "新しいことを始めた、大きな決断をした、とにかく行動に移した", phaseVote: "ACTIVE" },
      { text: "気乗りのしない誘いを断った、自分の時間を守った、家でゆっくり引きこもった", phaseVote: "HEALING" },
      { text: "SNSで自分の思いを投稿した、誰かと深く語り合った、何かしらの作品を作った", phaseVote: "EXPRESSION" },
    ],
  },
  {
    id: 20,
    text: "「こうなったら最高！」と思う、今の理想の状態は？",
    isKey: true,
    choices: [
      { text: "部屋もスケジュールも余計なものが一切なく、視界と脳内がクリアな状態", phaseVote: "DETOX" },
      { text: "自分の人生のハンドルを完全に握り、思い描いた通り前進している状態", phaseVote: "ACTIVE" },
      { text: "お気に入りに包まれて、穏やかで、安心できる空間で深く癒やされている状態", phaseVote: "HEALING" },
      { text: "自分の放った美意識や言葉が波紋のように広がり、惹きつけられた仲間と笑い合っている状態", phaseVote: "EXPRESSION" },
    ],
  },
];
