<script>
    export let categories = [];
    export let activeCategory = '';
</script>

{#if categories && categories?.length}
	<div class="categories-links-wrap">
		<div class="categories-links">
			{#each categories as category, i}
				<a class="title-category" href="/categories/{category.titleUrl}" 
                    class:active="{activeCategory === category.titleUrl}">
					{category.title}
				</a>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.categories-links-wrap {
    	box-shadow: 1px 0 2px rgb(0 0 0 / 10%);
		padding: 10px 0;
		position: relative;
		overflow: hidden;
		display: flex;
		margin-top: -1rem;
		margin-bottom: 1rem;
		&:before {
			content: '';
			height: 100%;
			width: 50px;
			display: flex;
		}
	}

	.categories-links {
		margin: auto;
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
		position: relative;
	}

	.title-category {
		font-weight: 500;
		margin: 0;
		padding: 0 10px;
		text-align: center;
		font-size: 1.2em;
		line-height: 1.2em;
		text-transform: capitalize;
		color: #333;

        &.active {
            color: red;
        }
	}
</style>