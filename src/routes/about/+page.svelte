<script>
	import AboutSection from './about-section.svelte';
	import devfest from '$lib/assets/devfest.jpg';
	import weavile from '$lib/assets/weavile.png';
</script>

<svelte:head>
	<title>About | Alexander Goussas</title>
</svelte:head>

<div class="flex flex-col gap-4">
	<AboutSection
		title="Programming"
		class="items-center justify-items-center md:grid md:grid-cols-3"
	>
		<div class="md:col-span-2">
			<p>
				I discovered my love for programming circa 2020, and decided to switch majors from Biology
				to Computer Engineering. Since then, I have soaked myself in the world of programming as
				much as I could, reading over 100 technical books, spending most of my free time doing
				side-projects and watching tech YouTube.
			</p>
			&nbsp;
			<p>
				I started as everyone probably did, with good ol' procedural and object-oriented
				programming. At some point, I came across Haskell, and it changed how I view programming
				forever. I started seeing programming as a form of artistic expression, something to be
				practiced with delicacy and elegance.
			</p>
			&nbsp;
			<p>
				Nowadays, I approach programming with the same passion, but in a more relaxed way. I take
				care to dedicate my time to the things that matter the most to me, like my girlfriend and
				enjoying the little things of life. Having said that, I still try to get better every day.
			</p>
		</div>
		<div class="mt-4 flex flex-col items-center gap-1 md:p-2">
			<img src={devfest} alt="Google Devfest" width="300" class="rounded" />
			<small>Google Devfest with my GF and some friends</small>
		</div>
	</AboutSection>
	<AboutSection title="Hobbies" class="grid-cols-3 items-center justify-items-center md:grid">
		<div class="col-span-2 col-start-2">
			<h3 class="text-xl font-bold"># Reading</h3>
			<p>
				I love reading. My favourite genre is Fantasy, but I am open to try most things. For a long
				time my favourite author was Brandon Sanderson, and I still keep works such as Mistborn
				close to my heart (that book makes me cry every time), but I am trying to read other stuff
				as well. If you have any book recommendations, please hit me up!
			</p>
			&nbsp;
			<h3 class="text-xl font-bold"># Gaming</h3>
			<p>
				Playing video games is another one of passions. Well, not really videogames, but
				specifically Pokemon games. I've been following the series since I have memory and have been
				playing competitively for some time now. I would absolutely love to be able to attend a
				championship one day. It's in my bucket list 😉.
			</p>
			&nbsp;
			<h3 class="text-xl font-bold"># Cooking</h3>
			<p>
				I love cooking as a form of art and deeply appreciate flavors and the technique needed to
				make them come to life. Admittedly, I've been a little laid back on this aspect of my life,
				but I am planning on putting more effort into it.
			</p>
		</div>
		<div class="col-start-1 row-start-1 mt-4 flex flex-col items-center gap-1">
			<img src={weavile} alt="weavile" width="300" />
			<small>Weavile, my favourite Pokemon</small>
		</div>
	</AboutSection>
</div>
