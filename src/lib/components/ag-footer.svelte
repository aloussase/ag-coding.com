<script lang="ts">
	import { Github, Linkedin, Twitter, Mail } from 'lucide-svelte';
</script>

<footer
	class="absolute bottom-0 flex h-[150px] w-full items-center justify-center bg-primary p-1 text-white"
>
	<section id="contacts" class="flex w-full justify-around">
		<div>
			<h2>Contact</h2>
			<div class="flex gap-1">
				<Mail /> <a href="mailto:goussasalexander@gmail.com">goussasalexander@gmail.com</a>
			</div>
		</div>

		<div>
			<h2>Socials</h2>
			<div id="socials" class="flex flex-col gap-2">
				<a class="flex gap-1" href="https://github.com/aloussase"><Github /> @aloussase</a>
				<a class="flex gap-1" href="https://linkedin.com/in/alexander-goussas">
					<Linkedin /> alexander-goussas
				</a>
				<a class="flex gap-1" href="https://x.com/aloussase"><Twitter /> @aloussase</a>
			</div>
		</div>
	</section>
</footer>
