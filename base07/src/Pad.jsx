export default function Pad(props) {
    return (
        <button 
            style={{
                backgroundColor: props.color, 
                borderColor: props.isOn ? props.color : "white"
            }} 
            key={props.id}
            className={props.isOn && "on"}
        >
            {props.text}
        </button>
    )
}