import React from "react";
import background from "../assets/background1.jpg";

const MatchmakingSection = () => {
  return (
    <div
      className="h-auto pt-30 pb-30 mt-16 flex items-center justify-center bg-fixed bg-center bg-contain"
      style={{ backgroundImage: `url(${background})`, width: "100%" }}
    >
      <div className="max-w-5xl  ml-3 mr-3 w-full px-4 py-8 bg-gray-100/10 backdrop-blur-3xl rounded-lg shadow-lg relative overflow-hidden">
        {/* Decorative Elements at Left and Right */}

        <div className="text-center">
          <h2 className="text-4xl font-bold italic text-[#BB4D00] mb-6">
            At EliteBandhan.Com
          </h2>
          <p className="text-xl italic text-[#BB4D00] mb-6">
            Our premium matchmaking is more than a service—it's our passion. As
            a premium matrimonial service in Delhi, we find joy in uniting souls
            and take pride in every successful bond we help create. With a
            personalized matchmaking approach and sincere effort, we make the
            partner search easier and more meaningful. Every relationship we
            build is rooted in trust, respect, and a perfect balance of
            tradition and modern values.
          </p>
          <p className="text-xl font-semibold text-orange-600">
            Your happiness is our true success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchmakingSection;
