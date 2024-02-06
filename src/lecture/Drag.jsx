import { motion } from "framer-motion";

export default function Drag() {
  return (
    <>
      <h1>Drag Animation in React with Framer Motion</h1>
      <div className="flex justify-around items-center min-h-screen">
        <motion.div drag>
          <p>No constraint</p>
          <div className="w-[100px] h-[100px] bg-green-500">
            can be drag every where
          </div>
        </motion.div>
        <motion.div drag="y">
          <p>Drag only Y</p>
          <div className="w-[100px] h-[100px] bg-green-500"></div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{ left: -10, right: -10, top: 50, bottom: 50 }}
        >
          <p>Specific drag</p>
          <div className="w-[100px] h-[100px] bg-green-500"></div>
        </motion.div>
      </div>
    </>
  );
}
