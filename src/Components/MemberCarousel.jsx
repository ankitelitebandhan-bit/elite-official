import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MemberCarousel = () => {
  const members = [
    {
      id: "EB20000678",
      profession: "Data Analyst",
      location: "Berlin, Germany",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: "EB20000766",
      profession: "Entrepreneur",
      location: "Montreal, Canada",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "EB20000804",
      profession: "MBA",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: "EB20001234",
      profession: "Nurse",
      location: "Sydney, Australia",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: "EB20000912",
      profession: "Designer",
      location: "Nice, France",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-[#FFF3EE]">
      <h2 className="text-3xl md:text-4xl italic font-bold pt-20 text-center text-[#BB4D00] mb-10">
        Lakhs Of Happy Members From Over The Globe
      </h2>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 pb-20 pt-10">
        <Slider {...settings}>
          {members.map((member, index) => (
            <div key={index} className="px-2">
              <div className="w-full min-w-[280px] bg-white border-2 border-orange-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={`Profile of ${member.id}`}
                    className="h-24 w-24 rounded-full border-4 border-orange-300 object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-800">ID- {member.id}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {member.profession}
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                    {member.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MemberCarousel;
