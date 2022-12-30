import logo from "./image/logo.png"
import Navbar from "./Navbar"
import {React, useState} from "react"

export default function Header(){
    const navMenu = ["home", "about", "services", "careers", "contact"]
    const [navElements, setNavElements] = useState(
        navMenu.map(item => {
            return (
                <Navbar 
                    key={item} 
                    element = {item} 
                    onClick = {isSelected}
                    select = "home"
                />
            )
        })
    )

    function isSelected(element){
        setNavElements(
            navMenu.map(item => {
                return (
                    <Navbar 
                        key={item} 
                        element = {item} 
                        onClick = {isSelected}
                        select = {element}
                    />
                )
            })
        )
    }

    const [changeColor, setChangeColor] = useState(false)
    function handleEnter(){
        setChangeColor(true)
    }
    function handleLeave(){
        setChangeColor(false)
    }
    return (
        <div className="header--main container">
            <div className="header--nav">
                <a href="/#" className="header--logo">
                    <img src={logo} alt="logo" className="header--logo--img" />
                    <p className="header--logo--text">Venma</p>
                </a>
                {navElements}
            </div>
            <div className="header--links">
                <a href="/#" className="header--login">Log In</a>
                <a href="/#" 
                    className={`button ${changeColor ? "button--hover" : ""}`} 
                    onMouseEnter= {handleEnter} onMouseLeave= {handleLeave}
                >
                    Get Started
                </a>
            </div>
        </div>
    )
}