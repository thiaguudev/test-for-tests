import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="text-7xl text-center">
        It looks like you are lost in space
      </h2>
      <Image src="/amico.png" alt="" width={480} height={480} />
      <Link
        href="/dashboard"
        className="bg-green-500 text-lg p-3 rounded-xl font-bold text-white hover:bg-green-600"
      >
        Return to home
      </Link>
    </div>
  );
}
