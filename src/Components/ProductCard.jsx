import React from 'react'
import store from '../store'
import {useSelector} from "react-redux"
import {actionTypes} from "./../reducers/ShopReducer"

const ProductCard = ({item}) => {
    const count = useSelector(state => state.cart[item.id]?state.cart[item.id].count:null)
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
    // const removeFromCart = ()=>{
    //     const action={
    //         type : actionTypes.REMOVE_FROM_CART,
    //         payload : {
    //             id:item.id,
    //         }
    //     };
    //     store.dispatch(action);
    // }
    return (
        <div className='card'>
            <h3>{item.name}</h3>
            <button className='btn' onClick={addToCart}>Add to Cart {count}</button>
        </div>
    )
}

export default ProductCard
