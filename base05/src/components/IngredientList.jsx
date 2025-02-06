export default function IngredientList({ ingredients, getRecipe }) {
    
    const ingredientsList = ingredients.map((ingredient, index) => { 
        return <li key={index}>{ingredient}</li>
    })
    
    return (
        <section>
                        <h2>Ingredients on hand:</h2>
                        {
                            ingredients.length > 0
                            &&
                            <ul className="main-ingredients-list" aria-live="polite">
                                {ingredientsList}
                            </ul>
                        }
                        <div className="main-get-recipe-container">
                        {
                            ingredients.length > 3 
                            ?
                            <>
                                <div>
                                    <h3>Ready for a recipe?</h3>
                                    <p>Generate a recipe from your list of ingredients.</p>
                                </div>
                                <button onClick={getRecipe}>Get a recipe</button>
                            </>
                            :
                            <>
                                <span>Add at least 4 ingredients to generate a recipe.</span>
                                <button disabled>Get a recipe</button>   
                            </>
                        }
                        </div>
        
                    </section>
        
    )
}