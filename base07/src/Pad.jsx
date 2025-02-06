import { useState } from "react";

export default function Pad(props) {
    const [isOn, setIsOn] = useState(props.isOn)

    return (
        <button 
            style={{
                backgroundColor: props.color, 
                borderColor: isOn ? "white" : props.color 
            }} 
            key={props.id}
            className={isOn ? "on" : null } // Using && leads to ClassName="false"
            onClick={() => setIsOn((prev) => !prev)}
        >
            {props.text}
        </button>
    )
}