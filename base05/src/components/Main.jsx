import { useState, useRef, useEffect } from "react"
import MistralRecipe from "./MistralRecipe"
import IngredientList from "./IngredientList"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState(["Coffee", "Milk", "Dark Chocolate", "Cinnamon"])
    const [recipe, setRecipe] = useState("")
    
    function addIngredient(formData) {
        const newIngredient = formData.get("add-ingredient")

        if (!newIngredient || ingredients.includes(newIngredient)) return

        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const recipeSection = useRef(null)
    //console.log(recipeSection)

    
    async function getRecipe() {
        setRecipe("# Thinking...")
        const aiRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(aiRecipe)
    }

    useEffect(() => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    return (
        <main className="main-div">
            <form action={addIngredient} className="main-form-add-ingredient">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="add-ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            <IngredientList 
                ingredients={ingredients}  
                getRecipe={getRecipe}
                ref={recipeSection}
            />

            {
                recipe
                &&
                <MistralRecipe 
                    recipe={recipe} 
                />
            }   

        </main>
    )
}


    // //onSubmit event handler
    // function handleSubmit(event) {
    //     event.preventDefault() //prevent page from reloading
    //     const newIngredient = new FormData(event.target).get("add-ingredient")
        
    //     if (!newIngredient || ingredients.includes(newIngredient)) return
        
    //     setIngredients((prevIngredients) => [
    //         ...prevIngredients, 
    //         newIngredient]) //use callback function if you care about the old value!
    //     event.target.reset() //clear the input field
    // }