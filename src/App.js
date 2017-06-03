import React, { Component } from 'react';
import TitleBar from './components/TitleBar.js';
import ProductGrid from './components/ProductGrid.js';
import Cart from './components/Cart.js';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
    	<div>
	      <TitleBar title="super karta"/>
	      <ProductGrid/>
	      <Cart/>
      </div>
    )
  }
}

export default App;
