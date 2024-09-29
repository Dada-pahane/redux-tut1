import {ADD_TO_CART,REMOVE_TO_CART} from '../Constant'


 export const addToCart=(_data)=>{
    return
    {
        type:ADD_TO_CART
        data:_data
    };
};



export const removeToCart=(_data)=>{
    return
    {
        type:REMOVE_TO_CART
        data:_data
    };
};