import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import bgCoverComponent from "../assets/cover/bg-cover-component.jpg";
import bgCoverComponent2 from "../assets/cover/bg-cover-component-2.jpg";
import bgCoverComponent3 from "../assets/cover/bg-cover-component-3.jpg";

import videoCover from "../assets/cover/video-cover.mp4";

type CoverProps = {
  onOpen?: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
};

export default function Cover({ onOpen, audioRef }: CoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const guestName = params.get("guest");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.muted = false;
      audio.volume = 0;
      audio.play();
    }

    setIsOpen(true);

    document.documentElement.requestFullscreen();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      onOpen?.();
    }, 800);
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${isOpen ? "pointer-events-none" : ""
        }`}
    >
      {/* Black base background */}
      <div className="absolute inset-0 bg-black" />

      <img
        src={bgCoverComponent3}
        alt="cover background"
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
      />

      {mounted && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlayThrough={() => setVideoReady(true)}
          poster={bgCoverComponent3}
          className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"
            }`}
        >
          <source src={videoCover} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative text-center text-white px-6"
      >
        {guestName && (
          <div className="mb-6">
            <p className="text-sm tracking-widest uppercase text-white/70">
              Kepada Yth.
            </p>
            <p className="text-lg md:text-xl font-medium">
              {decodeURIComponent(guestName.replace(/\+/g, " "))}
            </p>
          </div>
        )}

        <p className="text-lg tracking-widest mb-4 uppercase">
          Wedding Invitation
        </p>

        <h1 className="text-4xl md:text-6xl font-serif mb-6">Andre & Diah</h1>

        <p className="text-sm md:text-base mb-8">25 Maret 2026</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer"
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
