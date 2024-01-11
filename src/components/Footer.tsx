import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-5 w-full">
      <div className="flex justify-between items-center h-[76px]">
        <ul className="flex grow gap-10">
          <li>
            <Link href="#" className="text-xl">
              Terms
            </Link>
          </li>
          <li>
            <Link href="#" className="text-xl">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-xl">
              Help
            </Link>
          </li>
          <li>
            <Link href="#" className="text-xl">
              Blog
            </Link>
          </li>
        </ul>

        <div>
          <span className="text-muted-foreground">
            © 2024 Survey Apoli, LLC
          </span>
        </div>
      </div>
    </footer>
  );
}
