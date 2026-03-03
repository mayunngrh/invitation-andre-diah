import { motion } from "framer-motion";
import bride1 from "../assets/bride-groom/bridge-1.jpg";
import groom1 from "../assets/bride-groom/groom-1.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const BrideGroom = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden bg-gray-100">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-4xl font-serif text-gray-800">
          Mempelai
        </h2>
        <div className="w-20 h-[1px] bg-gray-400 mx-auto mt-4" />
      </motion.div>

      {/* Container */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Groom */}
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
            border border-gray-200/30
            rounded-[40px]
            p-8
            text-center
            min-h-140
            shadow-[0_10px_40px_rgba(0,0,0,0.2)]
          "
        >
          <div className="flex justify-center mb-6 min-h-100">
            <img
              src={groom1}
              alt="Andre"
              className=" object-cover rounded-2xl border-4 border-white/40 shadow-lg"
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">
            Andre Saputra
          </h3>

          <p className="text-sm text-gray-600">Putra dari</p>
          <p className="text-sm text-gray-600">Bapak .... & Ibu ....</p>
        </motion.div>

        {/* Bride */}
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
            border border-gray-200/30
            rounded-[40px]
            p-8
            text-center
            min-h-140
            shadow-[0_10px_40px_rgba(0,0,0,0.2)]
          "
        >
          <div className="flex justify-center mb-6 min-h-100">
            <img
              src={bride1}
              alt="Diah"
              className=" object-cover border-4 rounded-2xl border-white/40 shadow-lg"
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">
            Diah Permata
          </h3>

          <p className="text-sm text-gray-600">Putri dari</p>
          <p className="text-sm text-gray-600">Bapak .... & Ibu ....</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrideGroom;
