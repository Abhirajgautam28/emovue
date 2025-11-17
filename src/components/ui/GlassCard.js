import { motion } from 'framer-motion';

const GlassCard = ({ children, className }) => {
  return (
    <motion.div
      className={`bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
