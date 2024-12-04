import React from "react"
import './popular.css'
import data_products from '../Assets/data'
import Item from '../Items/items'
const popular = () =>{
    return (
        <div className='popular'>
        <h1> POPULAR IN WOMEN </h1>
        <hr/>
        <div className="popular_items">
        {data_products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.curr_price} old_price={item.prev_price}/>
        })}
        </div>
        </div>
    )
}
export default popular