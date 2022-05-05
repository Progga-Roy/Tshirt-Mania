import React, { useState } from 'react';
import Cart from '../../Cart/Cart';
import useTShirt from '../../hook/useTShirt';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
   const [tShirts, setTShirts]  = useTShirt();
   const [cart, setCart] = useState([]);
   const handleAddToCart = (selectedItem)=>{ 
    const exist = cart.find(tShirt => tShirt._id === selectedItem._id)
    if (!exist) {
        const newCart = [...cart,selectedItem]
    setCart(newCart)
    }
    else{
        alert('item already added')
    }
   }
   const handleRemoveFromCart =(selectedItem) =>{
      const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id)
     setCart(rest)
   }
    return (
        <div className='home-container'>
           <div className="tshirt-container">
           {
               tShirts.map(tShirt =><TShirt key={tShirt.id} tShirt={tShirt} handleAddToCart={handleAddToCart}></TShirt>)
           }
           </div>
           <div className="cart-container">
               {/* {
                   cart.map(carts => <Cart carts={carts}></Cart>)
               } */}
               <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
              
           </div>
        </div>
    );
};

export default Home;
