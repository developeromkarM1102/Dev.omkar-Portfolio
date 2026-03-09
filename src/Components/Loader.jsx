// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
        <div className="flex flex-col items-center justify-center min-h-screen">

  <h1 className="text-3xl font-semibold mb-4">
    Welcome to Omkar.dev
  </h1>

  <p className="text-lg">
    Loading<span className="animate-pulse">...</span>
  </p>

</div>
    </motion.div>
  );
};

export default Loader;