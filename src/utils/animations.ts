export const textAnimationToRight = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.4 },
  }),
};

export const textAnimationToLeft = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export const mobileMenuOpen = {
  hidden: {
    x: 300,
  },
  visible: {
    x: 0,
    transition: { duration: 0.2 },
  },
};

export const EricOneAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export const fromTopAnimation = {
  hidden: {
    y: -600,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.8 },
  },
};

export const fromBotAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.4 },
  }),
};

export const benefitsAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.8 },
  }),
};

export const opacityAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.7, duration: 0.4 },
  },
};
