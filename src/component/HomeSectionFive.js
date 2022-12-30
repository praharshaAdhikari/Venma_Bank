import HoverCard from "./HoverCard"
import credit_cards from "./image/credit_cards.png"
import loans_and_credit from "./image/loans_and_credit.png"
import virtual_ccs from "./image/virtual_ccs.png"
import investments from "./image/investments.png"
import properties from "./image/properties.png"
import book_keeping from "./image/book_keeping.png"

import React from "react"

export default function HomeSectionFive(){
    const imagesArray = [credit_cards, loans_and_credit, virtual_ccs, investments, properties, book_keeping]
    const titleArray = ["credit cards", "loans & credit", "virtual CCs", "investments", "properties", "book keeping"]
    const hoverCardsEl = imagesArray.map(image => {
        return(
            <HoverCard
                key = {imagesArray.indexOf(image)}
                title = {titleArray[imagesArray.indexOf(image)]}
                img = {image}
                description = "Suspendisse vel laoreet eros. Vivamus a risus eget nisl ultrices dignissim euismod vitae dui. Proin nec scelerisque velit."
            />
        )
    })
    return(
        <div className="home--section--five--main" data-aos="fade-up" data-aos-duration="800">
            <p className="highlighted">our services</p>
            <h1 className="topic">Bringing Banking to Everyone</h1>
            <div className="home--section--five--hovercards">
                {hoverCardsEl}
            </div>
        </div>
    )
}