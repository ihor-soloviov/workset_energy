import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Popup from '@/components/common/Popup/Popup';

import { interTight } from '@/utils/fonts';
import type { Metadata } from 'next';
import './globals.css';
import 'normalize.css';
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
