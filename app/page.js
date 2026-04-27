"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-100 via-fuchsia-50 to-purple-200">
      {/* Background Glow Blobs */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[90vh]">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-7 text-center md:text-left">
          <span className="inline-block w-fit mx-auto md:mx-0 rounded-full border border-purple-300 bg-white/50 px-4 py-1 text-sm font-medium text-purple-700 backdrop-blur-md shadow-sm">
            🚀 Fast. Clean. No nonsense.
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Shorten your links.{" "}
            <span className="bg-linear-to-r from-purple-700 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
              Amplify your reach.
            </span>
          </h1>

          <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
            SnipURL makes long messy links clean, elegant, and shareable in seconds.
            No clutter, no tracking drama, just fast and beautiful URL shortening.
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            {/* Primary CTA */}
            <Link
              href="/shorten"
              className="rounded-2xl bg-linear-to-r from-purple-600 to-fuchsia-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              Try Now
            </Link>

            {/* Secondary CTA */}
            <Link
              href="https://github.com/Khushi-1703"
              className="rounded-2xl border border-white/40 bg-white/50 px-7 py-3 font-semibold text-purple-700 backdrop-blur-md transition-all duration-300 hover:bg-white/70 hover:scale-105"
            >
              GitHub
            </Link>
          </div>

          {/* Mini Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4 text-sm text-gray-700">
            <div>
              <span className="block text-2xl font-bold text-purple-700">10K+</span>
              Links Shortened
            </div>
            <div>
              <span className="block text-2xl font-bold text-purple-700">99.9%</span>
              Uptime
            </div>
            <div>
              <span className="block text-2xl font-bold text-purple-700">0 Ads</span>
              Pure Experience
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute h-[85%] w-[85%] rounded-[3rem] bg-white/30 blur-2xl"></div>

          <div className="relative w-full max-w-xl h-80 md:h-112.5 rounded-4xl border border-white/30 bg-white/40 p-4 backdrop-blur-xl shadow-2xl shadow-purple-300/30">
            <Image
              src="/vector.jpg"
              alt="Team working illustration"
              fill
              className="object-contain rounded-2xl mix-blend-darken p-4"
            />
          </div>
        </div>
      </section>
    </main>
  );
}