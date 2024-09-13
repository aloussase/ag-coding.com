<script lang="ts">
	import AgNavbar from '@/components/ag-navbar.svelte';
	import '../app.css';
	import AgFooter from '@/components/ag-footer.svelte';
</script>

<AgNavbar />

<svelte:head>
	<title>Projects | Alexander Goussas</title>
</svelte:head>

<div class="relative min-h-screen w-full overflow-auto">
	<div class="mb-[350px] p-4 md:mx-auto md:mb-[150px] md:w-4/5">
		<slot></slot>
	</div>
	<AgFooter />
</div>
