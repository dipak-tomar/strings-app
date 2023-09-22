import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 items-center rounded-lg">
        <div className="my-4">
          <h1>strings</h1>
        </div>
        <div>
          <Link
            className="bg-slate-900 p-3 rounded-lg my-4 block"
            href="/signin"
          >
            Sign In
          </Link>
        </div>
        <div>
          <Link
            href="/signup"
            className="bg-slate-900 p-3 rounded-lg my-4 block"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
