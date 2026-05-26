"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "hidden";

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [isDesktop, setIsDesktop] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 400, damping: 28 });
  const y = useSpring(rawY, { stiffness: 400, damping: 28 });
  const dotX = useSpring(rawX, { stiffness: 1000, damping: 40 });
  const dotY = useSpring(rawY, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a,button,[data-cursor],input,select,textarea");
      setState(el ? "hover" : "default");
    };

    const onLeave = () => setState("hidden");
    const onEnter = () => setState("default");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [isDesktop, rawX, rawY]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border"
        style={{
          x, y,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: state === "hover" ? "rgba(225,6,0,0.8)" : "rgba(255,255,255,0.35)",
          width: state === "hover" ? 48 : 28,
          height: state === "hover" ? 48 : 28,
          opacity: state === "hidden" ? 0 : 1,
          background: state === "hover" ? "rgba(225,6,0,0.1)" : "transparent",
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: state === "hover" ? 3 : 5,
          height: state === "hover" ? 3 : 5,
          opacity: state === "hidden" ? 0 : 1,
          background: "#e10600",
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
    </>
  );
}
