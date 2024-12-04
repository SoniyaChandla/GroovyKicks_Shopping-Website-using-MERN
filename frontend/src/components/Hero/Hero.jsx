import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
import hero_image from '../Assets/hero.png'

const Hero = () => {
   
    return (
        <div className='hero'>
            <div className="hero_left">
                <h2> New Arrivals Only</h2>
                <div>
                    <div className='hero_hand_icon'>
                        <p>
                            New
                        </p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>Collection</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero_latest_btn">
                    <div>Latest Collection</div>
                    {/*    <img src={arrow_icon} alt=""/>*/}
                </div>
            </div>
            <div className="hero_right">
                <img src={hero_image} alt=" "/>
            </div>
        </div>
    )
}
export default Hero