import LoadingBar from "./LoadingBar"
import why_choose_us from "./image/why_choose_us.jpg"

import React from "react"

export default function HomeSectionSix(){
    const titleArray = ["innovations", "security", "technology", "services"]
    const loadingArray = [{title: "payments", number: 90}, {title: "security", number: 99},{title: "credits", number: 85},{title: "access", number: 95}]
    const loadingEl = loadingArray.map(item => {
        return(
            <LoadingBar
                key = {loadingArray.indexOf(item)}
                title = {item.title}
                number = {item.number}
            />
        )
    })
    const infoEl = titleArray.map(title => {
        return(
            <div className="home--section--six--info" key= {titleArray.indexOf(title)}>
                <p className="home--section--six--info--title">{title}</p>
                <p>Donec consequat nisi dolor. Proin consectetur eget justo sed.</p>
            </div>
        )
    })
    return(
        <div className="home--section--six--main container" data-aos="fade-up" data-aos-duration="800">
            <img src={why_choose_us} alt="why_choose_us" className="home--section--six--image"/>
            <div className="home--section--six--text">
                <p className="highlighted">why choose us</p>
                <h1 className="topic">Keep Your Banking Simple</h1>
                <div className="home--section--six--info--group">
                    {infoEl}
                </div>
            </div>
            <div className="home--section--six--loading--bars">
                {loadingEl}
            </div>
        </div>
    )
}