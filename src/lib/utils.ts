import type { Variants, Transition } from "framer-motion";

/**
 * Shared easing curve for all animations.
 */
export const transitionEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Default transition for visible animations.
 */
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: transitionEasing,
};

/**
 * Section fade-up variant — used by every section on scroll.
 */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Hero container — staggered children with precise delays.
 */
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

/**
 * Hero text item — fades up.
 */
export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: transitionEasing },
  },
};

/**
 * Hero headshot — scale from 0.96, rotate 1deg, then straight.
 */
export const headshotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, rotate: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: transitionEasing },
  },
};


