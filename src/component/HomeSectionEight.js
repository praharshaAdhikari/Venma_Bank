import achievements from "./image/achievements.jpg"

import {React, useState} from "react"

export default function HomeSectionEight(){
    const [changeColor, setChangeColor] = useState("")
    const blocksArray = [
        {
            stats: "500 K",
            end: "+",
            info: "active customers"
        },
        {
            stats: "99.5",
            end: "%",
            info: "customer satisfaction"
        },
        {
            stats: "72.5",
            end: "%",
            info: "yearly growth"
        },
        {
            stats: "410 B",
            end: "+",
            info: "money managed"
        },
    ]
    const blockEl= blocksArray.map(item=>{
        return(
            <div className="home--section--eight--block" key={blocksArray.indexOf(item)}>
                <p className="block--stats">
                    {item.stats}
                    <span className="block--end">{item.end}</span>
                </p>
                <p className="block--info">{item.info}</p>
            </div>
        )
    })
    return(
        <div className="home--section--eight--main container" data-aos="fade-up" data-aos-duration="800">
            <p className="highlighted">achievements</p>
            <div className="home--section--eight--title">
                <h1 className="topic">The Next Generation of Banking</h1>
                <a href="/#" className={"button " + changeColor} onMouseEnter={() => setChangeColor("button--hover")} onMouseLeave={() => setChangeColor("")}>Learn More</a>
            </div>
            <div className="home--section--eight--blocks">
                {blockEl}
            </div>
            <img src={achievements} alt="achievements" className="home--section--eight--image"></img>
        </div>
    )
}