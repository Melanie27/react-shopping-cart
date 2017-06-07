import React, { Component } from 'react';
// moje
import TitleBar from './components/TitleBar.js';
import ProductGrid from './components/ProductGrid.js';
import Cart from './components/Cart.js';

import logo from './logo.svg';



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
        console.log(`im sending product ${product.name} to cart, with price ${product.price} and quantity of ${product.quantity}`);
        let newProducts = this.state.products;
        newProducts.push(product);
        this.setState({ products: newProducts});
        console.log(this.state.products);

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
            // <Provider store={store}>
            <div className="app-container">
              <TitleBar title="MyShop"/>
                <div className="inner-container">
                    <ProductGrid onAddToCart={this.sendToCart}/>
                    <Cart onDeleteProduct={this.deleteProduct} products={this.state.products}/>
                </div>

          </div>
          // </Provider>
        )
      }
    }

export default App;
