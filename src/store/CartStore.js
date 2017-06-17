/**
 * Created by belothar on 16.06.17.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';

const cartReducer = (state = {
    isCartOpened: false
}, action ) => {
    if (action.type === 'TOGGLE_CART')
        state = {
            ...state,
            isCartOpened: !state.isCartOpened
        }
    return state;
};

const productReducer = (state = {
    products: []
}, action) => {
    if (action.type === 'ADD_PRODUCT') {
        state = {
            ...state,
            products: [...state.products, action.payload]
        };
    }
    return state;

};

const rootReducer = combineReducers({
    productReducer,
    cartReducer
})
const cartStore = createStore(cartReducer, applyMiddleware(logger));

export default cartStore;