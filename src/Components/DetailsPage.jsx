import React from 'react'
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from 'react';
import { actionTypes } from '../reducers/ShopReducer'
import store from '../store'

const DetailsPage = ({ match }) => {
    const [prod, setProd] = useState()
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        const fetchDoc = async () => {
            const docRef = doc(db, "products", match.params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setProd({...docSnap.data(),id:docSnap.id})
                setisLoading(false)
            } else {
                console.log("No such document!");
            }
        }
        fetchDoc();

    },[])
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
            {prod && prod.name}<button className='btn' onClick={addToCart}>Add to Cart</button>
        </>
    )
}

export default DetailsPage
