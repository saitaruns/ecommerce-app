export const actionTypes = {
    ADD_TO_CART : "ADD_TO_CART"
}

const initState = {
  cart : {}
}

const ShopReducer = (state = initState,action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return {
              ...state,
              cart : {
                ...state.cart,
                [action.payload.id]:{
                  name : action.payload.name,
                  count : state.cart[action.payload.id] ? state.cart[action.payload.id].count+1:1,
                }
              }
            }
        default:            
            return state
    }
}

export default ShopReducer;