import { addToCart } from '../Actions/Action'
import { ADD_TO_CART, REMOVE_TO_CART } from '../Constant'
const initialState = {
    cardData: []
}

export default function cradItems(initialState, action) {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...initialState,
                cardData: action.data
            }
            break;
        case REMOVE_TO_CART:
            return {
                ...initialState,
                cardData: action.data
            }
            break;
        default:
            return{
                ...initialState
            }
            break;
    }
}