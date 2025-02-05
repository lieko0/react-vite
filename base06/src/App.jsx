import React from "react"
import avatar from "/user.png"
import starFilled from "/star-filled.png"
import starEmpty from "/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Johnny",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com.br",
        isFavorite: false,
    })

    function toggleFavorite() {
        setContact((prev) => {
            return {
                ...prev,
                isFavorite: !prev.isFavorite,
            }
        })
    }

    let [starIcon, altStarIcon] = 
    contact.isFavorite ? 
    [starFilled, "Star filled icon"] : 
    [starEmpty, "Star empty icon"]
    
    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt={`Avatar image of ${contact.firstName} ${contact.lastName}`}
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={altStarIcon}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
