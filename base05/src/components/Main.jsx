import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    
    const ingredientsList = ingredients.map((ingredient, index) => { 
        return <li key={index}>{ingredient}</li>
    })

    // action from react 19
    function addIngredient(formData) {
        // implicitly prevent page from reloading
        // implicitly get the form data
        const newIngr = formData.get("add-ingredient")

        if (!newIngr || ingredients.includes(newIngr)) return

        setIngredients((prevIngredients) => [
            ...prevIngredients,
            newIngr
        ])
        // implicitly clear the input field
    }

    return (
        <main className="main-div">
            <form action={addIngredient} className="main-form-add-ingredient">
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