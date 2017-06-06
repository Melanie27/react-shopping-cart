import React, { Component } from 'react';
import '../css/product.css';
class ProductGrid extends Component {
	constructor() {
		super();
		this.state = {
			stock: 10,
			quantity: 1
		};
		this.addToCart = this.addToCart.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.isQuantityLessThanStock = this.isQuantityLessThanStock.bind(this);
		this.isOutOfStock = this.isOutOfStock.bind(this);
	}
	handleChange(event) {
    	this.setState({quantity: event.target.value});
  	}

	isQuantityLessThanStock() {
		return this.state.quantity <= this.state.stock;
	}

	isOutOfStock() {
		return this.state.stock <= 0;
	}
	addToCart() {

		if (this.isQuantityLessThanStock() || this.quantity > 0) {
			this.setState ({ 
				stock: this.state.stock - this.state.quantity,
				quantity: 1
			});

			this.props.onAddToCart( {
				name: this.props.name,
				price: this.props.price,
				quantity: +this.state.quantity,
				totalPrice: +this.state.quantity * this.props.price
			})

		} else if (this.isOutOfStock()) alert('item out of stock');
		else alert('quantity too big!')
	}	
	render() {
		return (
			<div className="product">
				<h5 className="product__name"> { this.props.name } </h5>
				<p className="product__price"> { this.props.price }$ </p>
				<p className="product__stock"> Stock: { this.state.stock } </p>
				<div>
					<label> Quantity </label>
					<input onChange={this.handleChange} value={+this.state.quantity} type="number" />
					<button onClick={this.addToCart} className={"product__add-to-cart " + (this.isOutOfStock() ? 'button' : 'button-primary button')  + ""}> Add to cart</button>
				</div>
			</div>
			)
	}
}
export default ProductGrid