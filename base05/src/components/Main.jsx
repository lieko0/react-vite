import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState([
        "Chicken",
        "Oregano",
        "Tomatoes",
        "Garlic",
        "Onions",
    ])
    
    const ingredientsList = ingredients.map((ingredient, index) => { 
        return <li key={index}>{ingredient}</li>
    })

    function handleSubmit(event) {
        event.preventDefault()
        const newIngredient = new FormData(event.target).get("add-ingredient")
        
        if (!newIngredient || ingredients.includes(newIngredient)) return
        
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
        event.target.reset()
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
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}