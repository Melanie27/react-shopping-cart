import React, { Component } from 'react';
import '../css/Cart.css';
class Cart extends Component {
	constructor() {
		super();
		this.state = {
			isCartOpened: false
		};
		this.orderPrice = this.orderPrice.bind(this);
		this.deleteProduct = this.deleteProduct.bind(this);
	}
	orderPrice() {
		return this.props.products.reduce((totalPrice, currentProduct) => {
            return totalPrice + currentProduct.totalPrice;
        }, 0);
	}

	toggleCartStatus() {
		this.setState({
			isCartOpened: !this.state.isCartOpened
		})
	}


	deleteProduct(productKey) {

		this.props.onDeleteProduct({ productKey });

	}
	//{"product__add-to-cart card-footer-item button is-primary" + (this.isOutOfStock() ? 'button' : 'button is-primary')  + ""}
	render() {
		return (
			<aside className={"cart menu " + (this.state.isCartOpened ? 'cart__is-open' : '')}>
				<button onClick={this.toggleCartStatus.bind(this)} className="cart__switcher button is-info">
					{this.state.isCartOpened ? 'Close' : 'Open Your Cart'}
				</button>
				<h3 className="title is-2"> Your order </h3>
				<h5 className="tag">
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
						<div className="block" >
								<span className="tag is-danger">
									Delete
							<button onClick={this.deleteProduct.bind(this, key)} className="delete is-small"></button>
							</span>
						</div>
					</div>

				)}
				</div>
				<button className="button is-danger"> Order! </button>

			</aside>
			)
	}
}
export default Cart;