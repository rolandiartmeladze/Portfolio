"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import CarouselPoints from "@/components/ui/carousel-points";
import { useCarouselSync } from "@/config/use-carousel-sync";

interface ImgurImage {
  id: string;
  title: string;
  link: string;
}

export default function ProjectImages({
  albumHash,
  projectName,
}: {
  albumHash: string;
  projectName: string;
}) {
  const [images, setImages] = useState<ImgurImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useCarouselSync(carouselApi, setCurrentIndex);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch(`/api/imgur?album=${albumHash}`);
      const data = await res.json();
      setImages(data);
      setLoading(false);
    }

    fetchImages();
  }, [albumHash]);

  useEffect(() => {
    if (isDialogOpen && carouselApi) {
      carouselApi.scrollTo(currentIndex);
    }
  }, [isDialogOpen, currentIndex, carouselApi]);

  if (loading)
    return (
      <p className="flex items-center w-full justify-center h-full">
        Loading images...
      </p>
    );

  return (
    <>
      {images.map((image, index) => (
        <CarouselItem
          key={image.id}
          className="w-full sm:max-w-[230px] flex justify-center"
        >
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div
                onClick={() => {
                  setCurrentIndex(index);
                  setIsDialogOpen(true);
                }}
                className="relative w-full aspect-[4/3] max-w-xs"
              >
                <Image
                  fill
                  src={image.link}
                  alt={image.title || `Image ${index + 1}`}
                  className="rounded-md object-cover cursor-pointer"
                />
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-6xl w-full">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold flex justify-start items-center">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-background shadow-md border border-border">
                    <h3 className="text-2xl font-bold text-primary tracking-wide">
                      {projectName}
                    </h3>

                    <Separator
                      orientation="vertical"
                      className="h-6 w-[2px] bg-primary rounded-full opacity-70"
                    />

                    <div className="text-xl font-medium text-foreground flex items-center gap-1">
                      <samp className="text-primary transition-all duration-300">
                        {currentIndex + 1}
                      </samp>
                      <span className="opacity-60">/</span>
                      <samp className="text-muted-foreground">{images.length}</samp>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <Carousel setApi={setCarouselApi} className="w-full mt-4">
                <CarouselContent className="flex gap-4">
                  {images.map((img) => (
                    <CarouselItem
                      key={img.id}
                      className="flex justify-center items-center w-full"
                    >
                      <div className="relative w-full aspect-video max-h-[80vh]">
                        <Image
                          fill
                          src={img.link}
                          alt={img.title || "Project Image"}
                          className="rounded-lg object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPoints
                  total={images.length}
                  currentIndex={currentIndex}
                  onDotClick={(index) => carouselApi?.scrollTo(index)}
                />
              </Carousel>
            </DialogContent>
          </Dialog>
        </CarouselItem>
      ))}
    </>
  );
}
