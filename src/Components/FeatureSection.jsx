import React from "react";

const features = [
  {
    title: "Confidential. Curated. Careful.",
    description:
      "Your privacy is sacred to us. We do not display public profiles. Instead, we operate on an exclusive offline model where matches are shared personally and discretely — only after your approval. It's matchmaking with integrity and respect.",
    icon: "🦸‍♂️",
  },
  {
    title: "Only Verified Elite Profiles",
    description:
      "No random swiping. No fake profiles. Just a highly curated and verified database of accomplished professionals, business families, and genuine individuals looking for meaningful relationships.",
    icon: "👜",
  },
  {
    title: "Real Conversations, Real Connections",
    description:
      "Once a match is mutually agreed upon, we facilitate one-on-one interactions — be it through a private call, video meeting, or a personal introduction. This creates space for honest conversations and natural bonding.",
    icon: "📞",
  },
  {
    title: "We're With You Every Step of the Way",
    description:
      "We know this journey is emotional. That's why our team stands beside you — not just as service providers, but as confidants. Whether it's handling delicate preferences, arranging meetings, or offering guidance — we're here to support you with empathy and care.",
    icon: "🌸",
  },
  {
    title: "Professional & Formal",
    description:
      "Our mission is to simplify the journey of finding a life partner by providing a secure, reliable and culturally respectful platform. We are committed to fostering meaningful matrimonial connections for individuals who value trust, tradition, and long-term commitment in their search for a life partner.",
    icon: "🎓",
  },
  {
    title: "Family Participation",
    description:
      "In India, marriage is not just the union of two individuals, it's the coming together of two families. At EliteBandhan.com, we deeply respect this tradition. We involve families every step of the way, ensuring that the needs, values, and expectations of both sides are honored. This thoughtful approach makes the decision smoother and more fulfilling for the bride and groom, creating a foundation of mutual understanding and lifelong harmony.",
    icon: "👨‍👩‍👧‍👦",
  },
];

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white md:m-16 border border-pink-200 text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-4xl  mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-[#C77F34] italic underline  mb-2">
      {title}
    </h3>
    <p className="text-[#C77F34] italic text-base">{description}</p>
  </div>
);

const FeatureSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {features.map((feature, index) => (
      <FeatureCard
        key={index}
        title={feature.title}
        description={feature.description}
        icon={feature.icon}
      />
    ))}
  </div>
);

export default FeatureSection;
