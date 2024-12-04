import React from 'react'
import './RelatedProducts.css'
import data_products from '../Assets/data'
import Items from '../Items/items'
const RelatedProducts = () => {
    return (
        <div className='relatedproducts'>
            <h1> Related Products</h1>
            <hr/>
            <div className='relatedproducts_items'>
                {data_products.map((item,i)=> {
                    return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.curr_price} old_price={item.prev_price}/>
                })}
            </div>
        </div>
    )
}
export default  RelatedProducts