import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex bg-black justify-center items-center text-white">
      <div className="w-full max-w-[800px] mx-auto">
        <h1 className="text-5xl mb-4">A really solid journal App</h1>
        <p className="text-2xl text-white/60 mb-4">
          This journal will track your mood through out your life. All you have
          to do is be consistent
        </p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
