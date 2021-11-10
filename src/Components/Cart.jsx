import React from 'react'
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';

const Cart = ({cart}) => {
    const [cartCount, setcartCount] = useState(0);
    useEffect(() => {
        let cnt=0;
        for (const cartid in cart) {
            if (Object.hasOwnProperty.call(cart,cartid)) {
                const element = cart[cartid];
                cnt+=element.count;
            }
        }
        setcartCount(cnt);
    }, [cart])
    return (
        <div>
            {cartCount} items in your cart
        </div>
    )
}

const mapStoretoProps = (state)=>{
    return {
        cart:state.cart
    }
}

export default connect(mapStoretoProps)(Cart)
