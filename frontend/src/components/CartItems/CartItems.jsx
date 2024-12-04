import React, { useContext } from 'react'
import './CartItems.css'
import { GkContext } from '../../context/GkContext'
import removeicon from '../Assets/removeicon.png'

const CartItems =() => {
    const {all_products,cartItems,removeFromCart,getTotalPrice} = useContext(GkContext);
    return (
        <div className='cartItems'>
            <div className='cartItems_main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_products.map ((e) => {
                if(cartItems[e.id]>0)
                {
                     return <div>
                        <div className='cartItems_second cartItems_main'>
                            <img src={e.image} alt="" className='cartProduct_icon'/>
                            <p>{e.name}</p>
                            <p>{e.curr_price}</p>
                            <button className='cart_quanitity'>{cartItems[e.id]} </button>
                            <p>£{e.curr_price*cartItems[e.id]}</p>
                            <img className='cartremove_icon' src={removeicon} onClick={()=> {removeFromCart(e.id)}} alt=""/>
                        </div>
                        <hr/>
                    </div>
                }
                return null;
                
            })}
            <div className="cart_down">
                <div className="cart_total">
                    <h1> Cart Total </h1>
                    <div>
                        <div className="cart_totalitems">
                            <p> SubTotal</p>
                            <p> £{getTotalPrice()}</p>
                        </div>
                        <hr/>
                        <div className="cart_totalitems">
                            <p> shipping Fee</p>
                            <p> Free </p>
                        </div>
                        <hr/>
                        <div className="cart_totalitems">
                            <h3> Total </h3>
                            <h3> £{getTotalPrice()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout </button>
                </div>
            </div>

        </div>
    )
}
export  default CartItems