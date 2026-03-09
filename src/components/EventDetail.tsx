import { motion } from "framer-motion";
import eventBg from "../assets/event-detail/bg-event-detail.jpg";

const EventDetail = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${eventBg})` }}
      />

      {/* Overlay */}

      {/* Container */}
      <div className="relative z-10 w-full flex justify-center md:justify-start px-6 md:px-20">

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
          w-full
          h-full
          max-w-sm
          sm:max-w-md
          md:max-w-lg
          md:w-[50%]
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-[32px] sm:rounded-[48px]
          px-6 py-10
          sm:px-10 sm:py-14
          text-white
          text-center
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          "
        >
          {/* Title */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.3em]"
          >
            Detail Acara
          </h2>
          <div className="w-20 h-[1px] bg-gray-400 mx-auto mt-4 mb-10 " />


          {/* Resepsi */}
          <div className="space-y-3 sm:space-y-4">
            <p className="tracking-[0.35em] text-[10px] sm:text-xs uppercase text-white/70">
              Resepsi
            </p>

            <p className="text-sm sm:text-base">Rabu</p>

            <p className="text-2xl sm:text-3xl font-serif">25</p>

            <p className="text-sm sm:text-base">Maret 2026</p>

            <p className="text-sm sm:text-base">14.00 WITA</p>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Br. Trijata Mambal Gg. Kenyeri 1 No. 3
              <br />
              (Belakang Pasar Mambal)
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default EventDetail;