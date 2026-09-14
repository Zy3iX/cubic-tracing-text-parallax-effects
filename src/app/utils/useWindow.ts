'use client'
import { useEffect, useState } from "react";

export function useWindow() {
  const [screen, setScreen] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const resize = () => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return { screen };
}
