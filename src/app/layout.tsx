import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import 'normalize.css';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const inter = Inter_Tight({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WorkSET Energy',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
