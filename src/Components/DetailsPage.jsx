import React from 'react'
import { useSelector } from 'react-redux'
import { actionTypes } from '../reducers/ShopReducer'
import store from '../store'

const DetailsPage = ({match}) => {
    const item = useSelector(state => state.womenclothes.find((elem)=>elem.id===match.params.id))
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
        <>
        {item.name}
        <button className='btn' onClick={addToCart}>Add to Cart</button>
        </>
    )
}

export default DetailsPage
