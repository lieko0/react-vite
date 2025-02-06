import React from "react"
import Pad from "./Pad"
import padsData from "./pads"

export default function App() {
    const [padState, setPadState] = React.useState(padsData)
    console.log("rendering App")
    function togglePad(id) {
        setPadState(
            prevPads => prevPads.map((pad) => {
                if (pad.id === id) {
                    return {
                        ...pad, 
                        on: !pad.on
                    }
                }
                return pad
            })
        )
    }

    const buttonElement = padState.map((pad) => (
       Pad({color: pad.color, id: pad.id, isOn: pad.on, toggleFunction: togglePad})
    ))

    function turnAllOff() {
        setPadState(
            prevPads => prevPads.map((pad) => ({
                ...pad, 
                on: false
            }))
        )
    }

    return (
        
            <main >
                <div className="pad-container">
                    {buttonElement}
                </div>
                <button className="all on" onClick={turnAllOff}>Turn All Off</button>
            </main>    
        
    )
}
