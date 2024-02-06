import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CTwo() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1> Exit and Enter Animation in React with Framer Motion</h1>
      {show && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: [0.3, 0.6, 1], x: 100 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-[100px] h-[100px] bg-blue-500"
          ></motion.div>
        </AnimatePresence>
      )}
      <button onClick={() => setShow(!show)}>{show ? "Remove" : "Add"}</button>
    </div>
  );
}
