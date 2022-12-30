import {React, useState} from "react"

export default function Navbar(props){
    const [isHighlighted, setIsHighlighted] = useState(false)
    const nowSelected = (props.element === props.select)
    function handleClick(){
        props.onClick(props.element)
    }
    function handleEnter(){
        setIsHighlighted(true)
    }
    function handleLeave(){
        setIsHighlighted(false)
    }
    return (
        <a 
            href="/#" 
            className = { nowSelected 
                        ? "nav--element white" 
                        : isHighlighted 
                        ? "nav--element trademark" 
                        : "nav--element"
                        }
            onMouseEnter= {handleEnter}
            onMouseLeave= {handleLeave}
            onClick= {handleClick}
        >
            {props.element}
        </a>
    )
}