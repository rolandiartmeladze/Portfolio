type Props = {
    total: number;
    currentIndex: number;
    onDotClick?: (index: number) => void;
  };
  
  export default function CarouselPoints({ total, currentIndex, onDotClick }: Props) {
    return (
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === index
                ? "bg-primary w-4"
                : "bg-background border border-primary"
            }`}
            onClick={() => onDotClick?.(index)}
          ></div>
        ))}
      </div>
    );
  }
  