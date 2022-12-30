import hand_holding_card from "./image/hand_holding_card.png"

import {React, useState} from "react"

export default function HomeSectionTwelve(){
    const [changeColor, setChangeColor] = useState("")

    return(
        <div className="home--section--twelve--main container">
            <div className="home--section--twelve--text">
                <p className="highlighted">get started</p>
                <h1 className="topic">More Than Just Money, We Create Financial Future</h1>
                <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <a href="/#" className={"button " + changeColor} onMouseEnter={() => setChangeColor("button--hover")} onMouseLeave={() => setChangeColor("")}>Get Started</a>
            </div>
            <img className="home--section--twelve--image" src={hand_holding_card} alt="hand holding card"/>
        </div>
    )
}