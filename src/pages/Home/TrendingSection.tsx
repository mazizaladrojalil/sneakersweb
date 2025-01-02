"use client";
import AnimateHeading from "@/components/AnimatedHeading";
import ItemGrid from "@/components/ItemGrid";
import cardImagesData from "../../../json/shoesImage.json"

export default function TrendingSection() {

    const cardsImage:typeof cardImagesData= cardImagesData;
    return(
        <div>
            <div className="w-100  m-5 flex justify-center">
                <div className="container p-2">
                    <AnimateHeading title="Trending" delay={1}/>
                    <ItemGrid items={cardsImage} />
                </div>
            </div>
        </div>
    )
};
