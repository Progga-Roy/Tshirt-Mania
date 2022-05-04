import React from 'react';
import TShirt from '../component/TShirt/TShirt';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let command;
    if (cart.length===0) {
        command= <p>Please add at least one item</p>
    }
    else if (cart.length===1) {
        command= <p>Please add one more...</p>
    }
    else{
        command= <p>Thanks for adding item</p>
    }

   
    return (
      
        <div>
             <h1>Item selected :{cart.length} </h1>
           
             {command}
          
           
           {
               cart.map(tShirt => <p>{tShirt.name}
               <button onClick={()=>handleRemoveFromCart(tShirt)}> x </button>
               </p>)
           }
          
        </div>
    );
};

export default Cart;