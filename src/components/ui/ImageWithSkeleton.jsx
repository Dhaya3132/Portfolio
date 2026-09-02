import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiImage } from "react-icons/fi";

const POSITIONED_CLASS_RE =
  /\b(static|relative|absolute|fixed|sticky)\b|personal-object|personal-ping/;

const ImageWithSkeleton = ({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  skeletonClassName = "",
  draggable,
  ...motionProps
}) => {
  const [status, setStatus] = useState("loading");

  const wrapperClassName = POSITIONED_CLASS_RE.test(className)
    ? `block ${className}`
    : `relative block ${className}`;

  return (
    <motion.span className={wrapperClassName} {...motionProps}>
      {status !== "loaded" && (
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center ${
            status === "error"
              ? "bg-gray-100 text-gray-400"
              : "bg-gray-200 animate-pulse"
          } ${skeletonClassName}`}
        >
          {status === "error" && <FiImage size={18} />}
        </span>
      )}

      {status !== "error" && (
        <img
          src={src}
          alt={alt}
          draggable={draggable}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`h-full w-full ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 ${imgClassName}`}
        />
      )}
    </motion.span>
  );
};

export default ImageWithSkeleton;
