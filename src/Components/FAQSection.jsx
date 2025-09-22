import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Do you provide NRI matrimonial services?",
      answer:
        "Yes, EliteBandhan.Com offers specialized NRI matrimonial services connecting families across India and abroad with 100% verified profiles and family background checks.",
    },
    {
      question: "How can I contact EliteBandhan.Com?",
      answer:
        "You can reach EliteBandhan.Com at +91 9315812799 or visit www.elitebandhan.com for premium matrimonial services in Delhi NCR.",
    },
    {
      question:
        "What makes EliteBandhan.Com one of the top among Delhi matchmaking services?",
      answer:
        "EliteBandhan.Com is known for its personalized matchmaking services, backed by experienced relationship managers and a large database of verified profiles.",
    },
    {
      question:
        "What is the difference between a premium and a regular matrimonial service?",
      answer:
        "A premium matrimonial service in Delhi like EliteBandhan.Com offers exclusive one-on-one matchmaking, verified elite profiles, background checks, and tailored matchmaking strategies ensuring a personalized and secure experience unlike mass-market platforms.",
    },
    {
      question:
        "Why choose EliteBandhan.Com as your premium matchmakers in Delhi?",
      answer:
        "EliteBandhan.Com stands out as one of the leading premium matchmakers in Delhi due to our high success rate, personalized attention, and ethical approach. Our expert matchmakers understand the dynamics of elite matchmaking and are dedicated to helping you find a life partner who fits your emotional, intellectual, and social expectations.",
    },
    {
      question:
        "Is EliteBandhan.Com considered a high profile marriage bureau in Delhi?",
      answer:
        "Yes, EliteBandhan.Com is regarded as a leading high profile marriage bureau in Delhi. We specialize in catering to accomplished professionals, business families, and NRIs looking for serious, value-aligned matrimonial alliances within elite social circles.",
    },
    {
      question:
        "What can I expect from a premium matrimonial service in Delhi like EliteBandhan.Com?",
      answer:
        "With EliteBandhan.Com's premium matrimonial service in Delhi, expect curated matches, confidential consultations, and a team of experienced relationship managers who prioritize your values, goals, and cultural background to help you find the right life partner.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f9f8f4] py-12 px-4 md:px-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden"
            >
              <div
                className="px-4 py-3 cursor-pointer flex justify-between items-center bg-[#f0f0f0]"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden px-4 bg-[#e9ecef] text-gray-700 text-[15px] ${
                  isOpen ? "max-h-[500px] py-3" : "max-h-0 py-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
