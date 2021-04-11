<script context="module">
	export const prerender = true;
</script>

<script>
	import { sortOptions } from '$lib/constants';

	import {
		fetchProducts,
		pagination,
		productsWithCart,
		fetchCategories,
		categories,
		addToCart,
		removeFromCart
	} from '$lib/store/product.store';
	import { lang } from '$lib/store/auth.store';
	import Categories from '$lib/Categories.svelte';
	import Products from '$lib/Products.svelte';
	import Pagination from '$lib/Pagination.svelte';

	fetchCategories(`?lang=${lang.value}`);

	const sort = sortOptions[0].id;
	const page = pagination.value.page;

	const params = `?lang=${lang.value}&sort=${sort}&page=${page}`;

	fetchProducts(params);

	const changePage = (page) => {
		if (
			page + pagination.value.page &&
			pagination.value.pages !== pagination.value.page + page - 1
		) {
			const newPage = pagination.value.page + page;
			const params = `?lang=${lang.value}&sort=${sort}&page=${newPage}`;
			fetchProducts(params);
		}
	};

	const addToCartProduct = (event) => {
		const product = event.detail.product;
		addToCart('?id=' + product._id);
	};

	const takeFromCartProduct = (event) => {
		const product = event.detail.product;
		removeFromCart('?id=' + product._id);
	};

</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<Categories categories={$categories} />

<main>
	<div class="container">
		<Products
			products={$productsWithCart}
			on:addToCart={addToCartProduct}
			on:takeFromCart={takeFromCartProduct}
		/>
		<Pagination
			page={$pagination.page}
			on:prev={() => changePage(-1)}
			on:next={() => changePage(1)}
		/>
	</div>
</main>
