import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
};

const formatNumber = (num: number) => String(num).padStart(2, "0");

function Countdown() {
  const targetDate = new Date("2026-06-20T09:00:00");

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

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
        <h2
          style={{ fontFamily: "Protest" }}
          className="text-2xl md:text-4xl font-serif text-black">
          Menuju Hari Bahagia
        </h2>
        <div className="w-20 h-[1px] bg-white/40 mx-auto mt-4" />
      </motion.div>

      {/* Countdown Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { label: "Hari", value: formatNumber(timeLeft.days) },
          { label: "Jam", value: formatNumber(timeLeft.hours) },
          { label: "Menit", value: formatNumber(timeLeft.minutes) },
          { label: "Detik", value: formatNumber(timeLeft.seconds) },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="
              relative
              bg-white/5
              backdrop-blur-md
              border border-white/20
              rounded-[30px]
              py-8
              text-center
              text-black
              shadow-[0_10px_40px_rgba(0,0,0,0.15)]
            "
          >
            <div className="text-3xl md:text-5xl font-serif mb-2">
              {item.value}
            </div>
            <div className="text-xs md:text-sm tracking-widest uppercase text-black/70">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Countdown;
