/**
 * Created by lenovo on 2017-06-22.
 */
import React, { Component } from 'react';
import {connect} from "react-redux";
import sweetAlert from 'sweetalert';
import '../css/Cart.css';
class Cart extends Component {
    constructor() {
        super();
        this.orderPrice = this.orderPrice.bind(this);
    }
    orderPrice() {
        return this.props.cartProducts.reduce((totalPrice, currentProduct) => {
            return totalPrice + currentProduct.totalPrice;
        }, 0);
    }

    toggleCartStatus() {
        this.setState({
            isCartOpened: !this.state.isCartOpened
        })
    }


    render() {
        return (
            <aside className={"cart menu " + (this.props.isCartOpened ? 'cart__is-open' : '')}>
                <div className="cart__title-wrapper">
                    <h3 className="title is-2"> Your order </h3>
                    <h5 className="tag is-info">
                        Total price: 		{ this.orderPrice() }$
                    </h5>
                </div>

                <table>
                    <thead>
                        <tr className="cart__row">
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot></tfoot>
                    <tbody>
                    {this.props.cartProducts.map((product, key) =>
                        <tr className="cart__row" key={key} >
                            <td >{ product.name } </td>
                            <td >{ product.quantity } </td>
                            <td >{ product.totalPrice }$ </td>
                            <td className="block" >
								<span className="tag is-danger">
									Delete
                                <button onClick={this.props.removeProductFromCart.bind(this, key, product.name, product.quantity)} className="delete is-small"></button>
                                </span>
                            </td>
                        </tr>

                    )}
                    </tbody>

                </table>
                <button className="button is-danger cart__order-button" onClick={this.props.confirmOrder.bind(this)}> Order! </button>

            </aside>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProducts,
        isCartOpened: state.isCartOpened
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeProductFromCart: (key, productName, productQuantity) => dispatch({
            type: 'REMOVE_PRODUCT_FROM_CART',
            productId: key,
            productName,
            productQuantity
        }),

        confirmOrder: () => {

            dispatch({
                type: 'CONFIRM_ORDER'
            });
            dispatch({
                type: 'TOGGLE_CART_STATUS'
            });
            sweetAlert('Order', 'Thank you for placing your order. We will contact your soon', 'success')
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);