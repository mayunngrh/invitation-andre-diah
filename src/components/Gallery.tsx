import { motion } from "framer-motion";
import image1 from "../assets/gallery/gallery-1.jpg";
import image2 from "../assets/gallery/gallery-2.jpg";
import image3 from "../assets/gallery/gallery-3.jpg";
import image4 from "../assets/gallery/gallery-4.jpg";
import image5 from "../assets/gallery/gallery-5.jpg";
import image6 from "../assets/gallery/gallery-6.jpg";
import image7 from "../assets/gallery/gallery-7.jpg";
import image8 from "../assets/gallery/gallery-8.jpg";
import image9 from "../assets/gallery/gallery-9.jpg";
import image10 from "../assets/gallery/gallery-10.jpg";
import image11 from "../assets/gallery/gallery-11.jpg";
import image12 from "../assets/gallery/gallery-12.jpg";
import image13 from "../assets/gallery/gallery-13.jpg";
import image14 from "../assets/gallery/gallery-13.jpg";
import image15 from "../assets/gallery/gallery-13.jpg";
import image16 from "../assets/gallery/gallery-13.jpg";
import image17 from "../assets/gallery/gallery-13.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
];

const Gallery = () => {
  const duplicatedImages = [...images, ...images];

  return (
    <section className="relative  overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-serif text-black">
          Galeri Foto
        </h2>
        <div className="w-20 h-[1px] bg-white/40 mx-auto mt-4" />
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative py-12">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {duplicatedImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="
                min-w-[70%]
                sm:min-w-[45%]
                md:min-w-[30%]
                lg:min-w-[22%]
                rounded-[30px]
                overflow-hidden
                bg-white/5
                backdrop-blur-md
                border border-white/20
                shadow-[0_10px_40px_rgba(0,0,0,0.15)]
              "
            >
              <img
                src={src}
                alt="gallery"
                className="w-full h-[300px] object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
