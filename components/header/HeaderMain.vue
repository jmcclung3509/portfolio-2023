<template>
	<header class="main flex w-full h-28"
		:class="{ sticky: isHeaderSticky }">
		<div class="container m-auto flex justify-between items-center z-10 w-full">
			<div class="left flex items-center justify-center gap-4">
				<img class="computer-ico max-h-[80px]"
					src="@/assets/images/logos/computer-logo.png" />
				<h3 v-show="['lg', 'xl'].includes(size)"
					class="text-2xl pt-4"> Jessica Turner</h3>
			</div>
			<template v-if="['lg', 'xl'].includes(size)">
				<nav class="right main flex justify-end items-center">
					<ul class="flex z-10 items-center">

						<li class="relative p-2">
							<a href="#"
								data-go-to="about">About</a>
						</li>
						<li class="relative p-2">
							<a href="#"
								data-go-to="skills">Skills</a>
						</li>
						<li class="relative p-2">
							<a href="#"
								data-go-to="skills">Projects</a>
						</li>
						<li class="relative p-2">
							<nuxt-link to="/contact">Contact</nuxt-link>
						</li>
						<li class="relative p-2">
							<div class="button-container  hollow flex">
								<nuxt-link class="button "
									to="/resume">Resume</nuxt-link>
							</div>
						</li>




					</ul>

				</nav>

			</template>
			<template v-else>
				<div class="mobile-nav-trigger  ml-auto cursor-pointer z-10"
					@click="(data.mobileMenuOpen = !data.mobileMenuOpen), $emit('mobileMenuClick', data.mobileMenuOpen)">
					<span class=" material-symbols-outlined  text-4xl  "> {{ menuIcon }} </span>
				</div>
			</template>
		</div>
	</header>
</template>
<script setup>
const scrollPosition = useScroll().scrollPosition
const scrollDirectionUp = useScroll().scrollDirectionUp
const size = useScreenSize().size
console.log('size',size)

const data = reactive({
	mobileMenuOpen: false,

})

const isHeaderSticky = computed(() => {
	if (scrollDirectionUp.value && scrollPosition.value != 0) {
		return true
	}
	return false
})
const onMobileMenuClick = (payload) => {
	data.mobileMenuOpen = payload
	console.log(data.mobileMenuOpen)
}
const menuIcon = computed(() => {
	return data.mobileMenuOpen ? 'close' : 'menu'
})
</script>