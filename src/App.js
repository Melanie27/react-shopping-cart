import React, { Component } from 'react';
import TitleBar from './components/TitleBar.js';
import ProductGrid from './components/ProductGrid.js';
import Cart from './components/Cart.js';
import logo from './logo.svg';



class App extends Component {
  render() {
    return (
    	// <Provider store={store}>
    	<div className="app-container">
	      <TitleBar title="super karta"/>
	      <ProductGrid/>
	      <Cart/>
      </div>
      // </Provider>
    )
  }
}

export default App;
