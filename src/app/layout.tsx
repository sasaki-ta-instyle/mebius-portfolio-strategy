import type { Metadata } from "next";
import "./globals.css";

const TITLE = "メビウス製薬 ブランドポートフォリオ戦略";
const DESCRIPTION =
  "SIMIUS を親にしない。MEBIUS を編集母体に、5 ブランドを役割で売る。— 戦略提案資料";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "INSTYLE GROUP",
    locale: "ja_JP",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/gen-interface-jp@0.5.0/all.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
