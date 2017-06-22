import React, { Component } from 'react';
import Product from './Product.js';
import '../css/productGrid.css';
import {connect} from "react-redux";
class ProductGrid extends Component {
	constructor() {
		super();

		this.addToCart = this.addToCart.bind(this);
	}

	addToCart(product) {

		// this.props.onAddToCart({
		// 	...product,
         //    totalPrice: product.quantity * product.price
        // });
        //
		// // let addedProductIndex = this.state.ProductsDatabase.findIndex((productFromDB) =>
		// // 	productFromDB.name === product.name
		// // );
		// // console.log(` added product index ${addedProductIndex}`);
        //
		// this.setState({
		// 	...ProductsDatabase,
		// 	ProductsDatabase: this.state.ProductsDatabase.map((singleProduct) =>{
		// 		if (singleProduct.name === product.name) {
		// 			return {
		// 				...singleProduct,
		// 				stock: singleProduct.stock - product.quantity
		// 			}
		// 		} return singleProduct
		// 	})
		// })
	}
	render() {
		return (
			<div className="product-grid">
				{ this.props.ProductsDatabase.map((product, key) =>
				 <Product key={key} name={product.name} stock={product.stock} price={product.price}
				 category={product.category}/>
					)}
			</div>
		)
	}
}
const mapStateToProps = (state) => {
    return {
        ProductsDatabase: state.ProductsDatabase
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
