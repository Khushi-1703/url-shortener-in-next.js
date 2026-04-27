"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder submit logic
    console.log(form);

    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-100 via-fuchsia-50 to-purple-200 px-4 py-10 md:px-6">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl"></div>

      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start py-10 md:py-16">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full border border-purple-300 bg-white/50 px-4 py-1 text-sm font-medium text-purple-700 backdrop-blur-md shadow-sm">
            Contact SnipURL
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Let’s talk.
          </h1>

          <p className="mt-5 text-lg text-gray-700 leading-relaxed max-w-xl">
            Have a question, suggestion, feedback, or just want to say hi? Drop
            a message and we’ll get back to you soon.
          </p>

          <div className="mt-10 space-y-5 text-gray-700">
            <div className="rounded-2xl border border-white/30 bg-white/40 p-5 backdrop-blur-xl shadow-lg shadow-purple-200/20">
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-sm text-gray-600 mt-1">khushigupta1703@gmail.com</p>
            </div>

            <div className="rounded-2xl border border-white/30 bg-white/40 p-5 backdrop-blur-xl shadow-lg shadow-purple-200/20">
              <h3 className="font-semibold text-gray-900">Support</h3>
              <p className="text-sm text-gray-600 mt-1">
                Fast replies. No bots. No nonsense.
              </p>
            </div>

            <div className="rounded-2xl border border-white/30 bg-white/40 p-5 backdrop-blur-xl shadow-lg shadow-purple-200/20">
              <h3 className="font-semibold text-gray-900">GitHub</h3>
              <Link
                href="https://github.com/Khushi-1703/url-shortener-in-next.js/tree/main"
                className="text-sm text-purple-700 mt-1 inline-block hover:underline"
              >
                View project repository
              </Link>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="rounded-3xl border border-white/30 bg-white/40 p-6 md:p-8 backdrop-blur-xl shadow-2xl shadow-purple-300/20">
          <h2 className="text-2xl font-bold text-gray-900">Send a message</h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill out the form and we’ll reach out soon.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-300"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-300"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what’s on your mind..."
                className="w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-300 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="rounded-2xl bg-linear-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/50 cursor-pointer"
            >
              Send Message
            </button>

            {submitted && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Message sent successfully ✨
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
