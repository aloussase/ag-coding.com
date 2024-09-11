<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Github } from 'lucide-svelte';
	import Button from '@/components/ui/button/button.svelte';
	import { Badge } from '$lib/components/ui/badge';

	export let data: PageData;
</script>

<h1>Projects</h1>

<div id="projects" class="mt-4">
	{#each data.projects as project}
		<Card.Root class="w-fit max-w-[300px]">
			<img src={project.image} alt={project.name} class="max-h-[150px] w-full object-cover" />
			<Card.Header>
				<Card.Title>{project.name}</Card.Title>
				<Card.Description class="flex gap-1">
					{#each project.labels as label}
						<Badge>{label}</Badge>
					{/each}
				</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>{project.description}</p>
			</Card.Content>
			<Card.Footer>
				<a href={project.github} target="_blank">
					<Button class="flex gap-1">
						<Github /> GitHub
					</Button>
				</a>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
