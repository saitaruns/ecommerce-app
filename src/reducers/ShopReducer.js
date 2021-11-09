export const actionTypes = {
    ADD_TO_CART : "ADD_TO_CART"
}

const initState = {
  cart : []
}

const ShopReducer = (state = initState,action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            let cnt = 0;
            state.cart.forEach(element => {
              if(cnt===0 && element.id===action.payload.id){
                cnt=element.count;
              }
            });
            return {
              ...state,
              cart : [
                ...state.cart,
                {
                  ...action.payload,
                  count:1
                }
              ]
            }
        default:            
            return state
    }
}

export default ShopReducer;