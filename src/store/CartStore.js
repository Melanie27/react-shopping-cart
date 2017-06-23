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
    if (action.type === 'REMOVE_PRODUCT_FROM_CART') {
        state = {
            ...state,
            cartProducts: state.cartProducts.filter((singleProduct, index) => {
              return index !== action.productId;
            }),
            ProductsDatabase: state.ProductsDatabase.map(singleProduct => {
                if (singleProduct.name === action.productDetails.name) {

                }
            })
        }
    }
    if (action.type === 'REMOVE_PRODUCT_QUANTITY') {
        state = {
            ...state,
            ProductsDatabase: state.ProductsDatabase.map(singleProduct => {
                if (singleProduct.name === action.productDetails.name)
                    return {
                        ...singleProduct,
                        stock: singleProduct.stock - +action.productDetails.quantity
                    };
                else return singleProduct
            })
        }
    }
    return state


};

const cartStore = createStore(productReducer, applyMiddleware(logger));

export default cartStore;