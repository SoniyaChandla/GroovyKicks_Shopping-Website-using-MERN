import  React,{useContext} from 'react'
import './ProdDisplay.css';
import { GkContext } from '../../context/GkContext';

const ProdDisplay = (props) => {
        const {product} = props;
        const {addToCart} = useContext(GkContext);
        return (
            <div className='product_display'>
                <div className='product_display_left'>  
                    <img className='main_image' src={product.image} alt=''/>
                </div>
                <div className='product_display_right'>
                    <h1> {product.name}</h1>
                    <div className='product_display_right_price'>
                        <div className='product_display_right_price_old'> £ {product.prev_price}</div>
                        <div className='product_display_right_price_new'> £ {product.curr_price}</div>
                    </div>
                    <div className='product_display_right_desc'>
                    Ideal footwear for every type of person from the renowned brand . These footwear are designed with the latest technology and the best quality so that they adapt perfectly to your foot without compromising style. Practice your favourite sport thanks to the trainers from the brand. Comfort and lightness so you only have to worry about performing at your best, nothing rest.
                    </div>
                    <div className='product_display_right_size'>
                        <h1> Select  Size </h1>
                        <div className='product_display_right_size'>
                            <div> 4 </div>
                            <div> 4.5</div>
                            <div> 5</div>
                            <div> 6 </div>
                        </div>
                    </div>
                    <button onClick ={() => {addToCart(product.id)}}> Add to cart</button>
                </div>
            </div>
        )
}
export default ProdDisplay