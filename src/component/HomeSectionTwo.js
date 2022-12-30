import client1 from "./image/client1.png"
import client2 from "./image/client2.png"
import client3 from "./image/client3.png"
import client4 from "./image/client4.png"
import client5 from "./image/client5.png"
import client6 from "./image/client6.png"

import {React, useState} from "react"

export default function HomeSectionTwo(){
    const clientArray = [client1, client2, client3, client4, client5, client6]
    const [isHovering, setIsHovering] = useState(-1)
    const clientEl = clientArray.map(client => {
        return(
            <img 
                key={clientArray.indexOf(client)} 
                className={`home--section--two--image ${(isHovering===clientArray.indexOf(client))? `home--section--two--image--hover` : ``}`}
                src={client} alt="client"
                onMouseEnter={() => setIsHovering(clientArray.indexOf(client))}
                onMouseLeave={() => setIsHovering(-1)}
            />
        )
    })
    return(
        <div className="home--section--two--main">
            {clientEl}
        </div>
    )
}