import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    
    const ingredientsList = ingredients.map((ingredient, index) => { 
        return <li key={index}>{ingredient}</li>
    })

    function handleSubmit(event) {
        event.preventDefault() //prevent page from reloading
        const newIngredient = new FormData(event.target).get("add-ingredient")
        
        if (!newIngredient || ingredients.includes(newIngredient)) return
        
        setIngredients((prevIngredients) => [
            ...prevIngredients, 
            newIngredient]) //use callback function if you care about the old value!
        event.target.reset() //clear the input field
    }

    return (
        <main className="main-div">
            <form onSubmit={handleSubmit} className="main-form-add-ingredient">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="add-ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <h2>Ingredients on hand:</h2>
            <ul className="main-ingredients-list">
                {ingredientsList}
            </ul>
        </main>
    )
}