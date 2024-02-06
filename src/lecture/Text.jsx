import { motion } from "framer-motion";

export default function Text() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: [0, 900, 0] }}
        transition={{
          duration: 3,
          delay: 0.3,
        }}
        whileHover={{ scale: 1.5, opacity: 0.2 }}
      >
        Welcome to framer motion(text-animation)
      </motion.h1>
    </div>
  );
}

//initial={{ x: -100px }}
