<script>
	import { cart, removeFromCart } from '$lib/store/product.store';
	import { lang } from '$lib/store/auth.store';
	import { currencyLang } from '../../lib/constants';

	let currency = currencyLang[lang.value];

	const takeFromCartProduct = (product) => {
		removeFromCart('?id=' + product._id);
	};
</script>

<div class="px-4 px-lg-0">
	<div class="container py-1 text-center">
		<h1 class="display-4 m-0">Cart</h1>
	</div>

	<div class="pb-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 p-3 bg-white rounded shadow-sm mb-3">
					<div class="table-responsive">
						<table class="table">
							<thead>
								<tr>
									<th scope="col" class="border-0 bg-light">
										<div class="p-2 px-3 text-uppercase">Product</div>
									</th>
									<th scope="col" class="border-0 bg-light">
										<div class="py-2 text-uppercase">Price</div>
									</th>
									<th scope="col" class="border-0 bg-light">
										<div class="py-2 text-uppercase">Quantity</div>
									</th>
									<th scope="col" class="border-0 bg-light">
										<div class="py-2 text-uppercase">Remove</div>
									</th>
								</tr>
							</thead>
							<tbody>
								{#if !!$cart?.items?.length}
									{#each $cart.items as cartItem}
										<tr>
											<th scope="row" class="border-0">
												<div class="p-2">
													<img
														src={cartItem?.item?.mainImage.url}
														alt={cartItem?.item?.mainImage.name}
														width="70"
														class="img-fluid rounded shadow-sm"
													/>
													<div class="ml-3 d-inline-block align-middle">
														<h5 class="mb-0">
															<a
																href="/products/{cartItem?.item?.titleUrl}"
																class="text-dark d-inline-block align-middle"
																>{cartItem?.item?.title}</a
															>
														</h5>
														<span class="text-muted font-weight-normal font-italic d-block"
															>{cartItem?.item?.description}</span
														>
													</div>
												</div>
											</th>
											<td class="border-0 align-middle"
												><strong>{cartItem?.item?.salePrice} {currency}</strong></td
											>
											<td class="border-0 align-middle"><strong>{cartItem?.qty}</strong></td>
											<td class="border-0 align-middle">
												<a href="#"
													on:click={() => takeFromCartProduct(cartItem?.item)}
													class="text-dark clickable"><i class="bi-trash" /></a
												>
											</td>
										</tr>
									{/each}
								{/if}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
