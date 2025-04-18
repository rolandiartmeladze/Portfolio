import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImgurImage {
  id: string;
  title: string;
  link: string;
}

export default function ProjectImages({ albumHash, projectName }: { albumHash: string, projectName: string }) {
  const [images, setImages] = useState<ImgurImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch(`/api/imgur?album=${albumHash}`);
      const data = await res.json();
      setImages(data);
      setLoading(false);
    }

    fetchImages();
  }, [albumHash]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isDialogOpen && slideRefs.current[currentIndex]) {
      slideRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex, isDialogOpen]);
  if (loading) return <p>Loading images...</p>;

  return (
    <>
      {images.map((image, index) => (
        <CarouselItem
          key={image.id}
          className="max-w-[230px] flex justify-center"
        >
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div onClick={() => {
                setCurrentIndex(index);
                setIsDialogOpen(true);
              }} className="flex items-center justify-center w-full h-full">
                <Image
                  width={250}
                  height={180}
                  src={image.link}
                  alt={image.title || `Image ${index + 1}`}
                  className="rounded-md object-cover cursor-pointer"
                />
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold">
                  {`${projectName} Project Image ${currentIndex + 1} / ${images.length}`}
                </DialogTitle>
              </DialogHeader>

              <Carousel className="w-full">
                <CarouselContent className="flex gap-3">
                  {images.map((img, idx) => (
                    <CarouselItem
                      key={img.id}
                      className="flex justify-center items-center"
                      ref={(el) => {
                        slideRefs.current[idx] = el;
                      }}
                    >
                      <Image
                        width={600}
                        height={400}
                        src={images[currentIndex].link}
                        alt={img.title || "Project Image"}
                        className="rounded-lg object-cover transition-all duration-300"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  onClick={handlePrev}
                  className="absolute left-0 z-10"
                />
                <CarouselNext
                  onClick={handleNext}
                  className="absolute right-0 z-10"
                />
              </Carousel>
            </DialogContent>
          </Dialog>
        </CarouselItem>
      ))}
    </>
  );
}
