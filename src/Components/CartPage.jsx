import {connect} from "react-redux"
import ProductCard from "./ProductCard"

const CartPage = ({cart}) => {
    return (
        <div className="cart-page">
            <div className="cart-list">
            {cart.length > 0 ? cart.map((elem)=><ProductCard key={elem.id} item={elem}/>) : "Add items to cart"}
            </div>
            <div className="final-checkout">
                <div>Total</div>
                <span>Sub Total: ({cart.length} items) </span>{ cart.length > 0 && cart.reduce((p,c)=>p+c.count*c.price,0)}
                { cart.length > 0 && <button className="btn">Proceed To Buy</button>}
            </div>
        </div>
    )
}

const mapStoretoProps = (state)=>{
    return {
        cart:state.cart,
    }
}

export default connect(mapStoretoProps)(CartPage);
