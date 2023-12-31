import { useEffect, useState } from "react";
import _ from "lodash";
import NavigationButton from "./NavigationButton";

interface SlideshowProps {
  images: any[];
  size: number;
}

export default function Slideshow({ images, size }: SlideshowProps) {
  const [current, setCurrent] = useState<number>(0);
  const [displayedImages, setDisplayedImages] = useState<any[]>([]);

  const handleShuffle = () => {
    setDisplayedImages(_.take(_.shuffle(images), size));
    setCurrent(0);
  };

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

  return (
    <>
      <div className="w-full flex overflow-hidden relative select-none group rounded-lg">
        {displayedImages.map((image) => (
          <img
            src={image.default.src}
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
            className={`w-4 h-4 md:w-2 md:h-2 rounded-full cursor-pointer ${
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
