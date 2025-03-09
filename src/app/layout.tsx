import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'けーちー包装紙材ブログ',
  description:
    'けーちーの包装資材ブログです。商品情報、商品や仕様の解説、市場環境の変化などを発信します。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
