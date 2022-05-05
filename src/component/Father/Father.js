import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Uncle/Mother/Brother/Brother';
import Sister from '../Uncle/Mother/Brother/Sister/Sister';

const Father = ({house,ornament}) => {
    return (
        <div>
            <h4>Father</h4>
            <p>House :{house}</p>
            <div style={{display :'flex'}}>
            <Myself house={house} ornament={ornament}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;