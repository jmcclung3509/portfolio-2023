<template>
	<Html lang='en'>
	    <Body :class="['page-' + route.name]">
			<Overlay></Overlay>
		<div class="relative flex flex-wrap"
			:class="{'mobile-menu-open': isMobileMenuOpen}">
			<HeaderMain @mobileMenuClick = "onMobileMenuClick"/>
			<div class="wrap-inner w-full overflow-hidden">
				<slot />
				<Footer />
			</div>
			<HeaderMobileMenu :mobileMenuOpen = "isMobileMenuOpen"></HeaderMobileMenu>
		</div>
		</Body>
	</Html>
</template>

<script setup>

const route = useRoute()

const {isMobile} = useScreenSize()

const data = reactive({
	mobileMenuOpen:false
})
const onMobileMenuClick = (payload)=>{
	data.mobileMenuOpen= payload
	console.log(data.mobileMenuOpen)
}
const isMobileMenuOpen = computed(()=>{

	return data.mobileMenuOpen && isMobile.value

})

onMounted(()=>{
	setTimeout (()=>{
		useAnimateObserver()
		useGoToAnchor()
	},)
})
</script>