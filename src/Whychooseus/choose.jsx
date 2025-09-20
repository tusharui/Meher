import React, { useState } from "react";
import twotshirts from "../assets/twotshirt.jpeg";

function Chooseus() {
  const [openIndex, setOpenIndex] = useState(null);

  const reasons = [
    {
      title: "Quality",
      description: "We provide only premium quality clothing with attention to detail."
    },
    {
      title: "Affordable Prices",
      description: "Our prices are fair and affordable without compromising on quality."
    },
    {
      title: "Unique Designs",
      description: "Every piece is crafted with creativity and uniqueness to match your style."
    },
    {
      title: "Customer Support",
      description: "We offer 24/7 customer support to assist you anytime."
    },
  ];

  const toggleReason = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-8 mt-15">
        {/* Left - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={twotshirts}
            alt="Two T-Shirts"
            className="rounded-xl shadow-lg max-w-sm transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Right - Card */}
        <div className="flex-1 bg-[#D9D9D9] rounded-xl p-8 shadow-md animate-fadeIn">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-black mb-6">Why Choose Us</h2>

          {/* Reasons */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`border border-black rounded-xl p-4 bg-white/40 cursor-pointer transition-all duration-500 ease-in-out transform ${
                  openIndex === index ? "scale-105 shadow-xl" : "hover:scale-105"
                }`}
                onClick={() => toggleReason(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-black">{reason.title}</h3>
                  <span className="text-xl font-bold text-black transition-transform duration-300">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-black transition-opacity duration-500 ease-in-out opacity-100">
                    {reason.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-3 gap-2">
        <div className="h-73 w-72 bg-[#A8FBD3] ml-44 rounded-3xl font-medium text-4xl p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp">
          <h1 className="mt-3">
            100% Authentic <br />
            Product
          </h1>
          <p className="mt-4 text-lg ">
            We promise 100% authentic products,
            crafted with genuine fabrics and <br />
            uncompromised quality.
          </p>
        </div>

        <div className="h-73 w-72 bg-[#CBDCEB] ml-44 rounded-3xl font-medium text-4xl p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp delay-200">
          <h1 className="mt-3">
            100% Authentic <br />
            Product
          </h1>
          <p className="mt-4 text-lg ">
            We promise 100% authentic products,
            crafted with genuine fabrics and <br />
            uncompromised quality.
          </p>
        </div>

        <div className="h-73 w-72 bg-[#F08787] ml-44 rounded-3xl font-medium text-4xl p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp delay-500">
          <h1 className="mt-3">
            100% Authentic <br />
            Product
          </h1>
          <p className="mt-4 text-lg ">
            We promise 100% authentic products,
            crafted with genuine fabrics and <br />
            uncompromised quality.
          </p>
        </div>
      </div>
    </>
  );
}

export default Chooseus;
