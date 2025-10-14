import React, { useState } from "react";
import { motion } from "framer-motion";
import phoneImg from "../../assets/images/phone.png";
import wizardBadge from "../../assets/images/wizard-badges.png";
import checkbox from "../../assets/images/checkbox.png";

const floatingMotion = (offset = 10, rotate = 2, duration = 4) => ({
  y: [0, -offset, 0, offset, 0],
  rotate: [0, rotate, 0, -rotate, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

export default function DynamicMockup() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    setTilt({
      rx: Math.max(-6, Math.min(6, -dy * 6)),
      ry: Math.max(-6, Math.min(6, dx * 6)),
    });
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="relative flex items-center justify-center min-h-[750px] overflow-hidden bg-gradient-to-br from-[#b0175c] to-[#5d1a82] py-[60px]"
    >
      {/* glow orbs for creative atmosphere */}
      <div className="absolute top-[10%] left-[20%] w-[200px] h-[200px] bg-pink-500/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[25%] w-[180px] h-[180px] bg-violet-400/30 blur-[100px] rounded-full" />

      {/* 3D Tilt Container */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        {/* PHONE MOCKUP */}
        <motion.img
          src={phoneImg}
          alt="App Preview"
          className="relative z-10 w-[260px] md:w-[402px] drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          animate={floatingMotion(12, 1.5, 5)}
        />

        {/* RIGHT FLOATING CARD */}
        <motion.div
          className="absolute top-[10%] left-[78%] z-20 bg-white w-[293px] shadow-[0_4px_24px_0_rgba(0,0,0,0.16)] p-6 rounded-2xl max-w-[234px]"
          animate={floatingMotion(16, 3, 6)}
        >
          <p className="font-semibold text-lg text-[#450b77]">
            Vibe Check Preview
          </p>
          <p className="text-sm text-black opacity-80">
            Say hello in your dialect
          </p>
        </motion.div>

        {/* LEFT FLOATING CARD */}
        <motion.div
          className="absolute bottom-[18%] right-[56%] z-20 bg-white w-[293px] h-20 shadow-[0_4px_24px_0_rgba(0,0,0,0.16)] rounded-2xl max-w-[293px] flex flex-row gap-[10px] items-center justify-center"
          animate={floatingMotion(14, -2.5, 7)}
        >
          <img src={wizardBadge} className="w-[60px] h-[60px]" />
          <div>
            <p className="font-semibold text-lg text-[#450b77]">
              Heritage Quiz Question
            </p>
            <p className="text-sm text-black opacity-80">
              Earn your region badge
            </p>
          </div>
        </motion.div>

        {/* FLOATING CHECKMARK ICON */}
        <motion.div
          className="absolute bottom-[50%] left-[77%] z-30 rounded-full w-[110px] h-[110px] flex items-center justify-center shadow-[0_0_20px_rgba(251,21,85,0.5)]"
          animate={{
            ...floatingMotion(10, 8, 4),
            scale: [1, 1.1, 1],
          }}
          style={{
            background: "linear-gradient(135deg,#fb1555,#8d1caa)",
          }}
        >
          <img src={checkbox} className="w-[66px] h-[46px]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
