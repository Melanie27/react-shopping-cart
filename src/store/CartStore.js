/**
 * Created by belothar on 16.06.17.
 */
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const cartReducer = (state = {
    isCartOpened: false
}, action ) => {
    if (action.type === 'OPEN_CART')
        state = {
            ...state,
            isCartOpened: true
        }
    return state;
};

const cartStore = createStore(cartReducer, applyMiddleware(logger));

export default cartStore;