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
           
         
          
           
           {
               cart.map(tShirt => <p>{tShirt.name}
               <button onClick={()=>handleRemoveFromCart(tShirt)}> x </button>
               </p>)
           }
              
              {cart.length === 0 || <p>YAY! you are buying</p>}
           {cart.length=== 3 && <p>This three shirts are selected for gift</p>}
              {command}
              {cart.length !==4 ? <p>Keep adding</p>: <button> Remove item</button>}
        </div>
    );
};

export default Cart;