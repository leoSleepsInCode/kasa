import "./card.css";

const Card = ({url, text, title}) => {

    return (    
        <figure className="card">
            <img src={url} alt={text}/>
            <figcaption>{title}</figcaption>
        </figure>
    )
}

export default Card
