import { memo, useMemo } from "react";
import { motion as Motion } from "framer-motion";
import { fadeUp, fadeDown, fadeLeft, fadeRight, fadeIn, zoomIn, zoomOut } from "./scrollAnimationConfigs.js";

const ANIMATIONS = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeIn,
  zoomIn,
  zoomOut,
};

function ScrollReveal({ children, animation = "fadeUp", delay = 0, className, style, as }) {
  const props = useMemo(() => {
    const config = ANIMATIONS[animation] ?? fadeUp;
    return delay !== 0 ? { ...config, transition: { ...config.transition, delay } } : config;
  }, [animation, delay]);
  const Component = as ? Motion[as] ?? Motion.div : Motion.div;

  return (
    <Component className={className} style={style} {...props}>
      {children}
    </Component>
  );
}

export default memo(ScrollReveal);
