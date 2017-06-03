export function addProductToCart(product) {
	return {
		type: types.ADD_PRODUCT,
		price: product.price,
		name: product.name
	}
}