"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#0a0a0a]"
          aria-hidden="true"
        >
          {/* Logo reveal */}
          <div className="relative flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span
                className="font-display text-white"
                style={{ fontSize: "clamp(3rem, 10vw, 6rem)", letterSpacing: "-0.02em" }}
              >
                M<span style={{ color: "#e10600" }}>13</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-[#a0a0a0] text-xs tracking-[0.3em] uppercase"
            >
              AUTOSERVICE
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-24 h-[1px] bg-[#2a2a2a] rounded-full overflow-hidden mt-4"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
                className="h-full w-full rounded-full"
                style={{ background: "#e10600" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
