<script context="module">
	export const prerender = true;
</script>

<script>
	import { user, lang } from '$lib/store/auth.store';
	import Categories from '$lib/Categories.svelte';
	import { categories, fetchCategories } from '$lib/store/product.store';

	fetchCategories(`?lang=${lang.value}`);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Categories categories={$categories} />



<div class="container">
	{#if $user}
		<h1>Hello {$user.email}!</h1>
	{/if}

	{#if $categories && $categories?.length}
		<div id="carouselExampleFade" class="carousel slide carousel-dark" data-bs-ride="carousel">
			<div class="carousel-inner">
				{#each $categories as category, i}
						<a class="carousel-item" class:active={!i} href="{'/categories/' + category.titleUrl }">
							<img
								class="d-block w-100"
								style="max-height: 500px; object-fit:contain;"
								src={category.mainImage?.url}
								alt={category.mainImage?.name}
							/>
							<h2
								class="text-white text-uppercase"
								style="position: absolute; top: 50%; left: 40%; padding: 1rem; background: rgba(0,0,0,0.5); border-radius: 8px;"
							>
								{category.title}
							</h2>
						</a>
				
				{/each}
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true" />
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true" />
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	{/if}
</div>

<style lang="scss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
