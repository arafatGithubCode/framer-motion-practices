import { motion } from "framer-motion";

const Box1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-[100px] h-[100px] bg-blue-500 my-[200px]"
    ></motion.div>
  );
};
const Box2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleX: 1.5, scaleY: 1 }}
      transition={{ duration: 0.6 }}
      className="w-[100px] h-[100px] bg-blue-500 my-[200px]"
    ></motion.div>
  );
};

const Box3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0, scaleY: 0, x: 200 }}
      whileInView={{ opacity: 1, scaleX: 1.5, scaleY: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-[100px] h-[100px] bg-blue-500 my-[200px]"
    ></motion.div>
  );
};

function ScrollTrigger() {
  return (
    <>
      <h1>Scroll Triggered Animation in React with Framer Motion</h1>
      <div className="flex items-center flex-col min-h-screen justify-center">
        <Box1 />
        <Box1 />
        <Box1 />
        <Box1 />
        <Box2 />
        <Box3 />
        <Box3 />
        <Box3 />
      </div>
    </>
  );
}

export default ScrollTrigger;
