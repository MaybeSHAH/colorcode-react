import React from 'react'

const RightContainer = (props) => {
    const color = props.color;

    
    return (
        <div key={props.color} className="split right" style={{backgroundColor: "#"+color}}>
        </div>
    )
}

export default RightContainer
