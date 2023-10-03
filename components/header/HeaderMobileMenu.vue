<template>
	<div class="mobile-menu flex flex-col flex-1 w-3/4 lg:hidden md:w-1/2 p-10 overflow-auto space-y-4">
		<ul>
			<li>
				<a href = "#" data-go-to="about">About</a>
			</li>
			<li>
				<a href = "#" data-go-to="skills">Skills</a>
			</li>
			<li>
				<a href = "#" data-go-to="projects">Projects</a>
			</li>
			<li>
				<nuxt-link class="button hollow" to="/resume">Resume</nuxt-link></li>

		</ul>
	</div>

</template>