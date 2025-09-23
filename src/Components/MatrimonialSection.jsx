import React from "react";
import { Link } from "react-router-dom";

const MatrimonialSection = () => {
  return (
    <div className="bg-[#ecb49c] text-[#BB4D00] px-4 py-12 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section: Matrimonial by Religion */}
        <div>
          <h2 className="text-6xl font-bold mb-16 italic">
            Explore
            <br />
            Matrimonial Profiles
            <br />
            By Religion
          </h2>
          <div className="space-y-4">
            <button className="w-full hover:shadow-2xl hover:scale-105 transition-transform duration-200 font-bold bg-[#FDF0EA] py-3 rounded-4xl text-lg text-center">
              Hindu Matrimony
            </button>
            <button className="w-full hover:shadow-2xl hover:scale-105 transition-transform duration-200 font-bold bg-[#FDF0EA] py-3 rounded-4xl text-lg text-center">
              Muslim Matrimony
            </button>
            <button className="w-full hover:shadow-2xl hover:scale-105 transition-transform duration-200 font-bold bg-[#FDF0EA] py-3 rounded-4xl text-lg text-center">
              Christian Matrimony
            </button>
            <button className="w-full hover:shadow-2xl hover:scale-105 transition-transform duration-200 font-bold bg-[#FDF0EA] py-3 rounded-4xl text-lg text-center">
              Sikh Matrimony
            </button>
            <button className="w-full hover:shadow-2xl hover:scale-105 transition-transform duration-200 font-bold bg-[#FDF0EA] py-3 rounded-4xl text-lg text-center">
              Jain Matrimony
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 italic">Community</h2>
          <p className="text-lg mb-8 italic">
            As a premium matrimonial service in Delhi, EliteBandhan.Com offers a
            trusted matchmaking service designed for families who value
            traditions. With 100% verified community-based profiles—Punjabi,
            Sikh, Agarwal, Kapoor, Goyal to Garg and more—we ensure culturally
            compatible matches with modern outlooks.
          </p>

          {/* Community Profile Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200  py-3 font-bold rounded-4xl text-center text-sm">
              Punjabi Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Khandelwal Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Rajput Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Brahmin Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Gupta Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Jat Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Baniya Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Kayastha Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Reddy Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Sindhi Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Nair Matrimony
            </button>
            <button className="bg-[#FDF0EA] hover:shadow-2xl hover:scale-105 transition-transform duration-200 py-3 font-bold rounded-4xl text-center text-sm">
              Lingayat Matrimony
            </button>
          </div>
        </div>
      </div>

      {/* Register Button */}
      <div className="flex justify-center mt-8">
        <Link to="https://www.elitebandhan.com/register.php">
          <button className="bg-[#FDF0EA] hover:shadow-2xl font-bold py-4 px-8 text-xl rounded-full hover:scale-105 transition duration-200">
            Register for Free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MatrimonialSection;
