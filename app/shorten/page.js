"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const generate = async () => {
    setMessage("");

    if (!url || !shorturl) {
      setMessage("Please fill in both fields.");
      return;
    }

    try {
      new URL(url);
    } catch {
      setMessage("Please enter a valid URL.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          shorturl,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message || "Something went wrong.");
        setLoading(false);
        return;
      }

      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
      setMessage("Short URL generated successfully ✨");
      setUrl("");
      setShorturl("");
    } catch (error) {
      setMessage("Failed to generate short URL. Try again.");
    }

    setLoading(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      setMessage("Copied to clipboard ✨");
    } catch {
      setMessage("Failed to copy link.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-100 via-fuchsia-50 to-purple-200 px-4 py-10 md:px-6">
      {/* Glow Background */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto mt-8 w-full max-w-2xl rounded-3xl border border-white/30 bg-white/40 p-6 md:p-10 backdrop-blur-xl shadow-2xl shadow-purple-300/20">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Generate your short URL
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Paste your long link, pick a custom alias, and get a clean short URL
            instantly.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Destination URL
            </label>
            <input
              type="text"
              value={url}
              placeholder="https://example.com/very-long-link"
              onChange={(e) => setUrl(e.target.value)}
              className="w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Custom Alias
            </label>
            <input
              type="text"
              value={shorturl}
              placeholder="your-custom-link"
              onChange={(e) => setShorturl(e.target.value)}
              className="w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={generate}
            disabled={loading}
            className="mt-2 rounded-2xl bg-linear-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/50 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
          >
            {loading ? "Generating..." : "Generate Short URL"}
          </button>

          {/* Status Message */}
          {message && (
            <div className="rounded-xl bg-white/60 px-4 py-3 text-sm font-medium text-gray-700 border border-white/30">
              {message}
            </div>
          )}

          {/* Result */}
          {generated && (
            <div className="mt-3 rounded-2xl border border-green-200 bg-green-50 p-4 shadow-sm">
              <p className="text-sm font-semibold text-green-700 mb-2">
                Your short link is ready 🎉
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 border border-green-100">
                <Link
                  href={generated}
                  target="_blank"
                  className="text-purple-700 font-medium break-all hover:underline"
                >
                  {generated}
                </Link>

                <button
                  onClick={copyToClipboard}
                  className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-500 cursor-pointer"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shorten;
