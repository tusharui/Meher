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
    <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-8 mt-15">
      {/* Left - Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={twotshirts}
          alt="Two T-Shirts"
          className="rounded-xl shadow-lg max-w-sm"
        />
      </div>

      {/* Right - Card */}
      <div className="flex-1 bg-[#D9D9D9] rounded-xl p-8 shadow-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-black mb-6">Why Choose Us</h2>

        {/* Reasons */}
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="border border-black rounded-xl p-4 bg-white/40 cursor-pointer transition hover:shadow-lg"
              onClick={() => toggleReason(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-black">{reason.title}</h3>
                <span className="text-xl font-bold text-black">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-black">{reason.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chooseus;
