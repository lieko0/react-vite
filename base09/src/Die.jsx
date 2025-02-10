export default function Die(props) {
    return (
        <button 
        onClick={() => props.toggle(props.id)}
        className="die-button" 
        style={{backgroundColor: props.isHeld ? "#59E391" : "white"}}>
            {props.value}
        </button>
    )
}