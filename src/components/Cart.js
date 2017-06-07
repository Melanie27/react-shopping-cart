import React, { Component } from 'react';
import '../css/Cart.css';
class Cart extends Component {
	constructor() {
		super();
		this.orderPrice = this.orderPrice.bind(this);
	}
	orderPrice() {
		return this.props.products.reduce((totalPrice, currentProduct) => {
            return totalPrice + currentProduct.totalPrice;
        }, 0);
	}
	render() {
		return (
			<div className="cart">
				<h3 className="cart__title"> Your order </h3>
				<h5 className="cart__order-price">
					Order price: 		{ this.orderPrice() }$
				</h5>
				<p>Your products:</p>
				<div className="cart__products-list" >
				{this.props.products.map((product, key) =>
					<div key={key} className="cart__product">
						<h5 className="product__title">{ product.name } </h5>
						{/*<p className="product__price">Price { product.price }$ </p>*/}
						<p className="product__quantity">Quantity: { product.quantity } </p>
						<p className="product__total-price"> Total price: { product.totalPrice }$ </p>
					</div>

				)}
				</div>
				<button className="button button-primary"> Order! </button>

			</div>
			)
	}
}
export default Cart;