import Clothing from "./../assets/Clothing.json"

export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART"
}

const initState = {
  womenclothes: Clothing,
  cart: {
    // 1:{
    //   count:1
    // },
    // 2:{
    //   count:1
    // },
    // 3:{
    //   count:1
    // },
    // 4:{
    //    count:1
    // },
    // 5:{
    //   count:1
    // },
    // 6:{
    //   count:1
    // }
  }
}

const ShopReducer = (state = initState, action) => {
  // let id = action.payload.id;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            count: state.cart[action.payload.id] ? state.cart[action.payload.id].count + 1 : 1,
          }
        }
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            count: state.cart[action.payload.id] ? state.cart[action.payload.id].count > 0 ? state.cart[action.payload.id].count - 1 : 0:null,
          }
        }
      }
    default:
      return state
  }
}

export default ShopReducer;