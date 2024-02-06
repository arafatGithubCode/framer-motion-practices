import { motion, useScroll } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          height: "10px",
          backgroundColor: "green",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          transformOrigin: "0%",
        }}
      ></motion.div>
      <div>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
        <h1 className="h-[100px] m-7 border-red-200 border-2">
          {" "}
          React Scroll Animations with Framer Motion
        </h1>
      </div>
    </>
  );
}
