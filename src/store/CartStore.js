/**
 * Created by belothar on 16.06.17.
 */
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ProductsDatabase from './ProductsDatabase.js';


const productReducer = (state = {
    ProductsDatabase: ProductsDatabase,
   categoryToFilter: 'all',
   cartProducts: [],
   isCartOpened: true
}, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_STATUS':
            state =  {
                ...state,
                isCartOpened: !state.isCartOpened
            };
            break;
        case 'FILTER_PRODUCTS_BY_CATEGORY':
            state = {
                ...state,
                categoryToFilter: action.category
            };
            break;
        case 'ADD_PRODUCT_TO_CART':
            state = {
                ...state,
                cartProducts: [...state.cartProducts, action.productToAdd]
            };
            break;
        case 'REMOVE_PRODUCT_FROM_CART':
            state = {
                ...state,
                cartProducts: state.cartProducts.filter((singleProduct, index) => {
                    return index !== action.productId;
                }),
                ProductsDatabase: state.ProductsDatabase.map(singleProduct => {
                    if (singleProduct.name === action.productName) {
                        return {
                            ...singleProduct,
                            stock: singleProduct.stock + +action.productQuantity
                        }
                    } else return singleProduct
                })
            };
            break;
        case 'REMOVE_PRODUCT_QUANTITY':
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
            };
            break;

    }
    return state



};

const cartStore = createStore(productReducer, applyMiddleware(logger));

export default cartStore;