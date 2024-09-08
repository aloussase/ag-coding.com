<script>
	import AgNavbar from '@/components/ag-navbar.svelte';
	import '../app.css';
	import AgFooter from '@/components/ag-footer.svelte';
</script>

<AgNavbar />

<div class="relative min-h-screen w-full overflow-auto">
	<div class="mb-[80px] p-4">
		<slot></slot>
	</div>
	<AgFooter />
</div>
