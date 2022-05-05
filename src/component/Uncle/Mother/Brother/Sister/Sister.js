import React, { useContext } from 'react';
import { RingContext } from '../../../../GrandPa/GrandPa';

const Sister = () => {
    const  [house, setHouse] = useContext(RingContext)
    const handleHouseIncrease =()=>{
        const newHouse = house+1;
        setHouse(newHouse)
    }
    return (
        <div>
            <h4>sister</h4>
            <p>House : {house}</p>
            <button onClick={handleHouseIncrease}>Buy A House</button>
        </div>
    );
};

export default Sister;