import { useEffect, useState } from "react";

const CustomCursor = ({ type, label }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!type) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-100"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {type === "heart" && <span className="text-pink-500 text-2xl">❤️</span>}

      {type === "experience" && (
        <svg
          viewBox="0 0 16 16"
          className="w-5 h-5 rotate-[-70deg] fill-blue-500"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
        </svg>
      )}

      {type === "skills" && (
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
          <span className="text-xs bg-black text-white px-2 py-1 rounded">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
