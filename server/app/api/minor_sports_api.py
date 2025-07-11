from fastapi import APIRouter, HTTPException

router = APIRouter()

MINOR_SPORTS_DATA = [   
     {
        "id": 1,
        "name": "ベースボール5",
        "min_participants": 5,
        "max_participants": 10,
        "tool": "ボール",
        "budget": 5000,
        "place": "屋内",
        "description": (
            "ベースボール5は、野球を簡略化した5人制の新しいスポーツです。\n"
            "グローブやバットを使わず、ボールを素手で打ち合うのが特徴です。\n"
            "狭いスペースや屋内でも手軽に楽しめ、スピーディーな試合展開が魅力です。\n"
        )
    },
    {
        "id": 2,
        "name": "モルック",
        "min_participants": 2,
        "max_participants": 8,
        "tool": "その他",
        "budget": 10000,
        "place": "屋外",
        "description": (
            "モルックはフィンランド発祥のアウトドアスポーツです。\n"
            "木製のスキットル（ピン）をモルック（棒）で倒し、50点ピッタリを目指して得点を競います。\n"
            "シンプルなルールで子どもから大人まで楽しめ、戦略性も求められるのが特徴です。\n"
        )
    },
    {
        "id": 3,
        "name": "ディスクゴルフ",
        "min_participants": 2,
        "max_participants": 8,
        "tool": "ディスク",
        "budget": 3000,
        "place": "屋外",
        "description": (
            "ディスクゴルフは、フライングディスクを使い専用のゴールにできるだけ少ない投数で入れることを目指すスポーツです。\n"
            "ゴルフのルールに似ており、自然の中で気軽に楽しめるのが特徴です。\n"
            "年齢や体力に関係なく誰でも参加でき、近年人気が高まっています。\n"
        )
    },
    {
        "id": 4,
        "name": "ボッチャ",
        "min_participants": 2,
        "max_participants": 6,
        "tool": "ボール",
        "budget": 2000,
        "place": "屋内",
        "description": (
            "ボッチャは、目標球にどれだけ自分のボールを近づけられるかを競うパラリンピックの正式種目です。\n"
            "障害の有無や年齢、性別に関わらず誰もが一緒に楽しめるユニバーサルスポーツとして普及しています。\n"
            "多彩な戦術が求められ、最後の一投で大逆転の可能性があるスリリングな試合展開が魅力です。\n"
        )
    },
    {
        "id": 5,
        "name": "カバディ",
        "min_participants": 14,
        "max_participants": 24,
        "tool": "なし",
        "budget": 0,
        "place": "屋内",
        "description": (
            "カバディは、「カバディ」と連呼しながら相手陣地に攻め込み、タッチして得点を競うインド発祥の国技です。\n"
            "何も道具を使わず、体一つで始められるのが特徴です。\n"
            "常に1対7の緊迫した攻防が繰り広げられ、身体能力と奥深い駆け引きが魅力です。\n"
        )
    },
    {
        "id": 6,
        "name": "ドッジビー",
        "min_participants": 10,
        "max_participants": 26,
        "tool": "ディスク",
        "budget": 4000,
        "place": "屋内",
        "description": (
            "ドッジビーは、柔らかいフライングディスクを使ったドッジボール形式のスポーツです。\n"
            "ディスクは当たっても痛くないため、子どもから大人まで安全に楽しめます。\n"
            "年齢や性別を問わず、誰もが一緒に笑顔になれるのが最大の魅力です。\n"
        )
    },
    {
        "id": 7,
        "name": "セパタクロー",
        "min_participants": 6,
        "max_participants": 10,
        "tool": "ボール",
        "budget": 2000,
        "place": "屋内",
        "description": (
            "セパタクローは、足や頭を使ってボールをネットの向こうに返し合う、バレーボールに似た東南アジア発祥のスポーツです。\n"
            "攻守のあらゆる局面で繰り出されるアクロバティックなプレーが魅力です。\n"
            "人間離れしたダイナミックなプレーから「空中の格闘技」と呼ばれています。\n"
        )
    },
    {
        "id": 8,
        "name": "クリケット",
        "min_participants": 22,
        "max_participants": 22,
        "tool": "その他",
        "budget": 5000,
        "place": "屋外",
        "description": (
            "クリケットは、バットとボールを使って2チームで得点を競う、イギリス発祥のチームスポーツです。\n"
            "投手（ボウラー）が投げたボールを打者（バッツマン）が打ち返し、得点を重ねます。\n"
            "競技人口はサッカーに次ぐ世界第2位とも言われ、特に英連邦諸国で絶大な人気を誇ります。\n"
        )
    },
    {
        "id": 9,
        "name": "コーフボール",
        "min_participants": 8,
        "max_participants": 16,
        "tool": "ボール",
        "budget": 2500,
        "place": "屋内",
        "description": (
            "コーフボールは、男女混合が義務付けられているチームスポーツで、バスケットボールに似たルールです。\n"
            "ボールを持ったらパスのみで繋ぐため、チーム全体の連携が大事になります。\n"
            "性別に関係なく誰もが平等に活躍できるルール設計と、徹底したチームワークが最大の魅力です。\n"
        )
    },
    {
        "id": 10,
        "name": "スカッシュ",
        "min_participants": 2,
        "max_participants": 4,
        "tool": "ラケット",
        "budget": 3000,
        "place": "屋内",
        "description": (
            "スカッシュは、四方を壁に囲まれたコートで、小さいゴムボールをラケットで打ち合う室内スポーツです。\n"
            "パワーやスピードだけでなく相手の動きを把握し、緻密な戦略性が求められます。\n"
            "運動量が非常に多く、効率的にカロリーを消費できるため「世界で最も健康的なスポーツ」と評されています。\n"
        )
    },
    {
        "id": 11,
        "name": "キックベースボール",
        "min_participants": 10,
        "max_participants": 22,
        "tool": "ボール",
        "budget": 4000,
        "place": "屋外",
        "description": (
            "キックベースボールは、野球のルールを基に、バットの代わりに足でボールを蹴ってプレーするスポーツです。\n"
            "バットやグローブが不要で、ボール一つあれば誰でも手軽に楽しめます。\n"
            "地域や学校のレクリエーションとして、広く親しまれています。\n"
        )
    },
    {
        "id": 12,
        "name": "アルティメット",
        "min_participants": 14,
        "max_participants": 28,
        "tool": "ディスク",
        "budget": 3000,
        "place": "屋外",
        "description": (
            "アルティメットは、フライングディスクをパスで繋ぎ、敵陣のエンドゾーンでキャッチすると得点になるチームスポーツです。\n"
            "走力や持久力、ディスク技術など総合的な能力が求められ、ダイナミックなプレーが魅力です。\n"
            "審判がいないセルフジャッジを特徴とし、選手間のフェアプレー精神が最も重視されます。\n"
        )
    },
    {
        "id": 13,
        "name": "ラクロス",
        "min_participants": 20,
        "max_participants": 24,
        "tool": "その他",
        "budget": 5000,
        "place": "屋外",
        "description": (
            "ラクロスは、クロスと呼ばれる網の付いたスティックでボールを運び、相手ゴールを狙うチームスポーツです。\n"
            "そのスピード感から「地上最速の格闘球技」とも呼ばれています。\n"
            "男子は激しい接触が許される一方、女子は接触が制限され、より戦術性が重視されます。\n"
        )
    },
    {
        "id": 14,
        "name": "キンボール",
        "min_participants": 12,
        "max_participants": 12,
        "tool": "ボール",
        "budget": 3000,
        "place": "屋内",
        "description": (
            "キンボールは、直径122cmの巨大なボールを使い、3チームが同時に競い合うユニークなチームスポーツです。\n"
            "運動能力や年齢、性別問わず誰もが参加し活躍できるのが魅力です。\n"
            "3チームが同時にプレーするため、三つ巴ならではの複雑で緻密な戦略性が面白いスポーツです。\n"
        )
    },
    {
        "id": 15,
        "name": "インディアカ",
        "min_participants": 8,
        "max_participants": 10,
        "tool": "その他",
        "budget": 2000,
        "place": "屋内",
        "description": (
            "インディアカは、大きな羽根の付いたシャトルを手で打ち合い、バドミントンコートでプレーするスポーツです。\n"
            "体力的な負担が軽く、子どもから高齢者まで年齢や性別問わず気軽に楽しめる生涯スポーツです。\n"
            "仲間とパスを繋ぎながらプレーするため、自然とコミュニケーションが多く生まれます。\n"
        )
    },
    {
        "id": 16,
        "name": "クアッドボール",
        "min_participants": 14,
        "max_participants": 28,
        "tool": "ボール",
        "budget": 4000,
        "place": "屋外",
        "description": (
            "クアッドボールは、小説『ハリー・ポッター』の「クィディッチ」を基に考案された、4つのボールを使って戦うスポーツです。\n"
            "ラグビーやドッジボール、鬼ごっこなど様々な要素がミックスされたユニークな競技です。\n"
            "性別に関わらず誰もが活躍できるインクルーシブなスポーツとして普及しています。\n"
        )
    },
    {
        "id": 17,
        "name": "チェイスタグ",
        "min_participants": 2,
        "max_participants": 12,
        "tool": "なし",
        "budget": 0,
        "place": "屋内",
        "description": (
            "チェイスタグは、障害物のあるコートで1対1の鬼ごっこを競技化した、パルクールがルーツのスポーツです。\n"
            "瞬時の判断力と緻密な戦略が勝敗を大きく左右します。\n"
            "人間の身体能力の限界に挑むような、驚異的なスピードとアジリティの攻防が魅力です。\n"
        )
    },
    {
        "id": 18,
        "name": "パデル",
        "min_participants": 2,
        "max_participants": 4,
        "tool": "ラケット",
        "budget": 3000,
        "place": "屋内/屋外",
        "description": (
            "パデルは、テニスとスカッシュを組み合わせたようなスポーツで、主にダブルスでプレーします。\n"
            "強化ガラスの壁に囲まれたコートで行い、壁を使った返球が認められているのが最大の特徴です。\n"
            "テニス未経験者でもラリーが続きやすく、老若男女問わず楽しめるコミュニケーションスポーツです。\n"
        )
    },

       {
        "id": 19,
        "name": "フロアボール",
        "min_participants": 10,
        "max_participants": 40,
        "tool": "その他",
        "budget": 5000,
        "place": "屋内",
        "description": (
            "プラスチック製のスティックとボールを使い、体育館で行うホッケー型のチームスポーツです。"
            "スピーディーな試合展開と安全性の高さが特徴です。"
            "老若男女問わず楽しめます。"
        )
    },
    {
        "id": 20,
        "name": "ピックルボール",
        "min_participants": 2,
        "max_participants": 4,
        "tool": "ラケット",
        "budget": 10000,
        "place": "屋内/屋外",
        "description": (
            "バドミントンコートと同じ広さで行う、テニス、バドミントン、卓球を合わせたようなラケットスポーツです。"
            "ルールがシンプルで、初心者でもすぐにラリーが楽しめます。"
            "アメリカで人気が急上昇中のスポーツです。"
        )
    },
    {
        "id": 21,
        "name": "ラウンドネット（スパイクボール）",
        "min_participants": 4,
        "max_participants": 4,
        "tool": "ボール",
        "budget": 10000,
        "place": "屋外",
        "description": (
            "2対2で、中央のトランポリン状のネットにボールをバウンドさせてラリーを続けるスポーツです。"
            "360度どこにでも動けるダイナミックさが魅力です。"
            "ビーチや公園など、様々な場所で楽しめます。"
        )
    },
    {
        "id": 22,
        "name": "ヘディス",
        "min_participants": 2,
        "max_participants": 2,
        "tool": "ボール",
        "budget": 3000,
        "place": "屋内",
        "description": (
            "卓球台を使い、ヘディングのみでボールを打ち合うドイツ生まれのニュースポーツです。"
            "卓球の戦術性とサッカーのダイナミックさを兼ね備えています。"
            "頭脳と身体を同時に使う、ユニークなスポーツです。"
        )
    },
    {
        "id": 23,
        "name": "スピードミントン（クロスミントン）",
        "min_participants": 2,
        "max_participants": 4,
        "tool": "ラケット",
        "budget": 8000,
        "place": "屋内/屋外",
        "description": (
            "ネットが不要で、風に強い専用シャトル（スピーダー）を使うため、場所を選ばずに楽しめるラケットスポーツです。"
            "バドミントンの手軽さとテニスのスピード感を併せ持ちます。"
            "夜でも楽しめるように、蛍光塗料を塗ったスピーダーもあります。"
        )
    },
    {
        "id": 24,
        "name": "スポーツクライミング",
        "min_participants": 1,
        "max_participants": 1,
        "tool": "なし",
        "budget": 20000,
        "place": "屋内/屋外",
        "description": (
            "人工壁や岩を、自分の手と足だけを使って登るスポーツです。"
            "高さや課題を攻略する達成感が魅力です。"
            "ボルダリング、リード、スピードの3種目があります。"
        )
    },
    {
        "id": 25,
        "name": "フットゴルフ",
        "min_participants": 2,
        "max_participants": 4,
        "tool": "ボール",
        "budget": 5000,
        "place": "屋外",
        "description": (
            "ゴルフコースで、サッカーボールを蹴ってカップインまでの打数を競うスポーツです。"
            "ゴルフの戦略性とサッカーの爽快感を同時に楽しめます。"
            "老若男女問わず、気軽に楽しめるのが魅力です。"
        )
    },
    {
        "id": 26,
        "name": "ペタンク",
        "min_participants": 2,
        "max_participants": 6,
        "tool": "ボール",
        "budget": 7000,
        "place": "屋外",
        "description": (
            "目標球（ビュット）に、金属製のボール（ブール）を投げてどれだけ近づけられるかを競う、フランス発祥のスポーツです。"
            "緻密な戦略と繊細な投球技術が求められます。"
            "公園や広場など、身近な場所で楽しめます。"
        )
    },
    {
        "id": 27,
        "name": "水中ホッケー",
        "min_participants": 12,
        "max_participants": 20,
        "tool": "その他",
        "budget": 30000,
        "place": "屋内",
        "description": (
            "プールの底で、息を止めながらパックをスティックで運び、相手ゴールを目指す6人制のチームスポーツです。"
            "究極の3次元スポーツとも呼ばれます。"
            "チームワークと個々の潜水能力が重要になります。"
        )
    },
    {
        "id": 28,
        "name": "フィストボール",
        "min_participants": 10,
        "max_participants": 20,
        "tool": "ボール",
        "budget": 3000,
        "place": "屋外/屋内",
        "description": (
            "ネットを挟んで、ボールを拳や腕で打ち合うバレーボールに似たスポーツです。"
            "ボールのワンバウンドが認められているのが大きな特徴です。"
            "ヨーロッパを中心に人気があります。"
        )
    },
    {
        "id": 29,
        "name": "カヌーポロ",
        "min_participants": 10,
        "max_participants": 16,
        "tool": "その他",
        "budget": 25000,
        "place": "屋外/屋内",
        "description": (
            "カヌーを操作しながら、水上に設置されたゴールにボールを投げ入れて得点を競います。"
            "カヌーの操作技術と球技の要素が融合した、水上の格闘技とも呼ばれる激しいスポーツです。"
            "チームワークと戦略が勝利の鍵を握ります。"
        )
    },
    {
        "id": 30,
        "name": "ホースボール",
        "min_participants": 8,
        "max_participants": 12,
        "tool": "ボール",
        "budget": 50000,
        "place": "屋外",
        "description": (
            "馬に乗りながら、バスケットボールのようにパスを回し、ゴールを目指すチームスポーツです。"
            "馬術と球技が融合した、ダイナミックでスリリングなスポーツです。"
            "選手と馬との一体感が重要になります。"
        )
    },
    {
        "id": 31,
        "name": "ジョーキーボール",
        "min_participants": 2,
        "max_participants": 4,
        "tool": "ボール",
        "budget": 15000,
        "place": "屋内",
        "description": (
            "壁に囲まれたコートで、2対2で戦うミニサッカーのようなスポーツです。"
            "スピーディーな展開と、壁を使ったトリッキーなプレーが魅力です。"
            "省スペースで楽しめるため、都市部で人気があります。"
        )
    },
    {
        "id": 32,
        "name": "タンブレリ",
        "min_participants": 6,
        "max_participants": 10,
        "tool": "ラケット",
        "budget": 6000,
        "place": "屋外/屋内",
        "description": (
            "タンバリンのようなラケットでボールを打ち合う、イタリア発祥のスポーツです。"
            "テニスやバレーボールに似たルールで、ラリーが続きやすいのが特徴です。"
            "リズミカルな打球音が心地よいスポーツです。"
        )
    },
    {
        "id": 33,
        "name": "スラックライン",
        "min_participants": 1,
        "max_participants": 1,
        "tool": "なし",
        "budget": 10000,
        "place": "屋外",
        "description": (
            "幅5cmほどのベルト状のラインの上で、バランスを取りながら歩いたり、技を繰り出すスポーツです。"
            "体幹やバランス感覚を鍛えることができます。"
            "公園の木などに設置して、手軽に楽しめます。"
        )
    },
    {
        "id": 34,
        "name": "eスポーツ",
        "min_participants": 1,
        "max_participants": 10,
        "tool": "なし",
        "budget": 30000,
        "place": "屋内",
        "description": (
            "コンピューターゲームをスポーツとして捉え、競技として行うものです。"
            "ジャンルは多岐にわたり、世界中で大規模な大会が開催されています。"
            "戦略性や反射神経、チームワークが求められます。"
        )
    },
    {
        "id": 35,
        "name": "ドローンレース",
        "min_participants": 1,
        "max_participants": 8,
        "tool": "その他",
        "budget": 50000,
        "place": "屋外/屋内",
        "description": (
            "ドローンを操縦し、設定されたコースをいかに速く周回できるかを競うレースです。"
            "FPV（一人称視点）ゴーグルを装着し、まるで自分が飛んでいるかのような臨場感を味わえます。"
            "操縦技術とコース取りの戦略が重要になります。"
        )
    },
    {
        "id": 36,
        "name": "スポーツスタッキング",
        "min_participants": 1,
        "max_participants": 1,
        "tool": "その他",
        "budget": 3000,
        "place": "屋内",
        "description": (
            "複数のプラスチック製カップを、決められた形に積み上げたり崩したりする速さを競うスポーツです。"
            "反射神経や集中力、両手の協調性を高める効果が期待できます。"
            "手軽に始められ、子供から大人まで楽しめます。"
        )
    },
    {
        "id": 37,
        "name": "エアホッケー",
        "min_participants": 2,
        "max_participants": 2,
        "tool": "その他",
        "budget": 2000,
        "place": "屋内",
        "description": (
            "テーブル上の盤面から吹き出す空気の力でパックを浮かせ、マレットで打ち合って相手のゴールに入れるゲームです。"
            "ゲームセンターでおなじみですが、競技としても行われています。"
            "スピーディーな攻防と、パックが盤面を滑る爽快感が魅力です。"
        )
    },
    {
        "id": 38,
        "name": "フレスコボール",
        "min_participants": 2,
        "max_participants": 2,
        "tool": "ラケット",
        "budget": 5000,
        "place": "屋外",
        "description": (
            "ブラジル発祥のビーチスポーツで、木製のラケットでボールを打ち合い、ラリーを続けます。"
            "勝ち負けを競うのではなく、いかにラリーを美しく続けられるかを楽しみます。"
            "思いやりのスポーツとも呼ばれ、コミュニケーションを取りながら楽しむのが特徴です。"
        )
    },
    {
        "id": 39,
        "name": "インラインスケート",
        "min_participants": 1,
        "max_participants": 1,
        "tool": "ヘルメット",
        "budget": 15000,
        "place": "屋外/屋内",
        "description": (
            "車輪が縦一列に並んだスケート靴を履いて、滑走や技を楽しむスポーツです。"
            "スピードを楽しむスラロームや、技を競うアグレッシブなど、様々なスタイルがあります。"
            "全身運動になり、バランス感覚も養われます。"
        )
    },
    {
        "id": 40,
        "name": "スケートボード",
        "min_participants": 1,
        "max_participants": 1,
        "tool": "ヘルメット",
        "budget": 20000,
        "place": "屋外/屋内",
        "description": (
            "一枚の板に車輪が付いた乗り物で、滑走したり、ジャンプや回転などの技を繰り出します。"
            "ストリートカルチャーと密接に結びついており、ファッション性も高いです。"
            "創造性や自己表現力が求められるスポーツです。"
        )
      }
      ]

@router.get("/minor-sports")
async def get_minor_sports():
    return MINOR_SPORTS_DATA


@router.get("/minor-sports/{sport_id}")
async def get_minor_sport(sport_id: int):
    for sport in MINOR_SPORTS_DATA:
        if sport["id"] == sport_id:
            return sport
    raise HTTPException(status_code=404, detail="スポーツが見つかりません")