import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-purple-950 text-purple-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-white">SnipURL</h2>
            <p className="text-sm text-purple-200 max-w-sm leading-relaxed">
              Clean, fast, and beautiful URL shortening for modern sharing. No
              clutter, no nonsense — just shorter smarter links.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-purple-200">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/shorten"
                  className="hover:text-white transition-colors duration-300"
                >
                  Shorten URL
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Started</h3>
            <p className="text-sm text-purple-200 mb-4">
              Start shortening links in seconds with SnipURL.
            </p>
            <Link
              href="/shorten"
              className="inline-block rounded-xl bg-linear-to-r from-purple-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              Try Now
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-sm text-purple-300">
          <p>© {new Date().getFullYear()} SnipURL. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="https://github.com/Khushi-1703"
              className="hover:text-white transition-colors duration-300"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
