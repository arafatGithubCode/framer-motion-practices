import { motion } from "framer-motion";

import { useState } from "react";

export default function Lec3() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <motion.div
        whileHover={{ scale: 1.5 }}
        transition={{
          layout: {
            duration: 1,
            type: "spring",
          },
        }}
        layout
        onClick={() => setShowCard(!showCard)}
        className="bg-white min-w-[150px] h-[150px] rounded-lg flex justify-center items-center flex-col"
      >
        <motion.h3 className="font-semibold">Hover or Click</motion.h3>
        {showCard && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-[600px] p-3"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            delectus blanditiis itaque iste saepe fugiat, beatae aliquid omnis
            ut eligendi voluptatum alias animi facere molestiae aliquam quia
            deserunt totam debitis!
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
