import React from "react";
import Link from "next/link";

export default function People() {
  return (
    <ul className="text-black text-base font-extralight uppercase">
                <li>
                    <Link href="/people1" className="hover:bg-emerald-700 hover:text-white px-4 pb-2 pt-3">Version 1</Link>
                </li>
                <li>
                    <Link href="/people2" className="hover:bg-emerald-700 hover:text-white px-4 pb-2 pt-3">Version 2</Link>
                </li>
            </ul>
  );
}