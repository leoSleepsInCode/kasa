import "./about.css";
import Collapse from "../../components/collapse/collapse";
import Banner from "../../components/banner/banner";
import data from "../../assets/data.json"
import image from "../../assets/banner2.png"

const About = () => {

    return (    
        <main id="about">
            <Banner src={image} alt="forêt entourée de montagnes" />

            {data.about.map((  {title, content} ) => (
                <Collapse key={title} title={title} content={content} />
            ))}
        </main>
    )
}

export default About