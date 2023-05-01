import { GET_CARTDATA, GET_PRODUCT } from "../Constant/Action.type";

const initialState = {
    product: [],
    cartData : []
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PRODUCT:
            return{
                ...state,
                product : action.payload
            };
            break;
        case GET_CARTDATA : 
            return{
                ...state,
                cartData : [...state.cartData , action.payload]
            }
        default:
            return state
    }
}

export default productReducer;