import type { Metadata } from 'next';
import 'normalize.css';
import './globals.css';
import React, { Suspense } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { interTight } from '@/utils/fonts';
import Loading from './loading';
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

        <main>
          <Suspense fallback={<Loading />}>{children} </Suspense>
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
