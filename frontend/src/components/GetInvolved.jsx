import React from "react";

export default function GetInvolved() {
  return (
    <section className="bg-white text-black min-h-screen py-20 px-6 md:px-20">

      {/* HERO */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get Involved
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you're looking to volunteer, participate in a program, or support community initiatives,
          there are multiple ways to get involved and make an impact.
        </p>
      </div>

      {/* GOOGLE CALENDAR */}
      <div className="w-full mt-10">
        <h2 className="text-2xl font-bold mb-6">
          Community Calendar
        </h2>

        <div className="w-full h-[600px] border rounded-lg overflow-hidden">
          <iframe
            src="YOUR_GOOGLE_CALENDAR_EMBED_LINK"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Community Calendar"
          ></iframe>
        </div>
      </div>

      {/* WAYS TO ENGAGE */}
      <div className="mt-20 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Volunteer",
            desc: "Support outreach, events, and community initiatives directly."
          },
          {
            title: "Join a Program",
            desc: "Enter one of our structured pathways toward stability and growth."
          },
          {
            title: "Partner With Us",
            desc: "Collaborate with us to expand impact and reach more communities."
          }
        ].map((item, i) => (
          <div key={i} className="bg-gray-100 p-6 text-center hover:bg-gray-200 transition">
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}