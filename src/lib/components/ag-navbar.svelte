<script lang="ts">
	import { Code, User, NotebookText } from 'lucide-svelte';

	const links = [
		{ name: 'Projects', to: '/projects', icon: Code },
		{ name: 'About', to: '/about', icon: User },
		{ name: 'Blog', to: '/blog', icon: NotebookText }
	];
</script>

<nav
	class="flex w-full flex-col items-center justify-between bg-primary p-4 text-white shadow-md md:flex-row"
>
	<h1 class="text-xl"><a href="/" class="hover:underline">Alexander Goussas</a></h1>
	<ul class="flex gap-4">
		{#each links as link}
			<li>
				<a
					href={link.to}
					class="flex items-center gap-1 rounded-sm p-1 text-lg hover:bg-white hover:text-primary hover:underline"
				>
					<svelte:component this={link.icon} />
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
