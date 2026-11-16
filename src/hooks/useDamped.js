import { useEffect } from "react";
import { cancelFrame, frame, useMotionValue } from "framer-motion";
import { damp } from "../utils/motion";

/**
 * A MotionValue that glides toward `source` using frame-rate independent
 * exponential damping (see `damp`).
 *
 * Compared with a spring this never overshoots or wobbles and it takes exactly
 * the same time on a 60Hz and a 144Hz display, which is what makes pointer
 * driven motion feel "silky" instead of "bouncy".
 *
 * - `lambda`    responsiveness. ~6 is lazy and floaty, ~12 is snappy, ~20 is tight.
 * - `precision` once the remaining distance drops below this the loop goes to
 *               sleep, so a settled value costs nothing.
 *
 * It runs on Framer Motion's shared frame loop, so it is batched with every
 * other animation instead of owning a requestAnimationFrame of its own.
 */
export const useDamped = (source, { lambda = 10, precision = 0.01 } = {}) => {
  const output = useMotionValue(source.get());

  useEffect(() => {
    let running = false;

    const step = ({ delta }) => {
      const target = source.get();
      const current = output.get();

      // delta is in ms and already clamped by Framer Motion after a stall.
      const next = damp(current, target, lambda, delta / 1000);

      if (Math.abs(target - next) < precision) {
        output.set(target);
        running = false;
        cancelFrame(step);
        return;
      }
      output.set(next);
    };

    const wake = () => {
      if (running) return;
      running = true;
      frame.update(step, true);
    };

    // Snap to wherever the source already is, then follow it.
    output.set(source.get());
    const unsubscribe = source.on("change", wake);

    return () => {
      unsubscribe();
      cancelFrame(step);
    };
  }, [source, output, lambda, precision]);

  return output;
};
