export type SlideVariant = "cover" | "chapter" | "default";

export type SlideData = {
  id: string;
  /** 大見出しの上に出すラベル */
  eyebrow?: string;
  /** 大見出し */
  title: string;
  /** 見出し下のリード文 */
  lead?: string | string[];
  /** スライド固有の中身 */
  children?: React.ReactNode;
  /** スライドの見え方 */
  variant?: SlideVariant;
  /** 章扉などで小書き */
  footnote?: string;
};
