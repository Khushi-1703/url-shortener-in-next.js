import Link from "next/link";

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-100 via-fuchsia-50 to-purple-200">
      {/* Background Glow Blobs */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl"></div>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full border border-purple-300 bg-white/50 px-4 py-1 text-sm font-medium text-purple-700 backdrop-blur-md shadow-sm">
            About SnipURL
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Short links, big impact.
          </h1>

          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            SnipURL is a modern URL shortener built for speed, simplicity, and
            clean sharing. No clutter, no unnecessary friction — just elegant
            links that do the job beautifully.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/30 bg-white/40 p-6 backdrop-blur-xl shadow-xl shadow-purple-200/30">
            <h3 className="text-xl font-bold text-gray-900">⚡ Fast</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Paste, shorten, and share in seconds. SnipURL is designed to keep
              things instant and frictionless.
            </p>
          </div>

          <div className="rounded-3xl border border-white/30 bg-white/40 p-6 backdrop-blur-xl shadow-xl shadow-purple-200/30">
            <h3 className="text-xl font-bold text-gray-900">🔒 Clean</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              No spam, no clutter, no unnecessary noise. Just simple short links
              with a clean user experience.
            </p>
          </div>

          <div className="rounded-3xl border border-white/30 bg-white/40 p-6 backdrop-blur-xl shadow-xl shadow-purple-200/30">
            <h3 className="text-xl font-bold text-gray-900">✨ Modern</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Built with a modern UI, responsive design, and smooth interactions
              that make shortening links feel effortless.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl border border-white/30 bg-white/40 p-8 backdrop-blur-xl shadow-xl shadow-purple-200/30">
            <h2 className="text-3xl font-bold text-gray-900">Why SnipURL?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Most URL shorteners are either bloated, cluttered, or loaded with
              distractions. SnipURL was built with a simple idea: shortening
              links should feel clean, fast, and painless.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Whether you’re sharing projects, portfolios, socials, or anything
              else — SnipURL helps make your links shorter, neater, and easier
              to share.
            </p>
          </div>

          <div className="rounded-3xl border border-white/30 bg-linear-to-br from-purple-600 to-fuchsia-600 p-8 text-white shadow-2xl shadow-purple-300/30">
            <h2 className="text-3xl font-bold">Built for modern sharing</h2>
            <p className="mt-4 text-purple-100 leading-relaxed">
              SnipURL is crafted for creators, developers, students, and anyone
              who wants cleaner links without the mess.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <span className="block text-3xl font-bold">10K+</span>
                <span className="text-purple-100 text-sm">Links shortened</span>
              </div>
              <div>
                <span className="block text-3xl font-bold">99.9%</span>
                <span className="text-purple-100 text-sm">Uptime</span>
              </div>
              <div>
                <span className="block text-3xl font-bold">0 Ads</span>
                <span className="text-purple-100 text-sm">Pure experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to shorten smarter?
          </h2>
          <p className="mt-3 text-gray-700">
            Start using SnipURL and make your links cleaner in seconds.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="/shorten"
              className="rounded-2xl bg-linear-to-r from-purple-600 to-fuchsia-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              Try Now
            </Link>

            <Link
              href="https://github.com/Khushi-1703"
              className="rounded-2xl border border-white/40 bg-white/50 px-7 py-3 font-semibold text-purple-700 backdrop-blur-md transition-all duration-300 hover:bg-white/70 hover:scale-105"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
