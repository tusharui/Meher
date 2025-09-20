import React from "react";
import street from "../../assets/street.jpeg";
import yellow from "../../assets/yellow.jpeg";
import sneakers from "../../assets/sneakers.jpeg";

function Topsellingbtn() {
    return (
        <>
            <button className="h-11 w-32 flex items-center justify-center border-2 ml-9 mt-12
     border-black rounded-full font-medium hover:bg-black  cursor-pointer
      hover:text-white transition-colors duration-300">
                Shop Now
            </button>
            <div className="pl-9 mt-10">
                <h1 className="text-7xl font-bold line-tight">Top-Selling Product </h1>
                <h1 className="text-7xl font-bold ">of the year Collection </h1>
            </div>

            <div className="pl-280 -mt-16 text-[#5C5555] font-medium">
                <p >
                    We do not divide our collections to  seasons<br />
                    We create new models every  week<br />
                    We in few items
                </p>
            </div>

            <div className="pl-286 -mt-5">
                <button className="h-11 w-32 flex items-center justify-center border-2 ml-9 mt-12 
     border-black rounded-full font-medium  text-black hover:bg-black
      hover:text-white transition-colors duration-300 cursor-pointer ">Explore More </button>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 mt-12 gap-6 px-6">
                <img 
                    src={street} 
                    alt="Street" 
                    className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-2"
                />
                <img 
                    src={yellow} 
                    alt="Yellow" 
                    className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:-rotate-2"
                />
                <img 
                    src={sneakers} 
                    alt="Sneakers" 
                    className="rounded-lg shadow-lg transition-transform h-175 duration-500 hover:scale-105 hover:rotate-1"
                />
            </div>

            <h1 className="font-medium pl-7 text-2xl mt-1">Women T-Shirts</h1>
            <h1 className="font-medium pl-7 text-2xl">⭐3.4</h1>
            <h1 className="font-medium pl-107  -mt-16 text-2xl">$234</h1>

            <h1 className="font-medium pl-137 text-2xl -mt-9">Men T-Shirts</h1>
            <h1 className="font-medium pl-137 text-2xl">⭐3.8</h1>
            <h1 className="font-medium pl-233  -mt-16 text-2xl">$234</h1>

            <h1 className="font-medium pl-257 text-2xl -mt-9">Sneakers</h1>
            <h1 className="font-medium pl-257 text-2xl">⭐4.4</h1>
            <h1 className="font-medium pl-359  -mt-16 text-2xl">$234</h1>


        </>
    );
}

export default Topsellingbtn;
