import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const EventDetail = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-4xl font-serif text-black">
          Detail Acara
        </h2>
        <div className="w-20 h-[1px] bg-white/40 mx-auto mt-4" />
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Akad */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            bg-white/5
            backdrop-blur-md
            border border-white/20
            rounded-[40px]
            p-10
            text-center
            text-black
            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          "
        >
          <h3 className="text-xl md:text-2xl font-serif mb-6">Akad Nikah</h3>

          <p className="mb-2 text-sm uppercase tracking-widest text-black/70">
            Tanggal
          </p>
          <p className="mb-6 text-lg">Sabtu, 20 Juni 2026</p>

          <p className="mb-2 text-sm uppercase tracking-widest text-black/70">
            Waktu
          </p>
          <p className="mb-6 text-lg">09.00 WITA</p>

          <p className="mb-2 text-sm uppercase tracking-widest text-black/70">
            Lokasi
          </p>
          <p className="text-lg">
            Gedung Serbaguna Bali
            <br />
            Denpasar, Bali
          </p>
        </motion.div>

        {/* Resepsi */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            relative
            bg-white/5
            backdrop-blur-md
            border border-white/20
            rounded-[40px]
            p-10
            text-center
            text-black
            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          "
        >
          <h3 className="text-xl md:text-2xl font-serif mb-6">Resepsi</h3>

          <p className="mb-2 text-sm uppercase tracking-widest text-black/70">
            Tanggal
          </p>
          <p className="mb-6 text-lg">Sabtu, 20 Juni 2026</p>

          <p className="mb-2 text-sm uppercase tracking-widest text-black/70">
            Waktu
          </p>
          <p className="mb-6 text-lg">12.00 – 15.00 WITA</p>

          <p className="mb-2 text-sm uppercase tracking-widest text-black/70">
            Lokasi
          </p>
          <p className="text-lg">
            Gedung Serbaguna Bali
            <br />
            Denpasar, Bali
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetail;
