import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative w-[60vw] max-sm:w-[90vw] items-center">
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between max-lg:hidden">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow text-gray-400 hover:text-gray-500"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow text-gray-400 hover:text-gray-500"
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={()=>setCurr(i)}
              className={`
              transition-all w-2 h-2 bg-white rounded-full duration-300
              ${curr === i ? "p-1 w-5" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
