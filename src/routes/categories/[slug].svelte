<script context="module">
	import { sortOptions } from '$lib/constants';
	import {
		fetchProducts,
		pagination,
		fetchCategories,
		categories,
		productsWithCart,
		addToCart,
		removeFromCart
	} from '$lib/store/product.store';
	import { lang } from '$lib/store/auth.store';
	export async function load({ page, fetch }) {
		const { slug } = page.params;

		const sort = sortOptions[0].id;
		const paginationPage = pagination.value.page;

		const params = `?lang=${lang.value}&sort=${sort}&page=${paginationPage}&category=${slug}`;

		const products = await fetchProducts(params);
		fetchCategories(`?lang=${lang.value}`);

		return {
			props: { slug }
		};
	}
</script>

<script>
	import Categories from '$lib/Categories.svelte';
	import Products from '$lib/Products.svelte';
	import Pagination from '$lib/Pagination.svelte';

	export let slug;

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
	<title>{slug}</title>
</svelte:head>

<Categories categories={$categories} activeCategory={slug} />

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

<style lang="scss">
</style>
