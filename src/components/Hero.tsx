import { motion } from "framer-motion";
import bgHeroComponent from "../assets/hero/bg-hero-component.jpg";

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
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHeroComponent})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
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
