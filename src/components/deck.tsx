import type { SlideData } from "@/lib/slides";
import { TwoCol, Card, DefList, Matrix, Strength, BigStat } from "./slide-parts";

/* ============================================================
 * メビウス製薬 ブランドポートフォリオ戦略 デッキ（全 33 スライド）
 *   #01-#17 ：ポートフォリオ全体 / ブランド定義 / EC 設計 / 方針転換
 *   #18-#24 ：SIMIUS リブランド WHY（章扉 / 4 軸 / カウンターファクチュアル）
 *   #25-#33 ：SIMIUS / TRIPURE / 出口 / EC 導線 / ロードマップ / サマリ
 * ============================================================ */

export const deck: SlideData[] = [
  /* ---------- 01 表紙 ---------- */
  {
    id: "01-cover",
    variant: "cover",
    eyebrow: "MEBIUS PORTFOLIO STRATEGY 2026",
    title: "SIMIUS を親にしない。\nMEBIUS を編集母体に、\n5 ブランドを役割で売る。",
    lead: "ポートフォリオ内で役割を分け、EC の売り方まで分岐させる。",
    children: (
      <div style={{ display: "flex", gap: 64, marginTop: 64 }}>
        {[
          { k: "継承", v: "SIMIUS の DR 資産を捨てず、品よく再編集する。" },
          { k: "分化", v: "5 ブランドを同じ顔にせず、役割・ターゲット・売り方を分ける。" },
          { k: "編集", v: "EC を商品棚ではなく、悩みとブランドをつなぐ編集装置にする。" },
        ].map((x) => (
          <div key={x.k} style={{ flex: 1, color: "rgba(243,241,238,.92)" }}>
            <p
              className="eyebrow"
              style={{ color: "rgba(243,241,238,.55)", margin: "0 0 12px" }}
            >
              {x.k}
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, margin: 0 }}>{x.v}</p>
          </div>
        ))}
      </div>
    ),
    footnote: "INSTYLE GROUP / Creative Strategy",
  },

  /* ---------- 02 現状課題 ---------- */
  {
    id: "02-status",
    eyebrow: "CONTEXT",
    title: "現状：SIMIUS 公式通販の表札の中に、4 つの別ブランドが同居している。",
    lead: [
      "simius.tokyo は SIMIUS 公式通販の名のまま TRIPURE / UPTIS / AWAI が並び、STYLE HOMME はモールに散在。",
      "結果として「DR の証拠力」も「ミニマルの思想性」もどちらも立ち切らない状態に近い。",
    ],
    children: (
      <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32 }}>
        <Card
          title="EC 上で起きていること"
          body={
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>SIMIUS トップは「驚くほどシンプル、美しさの本質」を掲げる</li>
              <li>一方ランキングは初回 ¥1,980 〜、UV 美容液 ¥2,903、パウダー ¥4,400 等 DR 実用価格帯</li>
              <li>TRIPURE / UPTIS / AWAI が SIMIUS の派生に見える階層</li>
              <li>STYLE HOMME はそもそも公式 EC 内に明確な導線がない</li>
            </ul>
          }
        />
        <Card
          tone="surface-2"
          title="問題の本質"
          body={
            <p style={{ margin: 0 }}>
              これは SIMIUS 単体の VI 統一の問題ではない。
              <br />
              <mark>ポートフォリオ内の親子関係の混線</mark> と、
              <br />EC 上の <mark>名前・導線・語り口の階層整理</mark> の問題。
            </p>
          }
        />
      </div>
    ),
  },

  /* ---------- 03 前提：これは VI 統一の問題ではない ---------- */
  {
    id: "03-premise",
    variant: "chapter",
    eyebrow: "PREMISE",
    title: "「5 ブランドを同じ美意識に寄せる」ではなく、\n「役割を分けて売り方まで分岐させる」問題として整理する。",
    lead: [
      "全部を同じデザイントーンにする提案は、棚を一色に塗ることに近い。",
      "ブランドポートフォリオ EC として必要なのは、塗り直しではなく階層の整理。",
    ],
  },

  /* ---------- 04 ブランド構造 3案比較 ---------- */
  {
    id: "04-structure-compare",
    eyebrow: "STRUCTURE OPTIONS",
    title: "ブランド構造、3 案の比較。",
    children: (
      <Matrix
        head={["案", "構造", "メリット", "リスク", "判断"]}
        rows={[
          [
            "A",
            "SIMIUS を親ブランドに、その中に全ブランドを入れる",
            "既存流入を使いやすい",
            "TRIPURE / UPTIS / AWAI が SIMIUS の派生に見える",
            { tag: "default", text: "非推奨" },
          ],
          [
            "B",
            "MEBIUS を編集母体にし、各ブランドは独立",
            "既存資産と新ブランドを両立できる",
            "初期の情報設計が必要",
            { tag: "dark", text: "推奨" },
          ],
          [
            "C",
            "5 ブランドを別 EC・別世界観で完全分離",
            "ブランド純度は高い",
            "運用・CRM・LTV が分断される",
            { tag: "default", text: "後期案" },
          ],
        ]}
      />
    ),
  },

  /* ---------- 05 推奨：MEBIUS 編集母体型 ---------- */
  {
    id: "05-recommend",
    eyebrow: "RECOMMENDATION",
    title: "推奨：MEBIUS BEAUTY STORE 構造。",
    lead: [
      "技術基盤は Shopify 共通、見え方は MEBIUS を母体に SIMIUS / TRIPURE / UPTIS / AWAI / STYLE HOMME の独立並列。",
    ],
    children: (
      <TwoCol
        ratio="1.1fr 1fr"
        left={
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Card
              title="EC の表札"
              body={
                <p style={{ margin: 0 }}>
                  MEBIUS = 編集母体 ／ <br />
                  SIMIUS・TRIPURE・UPTIS・AWAI・STYLE HOMME = 独立ブランド
                </p>
              }
            />
            <Card
              tone="surface-2"
              title="やらないこと"
              body={
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                  <li>5 ブランドを全部ミニマルに寄せる</li>
                  <li>SIMIUS の DR 資産を切り捨てる</li>
                  <li>TRIPURE を SIMIUS の派生に見せる</li>
                </ul>
              }
            />
          </div>
        }
        right={
          <Card
            tone="dark"
            title="SHOPIFY PLUS 移行成果（既存）"
            body={
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 4 }}>
                <BigStat value="×2" label="定期継続率" sub="移行後 約 2 倍" />
                <BigStat value="½" label="広告 CPA" sub="移行後 約 半減" />
                <BigStat value="⅓" label="システムコスト" sub="移行後 約 1/3" />
                <BigStat value="⅕" label="運用コスト" sub="移行後 約 1/5" />
              </div>
            }
          />
        }
      />
    ),
    footnote: "次にやるべきはカート改善ではなく、ブランド別 LTV 設計。",
  },

  /* ---------- 06 5ブランドの役割分担マトリクス ---------- */
  {
    id: "06-roles",
    eyebrow: "PORTFOLIO ROLES",
    title: "5 ブランドの役割分担。",
    children: (
      <Matrix
        head={["ブランド", "役割", "主な入口", "売り方", "EC 目的"]}
        rows={[
          ["SIMIUS", "既存収益・信頼資産の中核", "指名検索 / 既存顧客 / 悩み検索", "実績・安心・継続", "LTV 最大化"],
          ["TRIPURE", "若年層・SNS 獲得エンジン", "TikTok / Instagram / 毛穴悩み", "成分・即理解・試しやすさ", "新規獲得"],
          ["UPTIS", "高単価・エイジング上位ライン", "SIMIUS 既存顧客 / 年齢サイン", "技術・ハリ・上向き感", "AOV 向上"],
          ["AWAI", "感性・ギフト・併売商品", "香り / 温泉水 / 気分転換", "体験・情緒・生活導入", "クロスセル"],
          ["STYLE HOMME", "男性市場・機能特化入口", "Amazon / Rakuten / メンズ悩み", "簡便・清潔感・一本完結", "新規男性獲得"],
        ]}
      />
    ),
  },

  /* ---------- 07 SIMIUS ブランド定義 ---------- */
  {
    id: "07-brand-simius",
    eyebrow: "BRAND DEFINITION  ·  01 / 05",
    title: "SIMIUS — DR 資産を、品よく再編集する主力。",
    children: (
      <TwoCol
        ratio="1.05fr 1fr"
        left={
          <DefList
            rows={[
              { label: "約束", value: "シミ・年齢肌の悩みに、毎日続けられる確かなシンプルケア。" },
              { label: "対象", value: "効果実感を重視 / 失敗したくない / 複雑な美容習慣は続かない。" },
              { label: "方向性", value: "ミニマルではなく「簡潔な信頼」。" },
              { label: "ビジュアル", value: "白黒ミニマルから、薬用・実績・花・光・肌実感を整理した安心感のある上質へ。" },
              { label: "EC", value: "Before/After をそのまま出さず、実績・処方・継続理由・レビューを品よく階層化。" },
            ]}
          />
        }
        right={
          <Card
            tone="surface-2"
            title="COPY DIRECTION"
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  シミ悩みに、毎日続けやすいケアを。
                </p>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  年齢を重ねる肌に、変わらず続けられる毎日を。
                </p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-muted)", marginTop: 8 }}>
                  *コピーは薬機チェック前提。LP / 広告 / レビュー見出しでは表現をさらに絞る。
                </p>
              </div>
            }
          />
        }
      />
    ),
  },

  /* ---------- 08 TRIPURE ---------- */
  {
    id: "08-brand-tripure",
    eyebrow: "BRAND DEFINITION  ·  02 / 05",
    title: "TRIPURE — SNS 時代の新規獲得ブランド。",
    children: (
      <TwoCol
        ratio="1.05fr 1fr"
        left={
          <DefList
            rows={[
              { label: "約束", value: "毛穴印象に、なりたい気持ちをまっすぐ届ける集中ケア。" },
              { label: "対象", value: "毛穴・ベタつき・ざらつきが気になる / 美容情報を SNS で比較する / まず試したい。" },
              { label: "方向性", value: "ピュアを、かわいいではなく「なりたい気持ちの肯定」にする。" },
              { label: "ビジュアル", value: "透明感・成分の粒感・肌テクスチャ・少し強いアクセントカラー。" },
              { label: "EC", value: "TikTok Shop、動画、レビュー、1 回試し、28 包設計を主軸に。" },
            ]}
          />
        }
        right={
          <Card
            tone="surface-2"
            title="COPY DIRECTION"
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  なりたい肌に、正直でいい。
                </p>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  毛穴印象を整える、ピュアトリプルケア。
                </p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-muted)", marginTop: 8 }}>
                  *コピーは薬機チェック前提。LP / 広告 / レビュー見出しでは表現をさらに絞る。
                </p>
              </div>
            }
          />
        }
      />
    ),
  },

  /* ---------- 09 UPTIS ---------- */
  {
    id: "09-brand-uptis",
    eyebrow: "BRAND DEFINITION  ·  03 / 05",
    title: "UPTIS — 年齢サインに、技術で向き合う上位ライン。",
    children: (
      <TwoCol
        ratio="1.05fr 1fr"
        left={
          <DefList
            rows={[
              { label: "約束", value: "年齢サインに、技術でアプローチするハリ印象ケア。" },
              { label: "対象", value: "ハリ不足・乾燥・目もと印象が気になる / 安いより納得できるものを選びたい。" },
              { label: "方向性", value: "ラグジュアリーではなく「テクノロジー・エイジングケア」。" },
              { label: "ビジュアル", value: "上昇線・光沢・カプセル・肌密度・静かな先進感。" },
              { label: "EC", value: "SIMIUS 既存顧客へのアップセル / セット提案 / 夜ケア / 集中ケア導線。" },
            ]}
          />
        }
        right={
          <Card
            tone="surface-2"
            title="COPY DIRECTION"
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  肌印象を、上向きに。
                </p>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  年齢サインに、技術で向き合うエイジングケア。
                </p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-muted)", marginTop: 8 }}>
                  *コピーは薬機チェック前提。LP / 広告 / レビュー見出しでは表現をさらに絞る。
                </p>
              </div>
            }
          />
        }
      />
    ),
  },

  /* ---------- 10 AWAI ---------- */
  {
    id: "10-brand-awai",
    eyebrow: "BRAND DEFINITION  ·  04 / 05",
    title: "AWAI — 肌と気分のあわいを整える、温泉水ミスト。",
    children: (
      <TwoCol
        ratio="1.05fr 1fr"
        left={
          <DefList
            rows={[
              { label: "約束", value: "肌と気分のあわいを整える、温泉水ミスト。" },
              { label: "対象", value: "肌の乾燥だけでなく気分の切り替えも求める / 香りに価値を感じる / ギフト需要。" },
              { label: "方向性", value: "スキンケアというより、日々の余白を整えるブランド。" },
              { label: "ビジュアル", value: "温泉水・霧・日光・森・蜜花・柑橘。自然由来の情緒。" },
              { label: "EC", value: "カート追加 / セット / ギフト / 季節限定 / 香り診断。" },
            ]}
          />
        }
        right={
          <Card
            tone="surface-2"
            title="COPY DIRECTION"
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  肌に、気分に、ひと吹きの余白を。
                </p>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  温泉水と香りで整える、AWAI のミストケア。
                </p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-muted)", marginTop: 8 }}>
                  *コピーは薬機チェック前提。LP / 広告 / レビュー見出しでは表現をさらに絞る。
                </p>
              </div>
            }
          />
        }
      />
    ),
  },

  /* ---------- 11 STYLE HOMME ---------- */
  {
    id: "11-brand-stylehomme",
    eyebrow: "BRAND DEFINITION  ·  05 / 05",
    title: "STYLE HOMME — 男の身だしなみを、一本で整える。",
    children: (
      <TwoCol
        ratio="1.05fr 1fr"
        left={
          <DefList
            rows={[
              { label: "約束", value: "男の肌悩みを、一本で整える身だしなみケア。" },
              { label: "対象", value: "化粧品に詳しくない / ひげそり後やシミ・乾燥が気になる / 面倒な工程は続かない。" },
              { label: "方向性", value: "美容ではなく「清潔感・印象管理・実用」。" },
              { label: "ビジュアル", value: "黒・グレー・スチール・洗面台・仕事前・ひげそり後。" },
              { label: "EC", value: "Amazon / Rakuten で刈り取り、公式では診断・定期・まとめ買い。" },
            ]}
          />
        }
        right={
          <Card
            tone="surface-2"
            title="COPY DIRECTION"
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  ひげそり後も、日中の身だしなみも、一本で整える。
                </p>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.4 }}>
                  清潔感を続ける、男のオールインワン。
                </p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-muted)", marginTop: 8 }}>
                  *コピーは薬機チェック前提。LP / 広告 / レビュー見出しでは表現をさらに絞る。
                </p>
              </div>
            }
          />
        }
      />
    ),
  },

  /* ---------- 12 EC 情報設計：2 軸の入口 ---------- */
  {
    id: "12-ec-info",
    eyebrow: "EC INFORMATION ARCHITECTURE",
    title: "EC トップは「商品棚」ではなく、悩みとブランドを結ぶ編集棚に。",
    children: (
      <TwoCol
        left={
          <Card
            title="表の導線：2 軸の入口"
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <p className="eyebrow" style={{ margin: 0 }}>悩みから選ぶ</p>
                  <p style={{ margin: "4px 0 0", lineHeight: 1.7 }}>
                    シミ・年齢肌 / 毛穴 / ハリ不足 / 乾燥・気分転換 / メンズ
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ margin: 0 }}>ブランドから選ぶ</p>
                  <p style={{ margin: "4px 0 0", lineHeight: 1.7 }}>
                    SIMIUS / TRIPURE / UPTIS / AWAI / STYLE HOMME
                  </p>
                </div>
              </div>
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="ブランドページ共通テンプレ"
            body={
              <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 1.85 }}>
                <li>ブランドの一行プロミス</li>
                <li>その悩みが起こる生活背景</li>
                <li>処方・成分・技術</li>
                <li>商品ラインアップ</li>
                <li>使う順番・使うタイミング</li>
                <li>定期 / セット / 単品の選び方</li>
                <li>レビュー・FAQ・薬機法上の注記</li>
              </ol>
            }
          />
        }
      />
    ),
    footnote: "薬機チェック前提。承認効能の範囲を超える表現は LP / 広告 / レビュー見出しで使わない。",
  },

  /* ---------- 13 ブランド別 EC 表現の強弱 ---------- */
  {
    id: "13-ec-balance",
    eyebrow: "EC EXPRESSION BALANCE",
    title: "ブランド別の表現バランスを、最初から変える。",
    lead: "ここを全部同じデザイントーンにすると、どれも似て、CVR もブランド記憶も落ちる。",
    children: (
      <Matrix
        head={["ブランド", "世界観", "証拠", "価格訴求", "定期", "UGC"]}
        rows={[
          ["SIMIUS", <Strength key="a" level="中" />, <Strength key="b" level="強" />, <Strength key="c" level="中" />, <Strength key="d" level="強" />, <Strength key="e" level="強" />],
          ["TRIPURE", <Strength key="a" level="中" />, <Strength key="b" level="中" />, <Strength key="c" level="強" />, <Strength key="d" level="中" />, <Strength key="e" level="強" />],
          ["UPTIS", <Strength key="a" level="強" />, <Strength key="b" level="強" />, <Strength key="c" level="弱" />, <Strength key="d" level="中" />, <Strength key="e" level="中" />],
          ["AWAI", <Strength key="a" level="強" />, <Strength key="b" level="弱" />, <Strength key="c" level="弱" />, <Strength key="d" level="弱" />, <Strength key="e" level="中" />],
          ["STYLE HOMME", <Strength key="a" level="弱" />, <Strength key="b" level="強" />, <Strength key="c" level="強" />, <Strength key="d" level="中" />, <Strength key="e" level="強" />],
        ]}
      />
    ),
    footnote: "信頼（SIMIUS）／ 入口（TRIPURE）／ 納得（UPTIS）／ 感性（AWAI）／ 実用（STYLE HOMME）。",
  },

  /* ---------- 14 大失敗仮説と対策（原案版） ---------- */
  {
    id: "14-risks-v1",
    eyebrow: "RISK HYPOTHESES",
    title: "起こり得る失敗と、その封じ方。",
    children: (
      <Matrix
        head={["失敗仮説", "起こること", "対策"]}
        rows={[
          ["5 ブランドを全部ミニマルにする", "どれも似て、CVR もブランド記憶も落ちる", "ブランド別 VI / コピー / 写真ルールを分ける"],
          ["SIMIUS の DR 資産を切り捨てる", "既存顧客が不安、獲得効率も落ちる", "実績・安心・継続理由を上品に再編集"],
          ["TRIPURE を SIMIUS の派生に見せる", "若年層から古いブランドに見える", "SNS 起点の独立 LP を作る"],
          ["UPTIS を高級風にしすぎる", "価格と中身の説明が追いつかない", "技術・処方・使い方で納得させる"],
          ["AWAI を化粧水カテゴリに埋める", "感性商材として育たない", "香り・ギフト・気分転換導線を作る"],
          ["STYLE HOMME を放置する", "モール商品で終わり、ブランド化しない", "メンズ用 LP と Amazon / Rakuten 連動を設計"],
          ["表現が強くなりすぎる", "薬機法リスクが出る", "コピーガイドラインと薬事チェックフローを先に作る"],
        ]}
      />
    ),
  },

  /* ---------- 15 オーナー・上長に確認すべき 5 点 ---------- */
  {
    id: "15-decisions",
    eyebrow: "DECISIONS NEEDED",
    title: "オーナー・上長に、最初に決めてもらうこと。",
    children: (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 8 }}>
        {[
          { n: "01", t: "SIMIUS 既存資産", q: "継承するか、若返らせるか、完全に切るか。" },
          { n: "02", t: "EC の表札", q: "SIMIUS 公式通販のままか、MEBIUS 母体に変えるか。" },
          { n: "03", t: "売上責任", q: "5 ブランドで同じ KPI にしない。誰が何の数字を持つか。" },
          { n: "04", t: "薬機法", q: "チェックの責任者と承認フローを誰にするか。" },
          { n: "05", t: "予算", q: "ブランド写真・動画・LP・SNS 素材をどこまで作り直すか。" },
        ].map((x) => (
          <Card
            key={x.n}
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 8, height: "100%" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-text-muted)" }}>
                  {x.n}
                </span>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 18, lineHeight: 1.35 }}>
                  {x.t}
                </p>
                <p style={{ margin: "auto 0 0", fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  {x.q}
                </p>
              </div>
            }
          />
        ))}
      </div>
    ),
  },

  /* ---------- 16 方針の切り替え（章扉） ---------- */
  {
    id: "16-shift",
    variant: "chapter",
    eyebrow: "POLICY SHIFT",
    title: "全部を均等に育てるのをやめる。\n投資対象と出口設計に、ブランドを分ける。",
    lead: [
      "SIMIUS は順次刷新、TRIPURE は成長投資。",
      "UPTIS・AWAI・STYLE HOMME は、ブランドを傷つけない形で動かす。",
    ],
  },

  /* ---------- 17 経営上の役割マトリクス ---------- */
  {
    id: "17-policy-matrix",
    eyebrow: "POLICY BY BRAND",
    title: "経営上の役割を、ブランドごとに割り当てる。",
    children: (
      <Matrix
        head={["ブランド", "方針", "経営上の役割"]}
        rows={[
          ["SIMIUS", { tag: "dark", text: "投資 / 順次刷新" }, "既存売上の維持とブランド再生"],
          ["TRIPURE", { tag: "dark", text: "投資 / 横展開" }, "若年層・SNS・新規獲得の成長投資"],
          ["UPTIS", { tag: "default", text: "出口設計" }, "高単価エイジングケアの出口設計"],
          ["AWAI", { tag: "default", text: "出口設計" }, "併売・セット・ノベルティ的活用"],
          ["STYLE HOMME", { tag: "default", text: "出口設計" }, "男性顧客チャネルの検証"],
        ]}
      />
    ),
    footnote: "出口設計は「安売り」ではなく、限定セット / トライアル / シーズナル / 会員限定オファーで動かす。",
  },

  /* ---------- 18 WHY 章扉：なぜ今 SIMIUS をリブランドするのか ---------- */
  {
    id: "18-why-cover",
    variant: "chapter",
    eyebrow: "SIMIUS  ·  WHY REBRAND",
    title: "なぜ今、SIMIUS を作り直すのか。",
    lead: [
      "Shopify Plus への移行で、運用効率と広告 CPA は確かに改善した。",
      "次は、ブランド資産そのものを更新する番。",
      "全否定でも、急ハンドルでもない。順次刷新の根拠を、4 つの角度から示す。",
    ],
    footnote: "旧パッケージ・既存定期は維持。新商品と追加在庫から段階的に上書きする前提。",
  },

  /* ---------- 19 WHY オーバービュー：4 つの根拠を 1 枚で ---------- */
  {
    id: "19-why-overview",
    eyebrow: "SIMIUS  ·  WHY REBRAND  ·  OVERVIEW",
    title: "4 つの根拠を、1 枚で。",
    lead: "順番に「内部・外部・市場・経営」の 4 軸で SIMIUS の現在地を見る。",
    children: (
      <Matrix
        head={["軸", "起きていること", "リブランドで取り戻すもの"]}
        rows={[
          [
            { tag: "dark", text: "内部" },
            "DR 訴求の反復と汎用化したミニマル表現で、ブランドの輪郭が薄れている",
            "「続けられる確かさ」を主語にした語り",
          ],
          [
            { tag: "dark", text: "外部" },
            "同価格帯の棚で、競合の世界観水準が一段上昇",
            "並んだときに選ばれる、品位とテクスチャ",
          ],
          [
            { tag: "dark", text: "市場" },
            "既存顧客は静かに歳を取り、新規は DR で入りにくい",
            "指名想起と、続ける理由の再提示",
          ],
          [
            { tag: "dark", text: "経営" },
            "公式通販の表札のままで、ポートフォリオ転換が進まない",
            "MEBIUS 編集母体への接続条件",
          ],
        ]}
      />
    ),
    footnote: "各根拠は次の 4 枚で個別に展開する。",
  },

  /* ---------- 20 WHY 1/4 内部要因：DR 訴求の摩耗 ---------- */
  {
    id: "20-why-dr-fatigue",
    eyebrow: "SIMIUS  ·  WHY REBRAND  ·  1 / 4  ·  内部要因",
    title: "DR 訴求の摩耗：価格と効能の反復に寄りすぎ、ブランドの記憶が積み上がりにくい。",
    children: (
      <TwoCol
        ratio="1fr 1fr"
        left={
          <Card
            title="観察される傾向"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>初回 ¥1,980 → 通常 ¥5,217 の価格差訴求が、長期にわたり継続</li>
                <li>「シミ・年齢肌」への効能訴求の反復に、LP が依存</li>
                <li>白黒ミニマルが業界全体に拡散し、識別性が下がっている</li>
                <li>UV 美容液 ¥2,903、フェイスパウダー ¥4,400 など周辺商品の世界観がバラついている</li>
              </ul>
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="ブランド側に出ている影響"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>既存顧客が「使い続ける理由」を商品ページで再確認できない</li>
                <li>新規にとって、他の DR ブランドとの差が伝わらない</li>
                <li>打ち手が価格訴求と広告効率調整に偏り、ブランド資産が積み上がりにくい</li>
                <li>実績・処方・継続理由といった証拠が、ページ全体の文脈の中で機能していない</li>
              </ul>
            }
          />
        }
      />
    ),
    footnote: "DR を捨てるのではない。証拠と価格設計は残し、語り順を入れ替える。",
  },

  /* ---------- 21 WHY 2/4 外部要因：棚の品位インフレ ---------- */
  {
    id: "21-why-shelf-inflation",
    eyebrow: "SIMIUS  ·  WHY REBRAND  ·  2 / 4  ·  外部要因",
    title: "同価格帯の棚では、世界観の水準が一段上がっている。",
    children: (
      <TwoCol
        ratio="1.05fr 1fr"
        left={
          <Card
            title="近接ゾーンで見える動き（公開情報の範囲）"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>ロート製薬（オバジ / メラノCC）— 成分軸の編集を強化</li>
                <li>富士フイルム（アスタリフト）— テクノロジー軸の打ち出し</li>
                <li>オルビス（ユー / ディフェンセラ）— エイジング × 体内ケアの組み立て</li>
                <li>ファンケル（ホワイトニング）— 安心と効能の編集表現</li>
                <li>DECENCIA / d プログラム ほか敏感肌系 — 表現密度の上昇</li>
              </ul>
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="共通する変化"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>ブランドサイト・パッケージ・PDP の表現密度が、過去数年で一段上がっている</li>
                <li>「薬用 × 世界観」「成分 × 物語」の両立が、棚の標準になりつつある</li>
                <li>SIMIUS は依然として「DR 系公式通販の表札」表現に留まる</li>
                <li>結果、同価格帯で並べたときに選ばれにくくなる</li>
              </ul>
            }
          />
        }
      />
    ),
    footnote: "具体的な競合比較は別資料。本資料では棚位置の構造のみを示す。",
  },

  /* ---------- 22 WHY 3/4 市場要因：顧客と SNS の重心移動 ---------- */
  {
    id: "22-why-customer-shift",
    eyebrow: "SIMIUS  ·  WHY REBRAND  ·  3 / 4  ·  市場要因",
    title: "既存顧客はゆるやかに年齢を重ね、新規は DR だけでは入りにくくなっている。",
    children: (
      <TwoCol
        ratio="1fr 1fr"
        left={
          <Card
            title="既存顧客側の前提（想定）"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>主要顧客層は年単位でゆるやかに年齢を重ねていると見られる</li>
                <li>「続けやすさ」「信じられる根拠」「セット提案」への要求が高まる</li>
                <li>初回限定 ¥1,980 の説得力は、継続層には弱い</li>
                <li>定期継続の理由づけが、価格以外で必要になっている</li>
              </ul>
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="新規流入側の前提（想定）"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>SNS / 動画 / 成分検索 / インフルエンサー比較に重心が移動</li>
                <li>DR 検索広告 → LP の単線フローでは、新規が入りにくくなっている</li>
                <li>指名検索の入口が、世代単位で弱くなっている</li>
                <li>TRIPURE が SNS 新規を担う前提でも、SIMIUS には別の入口理由が必要</li>
              </ul>
            }
          />
        }
      />
    ),
    footnote: "数値は内部データの確認が前提。本資料は構造として示す。",
  },

  /* ---------- 23 WHY 4/4 経営要因：ポートフォリオ整合性 ---------- */
  {
    id: "23-why-portfolio",
    eyebrow: "SIMIUS  ·  WHY REBRAND  ·  4 / 4  ·  経営要因",
    title: "MEBIUS 編集母体に切り替える前提条件として、SIMIUS の表札を更新する。",
    children: (
      <TwoCol
        ratio="1fr 1fr"
        left={
          <Card
            title="推奨案で目指す姿（#05）"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>EC 母体 = MEBIUS、各ブランドは独立した役割で並べる</li>
                <li>SIMIUS は「DR 資産の中核」として残す</li>
                <li>TRIPURE / UPTIS / AWAI / STYLE HOMME はそれぞれ独立した役割を持つ</li>
                <li>5 ブランドの役割分担（#06）が、現場と顧客の両方に伝わる</li>
              </ul>
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="SIMIUS が現状のままだと起きること"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>公式通販の「表札」が SIMIUS のままだと、MEBIUS が編集母体に見えない</li>
                <li>TRIPURE / UPTIS / AWAI / STYLE HOMME が SIMIUS の派生に見える</li>
                <li>5 ブランドの役割分担が、現場にも顧客にも伝わらない</li>
                <li>ひいては、ポートフォリオ転換そのものが進まない</li>
              </ul>
            }
          />
        }
      />
    ),
    footnote: "順番として、SIMIUS の表札更新が先。MEBIUS 母体の立ち上げはその後。",
  },

  /* ---------- 24 WHY カウンターファクチュアル：何もしないと、こう摩耗する ---------- */
  {
    id: "24-why-counterfactual",
    eyebrow: "SIMIUS  ·  WHY REBRAND  ·  COUNTERFACTUAL",
    title: "何もしないと、SIMIUS はこう摩耗する。",
    lead: "リブランドを先送りした場合に、時間軸ごとに観察されると想定される変化。",
    children: (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 4 }}>
        {[
          {
            n: "短期",
            t: "広告効率は維持。獲得単価は緩やかに悪化。",
            d: "DR の打ち手はまだ効く。ただし、媒体側の最適化余地は徐々に痩せる。",
          },
          {
            n: "中期",
            t: "棚の格差が、静かに広がる。",
            d: "同価格帯の競合が世界観を一段上げ続け、相対的な選ばれにくさが進む。",
          },
          {
            n: "中期",
            t: "TRIPURE を伸ばすほど、分断が見える。",
            d: "若い顔の TRIPURE と、表札のままの SIMIUS との間に、ブランド体験の段差が出る。",
          },
          {
            n: "長期",
            t: "打ち手の余地が、徐々に狭まる。",
            d: "薬機ガイドラインや表現規制が見直された場合、価格・効能の反復型訴求は調整余地が小さい。",
          },
        ].map((s, i) => (
          <Card
            key={i}
            tone={i === 3 ? "surface-2" : "surface"}
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 8, height: "100%" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-text-muted)" }}>
                  {s.n}
                </span>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 18, lineHeight: 1.45 }}>{s.t}</p>
                <p style={{ margin: "auto 0 0", fontSize: 12, color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  {s.d}
                </p>
              </div>
            }
          />
        ))}
      </div>
    ),
    footnote: "順次刷新は「やる / やらない」ではなく、「いつ始めるか」の問題。",
  },

  /* ---------- 25 SIMIUS：順次リブランディング ---------- */
  {
    id: "18-simius-rebrand",
    eyebrow: "SIMIUS  ·  REBRAND DIRECTION",
    title: "SIMIUS：DR 資産を、品位ある形に再編集する。",
    children: (
      <TwoCol
        ratio="1fr 1fr"
        left={
          <Card
            title="変えないもの"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>シミ悩みへの想起</li>
                <li>薬用・医薬部外品の信頼感</li>
                <li>オールインワンの簡便性</li>
                <li>既存顧客の安心感</li>
                <li>初回購入しやすい価格設計</li>
              </ul>
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="変えるもの"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>価格訴求と効能連呼に寄りすぎた売り方</li>
                <li>汎用的な白黒ミニマル表現</li>
                <li>ブランド固有性の薄い汎用コピー</li>
                <li>商品ごとの世界観のバラつき</li>
                <li>新旧商品の見え方の混在</li>
              </ul>
            }
          />
        }
      />
    ),
    footnote: "新コア：年齢肌の悩みに、毎日続けやすい薬用スキンケアブランド。",
  },

  /* ---------- 19 SIMIUS：切替順 5 段階 ---------- */
  {
    id: "19-simius-rollout",
    eyebrow: "SIMIUS  ·  ROLLOUT SEQUENCE",
    title: "SIMIUS：全否定ではなく、新しい棚から順に上書きする。",
    children: (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 8 }}>
        {[
          { n: "STEP 1", t: "新商品", d: "新 VI・新コピー・新写真で発売" },
          { n: "STEP 2", t: "追加在庫商品", d: "パッケージ / 商品画像 / LP を新基準へ" },
          { n: "STEP 3", t: "主力ジェル", d: "既存顧客に違和感が出ない範囲で段階刷新" },
          { n: "STEP 4", t: "既存在庫商品", d: "旧パッケージのまま販売し、無理に刷新しない" },
          { n: "STEP 5", t: "サイト全体", d: "新旧商品の混在を前提に、導線と表記を整理" },
        ].map((s, i) => (
          <Card
            key={s.n}
            tone={i === 0 ? "surface-2" : "surface"}
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 8, height: "100%" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-text-muted)" }}>
                  {s.n}
                </span>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 20 }}>{s.t}</p>
                <p style={{ margin: "auto 0 0", fontSize: 12, color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  {s.d}
                </p>
              </div>
            }
          />
        ))}
      </div>
    ),
  },

  /* ---------- 20 TRIPURE：横展開 3 案 ---------- */
  {
    id: "20-tripure-expand",
    eyebrow: "TRIPURE  ·  LINEUP EXPANSION",
    title: "TRIPURE：投資対象として横に広げる、3 案。",
    children: (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 4 }}>
        {[
          {
            label: "A 最小拡張",
            tone: "surface" as const,
            sub: "在庫・開発リスクを抑える",
            rows: [
              ["バランスセラム", "主力", "¥3,960 前後"],
              ["トライアル 7 包", "新規入口", "¥980〜1,480"],
              ["28 包定期", "継続導線", "初回 ¥1,980〜"],
              ["毛穴ケアセット", "セット販売", "¥4,980〜5,980"],
            ],
          },
          {
            label: "B 標準拡張",
            tone: "surface-2" as const,
            sub: "ブランドとして育てる",
            rows: [
              ["クレンジングジェル", "毛穴入口", "¥2,200〜2,800"],
              ["酵素 / 泡洗顔", "ざらつき", "¥2,200〜3,300"],
              ["バランスセラム", "中核", "¥3,960〜4,400"],
              ["ジェルクリーム", "仕上げ", "¥3,300〜4,400"],
              ["シートマスク", "SNS / ギフト", "¥1,200〜2,200"],
            ],
          },
          {
            label: "C 攻め拡張",
            tone: "surface-3" as const,
            sub: "TikTok Shop・SNS 投資を含む",
            rows: [
              ["3 日分スターター", "広告入口", "¥500〜980"],
              ["7 日分スターター", "初回体験", "¥980〜1,480"],
              ["28 包セラム", "主力", "¥3,960〜4,400"],
              ["朝用 / 夜用セラム", "ライン拡張", "各 ¥3,960〜"],
              ["毛穴集中キット", "AOV 向上", "¥6,600〜8,800"],
            ],
          },
        ].map((p) => (
          <Card
            key={p.label}
            tone={p.tone}
            body={
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p className="eyebrow" style={{ margin: 0 }}>{p.label}</p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-muted)" }}>{p.sub}</p>
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 6, fontSize: 12 }}>
                  <tbody>
                    {p.rows.map((r, i) => (
                      <tr key={i}>
                        <td style={{ padding: "4px 0", lineHeight: 1.5 }}>{r[0]}</td>
                        <td style={{ padding: "4px 0", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{r[1]}</td>
                        <td style={{ padding: "4px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />
        ))}
      </div>
    ),
  },

  /* ---------- 21 UPTIS：高単価出口設計 ---------- */
  {
    id: "21-uptis-exit",
    eyebrow: "UPTIS  ·  EXIT DESIGN",
    title: "UPTIS：単独獲得ではなく、SIMIUS 顧客への上位提案で動かす。",
    children: (
      <TwoCol
        ratio="1fr 1fr"
        left={
          <Card
            title="売り方"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>SIMIUS 定期便に「ハリ不足ケア」として同梱</li>
                <li>マイページ限定の会員価格</li>
                <li>SIMIUS ジェル + UPTIS 美容液のセット販売</li>
                <li>美容液 + 目もとシートの集中ケアセット</li>
                <li>期間限定セールではなく <mark>会員限定ケアセット</mark> として見せる</li>
              </ul>
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="価格設計の考え方"
            body={
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "6px 0", color: "var(--color-text-muted)", fontSize: 11, letterSpacing: "0.06em" }}>商品</th>
                    <th style={{ textAlign: "right", padding: "6px 0", color: "var(--color-text-muted)", fontSize: 11, letterSpacing: "0.06em" }}>通常</th>
                    <th style={{ textAlign: "left", padding: "6px 0 6px 16px", color: "var(--color-text-muted)", fontSize: 11, letterSpacing: "0.06em" }}>出口の見せ方</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: "6px 0" }}>美容液</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥6,600</td><td style={{ padding: "6px 0 6px 16px" }}>セットで実質 ¥4,980 相当に</td></tr>
                  <tr><td style={{ padding: "6px 0" }}>目もとシート</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥3,300</td><td style={{ padding: "6px 0 6px 16px" }}>+¥1,500〜2,000 で追加</td></tr>
                  <tr><td style={{ padding: "6px 0" }}>集中ケアセット</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>—</td><td style={{ padding: "6px 0 6px 16px" }}>¥6,600〜8,800 で構成</td></tr>
                </tbody>
              </table>
            }
          />
        }
      />
    ),
    footnote: "「高いものを安く売る」ではなく、「今のケアに足すと得」に見せる。",
  },

  /* ---------- 22 AWAI：感性商材として動かす ---------- */
  {
    id: "22-awai-exit",
    eyebrow: "AWAI  ·  EXIT DESIGN",
    title: "AWAI：化粧水棚に埋めず、香り・ギフト・季節で動かす。",
    children: (
      <TwoCol
        ratio="1fr 1fr"
        left={
          <Card
            title="売り方"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>香り別訴求：柑橘 = 朝 / 蜜花 = 夜 / 森林 = 仕事中</li>
                <li>季節訴求：梅雨・夏・乾燥シーズン・花粉</li>
                <li>2 本 / 3 本のギフトセット</li>
                <li>カート追加「あと 1 点」のおすすめ</li>
                <li>一定金額以上購入でノベルティ進呈</li>
              </ul>
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="価格設計"
            body={
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <tbody>
                  <tr><td style={{ padding: "6px 0" }}>単品</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥3,800 維持</td></tr>
                  <tr><td style={{ padding: "6px 0" }}>2 本セット</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥5,980〜6,600</td></tr>
                  <tr><td style={{ padding: "6px 0" }}>3 本セット</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥7,980〜8,800</td></tr>
                  <tr><td style={{ padding: "6px 0" }}>カート追加限定</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥2,480〜2,980</td></tr>
                  <tr><td style={{ padding: "6px 0" }}>ノベルティ</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥8,000+ 購入で 1 本</td></tr>
                </tbody>
              </table>
            }
          />
        }
      />
    ),
    footnote: "公式での恒常的な値引きはブランド価値を損なう。セット・ギフト・購入特典で動かす。",
  },

  /* ---------- 23 STYLE HOMME ---------- */
  {
    id: "23-stylehomme-exit",
    eyebrow: "STYLE HOMME  ·  EXIT DESIGN",
    title: "STYLE HOMME：女性向け EC に混ぜず、メンズの売り場で売り切る。",
    children: (
      <TwoCol
        ratio="1fr 1fr"
        left={
          <Card
            title="売り場の分け方"
            body={
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                <li>Amazon / Rakuten：実用・検索対策・レビュー重視</li>
                <li>公式 EC：SIMIUS 男性版ではなく、男性用ページを別で作る</li>
                <li>ギフト：父の日・夫婦購入・パートナー向け</li>
                <li>セット：洗顔 + オールインワン、2 本まとめ買い</li>
              </ul>
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="価格設計"
            body={
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <tbody>
                  <tr><td style={{ padding: "6px 0" }}>単品</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥2,980〜3,980</td></tr>
                  <tr><td style={{ padding: "6px 0" }}>2 本セット</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥5,500〜6,600</td></tr>
                  <tr><td style={{ padding: "6px 0" }}>初回限定</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥1,980〜2,480</td></tr>
                  <tr><td style={{ padding: "6px 0" }}>父の日 / ギフト</td><td style={{ padding: "6px 0", textAlign: "right", fontFamily: "var(--font-mono)" }}>¥3,980〜5,500</td></tr>
                </tbody>
              </table>
            }
          />
        }
      />
    ),
    footnote: "美意識の延長ではなく、清潔感・印象管理・実用で語る。",
  },

  /* ---------- 24 EC 導線整理（表 / 裏） ---------- */
  {
    id: "24-ec-routes",
    eyebrow: "EC NAVIGATION  ·  FRONT / BACK",
    title: "EC の導線は、表（並び）と裏（仕掛け）で分ける。",
    children: (
      <TwoCol
        left={
          <Card
            title="表の導線（並びの優先度）"
            body={
              <Matrix
                head={["表示", "ブランド", "役割"]}
                rows={[
                  [{ tag: "dark", text: "メイン" }, "SIMIUS", "リブランディング中核"],
                  [{ tag: "dark", text: "メイン" }, "TRIPURE", "成長投資"],
                  [{ tag: "default", text: "サブ" }, "UPTIS", "既存向け集中ケア"],
                  [{ tag: "default", text: "サブ" }, "AWAI", "香り・ギフト・季節"],
                  [{ tag: "dark", text: "別導線" }, "STYLE HOMME", "メンズ実用"],
                ]}
                fontSize={12}
              />
            }
          />
        }
        right={
          <Card
            tone="surface-2"
            title="裏の導線（買わせ方の仕掛け）"
            body={
              <Matrix
                head={["導線", "ブランド"]}
                rows={[
                  ["定期購入導線", "SIMIUS / TRIPURE"],
                  ["会員限定導線", "UPTIS"],
                  ["カート追加導線", "AWAI"],
                  ["モール / 広告導線", "STYLE HOMME"],
                  ["セット販売導線", "UPTIS / AWAI"],
                ]}
                fontSize={12}
              />
            }
          />
        }
      />
    ),
  },

  /* ---------- 25 実行順 3ヶ月 / 6ヶ月 ---------- */
  {
    id: "25-roadmap",
    eyebrow: "ROADMAP",
    title: "まず 3 ヶ月、次の 6 ヶ月でやること。",
    children: (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, height: "100%" }}>
        <Card
          title="3 ヶ月"
          body={
            <Matrix
              head={["月", "やること"]}
              rows={[
                ["1 ヶ月目", "SIMIUS の新ブランド定義 / TRIPURE 拡張方針 / 在庫一覧の棚卸し"],
                ["2 ヶ月目", "SIMIUS 新商品用 VI・LP 設計 / TRIPURE スターター・セット設計 / UPTIS・AWAI・STYLE HOMME 販売企画"],
                ["3 ヶ月目", "SIMIUS 新商品ページ公開 / TRIPURE 広告テスト / 在庫処理キャンペーン開始"],
              ]}
              fontSize={12}
            />
          }
        />
        <Card
          tone="surface-2"
          title="6 ヶ月"
          body={
            <Matrix
              head={["項目", "到達点"]}
              rows={[
                ["SIMIUS", "新商品・追加在庫から順次新 VI へ"],
                ["TRIPURE", "2〜3 SKU 追加、スターター導線確立"],
                ["UPTIS", "会員向けセットで在庫を適正化"],
                ["AWAI", "ギフト・季節セットで在庫を動かす"],
                ["STYLE HOMME", "モール中心で男性向け LP をテスト"],
                ["EC", "ブランド別 LP とカート導線を整理"],
              ]}
              fontSize={12}
            />
          }
        />
      </div>
    ),
  },

  /* ---------- 26 推奨案サマリー + チーム伝達文 ---------- */
  {
    id: "26-summary",
    variant: "cover",
    eyebrow: "RECOMMENDATION  ·  SUMMARY",
    title: "二本柱 ＋ 三つの出口。",
    lead: [
      "二本柱：SIMIUS = リブランディングして再生 / TRIPURE = 横展開して育成。",
      "三つの出口：UPTIS = 既存顧客向け高単価セット / AWAI = 香り・ギフト・季節 / STYLE HOMME = 男性向け実用 LP・モール。",
    ],
    children: (
      <div style={{ marginTop: 56, background: "rgba(243,241,238,.08)", borderRadius: 16, padding: 28 }}>
        <p
          className="eyebrow"
          style={{ color: "rgba(243,241,238,.55)", margin: "0 0 12px" }}
        >
          TEAM MESSAGE
        </p>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.85, color: "rgba(243,241,238,.92)" }}>
          今回は、5 ブランド全部を均等に育てるプロジェクトではない。
          SIMIUS は順次リブランディングして再生する。TRIPURE は横展開して、次の成長ブランドにする。
          UPTIS・AWAI・STYLE HOMME は、それぞれ適切な対象と価格に合わせ、ブランドを毀損しない形で在庫を動かす。
          つまり、<span style={{ borderBottom: "1.5px solid rgba(243,241,238,.9)", paddingBottom: 2, color: "var(--color-text-inverse)" }}>投資対象と出口設計対象を分けるプロジェクト</span>である。
        </p>
      </div>
    ),
    footnote: "INSTYLE GROUP / Creative Strategy",
  },
];
