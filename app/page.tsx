import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="pt-10 sm:pt-16 pl-10">
          <p className="text-2xl">Get started just <Link href={"signin"} className="text-blue-500 underline font-semibold">Sign in</Link></p>
      </div>
    </div>
  );
}
