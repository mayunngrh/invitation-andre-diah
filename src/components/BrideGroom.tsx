import { motion } from "framer-motion";
import bride1 from "../assets/bride-groom/bride-1.jpg";
import bride2 from "../assets/bride-groom/bride-2.jpg";
import groom1 from "../assets/bride-groom/groom-1.jpg";
import groom2 from "../assets/bride-groom/groom-2.jpg";

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
        <h2
          className="text-2xl md:text-4xl font-serif text-gray-800 uppercase tracking-[0.3em]"
        >
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
          className="relative bg-white/5 backdrop-blur-md border border-gray-200/30 rounded-[40px] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
        >

          <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-2xl group">

            {/* Image 1 */}
            <motion.img
              src={groom1}
              alt="Andre"
              className="absolute inset-0 w-full h-full object-cover border-4 border-white/40 shadow-lg rounded-2xl"
              initial={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

            {/* Image 2 */}
            <motion.img
              src={groom2}
              alt="Andre Hover"
              className="absolute inset-0 w-full h-full object-cover border-4 border-white/40 shadow-lg rounded-2xl"
              initial={{ opacity: 0, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.03 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

          </div>

          <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">
            I Gusti Made Bagus Andrean Permana Putra, SE
          </h3>

          <p className="text-sm text-gray-300">Putra dari</p>

          <p className="text-sm text-gray-500">
            Drs. I Gusti Nyoman Nuja
            <span className="text-gray-300"> & </span>
            Gusti Nyoman Astiti
          </p>

        </motion.div>

        {/* Bride */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white/5 backdrop-blur-md border border-gray-200/30 rounded-[40px] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
        >

          <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-2xl group">

            {/* Image 1 */}
            <motion.img
              src={bride1}
              alt="Diah"
              className="absolute inset-0 w-full h-full object-cover border-4 border-white/40 shadow-lg rounded-2xl"
              initial={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

            {/* Image 2 */}
            <motion.img
              src={bride2}
              alt="Diah Hover"
              className="absolute inset-0 w-full h-full object-cover border-4 border-white/40 shadow-lg rounded-2xl"
              initial={{ opacity: 0, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.03 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

          </div>

          <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">
            drg. I Gusti Ayu Putu Diah Suryani
          </h3>

          <p className="text-sm text-gray-300">Putri dari</p>

          <p className="text-sm text-gray-500">
            I Gusti Made Sujana Yasa, SE
            <span className="text-gray-300"> & </span>
            I Gusti Ayu Made Aryasih, S.KM, M.Si
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default BrideGroom;