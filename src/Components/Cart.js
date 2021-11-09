import React from 'react'
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';

const Cart = ({cart}) => {
    const [cartCount, setcartCount] = useState(0);
    useEffect(() => {
        let cnt=0;
        cart.forEach(item => {
            cnt+=item.count;
        });
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
