import { useCallback, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface ProjectImageSliderProps {
  images: string[];
  alt: string;
}

export const ProjectImageSlider = ({ images, alt }: ProjectImageSliderProps) => {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    setIndex(0);
  }, [images]);

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + images.length) % images.length);
    },
    [images.length],
  );

  if (images.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-border-light dark:border-border-dark">
      <div className="relative flex h-[260px] w-full items-center justify-center bg-accent-blue/5 backdrop-blur-sm dark:bg-background-darkElevated/80 md:h-[340px] lg:h-[420px]">
        <img
          src={images[index]}
          alt={hasMultiple ? `${alt} — ${index + 1}/${images.length}` : alt}
          className="h-full w-full object-contain"
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border-light bg-background-lightElevated/90 text-text-lightPrimary backdrop-blur-sm transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:bg-background-darkElevated/90 dark:text-text-darkPrimary dark:hover:border-accent-blue dark:hover:text-accent-blue"
            >
              <HiChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border-light bg-background-lightElevated/90 text-text-lightPrimary backdrop-blur-sm transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:bg-background-darkElevated/90 dark:text-text-darkPrimary dark:hover:border-accent-blue dark:hover:text-accent-blue"
            >
              <HiChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="flex justify-center gap-1.5 border-t border-border-light py-2.5 dark:border-border-dark">
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Go to image ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2 w-2 rounded-full transition-colors ${
                dotIndex === index
                  ? "bg-accent-blue"
                  : "bg-border-light dark:bg-border-dark"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
