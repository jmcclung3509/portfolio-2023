<template>
	<main class="space-y-36 lg:space-y-52 relative">
		<section class="pt-36 xl-pt-40 fold animate hero container mx-auto">
			<h1 class="text-4xl text-purple-dark"> Lets try this out!</h1>
		</section>
	</main>
</template>
<script setup>
import '@/assets/css/tailwind.css'

const route = useRoute()

const data = reactive({
	mobileMenuOpen: false
})
</script>