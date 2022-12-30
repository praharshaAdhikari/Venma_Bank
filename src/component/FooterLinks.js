import {React, useState} from "react"

export default function FooterLinks(props){
    const [isHovering, setIsHovering] = useState(false)
    return(
            <a 
                href="/Venma_Bank/" 
                className={`footer--link ${isHovering ? `footer--link--hover` : ``}`}
                onMouseEnter={()=>setIsHovering(true)}
                onMouseLeave={()=>setIsHovering(false)}
            >
                {props.text}
            </a>
    )
}