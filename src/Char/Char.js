import React from 'react'

const char = (props) => {

    const style = {
        display:'inline-block',
        backgroundColour:'white',
        font:'inherit',
        border:'1px solid pink',
        cursor:'pointer',
        padding:'8px',
        textalign:'center'
      }; 

    return <div onClick={props.click}style={style}>
        {props.ch}</div>

};

export default char;