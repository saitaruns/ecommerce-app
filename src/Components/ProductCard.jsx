import React from 'react'
import store from '../store'
import {actionTypes} from "./../reducers/ShopReducer"

const ProductCard = ({item}) => {
    //actions
    const addToCart = ()=>{
        const action={
            type : actionTypes.ADD_TO_CART,
            payload : {
                id : item.id,
            }
        };
        store.dispatch(action);
    }
    return (
        <div className='card'>
            <h3>{item.name}</h3>
            <button className='btn' onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
