import React from 'react'
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'

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
        <div className='cart-link'>
            <FaShoppingCart style={{padding:"0 5px",fontSize:"28px"}}/>
            <span>{cartCount}</span>
        </div>
    )
}

const mapStoretoProps = (state)=>{
    return {
        cart:state.shop.cart
    }
}

export default connect(mapStoretoProps)(Cart)
