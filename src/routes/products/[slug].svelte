<script context="module">
    import { fetchProduct, fetchCategories, categories} from '$lib/store/product.store';
    import { lang } from '$lib/store/auth.store';
	export async function load({ page, fetch }) {
		const { slug } = page.params;

        const params = `${slug}/?lang=${lang.value}`;

        const product = await fetchProduct(params);
        fetchCategories(`?lang=${lang.value}`);

		return {
			props: { slug, product }
		};
	}
</script>

<script>
	import Categories from '$lib/Categories.svelte';
    import {currencyLang} from '$lib/constants';

    export let slug;
    export let product;

    let currency = currencyLang[lang.value];
</script>

<svelte:head>
	<title>{slug}</title>
</svelte:head>

<Categories categories={$categories} />

<div class="container">
    {#if product}
    <div class="card-group">
        <div class="card">
            <img
                class="card-img-top img-fluid"
                style="height: 300px; object-fit: contain;"
                src={product.mainImage.url}
                alt={product.mainImage.url}
            />
            <div class="card-body">
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