
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

export const slideFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const slideFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function getTransition(delay = 0) {
  return {
    type: "tween",
    ease: "easeOut",
    duration: 0.5,
    delay
  };
}

export const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20
};
