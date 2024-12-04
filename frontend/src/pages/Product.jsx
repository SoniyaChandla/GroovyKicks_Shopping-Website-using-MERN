import React, { useContext }  from 'react'
import { useParams } from 'react-router-dom';
import {GkContext} from '../context/GkContext'
import ProdDisplay from '../components/ProdDisplay/ProdDisplay'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {all_products} = useContext(GkContext);
    const {productId} = useParams();
    const product = all_products.find((e) => e.id === Number(productId));
    return (
        <div>
            <ProdDisplay product={product}/>
            <RelatedProducts/>
        </div>
    )
}
export default Product