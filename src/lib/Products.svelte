<script>
	import { goto } from '$app/navigation';
	import { lang } from '$lib/store/auth.store';
	import { currencyLang } from '$lib/constants';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let currency = currencyLang[lang.value];

	export let products = [];

	const goToProductDetail = (e, product) => {
		e.preventDefault();
		e.stopPropagation();
		goto('/products/' + product.titleUrl);
	};

	const addToCart = (e, product) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch('addToCart', { product });
	};

	const takeFromCart = (e, product) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch('takeFromCart', { product });
	};
</script>

{#if products && products?.length}
	<div class="row align-items-start">
		{#each products as product}
			<div class="col card-group" style="max-width: 20rem;">
				<div class="card" on:click={(e) => goToProductDetail(e, product)}>
					<img
						class="card-img-top img-fluid"
						style="height: 200px; object-fit: contain;"
						src={product.mainImage.url}
						alt={product.mainImage.url}
					/>
					<div class="card-body" style="height:200px;">
						<div class="flex">
							<h5 class="">{product.salePrice} {currency}</h5>
							<i
								class="bi-cart-plus-fill"
								on:click={(e) => addToCart(e, product)}
								style="font-size: 1.2rem; line-height: 1; margin-left: 1rem;"
							/>
							{#if product.inCart}
								<span style="margin-left: 1rem;">
									{product.inCart.qty}
								</span>

								<i
									class="bi-cart-dash-fill"
									on:click={(e) => takeFromCart(e, product)}
									style="font-size: 1.2rem; line-height: 1; margin-left: 1rem;"
								/>
							{/if}
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
