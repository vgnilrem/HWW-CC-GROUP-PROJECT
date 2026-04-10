import React, { useState } from "react";

const team = [
  {
    name: "Andrew",
    title: "Chair & CEO",
    image: "/andrewpfp.jpg",
    bio: "Andrew founded Health Wealth Wellness & Community Care with the belief that strong communities begin with strong families and real opportunity. Having worked directly with underserved populations, he saw the gaps between available resources and the people who need them most. His focus is building practical pathways that connect health, financial growth, stability, and community support. As Chair and CEO, Andrew leads the organization's vision, partnerships, and long-term strategy to create lasting change."
  },
  {
    name: "Anthony",
    title: "Board Member",
    image: "/anthonypfp.jpg",
    bio: "As a board member of Health, Wealth, Wellness & Community Care, I am passionate about supporting the organization's mission to assist individuals and families and building lifelong permanence.Through education, employment, housing, food assistance, financial planning, and physical and mental well being. As I help, the organization strategize on strengthening community relationships and ensuring the organizations continue to create meaningful and lasting changes."
  },
  {
    name: "Lauren",
    title: "Treasurer",
    image: "/laurenpfp.jpg",
    bio: "As Treasurer of Health Wealth and Community Care I am dedicated to using my extensive admin skills to handle budgeting, financial tracking, and reporting to keep things running smoothly. I am passionate about helping us grow, and will use my knowledge of both the corporate and nonprofit sectors to help do so responsibly."
  },
  {
    name: "Quincy",
    title: "Community Outreach Lead",
    image: "/quincypfp.jpg",
    bio: "Being involved in this work is personal to me because I care deeply about the well-being and growth of our community. I believe real change happens when people come together, support one another, and create opportunities for those who may not always have a voice. This mission matters to me because I've seen firsthand how strong community support can make a difference in people's lives. As a Voting Board Member and Community Outreach Lead, I help guide decisions that move the organization forward while also connecting with community members, building relationships, and helping ensure our programs reach and positively impact the people we serve"
  },
  {
    name: "Sydni",
    title: "Secretary",
    image: "/sydpfp.jpg",
    bio: "The work that we do is very dear to my heart. I walked away from an environment rooted in cycles I refused to repeat and in doing so, experienced homelessness firsthand, rebuilding from nothing with little more than my cat and my resolve. That season of my life introduced me to communities like this one, and reminded me that healing happens in try authentic connection. As Secretary and Founding Board Member, I ensure our governance, records, and institutional memory reflect the integrity this mission deserves  because the people we serve deserve an organization built to last."
  },
  {
    name: "Merling",
    title: "Vice Chair",
    image: "/mepfp.jpg",
    bio: "Growing up in low-income communities in Los Angeles, I witnessed firsthand how families, friends, and neighbors struggled with socioeconomic barriers within the systems that exist around them. Those experiences shaped my commitment to strengthening our community and helping break cycles that limit opportunity. To me, our mission is about building unity, resilience, and a stronger foundation for future generations. As Vice Chair, I support the organization's leadership, help guide strategic initiatives, and work to ensure our programs uplift and empower the communities we serve."
  }
];

export default function AboutSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="relative bg-white text-black py-24 px-6 md:px-20 z-10">
      <img
  src="/logo.jpg"
  alt="Background Logo"
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none -z-10 w-[500px]"
/>

      {/* OUR MISSION */}
      <div id="mission" className="max-w-4xl mb-20 scroll-mt-32">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to empower individuals and families to reach stability and self-sufficiency so stronger, culturally rooted communities can thrive. By improving financial security, mental health, and physical well-being, we restore care, accountability, and connection to bridge the gap between common services and what people truly need.
        </p>
      </div>

      {/* Our Work */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-10">Our Work</h2>
        <div className="grid md:grid-cols-4 gap-8">
        {[
  {
    title: "Meeting Immediate Needs",
    desc: "Outreach, cleanups, food distribution, transportation, and direct support with no barrier to entry."
  },
  {
    title: "Removing Barriers",
    desc: "Community groups, mentorship, and safe spaces to work through real-life challenges together."
  },
  {
    title: "Building Stability",
    desc: "Hands-on support, financial accountability, and consistent guidance toward independence."
  },
  {
    title: "Pathways to Success",
    desc: "Family support, housing & trades, and financial growth pathways tailored to each individual."
  }
].map((item, i) => (
            <div
              key={i}
              className="bg-gray-200 p-6 flex flex-col justify-center text-center hover:bg-gray-300 transition"
            >
              <>
  <h3 className="font-bold mb-2">{item.title}</h3>
  <p className="text-sm text-gray-700">{item.desc}</p>
</>
            </div>
          ))}
        </div>
      </div>

       {/* OUR TEAM TEXT */}
       <div className="max-w-4xl mb-20">
  <h2 className="text-2xl font-bold mb-4">Our Team</h2>
  <p className="text-gray-700 leading-relaxed">
          Grounded, accountable, and community-driven. Our team brings lived experience and professional expertise to the work of building real pathways from crisis to independence. We operate with clarity, structure, and integrity. Meeting people where they are while holding a long-term vision for stability, skill-building, and generational growth.
        </p>
      </div>

      {/* TEAM PHOTOS */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 justify-items-center mt-16">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
            <div className="w-60 h-60 cursor-pointer">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
                onClick={() => setSelectedMember(member)}
              />
            </div>
          
            <p className="mt-4 text-black font-medium">
              {member.name} – {member.title}
            </p>
          </div>
          ))}
        </div>
      </div>

{/* TEAM MODAL */}
{selectedMember && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={() => setSelectedMember(null)}
  >
    <div
      className="bg-black text-white rounded-full w-[500px] h-[500px] p-10 flex items-center justify-center text-center overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <h3 className="font-bold mb-3 text-lg">
          {selectedMember.name} – {selectedMember.title}
        </h3>
        <p className="text-sm leading-relaxed">
          {selectedMember.bio}
        </p>
      </div>
    </div>
  </div>
)}

    </section>
  );
}