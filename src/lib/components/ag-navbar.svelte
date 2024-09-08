<script lang="ts">
	const links = [
		{ name: 'Projects', to: '/projects' },
		{ name: 'About', to: '/about' },
		{ name: 'Blog', to: '/blog' },
		{ name: 'Contact', to: '/contact' }
	];
</script>

<nav class="flex w-full flex-col items-center justify-between bg-white p-4 shadow-sm md:flex-row">
	<h1 class="text-xl">Alexander Goussas</h1>
	<ul class="flex gap-4">
		{#each links as link}
			<li><a href={link.to} class="hover:underline">{link.name}</a></li>
		{/each}
	</ul>
</nav>
