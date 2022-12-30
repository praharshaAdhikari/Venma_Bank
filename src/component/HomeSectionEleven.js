import {React, useState} from "react"

export default function HomeSectionEleven(){
    const plansArray = [
        {
            price: 25,
            name: "Basic",
            features: [
                false, false, true, false
            ]
        },
        {
            price: 39,
            name: "Standard",
            features: [
                false, true, true, true
            ]
        },
        {
            price: 54,
            name: "Deluxe",
            features: [
                true, true, true, true
            ]
        }
    ]
    const [isHovering, setIsHovering] = useState(-1)
    const [isHighlighted, setIsHighlighted] = useState(1)
    const [changeColor, setChangeColor] = useState("")
    const planEl = plansArray.map(item => {
        return(
            <div 
                key={plansArray.indexOf(item)} 
                className=
                    {
                        `home--section--eleven--plan
                        ${
                            isHighlighted === (plansArray.indexOf(item)) ? `home--section--eleven--plan--highlighted`
                                : isHovering === (plansArray.indexOf(item)) ? `home--section--eleven--plan--hovering`
                                    : ``
                        }
                        `
                    }
                onMouseEnter= {()=>setIsHovering(plansArray.indexOf(item))}
                onMouseLeave= {()=>setIsHovering(-1)}
                onClick = {()=>setIsHighlighted(plansArray.indexOf(item))}
                
            >
                <span className="topic">${item.price}</span> <span> / Month</span>
                <h3 className="plan--name">{item.name} Plan</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                <div>
                    <h4>What's included?</h4>
                    <p>{item.features[0] ? <span>&#9989;</span> : <span>&#10060;</span>} Up to 5 credit cards</p>
                    <p>{item.features[1] ? <span>&#9989;</span> : <span>&#10060;</span>} Invest in Stocks</p>
                    <p>{item.features[2] ? <span>&#9989;</span> : <span>&#10060;</span>} Secure personal file</p>
                    <p>{item.features[3] ? <span>&#9989;</span> : <span>&#10060;</span>} 24/7 full support</p>
                </div>
            </div>
        )
    })
    return(
        <div className="home--section--eleven--main" data-aos="fade-up" data-aos-duration="800">
            <p className="highlighted">pricing plan</p>
            <h1 className="topic">Choose Your Plan</h1>
            <p className="home--section--eleven--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div className="home--section--eleven--plans">
                {planEl}
            </div>
            <a href="/Venma_Bank/" className={"button " + changeColor} onMouseEnter={() => setChangeColor("button--hover")} onMouseLeave={() => setChangeColor("")}>Let's Get Started</a>
        </div>
    )
}