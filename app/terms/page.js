import Link from "next/link";

export default function Terms() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-100 via-fuchsia-50 to-purple-200">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl"></div>

      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full border border-purple-300 bg-white/50 px-4 py-1 text-sm font-medium text-purple-700 backdrop-blur-md shadow-sm">
            Terms of Service
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Terms, but readable.
          </h1>

          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            By using SnipURL, you agree to use the service responsibly and
            respectfully. These terms keep things fair, safe, and simple for
            everyone.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 rounded-3xl border border-white/30 bg-white/40 p-6 md:p-10 backdrop-blur-xl shadow-2xl shadow-purple-200/20 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              1. Use of Service
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              SnipURL is provided for shortening and sharing links in a clean
              and efficient way. You agree not to misuse the platform or use it
              for harmful, illegal, or deceptive purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              2. Prohibited Use
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              You may not use SnipURL to distribute malicious content, spam,
              phishing links, misleading redirects, or anything that could harm
              users, systems, or networks.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              3. Link Responsibility
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              You are responsible for the links you create and share using
              SnipURL. Make sure the content behind your shortened links is
              safe, legal, and appropriate.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              4. Service Availability
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We aim to keep SnipURL fast and reliable, but uptime is not
              guaranteed. The service may be updated, changed, or temporarily
              unavailable as improvements are made.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              5. Abuse & Removal
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              SnipURL reserves the right to disable or remove shortened links
              that violate these terms, abuse the service, or pose a risk to
              users or infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              6. Limitation of Liability
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              SnipURL is provided as-is without guarantees of uninterrupted
              service. We are not liable for damages, losses, or issues arising
              from use of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              7. Changes to Terms
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              These terms may be updated over time as the platform evolves.
              Continued use of SnipURL means you accept the latest version of
              these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">8. Questions?</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you have any questions about these terms, feel free to reach
              out.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-xl bg-linear-to-r from-purple-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
