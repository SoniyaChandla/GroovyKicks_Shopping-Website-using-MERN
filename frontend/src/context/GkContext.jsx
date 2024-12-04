import React, {createContext,useState,useEffect} from 'react'
import all_products from "../components/Assets/all_products";

export const GkContext = createContext (null);

const getDefaultCart = () => {
    let cart = {};
    for (let index=0; index < 300+1; index++){
        cart[index] = 0;
       
    }
    return cart;
    
}
const  GkContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        //.then((data)=>setAll_Product(data))

    },[]);
    useEffect(()=>{
        if (localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                
                },
                body:"",
            })
            .then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[localStorage.getItem('auth-token')]);
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        if (localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
         
        }

    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        for(const item in cartItems)
            {
                if (cartItems[item]>0)
                    {
                        let itemInfo = all_products.find((product)=>product.id===Number(item))
                        totalPrice += itemInfo.curr_price * cartItems[item];
                    }
                        
            }
            return totalPrice.toFixed(2);
            
    }

    const getCartTotalItems = () => {
        let totalitems=0;
        for (const item in cartItems)
            {
                if (cartItems[item]>0)
                    {
                        totalitems += cartItems[item];
                    }
            }
            return totalitems;
    }
   
    const contextValue = {all_products,cartItems,addToCart,removeFromCart,getTotalPrice,getCartTotalItems };
    return (
        <GkContext.Provider value ={contextValue}>
            {props.children}
        </GkContext.Provider>
    )

}
export default GkContextProvider;
