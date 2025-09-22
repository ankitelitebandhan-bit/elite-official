import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../assets/Banner.webp";
import Connect from "../Components/Connect";
import Introimage from "../assets/Introimage.webp";
import Button from "../Components/Button";
import EliteFeatures from "../Components/EliteFeatures";
import WhyEliteSection from "../Components/WhyEliteSection";
import MatchmakingSection from "../Components/MatchmakingSection";
import MemberCarousel from "../Components/MemberCarousel";
import Slider2 from "../Components/Slider2";
import SuccessStories from "../Components/SuccessStories";
import MatrimonialSection from "../Components/MatrimonialSection";
import FAQSection from "../Components/FAQSection";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Background image (not absolutely positioned) */}
        <img
          src={Banner}
          alt="Banner"
          className="w-full object-cover max-h-[1000px]" // limits height on large screens
        />

        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        <div className="relative z-20 px-4 text-center sm:px-6   sm:pt-24 mt-10 pb-6 max-w-3xl mx-auto">
          <h1 className="text-[#C77F34] text-3xl sm:text-5xl font-bold drop-shadow-lg italic">
            Find Your Perfect Match
          </h1>
          <p className="text-[#C77F34] font-bold text-lg sm:text-xl drop-shadow-lg mt-4 italic">
            Trusted matrimonial service with thousands of successful matches. We
            connect hearts and build families.
          </p>
        </div>
      </div>

      <Connect />
      <div className="p-4 sm:p-6 w-full flex flex-col md:flex-row justify-center items-center  mx-auto">
        <div className="mb-4 md:mb-0 md:mr-8 flex-shrink-0 w-full md:w-1/3 shadow-2xl">
          <img
            src={Introimage}
            alt="Introduction"
            className="w-full h-auto border-4 border-[#C77F34] rounded-2xl hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500/50"
          />
        </div>

        <div className="w-full md:w-2/3 max-w-2xl ">
          <h3 className="text-[#C77F34] italic">EliteBandhan.Com</h3>
          <h2 className="text-[#C77F34] text-2xl sm:text-4xl font-bold mb-4 italic">
            Premium Matrimonial Service in Delhi - EliteBandhan.Com
          </h2>
          <p className="text-[#C77F34] text-lg sm:text-xl italic text-justify">
            Looking for a premium matrimonial service in Delhi that values your
            tradition and understands your preferences? Welcome to
            EliteBandhan.Com, where finding the perfect life partner is more
            than just a process – it’s a promise of trust, class, and
            compatibility. At EliteBandhan.Com, we don’t just arrange marriages
            – we build lasting relationships. Our expert matchmaking team offers
            personalized matrimonial services for Delhi’s elite communities,
            including Aggarwal, Baniya, Punjabi, Jain, and Marwari families. We
            ensure every profile we share is genuine, verified, and tailored to
            your expectations. As a respected name, we focus on blending
            traditional values with modern matchmaking tools. Whether you're
            searching for a highly educated partner, a professionally settled
            match, or a family with shared cultural values – EliteBandhan.Com
            stands as your trusted partner. Discover why hundreds of families
            call us the best matrimonial bureau in Delhi. With our premium
            matrimonial service, you’re not just finding a match – you’re
            starting a new journey with complete peace of mind.
          </p>
          <Button />
        </div>
      </div>
      <div className="px-4 sm:px-6 md:max-w-4xl md:mx-auto">
        <h1 className="text-[#E17100] text-2xl sm:text-4xl font-bold italic mt-16 mb-16 text-center">
          Our Edge: Exclusive Profiles, Dedicated Managers & Trusted Matrimonial
          Services
        </h1>
      </div>
      <EliteFeatures />
      <WhyEliteSection />
      <MatchmakingSection />
      <MemberCarousel />
      <Slider2 />
      <section className="bg-[#FEF2EF]  py-16 px-4">
        <h2 className="text-center text-3xl md:text-5xl font-semibold italic leading-snug text-amber-700 max-w-5xl mx-auto mb-8">
          Real Success Stories That Define Our Premium Matrimonial Service in
          Delhi
        </h2>

        <p className="text-center max-w-3xl mx-auto italic text-[#BB4D00]  text-base md:text-xl leading-relaxed mb-12 px-4">
          Love knows no boundaries - hear from couples who found their perfect
          match across continents
        </p>
      </section>
      <SuccessStories />
      <MatrimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;
