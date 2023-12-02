import Link from "next/link";
import React from "react";

function aboutPage() {
  return (
    <ul className="bg-black w-100 h-6">
      <li>
        <Link href="/aboutus/1">name:Yash</Link>
      </li>
      <li>
        <Link href="/aboutus/2">name:Vaibhav</Link>
      </li>
      <li>
        <Link href="/aboutus/3">name:Suresh</Link>
      </li>
    </ul>
  );
}

export default aboutPage;
