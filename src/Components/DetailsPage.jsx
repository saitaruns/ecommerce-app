import React from 'react'
import { useEffect, useState } from 'react';
import { actionTypes } from '../reducers/ShopReducer'
import store from '../store'
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';

const DetailsPage = ({ match }) => {
    const [prod, setProd] = useState()
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        const fetchProduct = () => {
            console.log(match.params.id)
            axios.get(`https://fakestoreapi.com/products/${match.params.id}`)
                .then((res) => res.data)
                .then((prod) => {
                    console.log(prod)
                    setProd(prod)
                    setisLoading(false)
                })
        }
        fetchProduct();
    }, [match])
    //actions
    const addToCart = () => {
        const action = {
            type: actionTypes.ADD_TO_CART,
            payload: {
                item: prod,
            }
        };
        store.dispatch(action);
    }
    return (
        <>
            {isLoading && <div className="loading">Loading.....</div>}
            {prod &&
                <div className="details-page">
                    <div className="details-image"><img src={prod.image} alt="" /></div>
                    <div className="details">
                        <div className="details-title">{prod.title}</div>
                        <div className="details-rating">{prod.rating.rate}</div>
                        <div className="details-price">₹{prod.price}</div>
                        <button className='btn' onClick={addToCart}><FaShoppingCart style={{fontSize:"20px"}} /> Add to Cart</button>
                        <div className="details-description">{prod.description}</div>
                    </div>
                </div>}
        </>
    )
}

export default DetailsPage
