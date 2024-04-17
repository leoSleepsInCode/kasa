import data from "../../assets/data.json"
import { Link } from "react-router-dom";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import "./home.css";

const Home = () => {

    return (
        <main id="home">
            <Banner />
            <ul>
                {data.housing.map((  {id, cover, description, title} ) => (
                    <li key={id}>
                        <Link to={`/housing/${id}`}>
                            <Card url={cover} text={description} title={title}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Home;