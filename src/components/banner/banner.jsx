import "./banner.css"

const Banner = ({src, alt}) => {

    return (
        <header>
            {/* <img src={src} alt={alt} /> */}
            <h1>Chez vous, < br className="break"/> partout et ailleurs</h1>
        </header>
    )
}

export default Banner