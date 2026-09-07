import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="isolate relative flex justify-between h-14 items-center border-t border-black bg-main/70 px-4 text-sm font-semibold text-zinc-300 sm:px-6">
      <Image
        src="bg-header-desktop.svg"
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <h2>Claudiu Bordea</h2>
      <ul className="flex gap-4">
        <li>claudiubordea5@gmail.com</li>
        <li className="hover:text-zinc-950">
          <Link href="https://www.linkedin.com/in/claudiu-bordea/">
            LinkedIn
          </Link>
        </li>
      </ul>
    </footer>
  );
}
