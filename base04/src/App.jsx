import Joke from "./Joke";
import viteLogo from "./vite.svg";

export default function App() {
    return (
        <>
            <img src={viteLogo} alt="Vite Logo" />
            <h1>Jokes</h1>
            <Joke 
              setup="Why did the chicken cross the road?"
              punchline="To get to the other side."
              upvotes={7}
              isPun={false}
            />
            <Joke 
              setup="What do you call a fish with no eyes?"
              punchline="Fsh."
              upvotes={3}
              isPun={true}
              comments={[
                { id: 1, author: "Joe", text: "I don't get it." },
                { id: 2, author: "Sue", text: "I don't get it either." },
                { id: 3, author: "Joe", text: "I still don't get it." },
                { id: 4, author: "Sue", text: "I think it's a play on 'no idea'." },
              ]}
            />
            <Joke 
              setup="-no punchline-"
              upvotes={0}
              isPun={true}

            />
            <Joke 
              setup="What do you call a deer with no eyes?"
              punchline="No eye deer."
              upvotes={4}
              isPun={true}
              comments={[
                { id: 1, author: "Joe", text: "I don't get it." },
                { id: 2, author: "Sue", text: "I don't get it either." },
                { id: 3, author: "Joe", text: "I still don't get it." },
                { id: 4, author: "Sue", text: "I think it's a play on 'no idea'." },
              ]}
            />

        </>
    )
}