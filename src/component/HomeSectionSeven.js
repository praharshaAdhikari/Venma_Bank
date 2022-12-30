import form from "./image/form.png"
import approval from "./image/approval.png"
import get_card from "./image/get_card.png"
import how_we_work from "./image/how_we_work.jpg"

import {React, useState} from "react"

export default function HomeSectionSeven(){
    const stepsArray = [
        {
            image: form,
            title: "Fill our Forms",
            description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
        },
        {
            image: approval,
            title: "Wait for Approval",
            description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
        },
        {
            image: get_card,
            title: "Get your new card",
            description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
        },
    ]
    const [isHovering, setIsHovering] = useState(-1)
    const stepEl = stepsArray.map(item => {
        return(
            <div 
                key={stepsArray.indexOf(item)} 
                className={`home--section--seven--step ${isHovering===stepsArray.indexOf(item) ? `home--section--seven--step--hover` : ``}`}
                onMouseEnter={()=>setIsHovering(stepsArray.indexOf(item))}
                onMouseLeave={()=>setIsHovering(-1)}
            >
                <p className="step--title">Step 0{stepsArray.indexOf(item) + 1}</p>
                <img src={item.image} alt="step" className="step--image"/>
                <div className="step--text">
                    <p className="step--title">{item.title}</p>
                    <p className="step--description">{item.description}</p>
                </div>
            </div>
        )
    })
    return(
        <div className="home--section--seven--main" data-aos="fade-up" data-aos-duration="800">
            <img src={how_we_work} alt="how we work" className="home--section--seven--image"/>
            <div className="home--section--seven--text">
                <p className="highlighted">how we work</p>
                <h1 className="topic">Enabling Global Financial Inclusion</h1>
                <div className="home--section--seven--steps">
                    {stepEl}
                </div>
            </div>
        </div>
    )
}