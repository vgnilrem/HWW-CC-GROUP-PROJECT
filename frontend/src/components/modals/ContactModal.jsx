import { useState, useRef, useEffect } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle, X } from "lucide-react";
import { createPortal } from 'react-dom';
import emailjs from "@emailjs/browser";

export const ContactModal = ({ isScrolled, forceOpen, onForceClose }) => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sync with forceOpen from SearchSidebar
  useEffect(() => {
    if (forceOpen) setOpen(true);
  }, [forceOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Sends notification to admin@healthwealthcommunity.org
      await emailjs.sendForm(
        "YOUR_HWW_SERVICE_ID",
        "YOUR_HWW_NOTIFICATION_TEMPLATE_ID",
        formRef.current,
        "YOUR_HWW_PUBLIC_KEY"
      );

      // Sends confirmation back to the person who contacted you
      await emailjs.send(
        "YOUR_HWW_SERVICE_ID",
        "YOUR_HWW_CONFIRMATION_TEMPLATE_ID",
        {
          name: formRef.current.name.value,
          email: formRef.current.email.value,
          message: formRef.current.message.value,
        },
        "YOUR_HWW_PUBLIC_KEY"
      );

      setSubmitted(true);
      formRef.current.reset();
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (onForceClose) onForceClose();
    setTimeout(() => {
      setSubmitted(false);
      setError("");
    }, 300);
  };

  return (
    <>
      {/* Navbar Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className={`flex items-center gap-2 font-semibold text-xl md:text-2xl px-3 py-1 rounded-md border-2 border-transparent transition-all duration-300 cursor-pointer
          ${isScrolled ? "text-[#325e43]" : "text-[#c7a655]"}
          hover:border-[#c7a655]`}
      >
        <Mail className="w-5 h-5" />
        Contact Us
      </button>

      {/* Modal — portaled to document.body so it covers the full page */}
      {open && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a3d2b]/60 backdrop-blur-md overflow-y-auto"
          onClick={handleClose}
        >
          {/* Modal Panel */}
          <div
            className="relative w-full max-w-md mx-4 my-auto p-8 bg-[#325e43] border-2 border-[#3a9460] rounded-sm text-gray-300 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex justify-center">
              <div className="bg-black/30 rounded-xl p-3 w-40 h-40 flex items-center justify-center">
                <img src="/testinghwwbw.PNG" alt="HealthWealth logo" className="h-32 w-auto object-contain" />
              </div>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                {error}
              </div>
            )}

            {/* Success State */}
            {submitted ? (
              <div className="flex flex-col items-center space-y-4 py-4">
                <CheckCircle className="text-[#C9A84C] w-14 h-14" />
                <p className="text-[#C9A84C] font-medium">Message sent!</p>
                <p className="text-gray-200 text-sm text-center">
                  Thanks for reaching out. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#C9A84C] hover:underline text-sm cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" autoComplete="on">
                <div className="relative">
                  <User className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full pl-8 pr-3 py-3 bg-transparent border-b border-gray-300/50 focus:border-[#C9A84C] focus:outline-none transition-colors placeholder-gray-300"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    autoComplete="email"
                    className="w-full pl-8 pr-3 py-3 bg-transparent border-b border-gray-300/50 focus:border-[#C9A84C] focus:outline-none transition-colors placeholder-gray-300"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-2 top-4 text-gray-300 w-4 h-4" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full pl-8 pr-3 py-3 bg-transparent border-b border-gray-300/50 focus:border-[#C9A84C] focus:outline-none transition-colors resize-none placeholder-gray-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 flex items-center justify-center gap-2 rounded border-2 border-[#C9A84C]/50 hover:border-[#C9A84C] hover:bg-[#C9A84C]/20 hover:text-white hover:font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

