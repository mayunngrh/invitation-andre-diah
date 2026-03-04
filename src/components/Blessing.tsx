import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

const Blessing = () => {
  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#8B6B3E] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Icon Circle */}
        <div className="flex justify-center mb-10">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-white/60 flex items-center justify-center">
            <HeartHandshake size={48} strokeWidth={1.5} />
          </div>
        </div>

        {/* Text */}
        <p className="text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
          Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
          pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan,
          tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu. tes
        </p>

        {/* Author */}
        <div className="mt-10 flex justify-center items-center gap-3 text-lg md:text-xl italic">
          <span className="bg-white text-[#8B6B3E] px-2 py-1 rounded">≡</span>
          <span>RG VEDA X.85.42.</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Blessing;
