"use client";

import { motion } from "framer-motion";
import React from "react";

const MotionWrap = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
        {children}
    </motion.div>
  );
};

export default MotionWrap;
