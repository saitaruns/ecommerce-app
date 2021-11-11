import Clothing from "./../assets/Clothing.json"

export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART"
}

const initState = {
  womenclothes: Clothing,
  cart: []  
}

const ShopReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.womenclothes.find((i)=>i.id===action.payload.id);
      const isPre = state.cart.find((i)=>i.id===action.payload.id);
      console.log(item)
      console.log(isPre)
      return {
        ...state,
        cart:(isPre !== undefined)?
        state.cart.map((elem)=>elem.id===action.payload.id ? {...item,count:elem.count+1}:elem)
        :[...state.cart,{...item,count:1}]
      }
    case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((i)=>i.id !== action.payload.id)
         }
    default:
      return state
  }
}

export default ShopReducer;