import FooterLinks from "./FooterLinks"
import logo from "./image/logo.png"
import chat from "./image/chat.png"

import React from "react"

export default function Footer(){
    return(
        <div className="footer--main">
            <div className="footer--logo">
                <a href="/#" className="footer--click">
                    <img src={logo} alt="logo" className="footer--logo--img"/>
                    <span className="footer--logo--text">Venma</span>
                </a>
                <p className="footer--text">Lorem ipsum dolor sit amet, consec tetur adipiscing. Maecenas consectetur felis.</p>
            </div>
            <div className="footer--links">
                <ul className="footer--address">
                    <li className="footer--topic">Address</li>
                    <li><FooterLinks key={1} text = "457 Morningview Lane New York USA"/></li>
                </ul>
                <ul className="footer--email">
                    <li className="footer--topic">Email</li>
                    <li><FooterLinks key={2} text = "venma@mails.com"/></li>
                    <li><FooterLinks key={3} text = "sample@mails.com"/></li>
                </ul>
                <ul className="footer--phone">
                    <li className="footer--topic">Phone</li>
                    <li><FooterLinks key={4} text = "+1-234-567-890"/></li>
                    <li><FooterLinks key={5} text = "+0-987-654-321"/></li>
                </ul>
                <ul className="footer--quicklinks">
                    <li className="footer--topic">Quicklinks</li>
                    <li><FooterLinks key={6} text = "Home"/></li>
                    <li><FooterLinks key={7} text = "About"/></li>
                    <li><FooterLinks key={8} text = "Services"/></li>
                    <li><FooterLinks key={9} text = "Careers"/></li>
                    <li><FooterLinks key={10} text = "Contact"/></li>
                </ul>
                <ul className="footer--support">
                    <li className="footer--topic">Support</li>
                    <li><FooterLinks key={11} text = "Help Center"/></li>
                    <li><FooterLinks key={12} text = "Privacy Policy"/></li>
                    <li><FooterLinks key={13} text = "Disclaimer"/></li>
                    <li><FooterLinks key={14} text = "FAQs"/></li>
                </ul>
                <ul className="footer--talk">
                    <li className="footer--topic">Let's talk</li>
                    <li><img src={chat} alt="chat" className="footer--chat"/><FooterLinks key={15} text = "Live Chat"/></li>
                </ul>
            </div>
            <div className="footer--last">
                <span><FooterLinks key={15} text = "Copyright © 2022 Venma"/></span>
                <span><FooterLinks key={16} text = "Privacy Policy"/></span>
                <span><FooterLinks key={17} text = "Terms & Services"/></span>
            </div>
        </div>
    )
}