import React from "react";

export default function DonatePage() {
  const zeffyLink = "https://www.zeffy.com/en-US/donation-form/pour-into-south-central";
  return (
    <section className="min-h-screen bg-[#f9f5ee] flex flex-col items-center justify-center px-6 py-24 pt-48 text-center">
      <h1 className="text-4xl font-bold text-[#325e43] mb-6">Support Our Mission</h1>
      <p className="text-gray-600 max-w-xl leading-relaxed mb-10">
        Your donation helps us empower individuals and families to reach stability and
        self-sufficiency. Every contribution makes a direct impact in our community.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
      <button
  onClick={() => window.open(zeffyLink, "_blank")}
  className="px-8 py-4 bg-[#325e43] text-white font-semibold rounded-lg hover:bg-[#264a34] transition-all duration-300"
>
  Donate One-Time
</button>

<button
  onClick={() => window.open(zeffyLink, "_blank")}
  className="px-8 py-4 border-2 border-[#325e43] text-[#325e43] font-semibold rounded-lg hover:bg-[#325e43] hover:text-white transition-all duration-300"
>
  Donate Monthly
</button>
      </div>

      <p className="text-gray-400 text-sm mt-10">
        Secure payment options coming soon. Thank you for your support.
      </p>
    </section>
  );
}