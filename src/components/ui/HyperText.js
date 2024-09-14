import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import '../../styles/ui/HyperText.css';

const HyperText = ({ text, className }) => {
  return (
    <motion.h1
      className={cn("hyper-text", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            color: '#00ff00',
            scale: 1.2,
            transition: { duration: 0.2 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default HyperText;