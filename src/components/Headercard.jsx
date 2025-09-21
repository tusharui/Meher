import React from "react";
import { motion } from "framer-motion";
import Card1 from "../assets/Card1.jpeg";
import card2 from "../assets/card2.jpeg";
import Card3 from "../assets/Card3.jpeg";

function Headercard() {
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-9">
      
      {/* Card 1 */}
      <motion.div
        className="relative rounded-xl overflow-hidden"
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={Card1}
          alt="Card 1"
          className="w-full h-150 object-cover rounded-xl"
          whileHover={{ scale: 1.05 }} // zoom on hover
          transition={{ duration: 0.3 }}
        />
        <div className="absolute bottom-4 left-4 text-white text-3xl md:text-6xl font-bold">
          Get up to 5% off discount
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="relative rounded-xl overflow-hidden"
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <motion.img
          src={card2}
          alt="Card 2"
          className="w-full h-150 object-cover rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute bottom-4 left-4 text-white text-3xl md:text-6xl font-bold">
          Soothing Cap Comfort
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="relative rounded-xl overflow-hidden"
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <motion.img
          src={Card3}
          alt="Card 3"
          className="w-full h-150 object-cover rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute bottom-4 left-4 text-white text-3xl md:text-6xl font-bold">
          Premium Shoes Collection
        </div>
      </motion.div>

    </div>
  );
}

export default Headercard;
