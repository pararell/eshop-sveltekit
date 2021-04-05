<script>
	import { goto } from '$app/navigation';
    import { lang } from '$lib/store/auth.store';
    import { currencyLang } from '$lib/constants';

    let currency = currencyLang[lang.value];

	export let products = [];

	const goToProductDetail = (product) => {
		goto('/products/' + product.titleUrl);
	};
</script>

{#if products && products?.length}
	<div class="row align-items-start">
		{#each products as product}
			<div class="col card-group" style="max-width: 20rem;">
				<div class="card" on:click={() => goToProductDetail(product)}>
					<img
						class="card-img-top img-fluid"
						style="height: 200px; object-fit: contain;"
						src={product.mainImage.url}
						alt={product.mainImage.url}
					/>
					<div class="card-body" style="height:200px;">
						<div class="">
							<h5 class="">{product.salePrice} {currency}</h5>
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

<style lang="scss">
	.card {
		border: none;
		box-shadow: 0 0px 3px 0 rgb(0 0 0 / 15%);
		border-radius: 10px;
		width: 18rem;
		margin-bottom: 1rem;
		cursor: pointer;
	}
</style>
