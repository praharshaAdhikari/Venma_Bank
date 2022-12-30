import React from "react"

export default function LoadingBar(props){
    const {title, number} = props
    const loadingBarLoadStyle = {
        backgroundColor: "#3498d0",
        width: `${number*42/100}vw`,
        height: `3px`,
    }
    return(
        <div className="loading">
            <div className="loading--text">
                <p className="loading--title">{title}</p>
                <p className="loading--percent">{number}%</p>
            </div>
            <div className="loading--bar--preload">
                <div className="loading--bar--load" style={loadingBarLoadStyle}></div>
            </div>
        </div>
    )
}