/**
 * Created by lenovo on 2017-06-22.
 */
import React, { Component } from 'react';
import {connect} from "react-redux";
class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                {this.props.cartProducts.map((singleProduct) =>
                    <div className="sd">
                        <p> {singleProduct.name }</p>
                        <p> {singleProduct.price} </p>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProducts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);