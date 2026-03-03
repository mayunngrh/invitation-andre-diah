import { motion } from "framer-motion";

const Maps = () => {
  // nanti ganti dengan koordinat asli
  const latitude = -8.670458;
  const longitude = 115.212629;

  const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  const openMapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

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
          Lokasi Acara
        </h2>
        <div className="w-20 h-[1px] bg-black/40 mx-auto mt-4" />
      </motion.div>

      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          bg-white/5
          backdrop-blur-md
          border border-white/20
          rounded-[40px]
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          p-6 md:p-10
          max-w-6xl
          mx-auto
        "
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Address */}
          <div className="text-black">
            <h3 className="text-xl md:text-2xl font-serif mb-6">
              Gedung Serbaguna Bali
            </h3>

            <p className="text-black/80 mb-6">
              Jl. Contoh Alamat No. 123 <br />
              Denpasar, Bali
            </p>

            <a
              href={openMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-6 py-3
                border border-white/30
                rounded-full
                text-sm
                hover:bg-white hover:text-black
                transition duration-300
              "
            >
              Buka di Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/20">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              className="rounded-2xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Maps;
