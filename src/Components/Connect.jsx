import React from "react";

const Connect = () => {
  return (
    <div className="w-full m-3 backdrop-blur-3xl max-w-md mx-auto bg-pink-300/10 p-6 rounded-lg shadow-xl">
      <form className="flex flex-col gap-4">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-pink-500 font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="p-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-pink-500 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            className="p-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-pink-500 font-semibold mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="123-456-7890"
            className="p-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-pink-500 font-semibold mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message here..."
            className="p-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Connect;
