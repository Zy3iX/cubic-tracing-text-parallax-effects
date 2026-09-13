import { useWindow } from "../../utils/useWindow";

export default function Layer() {
  const { screen } = useWindow();
  if (!screen) return;

  function getBlocks() {
    if (!screen) return;

    const blockSize = screen.width * 0.05;
    const amountOfBlocks = Math.ceil(screen.height / blockSize);

    return [...Array(amountOfBlocks).keys()].map((_, i) => {
      return (
        <div
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          className="w-full h-[5vw]"
          key={i}
        ></div>
      );
    });
  }

  function colorize(eventTarget: EventTarget) {
    if (eventTarget instanceof HTMLDivElement) {
      eventTarget.classList.add("bg-white");
      setTimeout(() => {
        eventTarget.classList.remove("bg-white");
      }, 500);
    }
  }

  return (
    <section className="w-full h-screen absolute z-999 mix-blend-difference ">
      {
        <div className="w-full h-full flex overflow-hidden">
          {screen.width > 0 &&
            [...Array(20).keys()].map((_, i) => {
              return (
                <div key={"b_" + i} className="w-[5vw]">
                  {getBlocks()}
                </div>
              );
            })}
        </div>
      }
    </section>
  );
}
