import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Popup from '@/components/common/Popup/Popup';
import { GoogleTagManager } from '@next/third-parties/google';

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
      <head>
        <script
          id="usercentrics-cmp"
          src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
          data-settings-id="2X8W5o7KVs-vfO"
          async
        ></script>
      </head>
      <body className={interTight.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Popup />
      </body>
      <GoogleTagManager gtmId="GTM-TLM7JLKX" />
    </html>
  );
};

export default RootLayout;
