import type { Metadata } from 'next';
import 'normalize.css';
import './globals.css';
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { interTight } from '@/utils/fonts';
import Popup from '@/components/common/Popup/Popup';
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
      <body className={interTight.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Popup />
      </body>
    </html>
  );
};

export default RootLayout;
