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
    sendToCart(newProduct) {
        // let newProducts = this.state.products;
        // newProducts.push(product);
        // this.setState({ products: newProducts});
        this.setState({
            products: [...this.state.products, newProduct]
        })

    }

    deleteProduct(productToDelete) {


        console.log(`product to delete is ${productToDelete}`);
        console.log(productToDelete);
        this.setState({
            products: this.state.products.filter((singleProduct, key) => {
                return key !== productToDelete.productKey;
            })
        })
    }
      render() {
        return (
            <Provider store={CartStore}>
                <div className="app-container container">
                    <TitleBar title="MyShop"/>
                    <div className="inner-container">
                        <ProductGrid onAddToCart={this.sendToCart}/>
                        <Cart products={this.state.products} onDeleteProduct={this.deleteProduct}/>
                    </div>

              </div>
            </Provider>
        )
      }
    }

export default App;
