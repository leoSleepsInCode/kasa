import "./collapse.css";

const Collapse = ({title, content}) => {

    return (
            <ul className="collapse">
                <li>
                    <h2>Fiabilité</h2>
                    <p>Lore m ipsum dolor sit amet</p>
                </li>
                <li>
                    <h2>Respect</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </li>
                <li>
                    <h2>Service</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </li>
                <li>
                    <h2>Sécurité</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </li>
            </ul>
            )
}

export default Collapse