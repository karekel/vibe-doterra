import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My doTERRA AI診断",
  description: "あなたの性格と体質を診断し、最適なオイルを提案します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-slate-100 antialiased`}>
        {/* Mobile-centric container: restricted width to simulate smartphone vibe on desktop */}
        <div className="max-w-[414px] mx-auto min-h-screen relative overflow-x-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
