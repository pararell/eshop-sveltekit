<script>
	export let path;
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container">
		<a href="/" class="navbar-brand"> Mean Eshop </a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarScroll">
		  <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
			<li class="nav-item">
				<a href="/" sveltekit:prefetch class:active={path === '/'} class="nav-link"> Home </a>
			</li>
			<li class="nav-item">
				<a href="/login" class:active={path === '/login'} class="nav-link"> Login </a>
			</li>

			<li class="nav-item">
				<a href="/products" class:active={path === '/products' || path.includes('/categories')} class="nav-link"> Products </a>
			</li>
		  </ul>
		  <form class="d-flex">
			<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
			<button class="btn btn-outline-success" type="submit">Search</button>
		  </form>
		</div>
	</div>

</nav>

<style>
	.active {
		color: rgba(0, 0, 0, 0.9);
	}
</style>
