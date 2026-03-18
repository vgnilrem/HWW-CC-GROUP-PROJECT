import { useState, useRef } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", show: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = formRef.current.name.value;
    const email = formRef.current.email.value;
    const message = formRef.current.message.value;

    try {
      // TODO: Wire up your backend or EmailJS here.
      // Example with EmailJS:
      // await emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY");

      // Simulated success for now
      await new Promise((res) => setTimeout(res, 1000));

      setSubmitted(true);
      formRef.current.reset();
    } catch (err) {
      console.error("Error sending message:", err);
      setAlert({ show: true, message: "Oops! Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full mt-20 text-gray-300 flex min-h-screen">
      {/* Left Column */}
      <div className="w-[55%] min-w-[400px] px-8 py-20">
        <h2 className="text-4xl mt-2 mb-6 font-semibold">
          Get in touch with <br />
          <span className="text-green-600">SceneIt</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      {/* Right Column */}
      <div className="w-[45%] min-w-[300px] px-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6 p-10 border-2 border-gray-800/30 rounded-sm text-center">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex justify-center items-center p-5 w-20 h-20 rounded-xl shadow-md shadow-green-600 bg-green-600 border-4 border-gray-200">
              <img src="/sceneit.png" className="text-gray-900/50 text-3xl" alt="SceneIt logo" />
            </div>

            <h3 className="font-semibold text-2xl">Contact Us</h3>

            {alert.show && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full text-left">
                <span className="block sm:inline">{alert.message}</span>
                <button
                  onClick={() => setAlert({ message: "", show: false })}
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                >
                  <span className="sr-only">Close</span>
                  <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Success State */}
          {submitted ? (
            <div className="flex flex-col items-center space-y-4 py-6">
              <CheckCircle className="text-green-500 w-16 h-16" />
              <p className="text-green-500 text-lg font-medium">Message sent!</p>
              <p className="text-gray-400 text-sm">Thanks for reaching out. We'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-green-600 hover:underline text-sm cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            /* Contact Form */
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} autoComplete="on">
              {/* Name Input */}
              <div className="relative">
                <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 pr-3 py-3 rounded bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  autoComplete="email"
                  className="w-full pl-10 pr-3 py-3 rounded bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <MessageSquare className="absolute left-2 top-4 text-gray-300" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full pl-10 pr-3 py-3 rounded bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 my-4 flex items-center justify-center gap-2 rounded border-2 border-gray-300/50 hover:border-gray-300 hover:scale-[.97] hover:text-gray-100 hover:font-medium hover:bg-green-600 transition-all duration-400 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
      </div>
    </section>
  );
}
