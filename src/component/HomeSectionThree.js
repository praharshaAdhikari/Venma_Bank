import protection from "./image/protection.png"
import tracking from "./image/tracking.png"
import flexibility from "./image/flexibility.png"
import easiness from "./image/easiness.png"
import HoverCard from "./HoverCard"

import {React, useState} from "react"

export default function HomeSectionThree(){
    const [changeColor, setChangeColor] = useState("")
    const imageArray = [protection, tracking, flexibility, easiness]
    const titleArray = ["protection", "tracking", "flexibility", "easiness"]
    const cardsEl = imageArray.map(image=> {
        return(
            <HoverCard
                key = {imageArray.indexOf(image)}
                title = {titleArray[imageArray.indexOf(image)]}
                img = {image}
                description = "Etiam ut neque non ipsum maximus condim."
            />
        )
    })
    return(
        <div className="home--section--three--main" data-aos="fade-down" data-aos-duration="800">
            <div className= {`home--section--three--card`}>
                {cardsEl}
            </div>
            <div className="home--section--three--text">
                <p className="highlighted">Our Features</p>
                <h1 className="topic">Enjoy a Better Payment Experience</h1>
                <p className="about">Mauris lobortis ultricies nunc, eget varius massa mattis ac. Suspendisse pharetra tortor in nunc dapibus vehicula. Fusce molestie nisl ante, non tincidunt.</p>
                <a href="/Venma_Bank/" className={"button " + changeColor} onMouseEnter={() => setChangeColor("button--hover")} onMouseLeave={() => setChangeColor("")}>Get Started</a>
            </div>
        </div>
    )
}