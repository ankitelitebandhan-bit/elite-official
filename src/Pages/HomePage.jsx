import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../assets/Banner.webp";
import Connect from "../Components/Connect";
import Introimage from "../assets/Introimage.webp";
import Button from "../Components/Button";
import EliteFeatures from "../Components/EliteFeatures";

const HomePage = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src={Banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <Navbar />

        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4 sm:px-6 space-y-4">
          <h1 className="text-pink-500 text-3xl sm:text-5xl font-bold drop-shadow-lg italic">
            Find Your perfect Match
          </h1>
          <p className="text-white font-bold text-lg sm:text-xl drop-shadow-lg max-w-lg italic">
            Trusted matrimonial service with thousands of successful matches. We
            connect hearts and build families.
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        <h2 className="text-pink-500 text-2xl sm:text-4xl font-bold mb-4 italic">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-[#C77F34]">
            <strong>Personalized Matches:</strong> We take the time to
            understand your preferences and values.
          </li>
          <li className="text-[#C77F34]">
            <strong>Verified Profiles:</strong> Our thorough verification
            process ensures genuine connections.
          </li>
          <li className="text-[#C77F34]">
            <strong>Success Stories:</strong> Join the ranks of our happy
            couples who found love through us.
          </li>
        </ul>
      </div>

      <Connect />
      <div class="p-4 sm:p-6 w-full flex flex-col md:flex-row justify-center items-center  mx-auto">
        <div class="mb-4 md:mb-0 md:mr-8 flex-shrink-0 w-full md:w-1/3 shadow-2xl">
          <img
            src={Introimage}
            alt="Introduction"
            class="w-full h-auto border-4 border-pink-500 rounded-2xl hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-pink-500/50"
          />
        </div>

        <div class="w-full md:w-2/3 max-w-2xl ">
          <h3 class="text-[#C77F34] italic">EliteBandhan.Com</h3>
          <h2 class="text-pink-500 text-2xl sm:text-4xl font-bold mb-4 italic">
            Premium Matrimonial Service in Delhi - EliteBandhan.Com
          </h2>
          <p class="text-[#C77F34] text-lg sm:text-xl italic">
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

      <h1 className="text-pink-500 text-2xl sm:text-4xl font-bold  italic text-center mt-16 mb-16">
        Our Edge: Exclusive Profiles, Dedicated Managers & Trusted Matrimonial
        Services
      </h1>

      <EliteFeatures />
    </>
  );
};

export default HomePage;
