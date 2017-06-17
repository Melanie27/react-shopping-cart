import React, { Component } from 'react';
import ProductsDatabase from './ProductsDatabase.js';
import Product from './Product.js';
import '../css/productGrid.css';
class ProductGrid extends Component {
	constructor() {
		super();
		this.state = { ProductsDatabase };
		this.addToCart = this.addToCart.bind(this);
	}

	addToCart(product) {

		this.props.onAddToCart({
			...product,
            totalPrice: product.quantity * product.price
        });

		// let addedProductIndex = this.state.ProductsDatabase.findIndex((productFromDB) =>
		// 	productFromDB.name === product.name
		// );
		// console.log(` added product index ${addedProductIndex}`);

		this.setState({
			...ProductsDatabase,
			ProductsDatabase: this.state.ProductsDatabase.map((singleProduct) =>{
				if (singleProduct.name === product.name) {
					return {
						...singleProduct,
						stock: singleProduct.stock - product.quantity
					}
				} return singleProduct
			})
		})
	}
	render() {
		return (
			<div className="product-grid">
				{ this.state.ProductsDatabase.map((product, key) =>
						<Product key={key} onAddToCart={this.addToCart} name={product.name} stock={product.stock} price={product.price}  />
					)}
			</div>
		)
	}
}
export default ProductGrid