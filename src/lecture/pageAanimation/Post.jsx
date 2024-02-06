import { motion } from "framer-motion";

export default function Post() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="bg-slate-400"
    >
      <h1 className="text-white text-2xl">Page Animation</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ex sit
        eveniet obcaecati officia tempora amet, atque vel ipsam adipisci error
        dolores porro?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur
        corporis earum qui nisi eveniet enim reiciendis, excepturi aspernatur
        ipsa quos unde nihil, deserunt maxime soluta cum eos quia eligendi vero
        ex a voluptatem!
      </p>
    </motion.div>
  );
}
