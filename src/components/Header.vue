<template>
	<header>
		<article>
			<section>
				<router-link to="/" 
					>Soshiyant</router-link
				>
			</section>
			<nav>
				<router-link to="/"
					>Home</router-link
				>
				<router-link to="about"
					>Overmij</router-link
				>
				<router-link to="contact"
					>Contact</router-link
				>
			</nav>
		</article>
	</header>
</template>

<script>
	export default {
		name: 'Header',
	}
</script>

<style scoped>
	header {
		width: 100%;
		height: auto;
		background-color: #bba23d;
	}

	article {
		display: grid;
		grid-template-columns: 1fr 2fr;
		justify-items: center;
        justify-content: space-between;
	}

	section {
		width: 100%;
	}

    section a {
        text-decoration: none;
        font-size: 40px;
        color: rgb(27, 7, 54);
		font-weight: bold;
        font-family: Georgia, Times, serif;
    }

	nav {
		width: 100%;
        padding: 15px 8px 8px 8px;
        justify-items: end;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-right: 50px;
	}

	nav a {
		font-weight: bold;
		color: #770000;
        text-decoration: none;
        padding: 8px;
	}

	nav a.router-link-exact-active {
		color: #d2d6ce;
        border: brown 1px solid;
		border-radius: 50%;
	}
</style>
