import { useRef } from "react";
import { motion } from "framer-motion";

export default function Drag() {
  const constraintsRef = useRef(null);
  return (
    <>
      <h1>Gestures(hover & tap)</h1>
      <motion.div
        ref={constraintsRef}
        className="bg-slate-700 w-[70%] py-10 overflow-hidden"
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className="container"
        ></motion.div>
      </motion.div>
    </>
  );
}
