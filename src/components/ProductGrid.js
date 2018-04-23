import React, { Component } from 'react';
import Product from './Product.js';
import '../css/productGrid.css';
import {connect} from "react-redux";
class ProductGrid extends Component {
	constructor() {
		super();

	}
	render() {
		return (
			<div className="product-grid">
				{ this.props.ProductsDatabase.map((product, key) => {
               		if (product.category === this.props.categoryToFilter || this.props.categoryToFilter === 'all') {
                        return (
							<Product key={key} name={product.name} stock={product.stock} price={product.price}
									 category={product.category} image={product.image}/> )
                    }


					})}
			</div>
		)
	}
}
const mapStateToProps = (state) => {
    return {
        ProductsDatabase: state.ProductsDatabase,
		categoryToFilter: state.categoryToFilter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
