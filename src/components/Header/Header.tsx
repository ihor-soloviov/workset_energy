import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <Link href="/">PV-System</Link>
      <Link href="/stormspeicher">Stormspeicher</Link>
      <Link href="/wallbox">Wallbox</Link>
      <Link href="/karrier">Karrier</Link>
      <Link href="/uberuns">Über uns</Link>
    </header>
  );
};

export default Header;
