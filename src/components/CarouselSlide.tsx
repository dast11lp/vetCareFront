import React from "react"
import { CarouselCard } from "./CarouselCard"
import { CardSliderContent } from "../types/CardSliderContent"

interface Props {
    content: CardSliderContent[]
}

export const CarouselSlide: React.FC<Props> = ({ content }) => {

    console.log(content);
    

    return (
        <div className="slide" >
            {
                content?.length > 0 && content?.map((el, i) => (
                    <CarouselCard content={el} key={i}/>
                ))
            }

            {/* <CarouselCard />
            <CarouselCard /> */}
        </div>
    )
}
