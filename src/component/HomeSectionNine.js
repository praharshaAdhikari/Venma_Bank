import customer1 from "./image/customer1.jpg"
import customer2 from "./image/customer2.jpg"
import customer3 from "./image/customer3.jpg"
import left_arrow from "./image/left_arrow.png"
import right_arrow from "./image/right_arrow.png"
import {React, useState} from "react"

const customerArray = [
    {
        image: customer2,
        name: "Tinna Torres",
        job: "Designer",
        title: "It's the best digital banking service in market.",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Suspendisse vel erat venenatis mi suscipit luctus. Maecenas ut malesuada arcu. Etiam efficitur orci quis turpis placerat, eget faucibus metus pellentesque. Integer a imperdiet arcu. Duis at lacinia lorem. Phasellus pellentesque maximus porttitor. "
    },
    {
        image: customer3,
        name: "Wanda Franses",
        job: "Teacher",
        title: "It's the best digital banking service in market.",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Suspendisse vel erat venenatis mi suscipit luctus. Maecenas ut malesuada arcu. Etiam efficitur orci quis turpis placerat, eget faucibus metus pellentesque. Integer a imperdiet arcu. Duis at lacinia lorem. Phasellus pellentesque maximus porttitor. "
    },
    {
        image: customer1,
        name: "Kate Washington",
        job: "Manager",
        title: "It's the best digital banking service in market.",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Suspendisse vel erat venenatis mi suscipit luctus. Maecenas ut malesuada arcu. Etiam efficitur orci quis turpis placerat, eget faucibus metus pellentesque. Integer a imperdiet arcu. Duis at lacinia lorem. Phasellus pellentesque maximus porttitor. "
    }
]

export default function HomeSectionNine(){
    const [changeColor, setChangeColor] = useState("")
    const [testimonialCarousel, setTestimonialCarousel] = useState(
        customerArray.map(item=>{
            return(
                <div key= {customerArray.indexOf(item)} className="home--section--nine--testimonial">
                    <div className="testimonial--text">
                        <span className="testimonial--name">{item.name} [{item.job}]</span><span> says,</span>
                        <h4>{item.title}</h4>
                        <p>"{item.description}"</p>
                    </div>
                    <img className="testimonial--image" src={item.image} alt="customer"/> 
                </div>
            )
        })
    )
    
    function swapIndexLeft(){
        let swapper = null
        swapper = customerArray[0]
        for (let i=0; i<customerArray.length-1; i++) customerArray[i] = customerArray[i+1]
        customerArray[customerArray.length-1] = swapper

        setTestimonialCarousel(
            customerArray.map(item=>{
                return(
                    <div key= {customerArray.indexOf(item)} className="home--section--nine--testimonial">
                        <div className="testimonial--text">
                            <span className="testimonial--name">{item.name} [{item.job}]</span><span> says,</span>
                            <h4>{item.title}</h4>
                            <p>"{item.description}"</p>
                        </div>
                        <img className="testimonial--image" src={item.image} alt="customer"/> 
                    </div>
                )
            })
        )
    }
    function swapIndexRight(){
        let swapper = null
        swapper = customerArray[customerArray.length - 1]
        for (let i=customerArray.length-1; i>0; i--) customerArray[i] = customerArray[i-1]
        customerArray[0] = swapper
        setTestimonialCarousel(
            customerArray.map(item=>{
                return(
                    <div key= {customerArray.indexOf(item)} className="home--section--nine--testimonial">
                        <div className="testimonial--text">
                            <span className="testimonial--name">{item.name} [{item.job}]</span><span> says,</span>
                            <h4>{item.title}</h4>
                            <p>"{item.description}"</p>
                        </div>
                        <img className="testimonial--image" src={item.image} alt="customer"/> 
                    </div>
                )
            })
        )
    }
    return(
        <div className="home--section--nine--main">
            <p className="highlighted">testimonials</p>
            <div className="home--section--nine--title">
                <h1 className="home--section--nine--topic topic">What Our Customers Say About Us</h1>
                <a href="/#" className={"button " + changeColor} onMouseEnter={() => setChangeColor("button--hover")} onMouseLeave={() => setChangeColor("")}>Learn More</a>
            </div>
            <div className="home--section--nine--carousel">
                <img src={right_arrow} alt="right" className="carousel--arrow" onClick={swapIndexLeft}/>
                <div className="home--section--nine--testimonials">
                    {testimonialCarousel}
                </div>
                <img src={left_arrow} alt="left" className="carousel--arrow" onClick={swapIndexRight}/>
            </div>
        </div>
    )
}