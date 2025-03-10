import SectionHeader from "@/components/ui/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carusel";

export default function Projects() {
  return (
    <section className="container h-[98vh] lg:w-[96%]">
      <SectionHeader label="Projects" className="mb-4">
        <samp>4</samp>
      </SectionHeader>

      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>... </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
