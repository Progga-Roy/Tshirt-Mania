import React from 'react';
import { Link } from 'react-router-dom';
import '../component/Header.css'

const Header = () => {
    return (
        <div>
             <h1>Welcome to Tshirt-Mania</h1>
           <nav>
            <Link to='/'> Home</Link>
            <Link to='/orderReview'> Order Review</Link>
          
           </nav>
        </div>
    );
};

export default Header;