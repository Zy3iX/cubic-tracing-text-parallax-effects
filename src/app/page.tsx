"use client";

import Layer from "./components/Layer/Layer";
import Text from "./components/Text/Text";

export default function Home() {
  return (
    <main className="bg-[rgb(18,18,18)] w-full h-full">
      <section className="w-full h-[400vh] ">
        <Layer />
        <Text />
      </section>
      <div className="h-[200vh]"></div>
    </main>
  );
}
