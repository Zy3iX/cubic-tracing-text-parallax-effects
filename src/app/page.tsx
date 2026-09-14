"use client";

import { useEffect } from "react";
import Layer from "./components/Layer/Layer";
import Text from "./components/Text/Text";
import { useWindow } from "./utils/useWindow";

export default function Home() {
  const { screen } = useWindow();
  useEffect(() => {
    if (!screen) return;
    console.log(screen);
  }, [screen]);

  return (
    <main className="bg-[rgb(18,18,18)] w-full h-full">
      <section className="w-full h-[400vh] ">
        {screen ? screen?.width > 640 && <Layer /> : <></>}
        <Text />
      </section>
      <div className="h-[200vh]"></div>
    </main>
  );
}
