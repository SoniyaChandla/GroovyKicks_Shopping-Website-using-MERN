import React, { useContext } from 'react'
import './CSS/Category.css'
import {GkContext} from '../context/GkContext'
import Items from '../components/Items/items'

const Category = (props) => {
   const {all_products} = useContext(GkContext);
    return (
        <div className='category'>
            <img className='category_banner' src={props.banner} alt=""/>
            <div className="category_index_sort">
                <p>
                    <span>
                        Showing 1-10
                    </span> out of 30 products
                </p>
                
            </div>
            <div className="category_products">
                {all_products.map((item,i)=>{
                    if (props.category===item.category) {
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.curr_price} old_price={item.prev_price}/>
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        </div>
    )
}
export default Category