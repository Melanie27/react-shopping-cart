import React, { Component } from 'react';
import sweetAlert from 'sweetalert';
import '../css/product.css';
import {connect} from "react-redux";
class Product extends Component {
	constructor() {
		super();

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
    addProductToCart() {
		let self = this;
		this.props.addProductToCart({

				name: self.props.name,
				price: self.props.price

		});
	}
	render() {
		return (
			<div className="card product">
				<div className="card-header">
					<h5 className="product__name card-header-title"> { this.props.name } </h5>
					<p className="product__price card-header-icon"> { this.props.price }$ </p>
				</div>

				<div className="card-content is-primary">
					<label> Quantity </label>
					{/*<input className="input" onChange={this.handleChange} value={+this.state.quantity} type="number" />*/}
					{/*<p> Total price {this.props.price * this.state.quantity} </p>*/}
				</div>
				<div className="card-footer">
					{/*<p className="product__stock card-footer-item"> Stock: { this.props.stock } </p>*/}
					<p className="card-footer-item">
						<button onClick={this.addProductToCart.bind(this)} className={"product__add-to-cart button is-primary" + (this.isOutOfStock() ? 'button' : 'button is-primary')  + ""}> Add to cart</button>
					</p>


				</div>
			</div>
			)
	}
}
const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (newProduct) => dispatch({
            type: 'ADD_PRODUCT_TO_CART',
			productToAdd: newProduct
        })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);