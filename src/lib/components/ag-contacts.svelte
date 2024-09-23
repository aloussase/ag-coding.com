<script>
	import { Github, Linkedin, Mail, Twitter } from 'lucide-svelte';
</script>

<div class="flex w-fit gap-6 rounded p-1">
	<a
		href="mailto:goussasalexander@gmail.com"
		class="flex items-center gap-1 rounded-sm p-1 hover:bg-primary hover:text-white"
	>
		<Mail /> Email
	</a>
	<a
		href="https://github.com/aloussase"
		class="flex items-center gap-1 rounded-sm p-1 hover:bg-primary hover:text-white"
	>
		<Github /> GitHub
	</a>
	<a
		class="flex items-center gap-1 rounded-sm p-1 hover:bg-primary hover:text-white"
		href="https://linkedin.com/in/alexander-goussas"
	>
		<Linkedin /> LinkedIn
	</a>
	<a
		class="flex items-center gap-1 rounded-sm p-1 hover:bg-primary hover:text-white"
		href="https://x.com/aloussase"
	>
		<Twitter /> X
	</a>
</div>
