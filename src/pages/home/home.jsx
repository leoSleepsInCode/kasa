import Banner from "../../components/banner/banner";
import Nav from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./home.css";

const Home = () => {

    return (
        <body>
            <Nav />
            <main>
                <Banner />
            </main>
            <Footer />
        </body>
    )
}

export default Home;