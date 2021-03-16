import { useEffect, useRef, useState, useCallback } from "react";

const SOUND = "/birds-chirping.mp3";
export const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<HTMLAudioElement>();
  const toggle = useCallback(() => {
    setIsPlaying((isPlaying) => !isPlaying);
    if (isPlaying) {
      soundRef.current?.pause();
    } else {
      soundRef.current?.play();
    }
  }, [isPlaying]);
  useEffect(() => {
    const audio = new Audio(SOUND);
    audio.loop = true;
    soundRef.current = audio;
  }, []);
  return {
    isPlaying,
    togglePlay: toggle,
  };
};
