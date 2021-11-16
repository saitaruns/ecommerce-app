import { actionTypes } from "../reducers/ShopReducer"
import store from "../store"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const ProductCard = ({ item }) => {
    const location = useLocation()
    const [qty, setQty] = useState(item.count)
    const deleteFromCart = () => {
        const action = {
            type: actionTypes.DELETE_FROM_CART,
            payload: {
                item: item,
            }
        };
        store.dispatch(action);
    }
    const changeQuantity = () => {
        const action = {
            type: actionTypes.CHANGE_QUANTITY,
            payload: {
                item: {
                    ...item,
                    count: parseInt(qty)
                }
            }
        };
        store.dispatch(action);
    }
    return (
        <div className='card'>
            <div className="card-image">
                <img src={item.image} alt="random" />
            </div>
            <div className="card-body">
                <span className='card-title'>{item.title}</span>
                {location.pathname === '/yourcart' &&
                    <span style={{fontSize:"20px",fontWeight:"bold"}}>
                        ₹ {item.price}
                    </span>
                }
                <span className="card-desc">
                    {item.description}
                </span>
                {location.pathname === '/yourcart' &&
                    <span>
                        <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
                        <button className="btn" onClick={changeQuantity}>Change</button>
                        <button className='btn' onClick={deleteFromCart}>Delete from Cart</button>
                    </span>}
            </div>
        </div>
    )
}

export default ProductCard
