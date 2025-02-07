import { useState, useEffect, useActionState } from "react"
import MistralRecipe from "./MistralRecipe"
import IngredientList from "./IngredientList"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState(["Coffee", "Milk", "Dark Chocolate", "Cinnamon"])
    const [recipeShown, setRecipeShown] = useState(false)
    const [recipe, setRecipe] = useState("")
    
    // action from react 19
    const addIngredient = (prevState, formData) => {
        "use server";
        // explicitly prevent page from reloading
        // implicitly get the form data
        const newIngr = formData.get("add-ingredient")
        
        if (!newIngr || ingredients.includes(newIngr)) return prevState
        
        setIngredients((prevIngredients) => [
            ...prevIngredients,
            newIngr
        ])
        // implicitly clear the input field
    }
    
    const [state, formAction, isPending] = useActionState(addIngredient, null)
    
    async function getRecipe() {
        setRecipeShown((prev)=> !prev)
        if (!recipeShown) setRecipe('')
    }

    useEffect(() => {
        if (!recipeShown) return
        async function fetchData() {
            const aiRecipe = await getRecipeFromMistral(ingredients)
            console.log(aiRecipe)
            setRecipe(aiRecipe)
          }
          fetchData();
    }, [recipeShown])

    return (
        <main className="main-div">
            <form action={formAction} className="main-form-add-ingredient">
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
            />

            {
                recipeShown
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