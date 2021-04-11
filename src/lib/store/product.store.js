import { BehaviorSubject } from 'rxjs';  
import { get } from '$lib/api';
import { map } from 'rxjs/internal/operators/map.js';
import { filter } from 'rxjs/internal/operators/filter.js';
import { mergeMap } from 'rxjs/internal/operators/mergeMap.js';


export const products = new BehaviorSubject(null);
export const product = new BehaviorSubject(null);
export const userOrders = new BehaviorSubject(null);
export const order = new BehaviorSubject(null);
export const priceFilter = new BehaviorSubject(Infinity);
export const maxPrice = new BehaviorSubject(Infinity);
export const minPrice = new BehaviorSubject(0);
export const cart = new BehaviorSubject(null);
export const productsTitles = new BehaviorSubject([]);
export const position = new BehaviorSubject(null);
export const error = new BehaviorSubject('');
export const loadingProduct = new BehaviorSubject(false);
export const loadingProducts = new BehaviorSubject(false);
export const loading = new BehaviorSubject(false);
export const categories = new BehaviorSubject([]);
export const pagination = new BehaviorSubject({
    page: 1,
    pages: 1,
    total: 0
  });

  export const productsWithCart = products.pipe(
	filter((products) => !!products),
	mergeMap((products) => {
		return cart.pipe(
			map((cart) => {
				if (cart && cart.items && cart.items.length) {
					const cartItemsIds = cart.items.map((item) => item.item._id);
					return products.map((product) => {
						const productInCartIndex = cartItemsIds.indexOf(product._id);
						if (productInCartIndex !== -1) {
							return { ...product, inCart: cart.items[productInCartIndex] };
						}
						return product;
					});
				}
				return products;
			})
		);
	})
);

export const productWithCart = product.pipe(
	filter((product) => !!product),
	mergeMap((product) => {
		return cart.pipe(
			map((cart) => {
				if (cart && cart.items && cart.items.length) {
					const cartItemsIds = cart.items.map((item) => item.item._id);
					const productInCartIndex = cartItemsIds.indexOf(product._id);
					if (productInCartIndex !== -1) {
						return { ...product, inCart: cart.items[productInCartIndex] };
					}
				}
				return product;
			})
		);
	})
);

  export const fetchProducts = async (params) => {
	try {
		const fromApi = await get('api/products' + params);
		products.next(fromApi.all);
        maxPrice.next(fromApi.maxPrice);
        minPrice.next(fromApi.minPrice);
        pagination.next(fromApi.pagination);
    return fromApi.all;
	} catch (e) {}
};

export const fetchCategories = async (params) => {
	try {
		const fromApi = await get('api/products/categories' + params);
		categories.next(fromApi);
    return fromApi;
	} catch (e) {}
};

export const fetchProduct = async (params) => {
	try {
		const fromApi = await get('api/products/' + params);
		product.next(fromApi);
    return fromApi;
	} catch (e) {}
};

export const fetchCart = async(params = '') => {
	try {
		const fromApi = await get('api/cart' + params);
		cart.next(fromApi);
		return cart;
	} catch (e) {}
}

export const addToCart = async(params = '') => {
	try {
		const fromApi = await get('api/cart/add' + params);
		cart.next(fromApi);
		return cart;
	} catch (e) {}
  }


export const removeFromCart = async(params = '') => {
	try {
		const fromApi = await get('api/cart/remove' + params);
		cart.next(fromApi);
		return cart;
	} catch (e) {}
  }

