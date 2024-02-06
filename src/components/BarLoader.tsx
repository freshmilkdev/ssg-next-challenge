import { motion, Variants } from "framer-motion";
const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.7,
      ease: "circIn",
    },
  },
} as Variants;
export const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1 justify-center"
    >
      <motion.div variants={variants} className="h-6 w-2 bg-white" />
      <motion.div variants={variants} className="h-6 w-2 bg-white" />
      <motion.div variants={variants} className="h-6 w-2 bg-white" />
      <motion.div variants={variants} className="h-6 w-2 bg-white" />
      <motion.div variants={variants} className="h-6 w-2 bg-white" />
    </motion.div>
  );
};
