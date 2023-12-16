import { useState, useEffect } from "react";
import _ from "lodash";
import NavigationButton from "./NavigationButton";

interface SlideshowProps {
  images: string[];
  size: number;
}

export default function Slideshow({ images, size }: SlideshowProps) {
  const [current, setCurrent] = useState<number>(0);
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);

  useEffect(() => {
    handleShuffle();
  }, []);

  const handleNextImage = () => {
    if (current + 1 >= displayedImages.length) {
      setCurrent(0);
      return;
    }

    setCurrent((prev) => prev + 1);
  };

  const handlePrevImage = () => {
    if (current - 1 < 0) {
      setCurrent(displayedImages.length - 1);
      return;
    }

    setCurrent((prev) => prev - 1);
  };

  const handleShuffle = () => {
    setDisplayedImages(_.take(_.shuffle(images), size));
    setCurrent(0);
  };

  return (
    <>
      <div className="w-full flex overflow-hidden relative select-none group rounded-lg">
        {displayedImages.map((image) => (
          <img
            src={image}
            alt=""
            key={image}
            className="rounded-lg transition-all"
            style={{ transform: `translateX(${current * -100}%)` }}
          />
        ))}

        <NavigationButton side="left" onClick={handlePrevImage} />
        <NavigationButton side="right" onClick={handleNextImage} />
      </div>

      <div className="flex justify-center my-2 gap-2 md:gap-1">
        {displayedImages.map((_, index) => (
          <div
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "border border-white"
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>

      <button
        className="mt-4 bg-bluom-select-tint p-4 hover:bg-bluom-select focus:bg-bluom-select"
        onClick={handleShuffle}
      >
        New collection
      </button>
    </>
  );
}
