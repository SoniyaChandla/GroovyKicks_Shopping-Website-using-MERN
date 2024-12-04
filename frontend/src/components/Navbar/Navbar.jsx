import React, { useContext,useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/gklogo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { GkContext } from '../../context/GkContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const[menu,setMenu]=useState("Home");
    const {getCartTotalItems }= useContext(GkContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav_menu_visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
<div className="nav_logo">
    <img src={logo} alt="" />
    <p> Groovy Kicks</p>
</div>
<img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
<ul ref={menuRef} className="nav_menu">
    <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none'}}to='/'> Home</Link>{menu==="Home"?<hr/>:<></>} </li>
    <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to='/men'>Men </Link>{menu==="Men"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link> {menu==="Women"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Kids")}}><Link  style={{textDecoration:'none'}}to='/kids'>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
    
</ul>
 <div className="nav_login_cart">
    {localStorage.getItem('auth-token')
    ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
    :<Link  style={{textDecoration:'none'}}to='/login'><button>Login</button></Link>}
 
 <Link  style={{textDecoration:'none'}}to='/cart'>  <img src={cart_icon} alt="" /></Link> 
    <div className="nav_cart_count">{getCartTotalItems()}</div>
 </div>
        </div>
    )
}
export default Navbar