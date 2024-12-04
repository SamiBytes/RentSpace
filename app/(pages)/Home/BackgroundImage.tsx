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
      <CarouselContent className="h-[70vh]">
        {images.map((item, index) => (
          <CarouselItem key={index}>
            <img src={item} className="object-cover" alt="" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
