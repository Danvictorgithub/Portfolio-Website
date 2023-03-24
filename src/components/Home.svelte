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
			<div class="alt-vtl">
			  <div class="alt-event">
			    <p class="date">Github Contributor - 2022</p>
			    <p class="txt">Worked with Students, creating a Budget Tracker Application. First exposure to Github Workflow</p>
			  </div>
			  <div class="alt-event right">
			    <p class="date">Prifina Front-End Developer - 2022/2023</p>
			    <p class="txt">Worked as React Developer creating Widget Application with their Data from oura Ring, fitbit, and other fitness apps. Used Jest and StoryBookJS for automated testing.</p>
			  </div>
			</div>
		</div>
	</section>
	<section>
		<header class="fe-tech"><h3>Front-End Technologies</h3></header>
		<div class="group-fe">
			<div class="fe-desc">
				<img src="./React-icon.png" class="fe-logo" alt="">
				<p>React</p>
			</div>
			<div class="fe-desc">
				<img src="./Vue.png" class="fe-logo" alt="">
				<p>Vue</p>
			</div>
			<div class="fe-desc">
				<img src="./Svelte_Logo.png" class="fe-logo" alt="svelteLogo">
				<p>Svelte</p>
			</div>
		</div>
	</section>
	<section>
		<header class="be-tech"><h3>Back-End Technologies</h3></header>
		<div class="group-be">
			<div class="be-desc">
				<img src="./mongodb.png" alt="MongoDB" class="be-logo">
				<p>MongoDB</p>
			</div>
			<div class="be-desc">
				<img src="./nodejs.png" alt="NodeJS" class="be-logo">
				<p>NodeJS</p>
			</div>
			<div class="be-desc">
				<img src="./express.png" alt="ExpressJS" class="be-logo">
				<p>Express</p>
			</div>
			<div class="be-desc">
				<img src="./postgresql.png" alt="PostgreSQL" class="be-logo">
				<p>PostgreSQL</p>
			</div>

		</div>
	</section>
	<section>
		<header class="projects"><h3>Personal Projects</h3></header>
		<section class="projects-container">
			
		</section>
	</section>
</article>

<style>
	.wrapper {
		margin: 0 auto;
		max-width: 1280px;
	}
	.container {
		width:100%;
		color:white;
	}
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
	.group-fe,.group-be {
		padding: 24px;
		gap:64px;
		display:flex;
		justify-content:center;
		align-items:center;
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
	@media (max-width:600px) {
		.description {
			font-size:1.8rem;
		}
	}
</style>