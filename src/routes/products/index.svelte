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
	<div class="container">
		{#if $products && $products?.length}
			<div class="row align-items-start">
				{#each $products as product}
					<div class="col card-group" style="max-width: 20rem;">
						<div class="card">
							<img class="card-img-top img-fluid" style="height: 200px; object-fit: contain;"
								src={product.mainImage.url} alt={product.mainImage.url} />
							<div  class="card-body" style="height:200px;">
								<div class="">
									<h5 class="">{product.salePrice}</h5>
								</div>
								<div class="">
									<h5 class="card-title">{product.title}</h5>
									<p class="">{product.description}</p>
								</div>
							</div>
	
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>

<style lang="scss">
	.card {
		border: none;
		box-shadow: 0 0px 3px 0 rgb(0 0 0 / 15%);
    	border-radius: 10px;
		width: 18rem;
		margin-bottom: 1rem;
	}
</style>
