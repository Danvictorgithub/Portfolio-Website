<script>
	import {onMount} from 'svelte';	
	let feTech = [];
	let beTech = [];
	let weExp = [];
	onMount(async ()=> {
		let res = await fetch('http://localhost:3000/api/feTech');
		feTech = await res.json();
		feTech = feTech.FeTech;
		let res2 = await fetch("http://localhost:3000/api/beTech");
		beTech = await res2.json();
		beTech = beTech.BeTech;

		let res3 = await fetch("http://localhost:3000/api/workExp");
		weExp = await res3.json();
		weExp = weExp.WorkExp;

		console.log(feTech,beTech,weExp);
	});
</script>
<article class="container wrapper">
	<section class="hero">
		<img src="./myProfile.jpg" alt="myPicture">
		<div class="hero-desc">
			<h2>Hi! My name is <span class="sp">Dan</span></h2>
			<em>Web Developer</em>
		</div>
		<p class="description gradient-b">Developing Full-Stack Application, Designing Products with <u><span class="sp sp-b gradient-o">Minimalism Approach</span></u></p>
		<a
		class="linkedIn"
		href="https://www.linkedin.com/in/dan-victor-lofranco-a5199220b/">
			<p>LinkedIn</p> <img src="./link-box.svg" alt="linkIco">
		</a>
	</section>
	<section class="experience">
		<header class="experience-h"><h3>Working Experience</h3></header>
		<div class="timeline-container">
			{#if weExp.length <= 0}
					<p class="textCenter">Loading Experience</p>
				{/if}
			<div class="alt-vtl">
				{#each weExp as exp, i}
					{#if i%2 == 0}
						<div class="alt-event">
							<p class="date">{exp.positionName} {exp.companyName} - {exp.startDate}/{exp.endDate}</p>
							<p class="txt">{exp.description}</p>
						</div>
					{:else}
						<div class="alt-event right">
							<p class="date">{exp.positionName} {exp.companyName} - {exp.startDate}/{exp.endDate}</p>
							<p class="txt">{exp.description}</p>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</section>
	<section>
		<header class="fe-tech"><h3>Front-End Technologies</h3></header>
		<div class="group-fe">
		{#if feTech.length <= 0}
			<p class="textCenter">Loading Front-End Technologies</p>
		{/if}
		{#each feTech as tech}
			<div class="fe-desc">
				<img src={tech.imgLocation} class="fe-logo" alt={`${tech.name} logo`}/>
				<p>{tech.name}</p>
			</div>
		{/each}
		</div>
	</section>
	<section>
		<header class="be-tech"><h3>Back-End Technologies</h3></header>
		<div class="group-be">
			{#if beTech.length <= 0}
			<p class="textCenter">Loading Back-End Technologies</p>
			{/if}
			{#each beTech as tech}
				<div class="be-desc">
					<img src={tech.imgLocation} class="be-logo" alt={`${tech.name} logo`}/>
					<p>{tech.name}</p>
				</div>
			{/each}
		</div>
	</section>
	<section>
		<header class="projects"><h3>Personal Projects</h3></header>
		<section class="projects-container">
			<div class="card">
				<img src="./sampleBlogImage.png" alt="sampleImage">
				<p class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima natus, facilis, sed eius expedita velit maiores incidunt reiciendis sit non nam laudantium maxime hic odio! Eaque ad laborum quae!</p>
			</div>
			<div class="card">
				<img src="./sampleBlogImage.png" alt="sampleImage">
				<p class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima natus, facilis, sed eius expedita velit maiores incidunt reiciendis sit non nam laudantium maxime hic odio! Eaque ad laborum quae!</p>
			</div>
			<div class="card">
				<img src="./sampleBlogImage.png" alt="sampleImage">
				<p class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima natus, facilis, sed eius expedita velit maiores incidunt reiciendis sit non nam laudantium maxime hic odio! Eaque ad laborum quae!</p>
			</div>
			<div class="card">
				<img src="./sampleBlogImage.png" alt="sampleImage">
				<p class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima natus, facilis, sed eius expedita velit maiores incidunt reiciendis sit non nam laudantium maxime hic odio! Eaque ad laborum quae!</p>
			</div>
			<div class="card">
				<img src="./sampleBlogImage.png" alt="sampleImage">
				<p class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima natus, facilis, sed eius expedita velit maiores incidunt reiciendis sit non nam laudantium maxime hic odio! Eaque ad laborum quae!</p>
			</div>
			<div class="card">
				<img src="./sampleBlogImage.png" alt="sampleImage">
				<p class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima natus, facilis, sed eius expedita velit maiores incidunt reiciendis sit non nam laudantium maxime hic odio! Eaque ad laborum quae!</p>
			</div>
		</section>
	</section>
</article>

<style>
	.hero {
		padding:24px;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		text-align:center;
		height: calc(100svh - 65px);
	}
	.hero-desc {
		margin-bottom: 36px;
	}
	img[alt="myPicture"] {
		border-radius:100%;
		height: 100%;
		max-height:200px;
		margin-bottom:12px;
	}
	.sp {
		color:var(--orange-m);
	}
	.sp-b {
		display:block;
	}
	.gradient-b {
		background: -webkit-linear-gradient(white,lightgray, #333);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.gradient-o {
		background: -webkit-linear-gradient(orange, var(--orange-m));
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.description {
		font-size: 2.5rem;
		font-weight: 600;
		max-width:900px;
	}
	.linkedIn {
		border-radius: 12px 12px;
		margin: 24px;
		padding: 10px 80px;
		text-decoration:none;
		color:white;
		width:100px;
		display:flex;
		justify-content:center;
		align-items:center;
		background-color:#353535;
		font-style:italic;
	}
	.linkedIn p {
		margin-left:5px;
	}
	.linkedIn img {
		height: 40px;
		margin-left:12px;
		filter:invert(100%);
	}
	.experience {
		position:relative;
		width:100%;
		color:white;
	}
	.experience-h,.fe-tech,.be-tech,.projects {
		background-color: #202020;
		height: 60px;
		display:flex;
		justify-content:center;
		align-items:center;
		border-radius: 12px;
	}
/*	Timeline CSS*/
	.timeline-container {
		padding: 12px;
	}
	.alt-vtl {
		position: relative;
		max-width: 800px;
		margin: 0 auto;
	}
	.alt-vtl::before {
		content: "";
		width: 5px;
		background-color: lightgray;
		position: absolute;
		top: 0; bottom: 0; left: 50%;
	}

	div.alt-event {
	  background-color: #1E1F22;
	  border-radius: 6px;
	  padding: 20px 30px;
	  width: 45%;
	  margin-bottom: 10px;
	  position: relative;
	  left: 0;
	}
	div.right { left: 55%; }
	p.date {
	  font-size: 1.1em;
	  font-weight: 700;
	  color: white;
	}
	p.txt {
	  margin: 10px 0 0 0;
	  color: white;
	}
	div.alt-event::before, div.alt-event.right::before {
	  content: "";
	  border: 10px solid transparent;
	  position: absolute;
	}
	div.alt-event::before {
	  border-left-color: #545454;
	  border-right: 0;
	  left: 100%; top: 20%;
	}
	div.alt-event.right::before {
	  border-right-color: #545454;
	  border-left: 0;
	  left: auto; right: 100%; top: 20%;
	}
	div.alt-event::after, div.alt-event.right::after {
	  content: "";
	  background: black;
	  border: 4px solid white;
	  width: 16px; height: 16px;
	  border-radius: 50%;
	  position: absolute;
	}
	div.alt-event::after { top: 20%; left: 109.8%; }
	div.alt-event.right::after { top: 20%; left: auto; right: 108.1%; }
	.group-fe,.group-be{
		padding: 24px;
		gap:64px;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-wrap: wrap;
	}
	.fe-logo,.be-logo{
		height: 75px;
		width: auto;
	}
	.fe-desc, .be-desc {
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		gap: 12px;
	}
	.fe-desc p, .be-desc p{
		font-weight: 600;
	}
	.projects-container {
		padding: 24px;
		display:grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 24px;
	}
	.card img {
		position:relative;
		object-fit:cover;
		width: 100%;
		height: 200px;
		margin-bottom: 24px;
	}
	@media (max-width:600px) {
		.description {
			font-size:1.8rem;
		}
	}
	.textCenter {
		text-align:center;
	}
</style>