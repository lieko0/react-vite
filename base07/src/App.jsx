import React from "react"
import Pad from "./Pad"
import padsData from "./pads"

export default function App() {
    const [padState, setPadState] = React.useState(padsData)

    const buttonElement = padState.map((pad) => (
       Pad({color: pad.color, id: pad.id, isOn: pad.on})
    ))

    return (
        
            <main >
                <div className="pad-container">
                    {buttonElement}
                </div>
            </main>    
        
    )
}
