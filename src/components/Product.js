import React, { Component } from 'react';
import sweetAlert from 'sweetalert';
import '../css/product.css';
class ProductGrid extends Component {
	constructor() {
		super();
		this.state = {
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
		return this.state.quantity <= this.props.stock;
	}

	isOutOfStock() {
		return this.props.stock <= 0;
	}
	addToCart() {

		if (this.isQuantityLessThanStock() && this.state.quantity > 0) {
			this.setState ({ 
				quantity: 1
			});

			this.props.onAddToCart( {
				name: this.props.name,
				price: this.props.price,
				quantity: +this.state.quantity,
				totalPrice: +this.state.quantity * this.props.price
			})

		} else if (this.isOutOfStock()) sweetAlert({ title: "Error!",
            text: "Item out of stock :(",
            type: "error",
            confirmButtonText: "Cool"});
		else sweetAlert({title: "Error!",
            text: "Quantity to big",
            type: "error",
            confirmButtonText: "Ok"})
	}	
	render() {
		return (
			<div className="product">
				<h5 className="product__name"> { this.props.name } </h5>
				<p className="product__price"> { this.props.price }$ </p>
				<div>
					<label> Quantity </label>
					<input onChange={this.handleChange} value={+this.state.quantity} type="number" />
					<p> Total price {this.props.price * this.state.quantity} </p>
					<button onClick={this.addToCart} className={"product__add-to-cart " + (this.isOutOfStock() ? 'button' : 'button-primary button')  + ""}> Add to cart</button>
				</div>
				<p className="product__stock"> Stock: { this.props.stock } </p>
			</div>
			)
	}
}
export default ProductGrid