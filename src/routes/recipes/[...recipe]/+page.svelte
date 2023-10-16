<script>
	export let data;
	const recipe = data.recipe;
</script>

<div class="w-full flex justify-center">
	<div class="card p-4 w-90 flex justify-center">
		<div class="flex-col justify-evenly">
			<h2 class="h2 mb-5">{recipe.name}</h2>
			<div class="flex">
				<div>
					<img class="h-80 w-auto m-1" src={recipe.imageURL} alt={`a delicious ${recipe.name}`} />
				</div>
				<div class="m-3">
					<h3 class="h3 font-bold underline">Ingredients</h3>
					<ul>
						{#each recipe.ingredients as ingredient}
							<li class="m-1">{ingredient.quantity} {ingredient.name}</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="m-3">
				<h3 class="h3 font-bold underline">Steps</h3>
				<ul class="w-[70%]">
					{#each recipe.steps as step, i}
						<li class="m-3">{i + 1}. {step}</li>
					{/each}
				</ul>
			</div>
			{#if recipe.originalURL}
				<h4 class="h4">
					see on website <a
						class="anchor text-blue-600 hover:text-blue-800 visited:text-purple-600"
						target="_blank"
						href={recipe.originalURL}>here</a
					>
				</h4>
			{/if}
		</div>
	</div>
</div>
