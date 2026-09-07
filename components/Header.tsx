import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="isolate relative flex overflow-hidden h-20 items-center justify-between bg-main px-4 sm:px-6">
      <Image
        src="bg-header-desktop.svg"
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <Link href="/">
        <Image src="account.svg" alt="Logo" width={45} height={20} priority />
      </Link>

      <nav className="flex gap-4 text-lg font-semibold text-zinc-300">
        <Link href="/" className="hover:text-zinc-950">
          Home
        </Link>
        <Link href="jobs" className="hover:text-zinc-950">
          Jobs
        </Link>
        <Link href="profile" className="hover:text-zinc-950">
          Profile
        </Link>
      </nav>
    </header>
  );
}
