import { motion } from "framer-motion";
import thanksBg from "../assets/thanks/bg-thanks.jpg";

const Thanks = () => {
    return (
        <section className="relative py-28 px-6 md:px-16 overflow-hidden">

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${thanksBg})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto text-white">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    <h2
                        className="text-2xl md:text-4xl mb-10 uppercase tracking-[0.3em]"
                    >
                        Terima Kasih
                    </h2>

                    {/* Bahasa Indonesia */}
                    <p className="leading-relaxed mb-6">
                        Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
                        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
                        kepada kami.
                    </p>

                    <p className="leading-relaxed mb-10">
                        Atas kehadiran dan doa restunya kami ucapkan terima kasih.
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-[1px] bg-white/50 mx-auto mb-10"></div>

                    {/* Bahasa Bali */}
                    <p className="leading-relaxed mb-6 italic">
                        Dumogi Ida Sang Hyang Widhi Wasa mapica kerahayuan ring iraga
                        sareng sami.
                    </p>

                    <p className="leading-relaxed mb-10 italic">
                        Matur suksma antuk rawuh miwah doa restu sane sampun kapica.
                    </p>

                    {/* Couple */}
                    <p className="font-serif text-lg">
                        Kami yang berbahagia
                    </p>

                    <p
                        style={{ fontFamily: "Protest" }}
                        className="text-3xl mt-3 font-serif mb-12">
                        Andre & Diah
                    </p>

                    {/* Credit */}
                    <p className="text-xs text-white/60 tracking-wide">
                        Digital Invitation crafted with ❤️ by <span className="font-medium">Semeton Corp</span>
                    </p>

                </motion.div>

            </div>
        </section>
    );
};

export default Thanks;