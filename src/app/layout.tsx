import type { Metadata } from 'next';
import '@/globals.css';
import Link from 'next/link';

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
      <body>
        <div className='flex justify-center spece-4 p-10'>
          <Link href='/'>home</Link>
          <Link href='/about'>about</Link>
          <Link href='/blog'>blog</Link>
          <Link href='/contact'>contact</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
