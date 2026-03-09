import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bgmusic from "../assets/music/bg-music.mp3";

import BrideGroom from "../components/BrideGroom";
import Countdown from "../components/Countdown";
import Cover from "../components/Cover";
import EventDetail from "../components/EventDetail";
import Gallery from "../components/Gallery";
import Gift from "../components/Gift";
import Greetings from "../components/Greetings";
import Hero from "../components/Hero";
import Maps from "../components/Maps";
import Blessing from "../components/Blessing";
import Thanks from "../components/Thanks";

function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!isOpened || !audioRef.current) return;

    const audio = audioRef.current;

    const targetVolume = 0.5;
    const fadeDuration = 2000;
    const stepTime = 100;
    const volumeStep = targetVolume / (fadeDuration / stepTime);

    const fadeInterval = setInterval(() => {
      if (audio.volume < targetVolume) {
        audio.volume = Math.min(audio.volume + volumeStep, targetVolume);
      } else {
        clearInterval(fadeInterval);
      }
    }, stepTime);

    return () => clearInterval(fadeInterval);
  }, [isOpened]);

  return (
    <div className="font-serif">
      <audio ref={audioRef} loop playsInline muted>
        <source src={bgmusic} type="audio/mpeg" />
      </audio>

      {!isOpened && <Cover
        onOpen={() => {
          const audio = audioRef.current;

          if (audio) {
            audio.muted = false;
            audio.volume = 0;

            const playPromise = audio.play();

            if (playPromise !== undefined) {
              playPromise.catch(() => { });
            }
          }

          setIsOpened(true);
        }}
      />}

      {/* main invitation part */}
      <Hero />
      <Blessing />
      <BrideGroom />
      <Countdown />
      <EventDetail />
      <Maps />
      <Gallery />
      <Greetings />
      <Thanks />
    </div>
  );
}

export default Home;
