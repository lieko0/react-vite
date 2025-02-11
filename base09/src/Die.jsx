export default function Die(props) {
    return (
        <button 
        onClick={() => props.toggle(props.id)}
        className="die-button" 
        style={{backgroundColor: props.isHeld ? "#59E391" : "white"}}
        aria-pressed={props.isHeld}
        aria-label={`Die with value ${props.value} ${props.isHeld ? "held" : "not held"}`}
        >
            {props.value}
        </button>
    )
}