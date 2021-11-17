import { Link } from "react-router-dom"
import Banner1 from "./../assets/banner1.jpg"

const Homepage = () => {
    return (
        <div className="homepage">
            <header>
                <div className="section-1">
                    <Link to='frombanner' ><img src={Banner1} alt="banner1"></img></Link>
                </div>
                <div className="section-2">
                <Link to='frombanner' ><img src="https://source.unsplash.com/random/1680x300" alt="banner2"></img></Link>
                </div>
                <div className="section-3"></div>
                <div className="section-4"></div>
            </header>
            <footer>
            </footer>
        </div>
    )
}

export default Homepage