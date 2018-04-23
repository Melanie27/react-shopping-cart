import React, { Component } from 'react';
// moje
//import { Route, Link } from 'react-router-dom';
import './index.css';
import CartStore from './store/CartStore';
import { Provider } from 'react-redux'
import Cart from './components/Cart.js';
import ProductGrid from './components/ProductGrid.js';
import FilterTabs from './components/FilterTabs.js';
import TitleBar from './components/TitleBar.js';


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
        this.setState({
            products: [...this.state.products, newProduct]
        })
    }
    applyFilter(category) {
        this.setState({
                ...this.state,
            productsToFilter: category
        })
    }
    deleteProduct(productToDelete) {
        console.log(`product to delete is ${productToDelete}`);
        console.log(productToDelete);
        this.setState({
            ...this.state,
            products: this.state.products.filter((singleProduct, key) => {
                return key !== productToDelete.productKey;
            })
        })
    }
      render() {
        return (
            

            <Provider store={CartStore}>
                
                <div className="container">
                    <TitleBar title="Point of Sale"></TitleBar>
                   
                    <FilterTabs></FilterTabs>
                        <div className="app-container container">
                                <div className="inner-container">
                                        <ProductGrid filterProducts={this.state.productsToFilter} onAddToCart={this.sendToCart}/>
                                </div>
                                <Cart></Cart>
                          </div>
                </div>
        </Provider>
        )
      }
    }

export default App;
