"use client";
import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["carousel"] = {
    "scrollContainer": {
        "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
        "snap": "snap-x"
  }
}

type Item = {
    id: string;
    src: string;
    alt: string;
    href: string;
  };
  
  type ItemCarouselProps = {
    items: Item[];
  };

export function CarouselItem({items}: ItemCarouselProps) {
  return (
    <div className="h-56 2xl:h-96 2xl:p-5">
      <Carousel theme={ customTheme } indicators={false}>
        {items?.map((item)=>(
            <a key={item.id}href={item.href}>
                <img key={item.id}src={item.src} alt={item.alt} />
            </a>
        ))}
      </Carousel>
    </div>
  );
}
