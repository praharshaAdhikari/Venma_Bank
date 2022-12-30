import card1 from "./image/card1.png"
import card2 from "./image/card2.png"
import card3 from "./image/card3.png"
import lady1 from "./image/lady1.jpg"
import lady2 from "./image/lady2.jpg"
import lady3 from "./image/lady3.jpg"
import lady4 from "./image/lady4.jpg"
import first from "./image/first.png"

import {React, useState} from "react"
import Counter from "./Counter"

export default function HomeSectionOne(){
    const [animate, setAnimate] = useState(-1)
    const [changeColor, setChangeColor] = useState("")
    const imageArray = [card1, card2, card3]
    
    const cardEl = imageArray.map(image => {
        return (
            <img 
                src={image} alt="card" key={imageArray.indexOf(image)}
                onMouseEnter={() => setAnimate(imageArray.indexOf(image))} onMouseLeave={() => setAnimate(-1)}
                className=
                {`
                    ${(animate === imageArray.indexOf(image)) ? "home--section--one--cards--transition" : ""}
                    ${imageArray.indexOf(image) === 1 ? 
                        " middle" : imageArray.indexOf(image) === 2 ?
                        " bottom" : ""}
                `
                }
            />
        )
    })

    const userImageArray = [lady1, lady2, lady3, lady4]
    const userImageEl = userImageArray.map(userImage => {
        return(
            <img 
                key={userImageArray.indexOf(userImage)}
                className="home--section--one--users--image" 
                src={userImage} alt="user"
            />
        )
    })

    return(
        <div className="home--section--one--main container" data-aos="fade-up" data-aos-duration="800">
            <div className="home--section--one--text">
                <p className="highlighted">Digital Banking</p>
                <h1 className="topic">Smart Financial Services for Everyone</h1>
                <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <a href="/#" className={"button " + changeColor} onMouseEnter={() => setChangeColor("button--hover")} onMouseLeave={() => setChangeColor("")}>Get Started</a>
                <div className="home--section--one--info">    
                    <div className="home--section--one--users">
                        {userImageEl}
                        {
                        <div className="home--section--one--users--count">
                            <Counter 
                                    start={0}
                                    end={12000}
                                    time={250}
                            />+
                        </div>}
                    </div>
                    <div className="home--section--one--award"> 
                        <img className="home--section--one--award--image" src={first} alt="first"/>  
                        <p>The World's Best Digital Bank in 2022</p> 
                    </div>
                    <p className="home--section--one--info--text"> {"\u00A0"} &#9900; {"\u00A0"} World's Active Users</p>
                </div>
            </div>
            <div className="home--section--one--cards">
                {cardEl}
            </div>
        </div>
    )
}