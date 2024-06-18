import React, { Suspense } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Popup from '@/components/common/Popup/Popup';
import { GoogleTagManager } from '@next/third-parties/google';
import { interTight } from '@/utils/fonts';
import type { Metadata } from 'next';
import './globals.css';
import 'normalize.css';
import Loading from './loading';
import Coockies from '@/utils/coockies';

export const metadata: Metadata = {
  title: 'WorkSET Energy GmbH',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <Coockies />
      </head>
      <body className={interTight.className}>
        <Header />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
        <Footer />
        <Popup />
      </body>
      <GoogleTagManager gtmId="GTM-TLM7JLKX" />
    </html>
  );
};

export default RootLayout;
