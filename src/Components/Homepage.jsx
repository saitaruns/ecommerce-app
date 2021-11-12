import shopMens from "./../assets/shopMens.jpg"
import shopWomens from "./../assets/shopWomens.jpg"
import {Link} from "react-router-dom"

const Homepage = ()=>{
    return (
        <div className="banner">
            <img src={shopMens} alt="women"></img>
            <Link to="/womenclothing"><img src={shopWomens} alt="men"></img></Link>
        </div>
    )
}

export default Homepage