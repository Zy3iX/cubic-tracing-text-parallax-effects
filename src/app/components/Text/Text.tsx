"use client";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { Gravitas_One, Great_Vibes } from "next/font/google";
import localFont from "next/font/local";
import { useRef } from "react";

const italic = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const regular = localFont({
  variable: "--font-regular",
  src: "../../../../public/fonts/EditorialNew-Regular.otf",
  weight: "400",
});

const pixelated = localFont({
  src: "../../../../public/fonts/fs-mondwest-regular.otf",
  weight: "400",
  variable: "--font-pixelated",
  declarations: [{ prop: "size-adjust", value: "170%" }],
});

const gravitas = Gravitas_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Text() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <motion.section ref={container} className="w-full h-[200svh] ">
      <motion.section
        style={{ opacity: opacity }}
        className={`${regular.className} justify-self-start sticky top-[20%] flex flex-col items-center mix-blend-difference text-[clamp(1.5rem,4vw,3rem)] md:text-[4rem, 6vw, 8rem] leading-tight text-white  uppercase`}
      >
        <p>
          <span
            className={`${italic.className} text-[clamp(2.2rem,4vw,4rem)] md:text-[clamp(2rem,6vw,4.4rem)] `}
          >
            A
          </span>
          khmetov
          <span
            className={`${italic.className} text-[clamp(2.2rem,4vw,4rem)] md:text-[clamp(2rem,6vw,4.4rem)] `}
          >
            I
          </span>
          skander
        </p>
        <p>selftaught front end</p>
        <p>
          <span
            className={`${pixelated.className} text-[clamp(2rem,5vw,4rem)]`}
          >
            Developer
          </span>
        </p>
        <p>
          Learning something ne<span className={`${italic.className}`}>w</span>
        </p>
        <p>
          <span className={`${gravitas.className} `}>everyday</span>
        </p>
        <p>based in </p>
        <p>
          Almaty
          <span className={`${pixelated.className}`}>©</span>
          2026
        </p>
      </motion.section>
    </motion.section>
  );
}
