<script lang="ts">
	import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-svelte';
	import Separator from './ui/separator/separator.svelte';
</script>

<footer
	class="absolute bottom-0 flex h-[350px] w-full flex-col items-center bg-primary p-1 p-4 text-white md:h-[150px] md:flex-row md:justify-center"
>
	<section id="contact" class="flex w-full flex-col justify-center gap-8 md:flex-row">
		<div>
			<h2 class="mb-2">Contact</h2>
			<div class="flex gap-1">
				<Mail /> <a href="mailto:goussasalexander@gmail.com">goussasalexander@gmail.com</a>
			</div>
		</div>
		<Separator orientation="vertical" class="hidden md:block" />
		<div>
			<h2 class="mb-2">Socials</h2>
			<div id="socials" class="flex flex-col gap-2">
				<a class="flex gap-1" href="https://github.com/aloussase"><Github /> @aloussase</a>
				<a class="flex gap-1" href="https://linkedin.com/in/alexander-goussas">
					<Linkedin /> alexander-goussas
				</a>
				<a class="flex gap-1" href="https://x.com/aloussase"><Twitter /> @aloussase</a>
			</div>
		</div>
		<Separator orientation="vertical" class="hidden md:block" />
		<div>
			<h2 class="mb-2">About this site</h2>
			<div>
				<span>Made with <Heart class="inline text-red-400" /> & Svelte</span>
			</div>
		</div>
	</section>
</footer>
