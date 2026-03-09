import { AnimatePresence, motion } from "framer-motion";
import bg1 from "../assets/hero/bg-hero-component.jpg";
import bg2 from "../assets/hero/bg-hero-component-2.jpg";
import bg3 from "../assets/hero/bg-hero-component-3.jpg";
import bg4 from "../assets/hero/bg-hero-component-4.jpg";
import bg5 from "../assets/hero/bg-hero-component-5.jpg";
import bg6 from "../assets/hero/bg-hero-component-6.jpg";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const images = [bg1, bg2, bg3, bg4, bg5, bg6];
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="
        h-full
        w-full
        relative z-10
        bg-white/5
        backdrop-blur-xs
        border border-white/25
        rounded-[40px]
        px-8 py-12
        sm:px-12 sm:py-16
        md:px-16 md:py-20
        text-center
        text-white
        max-w-xl sm:max-w-3xl md:max-w-5xl
        mx-6
        shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        "
      >
        <motion.p
          variants={itemVariants}
          className="tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base mb-6"
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          variants={itemVariants}
          style={{ fontFamily: "Protest" }}
          className="font-serif font-light
                     text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
        >
          Andre
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{ fontFamily: "Protest" }}
          className="my-4 text-2xl sm:text-3xl md:text-4xl"
        >
          &
        </motion.p>

        <motion.h1
          variants={itemVariants}
          style={{ fontFamily: "Protest" }}
          className="font-serif font-light
                     text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
        >
          Diah
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 sm:mt-10 tracking-widest
                     text-xs sm:text-sm md:text-base"
        >
          25 • 03 • 2026
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
