<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	export let title: string;
</script>

<section>
	<Card.Root>
		<Card.Header class="bg-primary text-white">
			<Card.Title>
				<span class="text-2xl"># {title}</span>
			</Card.Title>
		</Card.Header>
		<Card.Content class="{$$props.class || ''} p-4">
			<slot></slot>
		</Card.Content>
	</Card.Root>
</section>
