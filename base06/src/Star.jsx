import starFilled from "/star-filled.png"
import starEmpty from "/star-empty.png"

export default function Star({ toggleFavorite, isFavorite}) {
    console.log("Star component rendered")
    
    let [img, alt, ariaLabel] = 
    isFavorite ? 
    [ starFilled, "filled star icon", "Remove from favorites"] : 
    [ starEmpty, "empty star icon", "Add to favorites"]

    return (
        <button
            onClick={toggleFavorite}
            aria-pressed={isFavorite}
            aria-label={ariaLabel}
            className="favorite-button"
        >
            <img
                src={img}
                alt={alt}
                className="favorite"
            />
        </button>
    )
}
