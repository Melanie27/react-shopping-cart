import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Cart.css';
import sweetAlert from 'sweetalert';
class Cart extends Component {
	constructor() {
		super();


		this.orderPrice = this.orderPrice.bind(this);
		this.deleteProduct = this.deleteProduct.bind(this);
	}
	orderPrice() {
		return this.props.products.reduce((totalPrice, currentProduct) => {
            return totalPrice + currentProduct.totalPrice;
        }, 0);
	}

	toggleCartStatus() {
		// this.setState({
		// 	isCartOpened: !this.state.isCartOpened
		// })
		this.props.toggleCartStatus()
	}


	deleteProduct(productKey) {

		this.props.onDeleteProduct({ productKey });

	}

	makeOrder() {
		if (this.orderPrice() <= 0)
			sweetAlert('Error', 'Your cart is empty. Try to add some products!')
	}
	//{"product__add-to-cart card-footer-item button is-primary" + (this.isOutOfStock() ? 'button' : 'button is-primary')  + ""}
	render() {
		return (
			<aside className={"cart menu " + (this.props.isCartOpened ? 'cart__is-open' : 'is-closed')}>
				<button onClick={this.toggleCartStatus.bind(this)} className="cart__switcher button is-info">
					{this.props.isCartOpened ? 'Close' : 'Open Your Cart'}
				</button>
				<h3 className="title is-2 cart__title "> Your order </h3>
				<h5 className="tag cart__price-tag">
					Order price: 		{ this.orderPrice() }$
				</h5>
				<div className="cart__products-list" >
				{this.props.products.map((product, key) =>
					<div key={key} className="cart-product">
						<h5 className="cart-product__title">{ product.quantity } { product.name } </h5>
						{/*<p className="product__price">Price { product.price }$ </p>*/}
						<p className="cart-product__total-price">{ product.totalPrice }$ </p>
						<div className="block" >
								<span className="tag is-danger">
									Delete
							<button onClick={this.deleteProduct.bind(this, key)} className="delete is-small"></button>
							</span>
						</div>
					</div>

				)}
				</div>
				<button onClick={this.makeOrder.bind(this)} className="button is-danger"> Order! </button>

			</aside>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		isCartOpened: state.isCartOpened
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartStatus: () => {
			dispatch({
				type: 'TOGGLE_CART'
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);