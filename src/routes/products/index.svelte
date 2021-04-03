<script context="module">
	export const prerender = true;
</script>

<script>
	import { sortOptions } from '$lib/constats';

	import { fetchProducts, pagination, products } from '$lib/store/product.store';
	import { lang } from '$lib/store/auth.store';

	const sort = sortOptions[0].id;
	const page = pagination.value.page;

	const params = `?lang=${lang.value}&sort=${sort}&page=${page}`;

	fetchProducts(params);
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<main>
	{#if $products && $products?.length}
		<div class="">
			{#each $products as product}

					<img
						class=""
						src={product.mainImage.url}
                        alt={product.mainImage.url}
					/>
					<div class="">
						<h3 class="">{product.regularPrice}</h3>
					</div>
					<div class="">
						<h1 class="">{product.title}</h1>
						<p class="">{product.description}</p>
					</div>
			{/each}
		</div>
	{/if}
</main>

<style lang="scss">

</style>
