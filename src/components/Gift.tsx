import { motion } from "framer-motion";
import { useState } from "react";

const Gift = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);

    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-serif text-black">
          Wedding Gift
        </h2>
        <div className="w-20 h-[1px] bg-black/40 mx-auto mt-4" />
        <p className="mt-6 text-black/70 max-w-xl mx-auto text-sm md:text-base">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Jika
          ingin memberikan tanda kasih, dapat melalui rekening berikut.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Bank Card 1 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
            relative
            bg-white/5
            backdrop-blur-md
            border border-white/20
            rounded-[40px]
            p-10
            text-black
            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          "
        >
          <p className="text-sm uppercase tracking-widest text-black/60 mb-4">
            Bank BCA
          </p>

          <p className="text-xl md:text-2xl font-serif mb-2">1234567890</p>

          <p className="text-black/70 mb-6">a.n Andre Saputra</p>

          <button
            onClick={() => copyToClipboard("1234567890", "bca")}
            className="
              px-6 py-2
              border border-white/30
              rounded-full
              text-sm
              hover:bg-gray-300 hover:text-black
              transition duration-300
            "
          >
            {copied === "bca" ? "Tersalin ✓" : "Salin Rekening"}
          </button>
        </motion.div>

        {/* Bank Card 2 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
            relative
            bg-white/5
            backdrop-blur-md
            border border-white/20
            rounded-[40px]
            p-10
            text-black
            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          "
        >
          <p className="text-sm uppercase tracking-widest text-black/60 mb-4">
            Bank Mandiri
          </p>

          <p className="text-xl md:text-2xl font-serif mb-2 text-black">
            9876543210
          </p>

          <p className="text-black/70 mb-6">a.n Diah Permata</p>

          <button
            onClick={() => copyToClipboard("9876543210", "mandiri")}
            className="
              px-6 py-2
              border border-white/30
              rounded-full
              text-sm
              hover:bg-gray-300 hover:text-black
              transition duration-300
            "
          >
            {copied === "mandiri" ? "Tersalin ✓" : "Salin Rekening"}
          </button>
        </motion.div>
      </div>

      {/* Optional QR Section */}
      <div className="mt-20 text-center">
        <p className="text-black/60 mb-6">Atau melalui QRIS berikut</p>

        <div
          className="
          inline-block
          bg-white/5
          backdrop-blur-md
          border border-white/20
          rounded-[30px]
          p-6
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        "
        >
          <img
            src="/assets/qris.png"
            alt="QRIS"
            className="w-40 md:w-52 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Gift;
