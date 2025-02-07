import ReactMarkdown from "react-markdown"

export default function MistralRecipe(props) {
    
    return (
        <section className="suggested-recipe-container">
            <h2>Chef Mistral Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>
                    {props.recipe}
                </ReactMarkdown>
            </article>
        </section>
    )
}