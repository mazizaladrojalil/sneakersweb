"use client";
import {CarouselItem} from "@/components/Carousel";
import ParallaxText from "@/components/ParalaxText";

import carouselImageData from "../../../json/carouselImage.json"

export default function Hero() {
    const carouselImage: typeof carouselImageData = carouselImageData;
    return (
        <div className="w-full">
            <div className="mt-10 w-full overflow-hidden mb-10">
                <CarouselItem items={carouselImage}/>
                <div className="mt-5">
                    <ParallaxText direction={500} baseVelocity={-5}>SNEAKERS HEAD SNEAKERS HEAD</ParallaxText>
                </div>
            </div>
        </div>
    )
};
