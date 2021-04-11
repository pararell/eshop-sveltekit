<script context="module">
    import { fetchProduct, fetchCategories, categories, addToCart, removeFromCart, productWithCart} from '$lib/store/product.store';
    import { lang } from '$lib/store/auth.store';
	export async function load({ page, fetch }) {
		const { slug } = page.params;

        const params = `${slug}/?lang=${lang.value}`;

        const product = await fetchProduct(params);
        fetchCategories(`?lang=${lang.value}`);

		return {
			props: { slug }
		};
	}
</script>

<script>
	import Categories from '$lib/Categories.svelte';
    import {currencyLang} from '$lib/constants';

    export let slug;

    let currency = currencyLang[lang.value];


	const addToCartProduct = (product) => {
		addToCart('?id=' + product._id);
	};

	const takeFromCartProduct = (product) => {
		removeFromCart('?id=' + product._id);
	};

</script>

<svelte:head>
	<title>{slug}</title>
</svelte:head>

<Categories categories={$categories} />

<div class="container">
    {#if $productWithCart}
    <div class="card-group">
        <div class="card">
            <img
                class="card-img-top img-fluid"
                style="height: 300px; object-fit: contain;"
                src={$productWithCart.mainImage.url}
                alt={$productWithCart.mainImage.url}
            />
            <div class="card-body">
                <div class="flex">
                    <h5 class="">{$productWithCart.salePrice} {currency}</h5>
                    <i
                        class="bi-cart-plus-fill clickable"
                        on:click={(e) => addToCartProduct($productWithCart)}
                        style="font-size: 1.2rem; line-height: 1; margin-left: 1rem;"
                    />
                    {#if $productWithCart.inCart}
                        <span style="margin-left: 1rem;">
                            {$productWithCart.inCart.qty}
                        </span>

                        <i
                            class="bi-cart-dash-fill clickable"
                            on:click={(e) => takeFromCartProduct($productWithCart)}
                            style="font-size: 1.2rem; line-height: 1; margin-left: 1rem;"
                        />
                    {/if}
                </div>
                <div class="">
                    <h5 class="card-title">{$productWithCart.title}</h5>
                    <p class="">{$productWithCart.description}</p>
                </div>
            </div>
        </div>
    </div>

    {/if}

</div>




<style lang="scss">
	.card {
		border: none;
		box-shadow: 0 0px 3px 0 rgb(0 0 0 / 15%);
		border-radius: 10px;
		width: 18rem;
		margin-bottom: 1rem;
	}
</style>