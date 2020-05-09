import React from 'react';

const validation =(props) => { 

    if(props.length>5) {
        return <div><p>Text is apt. </p> </div>
    }
    if(props.length<=5){
        return <div> <p>Text too short</p> </div>

    }
        
}

export default validation;