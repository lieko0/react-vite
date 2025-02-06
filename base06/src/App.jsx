import React from "react"
import Star from "./Star"
import avatar from "/user.png"

export default function App() {
    console.log("App component rendered")

    const [contact, setContact] = React.useState({
        firstName: "Johnny",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com.br",
        isFavorite: false,
    })

    function toggleFavorite() {
        setContact((prev) => {
            return ({
                ...prev,
                isFavorite: !prev.isFavorite,
            })
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt={`Avatar image of ${contact.firstName} ${contact.lastName}`}
                />
                <div className="info">
                    <Star
                        toggleFavorite={toggleFavorite}
                        isFavorite={contact.isFavorite}
                    />
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
