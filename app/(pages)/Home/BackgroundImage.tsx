"use client";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function BackgroundImage() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

  return (
    <Carousel plugins={[plugin.current]}>
      <CarouselContent className="h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {images.map((item, index) => (
          <CarouselItem key={index}>
            <img
              src={item}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
