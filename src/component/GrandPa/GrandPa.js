
import { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'

export const RingContext = createContext('Diamond Ring')



const GrandPa = () => {
    const  [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring'
    const handleBuyHouse =()=>{
        const newHouse = house +1  ;
        setHouse(newHouse)
    
    }
    return (
            
     <RingContext.Provider value={ [house, setHouse]}>
           <div className='grandpa'>
           <h3>Grandpa</h3>
           <p> <button onClick={handleBuyHouse}>Buy A House</button> House: {house}</p>
          <div style={{display: 'flex'}}>
          <Father house={house} ornament={ornament}></Father>
           <Uncle house={house}></Uncle>
           <Aunty house={house}></Aunty>
          </div>
        </div>
     </RingContext.Provider>
    );
};

export default GrandPa;