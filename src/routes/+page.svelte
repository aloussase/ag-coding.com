<script lang="ts">
	import me from '$lib/assets/me.png';
	import Typewriter from 'svelte-typewriter';
	import { Hand, Heart } from 'lucide-svelte';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';

	const headlines = [
		'I like building stuff',
		'I am interested in functional programming',
		'I love learning together with friends'
	];
</script>

<svelte:head>
	<title>Home | Alexander Goussas</title>
	<meta
		name="description"
		content="FullStack software development blog. I talk about frontend development with SvelteKit, Vue.js and backend with .NET, Spring and TypeScript. Ocasionally I will talk about functional programming as well."
	/>
	<meta property="og:title" content="FullStack Software Development Blog" />
	<meta property="og:url" content="https://ag-coding.com" />
	<meta
		property="og:description"
		content="Software development blog about frontend (Vue.js, SvelteKit) and backend (.NET, Spring, TypeScript). I sometimes talk about functional programming as well."
	/>
	<meta property="og:image" content="" />
</svelte:head>

<div
	class="grid w-full content-center items-center justify-center justify-items-center gap-2 p-2 md:mt-16 md:grid-cols-2"
>
	<div class="">
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<span class="text-primary flex items-center gap-2 text-lg">
						Hi, there! <Hand />
					</span>
				</Card.Title>
				<Card.Description>
					<Typewriter interval={100} mode="loop">
						{#each headlines as headline}
							<span class="font-bold">{headline}</span>
						{/each}
					</Typewriter>
				</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-2">
				<p>I am a software developer from Ecuador that loves building stuff with friends.</p>
				<p>Currently in love with .NET <Heart class="inline text-red-500" />.</p>
				<p>Feel free to reach out if you want to build something together!</p>
			</Card.Content>
			<Card.Footer>
				<a href="/about">
					<Button class="bg-primary text-primary-foreground">About Me</Button>
				</a>
			</Card.Footer>
		</Card.Root>
	</div>
	<div class="drop row-start-1 drop-shadow-md md:row-start-auto">
		<img id="me-img" src={me} alt="me" class="w-[10rem] drop-shadow-lg md:w-[20rem]" />
	</div>
</div>

<style>
	#me-img {
		border-radius: 0 0 50% 50%;
	}

	.drop {
		position: relative;
	}

	.drop::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: hsl(var(--secondary));
		border-radius: 50% 50%;
	}
</style>
