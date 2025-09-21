import React from "react";
import testinomials from "../assets/testinomials.png";

function Headerimg() {
  return (
    <>
    <div className="flex gap-1 pl-300 -mt-36 ">
      <img src={testinomials} className="w-[60px] rounded-xl" alt="testimonial1" />
      <img src={testinomials} className="w-[60px] rounded-xl" alt="testimonial2" />
      <img src={testinomials} className="w-[60px] rounded-xl" alt="testimonial3" />
    </div>
    <div>
        <h1 className="flex gap-1 pl-313 mt-1 text-4xl font-medium text-[#5C5555]"> 500+</h1>
    </div>
    </>
  );
}

export default Headerimg;
