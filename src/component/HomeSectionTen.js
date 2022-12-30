import Dropdown from "./Dropdown"

import React from "react"

export default function HomeSectionTen(){
    const dropdownsArray = [
        {
            q: "What is the transaction limit for your credit card?",
            a: "Vestibulum quis cursus sapien, sed tristique arcu. Etiam ullamcorper vel mauris accumsan porttitor. Vestibulum volutpat tinci arcu id tinci. Nullam dapibus justo ac mi scelerisque, nec posuere sapien rutrum."
        },
        {
            q: "Can I still use this credit card overseas?",
            a: "Vestibulum quis cursus sapien, sed tristique arcu. Etiam ullamcorper vel mauris accumsan porttitor. Vestibulum volutpat tinci arcu id tinci. Nullam dapibus justo ac mi scelerisque, nec posuere sapien rutrum."
        },
        {
            q: "How can I find out more about the security system at your bank?",
            a: "Vestibulum quis cursus sapien, sed tristique arcu. Etiam ullamcorper vel mauris accumsan porttitor. Vestibulum volutpat tinci arcu id tinci. Nullam dapibus justo ac mi scelerisque, nec posuere sapien rutrum."
        },
        {
            q: "Can I create more than one account at your bank?",
            a: "Vestibulum quis cursus sapien, sed tristique arcu. Etiam ullamcorper vel mauris accumsan porttitor. Vestibulum volutpat tinci arcu id tinci. Nullam dapibus justo ac mi scelerisque, nec posuere sapien rutrum."
        },
        {
            q: "How many credit cards can I make with one account?",
            a: "Vestibulum quis cursus sapien, sed tristique arcu. Etiam ullamcorper vel mauris accumsan porttitor. Vestibulum volutpat tinci arcu id tinci. Nullam dapibus justo ac mi scelerisque, nec posuere sapien rutrum."
        }
    ]
    const dropdownEl = dropdownsArray.map(item=> {
        return(
            <Dropdown
                key = {dropdownsArray.indexOf(item)}
                id = {dropdownsArray.indexOf(item) + 1}
                q = {item.q}
                a = {item.a}
            />
        )
    })
    return(
        <div className="home--section--ten--main">
            <p className="highlighted">FAQs</p>
            <h1 className="topic">Frequently Asked Questions</h1>
            <div className="home--section--ten--dropdown">
                {dropdownEl}
            </div>
        </div>
    )
}