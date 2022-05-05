import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const  [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h4>Aunty</h4>
            <p>House :{house}</p>
           <button onClick={()=> setHouse(house+1)}>Buy A House</button>
        </div>
    );
};

export default Aunty;