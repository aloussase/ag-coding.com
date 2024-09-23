<script lang="ts">
	import AgFooter from '@/components/ag-footer.svelte';
	import AgNavbar from '@/components/ag-navbar.svelte';
	import '../app.css';
</script>

<AgNavbar />

<svelte:head>
	<title>Projects | Alexander Goussas</title>
</svelte:head>

<div class="relative min-h-screen w-full overflow-auto">
	<div class="mb-[80px] p-4 md:mx-auto md:mb-[80px] md:w-4/5">
		<slot></slot>
	</div>
	<AgFooter />
</div>
