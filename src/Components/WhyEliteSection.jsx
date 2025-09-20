import React from "react";

const WhyEliteSection = () => {
  return (
    <section className="bg-[#FEF2EF]  py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-semibold italic leading-snug text-amber-700 max-w-5xl mx-auto mb-8">
        Why Is{" "}
        <span className="font-bold text-brown-800">EliteBandhan.Com</span> the
        Go-To Premium Matchmaker for Elite Families in Delhi?
      </h2>

      {/* Paragraph */}
      <p className="text-center max-w-3xl mx-auto italic text-[#BB4D00]  text-base md:text-xl leading-relaxed mb-12 px-4">
        Entrust{" "}
        <span className="font-bold text-brown-800">EliteBandhan.Com</span> with
        your search for the perfect life partner. As a trusted name in premium
        matchmakers in Delhi, we specialize in uniting like-minded individuals
        through meaningful and culturally aligned partnerships. With our premium
        matrimonial service and the guidance of our experienced team,{" "}
        <span className="font-bold text-brown-800">Elite Bandhan Moments</span>{" "}
        ensures your journey toward finding the ideal match is smooth,
        personalized, and truly fulfilling.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 mt-10 mb-10 sm:grid-cols-2 md:grid-cols-3 gap-20 max-w-5xl mx-auto px-4">
        {/* Card 1 */}
        <div className="bg-white border-2 border-amber-400 rounded-xl shadow-md text-center p-16 hover:shadow-lg hover:border-pink-500 transition">
          <div className="text-3xl font-bold text-amber-700">5+</div>
          <div className="mt-2 text-[#BB4D00] text-2xl">Years of Expertise</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-2 border-amber-400 rounded-xl shadow-md text-center hover:border-pink-500 p-16 hover:shadow-lg transition">
          <div className="text-3xl font-bold text-amber-700">25000+</div>
          <div className="mt-2 text-[#BB4D00] text-2xl ">
            Elite Customers Served
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-2 border-amber-400 rounded-xl shadow-md text-center hover:border-pink-500 p-16 hover:shadow-lg transition">
          <div className="text-3xl font-bold text-amber-700">100%</div>
          <div className="mt-2 text-[#BB4D00] text-2xl">Confidentiality</div>
        </div>
      </div>
    </section>
  );
};

export default WhyEliteSection;
