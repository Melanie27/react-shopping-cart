import React, { Component } from 'react';
import '../css/product.css';
class ProductGrid extends Component {
	constructor() {
		super();
		this.addToCart = this.addToCart.bind(this);
	}
	addToCart() {
		alert('added to cart' + this.props.name);
	}	
	render() {
		return (
			<div className="product">
				<h5 className="product__name"> { this.props.name } </h5>
				<p className="product__price"> { this.props.price } </p>	
				<button onClick={this.addToCart} className="product__add-to-cart"> Add to cart</button>
			</div>
			)
	}
}
export default ProductGrid