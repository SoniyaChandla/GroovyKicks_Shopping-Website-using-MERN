import React from 'react'
import './Offers.css'
import offer_image from '../Assets/spring2.jpg'
const  Offers = () => {
    return(
        <div className="offers">
            <div className="offers_left">
                <h1> Exclusive</h1>
                <h1> Offers For You</h1>
                <p> ONLY ON BEST SELLER PRODUCTS</p>
                <button> Check Now</button>
            </div>
            <div className="offers_right">
                <img src={offer_image} alt=""/>

            </div>
        </div>
    )
}
export default Offers