import {React, useState} from "react"

export default function Dropdown(props){
    const {q, a, id} = props
    const [isClicked, setIsClicked] = useState(false)
    return(
        <div className="dropdown">
            <div className="dropdown--shown" onClick={()=> setIsClicked(prevState => !prevState)}>
                <span>{id}. {q}</span>
                <span>{isClicked ? "-" : "+"}</span>
            </div>
            <p 
                className=
                {`
                    ${isClicked ? `dropdown--hidden--shown` : `dropdown--hidden`}
                `}
            >{a}</p>
        </div>
    )
}