import type { Metadata } from 'next';
import '@/globals.css';
import Navbar from '@/components/Navbar';
import ThemeChange from '@/components/ThemeChange';
import ThemeProvider from '@/components/ThemeProvider';

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
    <html lang='ja' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ThemeChange />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
