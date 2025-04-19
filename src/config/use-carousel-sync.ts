import { useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export function useCarouselSync(
  carouselApi: CarouselApi | null,
  setIndex: (index: number) => void
) {
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, setIndex]);
}
