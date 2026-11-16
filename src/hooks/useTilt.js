import { useMotionValue } from "framer-motion";
import { useDamped } from "./useDamped";

// 3D tilt that follows the mouse. Spread the returned props on a motion element.
// Rotation is damped (frame-rate independent, no wobble) so the card settles
// smoothly onto the pointer instead of springing past it.
export const useTilt = ({ max = 10, perspective = 900 } = {}) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useDamped(rotateX, { lambda: 9, precision: 0.02 });
  const smoothY = useDamped(rotateY, { lambda: 9, precision: 0.02 });

  const onPointerMove = (event) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * max * 2);
    rotateX.set(-py * max * 2);
  };

  const onPointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return {
    style: { rotateX: smoothX, rotateY: smoothY, transformPerspective: perspective },
    onPointerMove,
    onPointerLeave,
  };
};
