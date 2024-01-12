import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex justify-between items-center gap-8">
        <li>
          <Link href="/">
            <Image
              src="/5.png"
              alt="Logo Survey Apoli"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/surveys">Surveys</Link>
        </li>
        <li>
          <Link href="/reports">Reports</Link>
        </li>
        <li>
          <Link href="/branding">Branding</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/integrations">Integrations</Link>
        </li>
        <li>
          <Link href="/docs">Documentation</Link>
        </li>
      </ul>
    </nav>
  );
}
