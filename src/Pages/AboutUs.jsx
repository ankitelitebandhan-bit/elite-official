import React from "react";
import Navbar from "../Components/Navbar";
import Banner2 from "../assets/Banner2.png";
import Connect from "../Components/Connect";
import happycouple from "../assets/happycouple.png";
import background3 from "../assets/background3.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import FeatureSection from "../Components/FeatureSection";
// import Banner from "../assets/Banner2.webp";
import MatchMakers from "../Components/Matchmakers";
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          src={Banner2}
          alt="Banner"
          className="w-full object-cover max-h-[600px]"
        />

        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        <Connect />
      </div>

      <div className="bg-[#FDF0EA] p-4 sm:p-8">
        <div className="max-w-7xl rounded-2xl  hover:shadow-xl  bg-white p-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section: Text Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#C77F34] italic mb-4">
              EliteBandhan.Com
            </h1>
            <p className=" italic text-[#C77F34] text-base sm:text-lg mb-6">
              EliteBandhan.Com, proudly based in Delhi and run by Effectical
              Service Solutions Private Limited, has been a trusted name in
              matchmaking for over five years. We're not just a growing
              matrimonial platform, we're part of countless love stories that
              started with a simple search and turned into lifelong connections.
            </p>
            <p className=" italic text-[#C77F34] text-base sm:text-lg mb-6">
              In Indian culture, marriage is more than a union between two
              people, it’s a beautiful bond between families, traditions, and
              values. Whether you're in India or living abroad, we understand
              how deeply personal and emotional the search for a life partner
              can be.
            </p>
            <p className=" italic text-[#C77F34] text-base sm:text-lg mb-6">
              At Elite Bandhan, we've created more than a matrimonial website.
              We’ve built a supportive global community that respects traditions
              and celebrates diversity. Our platform welcomes everyone — Hindu,
              Muslim, Sikh, Jain community, Christian community, and NRIs — with
              open arms and shared hope for meaningful matches.
            </p>
            <p className=" italic text-[#C77F34] text-base sm:text-lg mb-6">
              With a curated and verified database, you can find by religion,
              caste, language, or location — helping you find someone who truly
              aligns with your values. We take your privacy seriously, using
              secure technology so your journey stays safe and respectful.
            </p>
            <p className=" italic text-[#C77F34] text-base sm:text-lg mb-6">
              Thousands of happy couples have already found their life partners
              through EliteBandhan.com. Now, it’s your turn. Take the first step
              — and let’s write your love story, together.
            </p>
            <p className=" italic text-[#C77F34] text-base sm:text-lg font-semibold">
              Welcome to EliteBandhan.com — where real connections begin.
            </p>
          </div>

          <div className="flex justify-center items-center h-full">
            <img
              src={happycouple}
              alt="Wedding Image"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative bg-[#FDF0EA] text-white p-16 sm:p-12">
        <div className="absolute inset-0 bg-[#FDF0EA] opacity-30"></div>

        {/* ✅ Background image applied here */}
        <div
          className="relative z-10 bg-cover bg-center p-6 rounded-lg"
          style={{
            backgroundImage: `url(${background3})`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center bg-gray-100/20 backdrop-blur-3xl p-4 rounded-lg">
            <h1 className="text-md sm:text-md text-center font-bold mb-4 text-[#E17100] italic">
              Why Choose EliteBandhan.com?
            </h1>

            <h2 className="text-xl  italic sm:text-md font-semibold text-[#E17100] mb-6">
              Where Hearts Meet, and Families Unite
            </h2>

            <p className="text-base sm:text-md italic md:text-xl text-[#E17100] mb-6">
              At{" "}
              <span className="font-bold text-md text-gray-600 italic">
                EliteBandhan.com
              </span>
              , we understand that marriage isn't just a union of two people —
              it's the beginning of a lifelong journey built on love, respect,
              and shared dreams...
            </p>

            <p className="text-base sm:text-lg md:text-xl italic text-[#E17100] mb-6">
              That's why we do things differently. With over five years of
              experience and more than 1,000 successful matches...
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FDF0EA] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={img1}
              alt="Happy Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100/20 backdrop-blur-2xl p-6 md:p-8 rounded-2xl shadow-2xl border-l-[6px] border-pink-400">
            <h3 className="text-4xl italic font-semibold text-[#7F3C1A] mb-2">
              💖 Matchmaking with Meaning, Not Just Matching Profiles
            </h3>
            <p className="text-gray-700 text-base sm:text-xl italic leading-relaxed">
              We believe that true compatibility goes beyond checklists. Our
              expert relationship managers take the time to understand you —
              your values, lifestyle, dreams, and expectations. Every
              introduction we make is thoughtful, meaningful, and tailored just
              for you.
            </p>
          </div>

          <div className=" rounded-2xl  overflow-hidden shadow-lg">
            <img
              src={img3}
              alt="Happy Couple"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2 - Text Left, Image Right */}
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={img2}
              alt="Indian Wedding"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-2 md:order-1 bg-gray-100/20 backdrop-blur-2xl p-6 md:p-8 rounded-2xl shadow-2xl border-l-[6px] border-pink-400">
            <h3 className=" text-4xl italic font-semibold text-[#7F3C1A] mb-2">
              👨‍👩‍👧 A Trusted Partner for Families Who Care
            </h3>
            <p className="text-gray-700 text-base sm:text-xl italic leading-relaxed">
              In Indian culture, marriage is a bond between families. At Elite
              Bandhan, we respect these traditions and work closely with
              families to create lifelong alliances rooted in harmony, respect,
              and shared values.
            </p>
          </div>
          <div className="bg-gray-100/20  backdrop-blur-2xl p-6 md:p-8 rounded-2xl shadow-2xl border-l-[6px] border-pink-400">
            <h3 className=" text-4xl italic font-semibold text-[#7F3C1A] mb-2">
              💖 Global Reach, Cultural Sensitivity
            </h3>
            <p className="text-gray-700 italic text-base sm:text-xl leading-relaxed">
              Whether you're in India or abroad, our global network brings
              together individuals who share not just a background, but a
              mindset. From New York to New Delhi, London to Ludhiana — we blend
              international exposure with deep cultural understanding.
            </p>
          </div>
        </div>
      </div>

      <FeatureSection />
      <div className="bg-[#FDF0EA] py-12 px-6 sm:px-6 lg:px-8 mt-12 italic">
        <div
          className="relative bg-cover bg-center h-auto flex items-center"
          style={{ backgroundImage: `url(${Banner2})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
          {/* Dark overlay for better text visibility */}
          <div className="relative container mx-auto text-center text-white p-8 md:p-16">
            <div className="flex justify-center mb-4">
              <span className="text-5xl md:text-6xl text-purple-400">💍</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
              More Than Just a Match — A Life Companion Awaits
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6">
              <span className="block">Elite Bandhan — Bandhan Apna Sa</span>
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Your search is about more than a partner. It's about a future
              filled with warmth, trust, and companionship. At{" "}
              <span className="font-semibold">EliteBandhan.com</span>, we make
              that future possible — through passion, professionalism, and a
              deeply personal touch.
            </p>
            <p className="text-lg md:text-xl mb-6">
              Join a trusted matrimonial platform where love is respected,
              privacy is protected, and hearts find their true rhythm.
            </p>
            <h3 className="text-2xl font-semibold mb-6">
              Let us help you meet not just someone who fits... but someone who{" "}
              <span className="text-purple-400">feels</span> right.
            </h3>
            <button className="bg-[#C77F34] text-white font-semibold py-3 px-8 rounded-full hover:bg-pink-700 transition-all duration-300">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>

      <MatchMakers />
      <Footer />
    </>
  );
};

export default AboutUs;
