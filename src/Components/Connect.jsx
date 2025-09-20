import React from "react";

const Connect = () => {
  return (
    <div className="flex justify-center items-center bg-[#fdf0ea] px-4 py-16">
      <form
        className="w-full max-w-6xl flex flex-col items-center bg-[#fdf2ee] p-6 md:p-12 rounded-xl shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Heading */}
        <h2 className="w-full text-center text-2xl md:text-4xl font-semibold text-amber-600 mb-10 italic">
          Please share your details, we will reach out to you
        </h2>

        {/* Form Fields Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border border-pink-500 rounded-md placeholder-italic focus:outline-none focus:ring-2 focus:ring-pink-700"
            required
          />

          {/* Phone Field */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full p-3 border border-pink-500 rounded-md placeholder-italic focus:outline-none focus:ring-2 focus:ring-pink-700"
            required
          />

          {/* Country Dropdown */}
          <select
            name="country"
            className="w-full p-3 border border-pink-500 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-700"
            required
          >
            <option value="" disabled selected>
              Select Country
            </option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
          </select>

          {/* Keyword Field */}
          <input
            type="text"
            name="keyword"
            placeholder="Your message"
            className="w-full p-3 border border-pink-500 rounded-md placeholder-italic focus:outline-none focus:ring-2 focus:ring-pink-700"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="bg-pink-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-amber-600 transition-all shadow-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Connect;
