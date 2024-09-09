<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	export let title: string;
</script>

<section>
	<Card.Root>
		<Card.Header>
			<Card.Title><i>{title}</i></Card.Title>
		</Card.Header>
		<Card.Content class={$$props.class || ''}>
			<slot></slot>
		</Card.Content>
	</Card.Root>
</section>
