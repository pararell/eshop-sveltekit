<script context="module">
	import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged.js';
</script>

<script>
	import '../app.scss';
	import Cookie from 'cookie-universal';
	import { locale } from 'svelte-i18n';
	import { lang, fetchUser, fetchTranslations } from '$lib/store/auth.store';
	import Nav from '$lib/Nav.svelte';
	import { page } from '$app/stores';

	const cookies = Cookie();
	const cookieLang = cookies.get('eshop_lang') || 'en';

	fetchUser();

	lang.next(cookieLang);
	lang.pipe(distinctUntilChanged()).subscribe((lang) => {
		locale.set(lang);
		fetchTranslations(lang);
	});
</script>

<Nav path={$page.path} />

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