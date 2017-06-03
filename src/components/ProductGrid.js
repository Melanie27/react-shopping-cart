import React, { Component } from 'react';
import ProductsDatabase from './ProductsDatabase.js';
import Product from './Product.js';
import '../css/productGrid.css';
class ProductGrid extends Component {
	constructor() {
		super();
		this.state = { ProductsDatabase };

	}
	render() {
		return (
			<div className="productGrid">
				{ this.state.ProductsDatabase.map((product) =>
					<Product name={product.name} price={product.price}  />
					)}
			</div>
		)
	}
}
export default ProductGrid