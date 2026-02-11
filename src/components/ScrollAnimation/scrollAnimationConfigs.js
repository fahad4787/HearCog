const defaultTransition = { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] };
const viewport = { once: true, amount: 0.2 };

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  viewport,
  whileInView: { opacity: 1, y: 0 },
  transition: defaultTransition,
};

export const fadeDown = {
  initial: { opacity: 0, y: -24 },
  viewport,
  whileInView: { opacity: 1, y: 0 },
  transition: defaultTransition,
};

export const fadeLeft = {
  initial: { opacity: 0, x: 24 },
  viewport,
  whileInView: { opacity: 1, x: 0 },
  transition: defaultTransition,
};

export const fadeRight = {
  initial: { opacity: 0, x: -24 },
  viewport,
  whileInView: { opacity: 1, x: 0 },
  transition: defaultTransition,
};

export const fadeIn = {
  initial: { opacity: 0 },
  viewport,
  whileInView: { opacity: 1 },
  transition: defaultTransition,
};

export const zoomIn = {
  initial: { opacity: 0, scale: 0.92 },
  viewport,
  whileInView: { opacity: 1, scale: 1 },
  transition: defaultTransition,
};

export const zoomOut = {
  initial: { opacity: 0, scale: 1.06 },
  viewport,
  whileInView: { opacity: 1, scale: 1 },
  transition: defaultTransition,
};

export function stagger(delay = 0) {
  return { ...fadeUp, transition: { ...defaultTransition, delay } };
}
