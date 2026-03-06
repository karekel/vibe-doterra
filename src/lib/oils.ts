import { PersonalityType, PhaseType } from "./questions";

export interface OilData {
    name: string;
    subtitle: string;
    description: string;
}

export interface RecommendedOils {
    core: OilData;
    phase: OilData;
    vibe: [OilData, OilData, OilData];
}

export const coreOils: Record<PersonalityType, OilData> = {
    EL: {
        name: "ローズマリー",
        subtitle: "Your Core",
        description: "感情に流されず、ロジカルに最適解を導き出す知的な頭脳を極限までクリアに保つ。",
    },
    EF: {
        name: "オレンジ",
        subtitle: "Your Core",
        description: "ピュアな無邪気さと、周りをパッと明るく巻き込む圧倒的な陽のエネルギーを放つ。",
    },
    IL: {
        name: "フランキンセンス",
        subtitle: "Your Core",
        description: "外部のノイズを完全に遮断し、細胞レベルで『本質』とだけ繋がる究極のミニマリズム。",
    },
    IF: {
        name: "サンダルウッド",
        subtitle: "Your Core",
        description: "誰にも邪魔されない自分だけのサンクチュアリ（聖域）を構築し、深く静かな美意識を研ぎ澄ます。",
    },
};

export const phaseOils: Record<PhaseType, OilData> = {
    DETOX: {
        name: "レモン",
        subtitle: "Your Phase",
        description: "空間とマインドの澱みを一掃し、不要なものを断ち切るための最もシャープな刃となる。",
    },
    ACTIVE: {
        name: "ペパーミント",
        subtitle: "Your Phase",
        description: "迷いを吹き飛ばし、目標に向かってフルスピードで駆け抜けるための強力な推進力となる。",
    },
    HEALING: {
        name: "ラベンダー",
        subtitle: "Your Phase",
        description: "戦いの鎧を脱ぎ捨て、絶対的な安心感の中で自己修復を促す。",
    },
    EXPRESSION: {
        name: "イランイラン",
        subtitle: "Your Phase",
        description: "抑圧してきた感情や枠組みを解放し、自分だけの美しい色気を世界へ放つ。",
    },
    AMBIVALENCE: {
        name: "バランス",
        subtitle: "Your Phase",
        description: "情報過多でフリーズした脳を休ませ、まずは大地に深く根を張ることでカオスを静める。",
    },
};

type VibeKey = `${PersonalityType}_${PhaseType}`;

export const vibeOils: Record<VibeKey, [OilData, OilData, OilData]> = {
    EL_DETOX: [
        { name: "ピューリファイ", subtitle: "空間と空気の浄化のブレンド", description: "空間と人間関係の不要なノイズを一掃する。" },
        { name: "シベリアンファー", subtitle: "コントロールを手放すオイル", description: "執着や過度なコントロールを手放し、身軽になる。" },
        { name: "ゼンジェスト", subtitle: "消化と吸収のブレンド", description: "膨大なタスクと情報を『消化』し、知的に処理する。" },
    ],
    EL_ACTIVE: [
        { name: "オンガード", subtitle: "境界線と保護のブレンド", description: "外部からの干渉を防ぎ、自分の陣地を強固に守りながら攻める。" },
        { name: "モチベート", subtitle: "行動と決断のブレンド", description: "描いた設計図を現実世界で動かす決断と実行力を与える。" },
        { name: "レモングラス", subtitle: "強力な浄化と前進のオイル", description: "過去のやり方に固執せず、前へ進むための強力な浄化を促す。" },
    ],
    EL_HEALING: [
        { name: "セレニティー", subtitle: "休息と解放のブレンド", description: "フル回転した脳波を落ち着かせ、完璧な休息を取る。" },
        { name: "プチグレン", subtitle: "祖先の知恵のオイル", description: "論理的になりすぎた思考を、深い知恵で優しく鎮静させる。" },
        { name: "ハワイアンサンダルウッド", subtitle: "神聖な献身と静寂のオイル", description: "思考のスイッチを完全に切り、深い精神的な静寂の中で自己の本質と繋がり直す。" },
    ],
    EL_EXPRESSION: [
        { name: "スペアミント", subtitle: "クリアなスピーチのオイル", description: "自分の論理を、淀みないクリアな言葉で伝える。" },
        { name: "ユーカリプタス", subtitle: "健康と解放のオイル", description: "呼吸を深め、閉鎖的な状況に風穴を開ける。" },
        { name: "ジンジャー", subtitle: "エンパワーメントのオイル", description: "自己の力を信じ、熱いリーダーシップで人を巻き込む。" },
    ],
    EL_AMBIVALENCE: [
        { name: "インチューン", subtitle: "集中と存在のブレンド", description: "散漫になった思考の焦点を一点に絞り込む。" },
        { name: "ベチバー", subtitle: "下降とグラウンディングのオイル", description: "深く根を張り、頭でっかちになった状態を大地へ戻す。" },
        { name: "ネロリ", subtitle: "共有と慰めのオイル", description: "傷つき混乱した心を極めて繊細な香りで慰め、思考と感情の調和を取り戻す。" },
    ],
    EF_DETOX: [
        { name: "グレープフルーツ", subtitle: "肉体の尊重のオイル", description: "自己否定や体の重さを手放し、心を軽くする。" },
        { name: "ティーツリー", subtitle: "エネルギーの境界線のオイル", description: "境界線を侵すネガティブなエネルギーを断ち切る。" },
        { name: "ディープブルー", subtitle: "痛みのサレンダーのブレンド", description: "肉体と心の奥底に癒着した古い痛みを直視し、強力に手放す。" },
    ],
    EF_ACTIVE: [
        { name: "パッション", subtitle: "情熱とインスピレーションのブレンド", description: "内なる情熱に火をつけ、枠を超えた創造を促す。" },
        { name: "シトラスブリス", subtitle: "創造性と喜びのブレンド", description: "圧倒的な陽のオーラでクリエイティビティを開花させる。" },
        { name: "ベルガモット", subtitle: "自己受容のオイル", description: "自己価値を最大化し、自信に満ちた前進を支える。" },
    ],
    EF_HEALING: [
        { name: "コンソール", subtitle: "慰めと希望のブレンド", description: "他人の感情を吸いすぎた心の深い消耗を慰める。" },
        { name: "ローズ", subtitle: "神聖な愛のオイル", description: "最高周波数の愛で、傷ついた波動を美しく修復する。" },
        { name: "ローマンカモミール", subtitle: "スピリチュアルな目的のオイル", description: "精神的な安らぎを与え、穏やかな自己を取り戻す。" },
    ],
    EF_EXPRESSION: [
        { name: "チアー", subtitle: "明るさと上昇のブレンド", description: "自分の喜びを、周りの人とポジティブに共有する。" },
        { name: "タンジェリン", subtitle: "無邪気さと喜びのオイル", description: "子供のような無邪気な喜びと表現力を放つ。" },
        { name: "ウィスパー", subtitle: "女性性と魅力のブレンド", description: "その人だけの女性性と、独自の魅力を引き出す。" },
    ],
    EF_AMBIVALENCE: [
        { name: "アダプティブ", subtitle: "適応と受容のブレンド", description: "予測不能な感情の波を穏やかにし、変化に適応する。" },
        { name: "グリーンマンダリン", subtitle: "純粋な可能性のオイル", description: "混乱の中で見失っていた『純粋な可能性』を思い出し、心に光を灯す。" },
        { name: "マグノリア", subtitle: "慈悲と許しのオイル", description: "慈愛の心で、揺れ動く自分自身を丸ごと許容する。" },
    ],
    IL_DETOX: [
        { name: "ウィンターグリーン", subtitle: "明け渡しのオイル", description: "強固な思い込みやコントロールを手放し、本質を残す。" },
        { name: "サイプレス", subtitle: "流れと動きのオイル", description: "滞った古いパターンを洗い流し、スムーズな流れを作る。" },
        { name: "レモンユーカリ", subtitle: "空間の保護のオイル", description: "空間とエネルギーに強力なバリアを張り、ノイズを弾く。" },
    ],
    IL_ACTIVE: [
        { name: "ダグラスファー", subtitle: "世代のパターンのオイル", description: "世代間の古いパターンを断ち切り、新しい真理の道を拓く。" },
        { name: "ブラックスプルース", subtitle: "安定と回復のオイル", description: "深い森の安定感で、限界を突破し目標を極める。" },
        { name: "カルダモン", subtitle: "客観性のオイル", description: "行き詰まった状況に客観性をもたらし、精神疲労を抜く。" },
    ],
    IL_HEALING: [
        { name: "シンリンヨク", subtitle: "森の静寂のブレンド", description: "外部からの情報入力を完全に遮断し、森の静けさに浸る。" },
        { name: "シダーウッド", subtitle: "コミュニティのオイル", description: "孤高になりすぎた心を解きほぐし、安全な繋がりを思い出す。" },
        { name: "コパイバ", subtitle: "明瞭と露見のオイル", description: "過敏になった神経系を鎮静させ、深い自己探求へ向かう。" },
    ],
    IL_EXPRESSION: [
        { name: "ミルラ", subtitle: "母なる大地のオイル", description: "母なる大地との繋がり。多くを語らずとも真実を伝える。" },
        { name: "ブラックペッパー", subtitle: "仮面を脱ぐオイル", description: "偽りの仮面を脱ぎ捨て、嘘のない自分を突きつける。" },
        { name: "タイム", subtitle: "解放と許しのオイル", description: "魂の奥底から湧き出る本質の言葉を放つ。" },
    ],
    IL_AMBIVALENCE: [
        { name: "アロマタッチ", subtitle: "緊張緩和とリラックスのブレンド", description: "考えすぎて強張った心身の緊張を、優しく解きほぐす。" },
        { name: "ジュニパーベリー", subtitle: "夜の恐れのオイル", description: "答えの出ない夜の恐怖や、見えない迷いを払拭する。" },
        { name: "アーボビテ", subtitle: "神聖なる恩寵のオイル", description: "自力で解決しようとする力を手放し、大いなる流れに委ねる。" },
    ],
    IF_DETOX: [
        { name: "オレガノ", subtitle: "謙虚さと非執着のオイル", description: "自分の世界観に合わないものを、強力かつ容赦なく浄化する。" },
        { name: "クローブ", subtitle: "明確な境界線のオイル", description: "健全な境界線を引き、他人の侵入に『ノー』と言う勇気を持つ。" },
        { name: "メリッサ", subtitle: "光のオイル", description: "過去の暗闇や不要なしがらみから完全に脱却し、光へ向かう。" },
    ],
    IF_ACTIVE: [
        { name: "イージーエア", subtitle: "呼吸と解放のブレンド", description: "悲しみや息苦しさで閉ざしていた胸を深く開き、クリエイションのためのクリアな風を通す。" },
        { name: "クラリカーム", subtitle: "女性性のバイオリズムのブレンド", description: "女性特有のバイオリズムの波をコントロールし、身体の底からブレない創造の軸を立てる。" },
        { name: "サルベル", subtitle: "霊的洞察のブレンド", description: "精神とライフスタイルをひとつの芸術へ昇華する。" },
    ],
    IF_HEALING: [
        { name: "パチュリ", subtitle: "肉体とグラウンディングのオイル", description: "浮き足立った意識を肉体へ引き戻し、自分の『身体』という最も身近な聖域を深く愛し直す。" },
        { name: "ジャスミン", subtitle: "純粋な意図のオイル", description: "他人の目がない安全な聖域で、純粋な喜びで自己を満たす。" },
        { name: "ブルータンジー", subtitle: "インスピレーションと行動のオイル", description: "インナーチャイルドの傷を癒やし、強すぎる自己批判を静める。" },
    ],
    IF_EXPRESSION: [
        { name: "クラリセージ", subtitle: "クリアな視界とビジョンのオイル", description: "曇った視界をクリアに開き、内なる直感とインスピレーションをためらわずに具現化する。" },
        { name: "ゼラニウム", subtitle: "愛と信頼のオイル", description: "頑なになった心の境界線を解き、素直な愛と豊かな美意識を、柔らかく世界へ差し出す。" },
        { name: "ゼンドクライン", subtitle: "移行と解毒のブレンド", description: "古い殻や不要な価値観を解毒し、新しく生まれ変わった本来の姿をためらわず公開する。" },
    ],
    IF_AMBIVALENCE: [
        { name: "フォーギブ", subtitle: "許しと再生のブレンド", description: "理想通りにいかない自分への怒りや執着を手放し、許す。" },
        { name: "ピース", subtitle: "安心と平和のブレンド", description: "完璧主義による恐れを手放し、完全なる平安へと着地する。" },
        { name: "マジョラム", subtitle: "繋がりと他者への信頼のオイル", description: "不信感や孤独で強張った心の防壁を緩め、安全な繋がりを受け入れるための余白を作る。" },
    ],
};

export const getRecommendedOils = (personality: PersonalityType, phase: PhaseType): RecommendedOils => {
    const key: VibeKey = `${personality}_${phase}`;
    return {
        core: coreOils[personality],
        phase: phaseOils[phase],
        vibe: vibeOils[key],
    };
};
