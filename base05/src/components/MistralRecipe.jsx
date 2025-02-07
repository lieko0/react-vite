import { getRecipeFromMistral } from "../ai"

export default function MistralRecipe(props) {
    
    const formattedRecipe = props.recipe.split("\n").map((line, index) => {
        if (line.startsWith("### ")) {
            return <h3 key={index}>{line.replace("### ", "")}</h3>
        }
        if (line.startsWith("#### ")) {
            return <h4 key={index}>{line.replace("#### ", "")}</h4>
        }
        if (line.startsWith("**")) {
            return <h3 key={index}>{line.replaceAll("**", "")}</h3>
        }
        if (line.endsWith(":")) {
            return <h4 key={index}>{line}</h4>
        }
        return <p key={index}>{line}</p>
    })
    
    return (
        <section>
            <h2>Chef Mistral Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <div>
                    {formattedRecipe}
                </div>
            </article>
        </section>
    )
}