

import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/b3.jpg'
import women_banner from './components/Assets/b2.webp'
import kids_banner from './components/Assets/b1.webp'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Category banner={men_banner} category="Men"/>}/>
        <Route path='/women' element={<Category  banner={women_banner} category="Women"/>}/>
        <Route path='/kids' element={<Category banner={kids_banner} category="Kids"/>}/>
        
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
