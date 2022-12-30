import {React, useState} from "react"
import banking1 from "./image/banking1.jpg"
import banking2 from "./image/banking2.jpg"
import banking3 from "./image/banking3.jpg"
import banking4 from "./image/banking4.jpg"
import left_arrow from "./image/left_arrow.png"
import right_arrow from "./image/right_arrow.png"

const imagesArray= [banking1, banking2, banking3, banking4]

export default function HomeSectionFour(){
    const [changeColor, setChangeColor] = useState("")
    const [carouselImages, setCarouselImages] = useState(
            imagesArray.map(image => {
            return(
                <img key={imagesArray.indexOf(image)} src={image} alt="banking" className="carousel--image"/>
            )
        })
    )
    
    function swapIndexLeft(){
        let swapper = null
        swapper = imagesArray[0]
        for(let i=0; i<imagesArray.length-1; i++) imagesArray[i] = imagesArray[i+1]
        imagesArray[imagesArray.length-1] = swapper

        setCarouselImages(
                imagesArray.map(image => {
                return(
                    <img key={imagesArray.indexOf(image)} src={image} alt="banking" className="carousel--image"/>
                )
            }),
        )
    }
    function swapIndexRight(){
        let swapper = null
        swapper = imagesArray[imagesArray.length-1]
        for(let i=imagesArray.length-1; i>0; i--) imagesArray[i] = imagesArray[i-1]
        imagesArray[0] = swapper

        setCarouselImages(
            imagesArray.map(image => {
                return(
                    <img key={imagesArray.indexOf(image)} src={image} alt="banking" className="carousel--image"/>
                )
            })
        )
    }

    return(
        <div className="home--section--four--main" data-aos="fade-up" data-aos-duration="800">
            <p className="highlighted container">about us</p>
            <div className="home--section--four--title container">
                <h1 className="home--section--four--topic topic">We Make Banking Simple And Seamless</h1>
                <a href="/#" className={"button " + changeColor} onMouseEnter={() => setChangeColor("button--hover")} onMouseLeave={() => setChangeColor("")}>Learn More</a>
            </div>
            <div className="home--section--four--about about container">
                <p>Vestibulum molestie, nunc quis volutpat tiks sagittis, tellus nisl pulvinar nagging mauris, eget hendrerit tortor lauda lassun gandu lectus in urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <p>Vestibulum molestie, nunc quis volutpat tiks sagittis, tellus nisl pulvinar nagging mauris, eget hendrerit tortor lauda lassun gandu lectus in urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <div className="carousel">
                <img src={right_arrow} alt="left" className="carousel--arrow" onClick={swapIndexLeft}/>
                <div className="carousel--images">
                    {carouselImages}
                </div>
                <img src={left_arrow} alt="right" className="carousel--arrow" onClick={swapIndexRight}/>
            </div>
        </div>
    )
}