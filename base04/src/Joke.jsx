export default function Joke(props) {
    return (
        <>
            <br />
            <h1>{props.setup}</h1>
            {props.punchline && <h2>{props.punchline}</h2>}
            <h3>Upvotes: {props.upvotes}</h3>
            {props.isPun && <h4>Pun</h4>}
            {props.comments && props.comments.map(comment => (
                <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.text}</p>
                </div>
            ))}
            <hr />
        </>
    )
}