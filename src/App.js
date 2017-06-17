import React, { Component } from 'react';
// moje
import TitleBar from './components/TitleBar.js';
import ProductGrid from './components/ProductGrid.js';
import Cart from './components/Cart.js';
import './index.css';
import logo from './logo.svg';

import CartStore from './store/CartStore';
import { Provider } from 'react-redux'


class App extends Component {
    constructor() {
        super();
        this.sendToCart = this.sendToCart.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.state = {
            products: []
        }
    }
    sendToCart(product) {
        let newProducts = this.state.products;
        newProducts.push(product);
        this.setState({ products: newProducts});

    }

    deleteProduct(productKey) {

        // this.state.products = this.state.products.splice(productKey, 1);

        this.setState(state => {
            state.products.splice(productKey, 1);
            return {products: state.products};
        });
    }
      render() {
        return (
            <Provider store={CartStore}>
                <div className="app-container container">
                    <TitleBar title="MyShop"/>
                    <div className="inner-container">
                        <ProductGrid onAddToCart={this.sendToCart}/>
                        <Cart products={this.state.products}/>
                    </div>

              </div>
            </Provider>
        )
      }
    }

export default App;
