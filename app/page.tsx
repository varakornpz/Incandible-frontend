import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col gap-y-6">
        <div>
          <Link className="bg-blue-500 text-xl rounded-xl px-2 py-1 font-semibold" href={"/signin"}>Sign in</Link>
        </div>
        <div>
            <Link href={"https://youtu.be/aZUXx6_GCC0?si=4MZW8TBxpfGJ63Cw"} className="bg-blue-500 w-fit h-fit px-2 py-1 rounded-md">Can you test this button</Link>
        
        </div>
      </div>
    </div>
  );
}
