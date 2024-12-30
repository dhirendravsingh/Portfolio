"use client";

import { useTheme } from "@/context/theme-context";
import React, { useRef, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);


  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    toggleTheme();
  };

  return (
    <>
      <button
        className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={handleClick}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
      <audio ref={audioRef} style={{ display: "none" }}>
        <source src="/click2.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}