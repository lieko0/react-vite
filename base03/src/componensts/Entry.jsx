export default function Entry(props) {
    return (
        <article className="entry-card">
            
            <div className="entry-card-img-container">
                <img src={props.img.src} alt={props.img.alt} className="entry-card-img" />
            </div>
            <div className="entry-card-text">
                <div className="entry-location">
                    <img src="./marker.png" alt="Marcador" />
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1 className="entry-title">{props.title}</h1>
                <p className="entry-date">{props.dates}</p>
                <p className="entry-description">{props.text}</p>
            </div>
        </article>
    )
}