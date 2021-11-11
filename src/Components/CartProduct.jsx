import { actionTypes } from "../reducers/ShopReducer"
import store from "../store"

const CartProduct = ({item}) => {
    const removeFromCart = (elem)=>{
        const action={
            type : actionTypes.REMOVE_FROM_CART,
            payload : {
                id:elem.id,
            }
        };
        store.dispatch(action);
    }
    return (
        <div className='card'>
            <h3>{item.name}</h3>
            <button className='btn' onClick={()=>removeFromCart(item)}>Delete from Cart</button>
        </div>
    )
}

export default CartProduct
