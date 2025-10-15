import React, { useState } from "react";
import { motion } from "framer-motion";
import phoneImg from "../../assets/images/phone.png";
import wizardBadge from "../../assets/images/wizard-badges.png";
import checkbox from "../../assets/images/checkbox.png";

const floatingMotion = (offset = 10, rotate = 2, duration = 4) => ({
  y: [0, -offset, 0, offset, 0],
  rotate: [0, rotate, 0, -rotate, 0],
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
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
      className="relative flex items-center justify-center min-h-[750px] overflow-visible py-[60px]"
    >
      {/* Glow Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[200px] h-[200px] sm:w-52 sm:h-52 bg-pink-500/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[25%] w-[180px] h-[180px] sm:w-44 sm:h-44 bg-violet-400/30 blur-[100px] rounded-full" />

      {/* 3D Tilt Container */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        {/* Phone Mockup */}
        <motion.img
          src={phoneImg}
          alt="App Preview"
          className="relative z-10 w-[260px] sm:w-[320px] md:w-[380px] xl:w-[402px] drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          animate={floatingMotion(12, 1.5, 5)}
        />

        {/* Right Floating Card */}
        <motion.div
          className="absolute top-[10%] left-[78%] sm:left-[75%] md:left-[72%] xl:left-[78%] z-20 bg-white xs:w-[100px] md:w-[200px] xl:w-[234px] shadow-[0_4px_24px_0_rgba(0,0,0,0.16)] p-6 rounded-2xl"
          animate={floatingMotion(16, 3, 6)}
        >
          <p className="font-semibold text-lg text-[#450b77]">
            Vibe Check Preview
          </p>
          <p className="text-sm text-black opacity-80">
            Say hello in your dialect
          </p>
        </motion.div>

        {/* Left Floating Card */}
        <motion.div
          className="absolute bottom-[18%] right-[56%] sm:right-[50%] md:right-[48%] xl:right-[56%] z-20 bg-white xs:w-[180px] md:w-[250px] xl:w-[293px] min-h-20 shadow-[0_4px_24px_0_rgba(0,0,0,0.16)] p-3 rounded-2xl flex flex-row gap-1 md:gap-4 items-center justify-center"
          animate={floatingMotion(14, -2.5, 7)}
        >
          <img
            src={wizardBadge}
            className="w-[60px] sm:w-14 md:w-14 xl:w-[60px] h-[60px] sm:h-14 md:h-14 xl:h-[60px]"
          />
          <div>
            <p className="font-semibold text-lg text-[#450b77]">
              Heritage Quiz Question
            </p>
            <p className="text-sm text-black opacity-80">
              Earn your region badge
            </p>
          </div>
        </motion.div>

        {/* Floating Checkmark */}
        <motion.div
          className="absolute xs:bottom-[10%] md:bottom-[50%] left-[77%] sm:left-[72%] md:left-[75%] xl:left-[77%] z-30 rounded-full w-[110px] sm:w-28 md:w-28 xl:w-[110px] h-[110px] sm:h-28 md:h-28 xl:h-[110px] flex items-center justify-center shadow-[0_0_20px_rgba(251,21,85,0.5)]"
          animate={{ ...floatingMotion(10, 8, 4), scale: [1, 1.1, 1] }}
          style={{ background: "linear-gradient(135deg,#fb1555,#8d1caa)" }}
        >
          <img
            src={checkbox}
            className="w-[66px] sm:w-16 md:w-16 xl:w-[66px] h-[46px] sm:h-12 md:h-12 xl:h-[46px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
