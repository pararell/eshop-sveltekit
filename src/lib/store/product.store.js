import { BehaviorSubject } from 'rxjs';  
import { get, post } from '$lib/api';

export const products = new BehaviorSubject(null);
export const product = new BehaviorSubject(null);
export const userOrders = new BehaviorSubject(null);
export const order = new BehaviorSubject(null);
export const priceFilter = new BehaviorSubject(Infinity);
export const maxPrice = new BehaviorSubject(Infinity);
export const minPrice = new BehaviorSubject(0);
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


  export const fetchProducts = async (params) => {
	try {
		const fromApi = await get('api/products' + params);
		products.next(fromApi.all);
        maxPrice.next(fromApi.maxPrice);
        minPrice.next(fromApi.minPrice);
        pagination.next(fromApi.pagination);
	} catch (e) {}
};

export const fetchCategories = async (params) => {
	try {
		const fromApi = await get('api/products/categories' + params);
		categories.next(fromApi);
	} catch (e) {}
};