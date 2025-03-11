
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }
};

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTransition;
