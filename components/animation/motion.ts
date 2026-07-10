export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const transitionFast = {
  duration: 0.22,
  ease: easeOutExpo,
};

export const transitionBase = {
  duration: 0.45,
  ease: easeOutExpo,
};

export const transitionSlow = {
  duration: 0.7,
  ease: easeOutExpo,
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const fadeUpItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
};
