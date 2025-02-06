import { useState } from "react";

export default function Pad(props) {

    function handleClick() {
        props.toggleFunction(props.id)
    }

    return (
        <button 
            style={{
                backgroundColor: props.color, 
                borderColor: props.isOn ? "white" : props.color 
            }} 
            key={props.id}
            className={props.isOn ? "on" : null } // Using && leads to ClassName="false"
            onClick={handleClick}
        >
            {props.text}
        </button>
    )
}