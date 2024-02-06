import { motion } from "framer-motion";

export default function Gestures() {
  return (
    <>
      <h1>Gestures(hover & tap)</h1>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 1.5, rotate: -90, borderRadius: "100%" }}
        className="container"
      ></motion.div>
    </>
  );
}
