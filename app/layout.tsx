import type { Metadata } from "next";
import { Noto_Sans_JP, Caveat } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "心結HOME | Trust Life, True Life.",
  description:
    "心結HOMEは、お客様の理想の住まいを実現するリフォーム・リノベーション会社です。信頼できる場所づくりをお手伝いします。",
  keywords: ["リフォーム", "リノベーション", "心結HOME", "住宅", "インテリア"],
  openGraph: {
    title: "心結HOME | Trust Life, True Life.",
    description:
      "心結HOMEは、お客様の理想の住まいを実現するリフォーム・リノベーション会社です。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${caveat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
