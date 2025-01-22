"use client";

import { sectionVariants } from "@/app/constants/animationDetails";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface CustomMotionProps<Tag extends keyof JSX.IntrinsicElements>
  extends MotionProps {
  type?: Tag;
  children: React.ReactNode;
  className?: string;
}

// Reusable AnimatedSection Component
export const AnimatedSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Motion
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    whileInView="visible"
    viewport={{ 
      once: true, 
      amount: 0.1,
    }}
    className={className}
  >
    {children}
  </Motion>
);

const Motion = <Tag extends keyof JSX.IntrinsicElements>({
  type,
  children,
  className,
  ...props
}: CustomMotionProps<Tag>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = type ? (motion as any)[type] : motion.div;

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
