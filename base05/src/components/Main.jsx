export default function Main() {
    return (
        <main className="main-div">
            <form className="main-form-add-ingredient">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient" 
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}