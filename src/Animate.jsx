import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1.2,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 0, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Revise = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-[250px] h-[250px] bg-pink-500 rounded-lg grid grid-cols-2 grid-rows-2 pl-5 pt-5"
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.li
            variants={items}
            key={index}
            className="w-[5rem] h-[5rem] bg-white rounded-full flex justify-center items-center"
          >
            <span>{` ${index + 1}`}</span>
            {index === 0 && <span>one</span>}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Revise;
