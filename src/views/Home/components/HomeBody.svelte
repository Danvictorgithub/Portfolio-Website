<script>
	import {onMount} from 'svelte';
	let API_URL = "https://deviate-dv8-personal-website-api.onrender.com/api/";
	console.log(API_URL);	
	let feTech = [];
	let beTech = [];
	let weExp = [];
	let persProj = [];
	onMount(async ()=> {
		let res = await fetch(API_URL+'feTech');
		feTech = await res.json();
		feTech = feTech.FeTech;
		let res2 = await fetch(API_URL+"beTech");
		beTech = await res2.json();
		beTech = beTech.BeTech;
		let res3 = await fetch(API_URL+"workExp");
		weExp = await res3.json();
		weExp = weExp.WorkExp;
		let res4 = await fetch(API_URL+"persProj");
		persProj = await res4.json();
		persProj = persProj.PersonalProjects;
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
			{#if persProj.length <= 0}
				<p class="textCenter">Loading Personal Projects</p>
			{/if}
			{#each persProj as proj}
				<div class="card">
					<a href={proj.projectLink} target="_blank" rel="noreferrer">
						<img src={proj.imgLocation} alt={`${proj.projectName} image`}/>
					</a>
					<h2 class="project-title">{proj.projectName}</h2>
					<div class="tags">
						{#each proj.tags as tag}
							<p class="tag">{tag}</p>
						{/each}
					</div>
					<p class="project-desc">{proj.description}</p>
					<a href={proj.githubLink} target="_blank" rel="noreferrer">
						<button class="project-github"></button>
					</a>
				</div>
			{/each}
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
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
/*		justify-content:center;*/
		gap: 24px;
	}
	.card {
/*		max-width: 350px;*/
		border-radius:12px;
		background-color:#202020;
		padding:12px;
	}
	.project-desc, .project-title {
		text-align:center;
		margin-bottom:12px;
	}
	.card img {
		position:relative;
		object-fit:cover;
		width:100%;
		height: 200px;
/*		margin-bottom: 24px;*/
	}
	.project-github {
		background-color:white;
		background-image: url("github-logo.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size:125px;
		border:1px solid transparent;
		border-radius:2rem;
		margin:0 auto;
		width:100%;
		height:50px;
		cursor: pointer;
	}
	@media (max-width:600px) {
		.description {
			font-size:1.8rem;
		}
	}
	.textCenter {
		text-align:center;
	}
	.tags {
		display:flex;
		flex-wrap:wrap;
		padding:0 10px;
		gap: 2px 4px;
		margin-bottom:4px;
		justify-content:center;
	}
	.tag {
		font-weight: bold;
		border: 2px solid orangered;
		border-radius: 2rem;
		padding: 4px 12px;
	}
</style>