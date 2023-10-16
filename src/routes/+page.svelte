<script>
	import recipes from '../recipes.json';
	import { urlifyName } from '../utils/normalise';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<header>
			<h1 class="h1">
				<span
					class="bg-gradient-to-br from-pink-500 to-red-300 bg-clip-text text-transparent box-decoration-clone"
					>Cookbook</span
				>
			</h1>
		</header>
		<div class="flex-column w-full">
			{#each recipes as recipe}
				<div>
					<div class="card flex-column m-4 p-4">
						<h3 class="h3 p-2 underline">{recipe.name}</h3>
						{#if recipe.imageURL}
							<div>
								<img
									class="h-80 w-auto m-1"
									src={recipe.imageURL}
									alt={`a delicious ${recipe.name}`}
								/>
							</div>
						{:else}
							<p>no image!</p>
						{/if}
						<a
							class="anchor p-2 text-blue-600 hover:text-blue-800 visited:text-purple-600"
							href={`recipes/${urlifyName(recipe.name)}`}>See recipe</a
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
