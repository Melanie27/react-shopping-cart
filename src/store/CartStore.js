/**
 * Created by belothar on 16.06.17.
 */
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ProductsDatabase from './ProductsDatabase.js';


const productReducer = (state = {
    ProductsDatabase: ProductsDatabase,
   cartProducts: []
}, action) => {
    if (action.type === 'ADD_PRODUCT_TO_CART') {
        state = {
            ...state,
            cartProducts: [...state.cartProducts, action.productToAdd]
        }
    }
    return state

};

const cartStore = createStore(productReducer, applyMiddleware(logger));

export default cartStore;