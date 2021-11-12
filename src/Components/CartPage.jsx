import {connect} from "react-redux"
import ProductCard from "./ProductCard"

const CartPage = ({cart}) => {
    return (
        <div className="cart-list">
            {cart.length > 0 ? cart.map((elem)=><ProductCard key={elem.id} item={elem}/>) : "Add items to cart"}
        </div>
    )
}

const mapStoretoProps = (state)=>{
    return {
        cart:state.cart,
    }
}

export default connect(mapStoretoProps)(CartPage);
