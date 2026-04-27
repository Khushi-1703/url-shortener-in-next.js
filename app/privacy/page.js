import Link from "next/link";

export default function Privacy() {
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
            Privacy Policy
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Your privacy matters.
          </h1>

          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            SnipURL is built to keep things simple, clean, and respectful.
            Here’s what we collect, what we don’t, and how your data is handled.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 rounded-3xl border border-white/30 bg-white/40 p-6 md:p-10 backdrop-blur-xl shadow-2xl shadow-purple-200/20 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              1. Information We Collect
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              SnipURL collects only the information necessary to generate and
              manage shortened URLs. This may include the original destination
              URL and the custom alias you choose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              2. What We Don’t Collect
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We do not require account creation, and we do not ask for personal
              details just to shorten a link. No unnecessary data. No clutter.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              3. Tracking & Analytics
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              SnipURL does not track your personal browsing activity through the
              links you shorten. Basic anonymous analytics may be used only to
              maintain service performance and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              4. Data Security
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We use reasonable technical measures to protect stored links and
              service data. While no system is ever perfect, we aim to keep your
              experience secure and dependable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              5. Third-Party Services
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              SnipURL may rely on secure third-party infrastructure providers
              (such as hosting or database services) to operate reliably. These
              services are chosen carefully to support stability and security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              6. Policy Updates
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              This privacy policy may be updated over time to reflect product
              improvements or legal requirements. Continued use of SnipURL means
              you accept the latest version of this policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you have questions about this policy, feel free to reach out
              via the contact page.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-xl bg-linear-to-r from-purple-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
