import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function JoinPage() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.sendForm(
        "YOUR_HWW_SERVICE_ID",
        "YOUR_HWW_JOIN_TEMPLATE_ID",
        formRef.current,
        "YOUR_HWW_PUBLIC_KEY"
      );

      setSubmitted(true);
      formRef.current.reset();
    } catch (err) {
      console.error("Error sending:", err);
      setError("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f9f5ee] flex flex-col items-center justify-center px-6 py-24 pt-48">
      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-sm p-10">

        <h1 className="text-3xl font-bold text-[#325e43] mb-2 text-center">Join Us</h1>
        <p className="text-gray-500 text-center mb-8 leading-relaxed">
          Interested in getting involved with Health Wealth Wellness & Community Care?
          Sign up below and we'll reach out to you soon.
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm mb-4">
            {error}
          </div>
        )}

        {submitted ? (
          <div className="flex flex-col items-center space-y-4 py-6 text-center">
            <span className="text-5xl">🌱</span>
            <p className="text-[#325e43] font-semibold text-lg">You're in!</p>
            <p className="text-gray-500 text-sm">
              Thanks for your interest. We'll be in touch soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-[#325e43] hover:underline text-sm cursor-pointer"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#325e43] transition-colors placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#325e43] transition-colors placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#325e43] transition-colors placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">How would you like to get involved?</label>
              <select
                name="interest"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#325e43] transition-colors text-gray-600"
              >
                <option value="">Select an option</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Donate">Donate</option>
                <option value="Partner">Partner / Organization</option>
                <option value="Receive Services">Receive Services</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Anything else you'd like us to know?</label>
              <textarea
                name="message"
                placeholder="Optional message..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#325e43] transition-colors resize-none placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#325e43] text-white font-semibold rounded-lg hover:bg-[#264a34] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Interest"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}