import React from 'react'
import store from '../store'
import {actionTypes} from "./../reducers/ShopReducer"

const ProductCard = ({item}) => {
    //actions
    const addToCart = ()=>{
        return {
            type : actionTypes.ADD_TO_CART,
            payload : {
                ...item,
                count:1,
            }
        }
    }
    return (
        <div className='card'>
            <h3>{item.name}</h3>
            <button className='btn' onClick={()=>store.dispatch(addToCart())}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
