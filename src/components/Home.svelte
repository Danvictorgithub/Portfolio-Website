<article class="container wrapper">
	<section class="hero">
		<img src="./myProfile.jpg" alt="myPicture">
		<div class="hero-desc">
			<h1>Hi! My name is <span class="sp">Dan</span></h1>
			<em>Web Developer</em>
		</div>
		<p class="description gradient-b">Developing Full-Stack Application, Designing Products with <u><span class="sp sp-b gradient-o">Minimalism Approach</span></u></p>
		<a
		class="linkedIn"
		href="https://www.linkedin.com/in/dan-victor-lofranco-a5199220b/">
			<p>LinkedIn</p> <img src="./link-box.svg" alt="linkIco">
		</a>
	</section>
	<section></section>
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
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.gradient-o {
		background: -webkit-linear-gradient(orange, var(--orange-m));
		-webkit-background-clip: text;
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
	@media (max-width:600px) {
		.description {
			font-size:1.8rem;
		}
	}
</style>