import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo_pic.png'
import pin_icon from '../Assets/pin.png'
import insta_icon from '../Assets/insta.png'
import whatsapp_icon from '../Assets/whatsapp.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <img src={footer_logo} alt=''/>
                <p> Groovy Kicks</p>
            </div>
            <ul className='footer_links'>
                <li> Company</li>
                <li> Products</li>
                <li> Offices</li>
                <li> About</li>
                <li> Contacts</li>
            </ul>
            <div className="footer_social_icon">
                <div className="footer_icons_container">
                    <img src={insta_icon} alt=''/>
                </div>
                <div className="footer_icons_container">
                    <img src={pin_icon} alt=''/>
                </div>
                <div className="footer_icons_container">
                    <img src={whatsapp_icon} alt=''/>
                </div>
            </div>
                <div className="footer_copyright">
                    <hr/>
                    <p> Copyright @ 2024 - All Rights Reserved.</p>
                </div>
        </div>
    )
}
export default Footer