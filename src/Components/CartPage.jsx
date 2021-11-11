import {connect} from "react-redux"
import CartProduct from "./CartProduct"

const CartPage = ({cart}) => {
    return (
        <div>
            {cart.length > 0 ? cart.map((elem)=><CartProduct key={elem.id} item={elem}/>) : "Add items to cart"}
        </div>
    )
}

const mapStoretoProps = (state)=>{
    return {
        cart:state.cart,
    }
}

export default connect(mapStoretoProps)(CartPage);
