<script context="module">
	import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged.js';
	import { map } from 'rxjs/internal/operators/map.js';
</script>

<script>
	import '../app.scss';
	import Cookie from 'cookie-universal';
	import { locale } from 'svelte-i18n';
	import { lang, fetchUser, fetchTranslations } from '$lib/store/auth.store';
	import { fetchCart, cart } from '$lib/store/product.store';
	import Nav from '$lib/Nav.svelte';
	import { page } from '$app/stores';



	const cookies = Cookie();
	const cookieLang = cookies.get('eshop_lang') || 'en';

	fetchUser();
	fetchCart('?lang=' + cookieLang)

	lang.next(cookieLang);
	lang.pipe(distinctUntilChanged()).subscribe((lang) => {
		locale.set(lang);
		fetchTranslations(lang);
	});

	let itemsInCart = cart.pipe(
		map(cart => {
			if(cart && cart.items && cart.items.length) {
				return cart.items.reduce((prev, curr) => {
					return prev + curr.qty
				}, 0);
			}
			return 0;
		}
	))
</script>

<Nav path={$page.path} itemsInCart={$itemsInCart}/>

<main>
	<div class="main">
		<slot />
	</div>
</main>

<style lang="scss">
	.main {
		padding: 1rem 0;
	}
</style>