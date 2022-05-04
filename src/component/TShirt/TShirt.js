import React from 'react';
import './TShirt.css'
const TShirt = (props) => {
    const {handleAddToCart, tShirt} = props
    const {picture,name,price} = tShirt
    
    return (
        <div className='t-shirts'>
            <img className='t-shirts-img' src={picture} alt="" />
            <p>{name}</p>
            <p>Price :${price}</p>
        <button onClick={()=>handleAddToCart(tShirt) }>Add to cart</button>
        </div>
    );
};

export default TShirt;