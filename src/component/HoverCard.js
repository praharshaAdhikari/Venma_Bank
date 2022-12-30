import {React, useState} from "react"

export default function HoverCard(props){
    const {title, img, description} = props
    const [isHovering, setIsHovering] = useState(false)
    return(
        <div className={`hovercard ${isHovering? `hovercard--hover`:``}`} onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
            <img src={img} alt="card" className={`hovercard--image ${isHovering? `hovercard--image--hover`:``}`}/>
            <h3 className="hovercard--h3">{title}</h3>
            <p className="hovercard--description">{description}</p>
        </div>
    )
}