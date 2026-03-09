import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import image14 from "../assets/gallery/gallery-14.jpg";
import image15 from "../assets/gallery/gallery-15.jpg";
import image16 from "../assets/gallery/gallery-16.jpg";
import image17 from "../assets/gallery/gallery-17.jpg";

import image18 from "../assets/gallery/gallery-18.jpg";
import image19 from "../assets/gallery/gallery-19.jpg";
import image20 from "../assets/gallery/gallery-20.jpg";
import image21 from "../assets/gallery/gallery-21.jpg";
import image22 from "../assets/gallery/gallery-22.jpg";
import image23 from "../assets/gallery/gallery-23.jpg";
import image24 from "../assets/gallery/gallery-24.jpg";
import image25 from "../assets/gallery/gallery-25.jpg";
import image26 from "../assets/gallery/gallery-26.jpg";
import image27 from "../assets/gallery/gallery-27.jpg";
import image28 from "../assets/gallery/gallery-28.jpg";
import image29 from "../assets/gallery/gallery-29.jpg";
import image30 from "../assets/gallery/gallery-30.jpg";
import image31 from "../assets/gallery/gallery-31.jpg";
import image32 from "../assets/gallery/gallery-32.jpg";
import image33 from "../assets/gallery/gallery-33.jpg";
import image34 from "../assets/gallery/gallery-34.jpg";
import image35 from "../assets/gallery/gallery-35.jpg";
import image36 from "../assets/gallery/gallery-36.jpg";
import image37 from "../assets/gallery/gallery-37.jpg";
import image38 from "../assets/gallery/gallery-38.jpg";

const Gallery = () => {
  const group1 = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9,
    image10, image11, image12, image13, image14, image15, image16, image17
  ];

  const group2 = [
    image18, image19, image20, image21, image22, image23, image24, image25,
    image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38
  ];

  const images = [];

  for (let i = 0; i < group1.length; i++) {
    images.push(group1[i]);
    if (group2[i]) images.push(group2[i]);
  }

  const duplicatedImages = [...images];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="relative overflow-hidden py-24">

      {/* Title */}
      <div className="text-center mb-16">
        <h2
          className="text-2xl md:text-4xl font-serif text-black uppercase tracking-[0.3em]"
        >
          Galeri Foto
        </h2>
        <div className="w-20 h-[1px] bg-black/40 mx-auto mt-4" />
      </div>

      {/* Scroll Gallery */}
      <div
        className="overflow-x-auto scrollbar-hide"
        style={{
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x"
        }}
      >
        <div className="flex gap-6 px-6 py-12 w-max">

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
                cursor-pointer
                shadow-lg
              "
              onClick={() => setSelectedIndex(index % images.length)}
            >
              <img
                src={src}
                alt="gallery"
                className="w-full h-[320px] object-cover"
              />
            </motion.div>
          ))}

        </div>
      </div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-4xl"
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            />

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-4xl"
            >
              ›
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;