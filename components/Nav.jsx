import React from "react";
import Link from "next/link";
function Nav() {
  return (
    <header>
      <div>LOGO</div>
      <ul>
        <li>
          <Link href="/"></Link>
        </li>
        <li>
          <Link href="/"></Link>
        </li>
        <li>
          <Link href="/"></Link>
        </li>
        <li>
          <Link href="/"></Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
