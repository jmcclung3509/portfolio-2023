export const globalState = reactive({
	overlay: {
		showing: false,
		clickToClose: true
	}
})

export const useScroll = () => {
	const scrollPosition = ref(0)
	const lastScrollPosition = ref(0)
	const scrollDirectionUp = ref(false)
	const colorScrollContainer = ref<HTMLElement | null>(null)

	const handleScroll = () => {
		//set current scroll position
		scrollPosition.value = window.scrollY
		//set scroll direction
		scrollDirectionUp.value = lastScrollPosition.value > scrollPosition.value
		//update lastScrollPosition
		lastScrollPosition.value = scrollPosition.value
		//update the width of the :after element based on scroll position
		if (colorScrollContainer.value) {
			const maxScroll = document.body.scrollHeight - window.innerHeight
			const scrollPercentage = (scrollPosition.value / maxScroll) * 100;

			if (scrollPercentage >= 40 && scrollPercentage <= 55) {
				const width = ((scrollPercentage - 40) / 40) * 150;

				colorScrollContainer.value.style.setProperty("--scroll-progress", `${width}%`);

			} else if (scrollPercentage > 55) {
				colorScrollContainer.value.style.setProperty("--scroll-progress", "100%");
			} else {
				colorScrollContainer.value.style.setProperty("--scroll-progress", "0%")
			}
		}
	}

	onMounted(() => {
		window.addEventListener("scroll", handleScroll, { passive: true })
		colorScrollContainer.value = document.querySelector(".color-scroll-container")
	})
	onUnmounted(() => {
		window.removeEventListener("scroll", handleScroll)
	})
	return { scrollPosition, scrollDirectionUp, colorScrollContainer }
}

export const useScreenSize = () => {
	let windowWidth = ref(0)
	let isMobile = ref(false)
	let size = ref(null)

	const handleResize = () => {
		windowWidth.value = window.innerWidth
		if (windowWidth.value >= 1024) {
			isMobile.value = false
		} else {
			isMobile.value = true
		}

		switch (true) {
			case windowWidth.value >= 1280:
				size.value = "xl"
				break
			case windowWidth.value >= 1024:
				size.value = "lg"
				break
			case windowWidth.value >= 768:
				size.value = "md"
				break
			case windowWidth.value >= 640:
				size.value = "sm"
				break
			default:
				size.value = "default"
		}
	}
	onMounted(() => {
		window.addEventListener("resize", handleResize)
		handleResize()
	})
	return {size, isMobile}
}

//useAnimateObserver

export const useAnimateObserver = () => {
	const animatedEls = document.querySelectorAll('.animate')
	const options = {
		threshold: 0.4
	}
	let observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animated")
			}
			observer.unobserve(entry.target)

		})
	}, options)
}

export const useGoToAnchor = () => {
	document.querySelectorAll("a[data-go-to]").forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault()
			document.getElementById(this.getAttribute("data-go-to")).scrollIntoView({
				behavior: "smooth",
				block: "center",
			})
		})
	})
}

export const useOverlay = () => {
	const on = () => {
		globalState.overlay.showing = true
	}
	const off = () => {
		globalState.overlay.showing = false
	}
	return { on, off }
}

//Dropdown transition

export default function useDropdownTransition(element) {
	const isDropdownOpen = ref(false)

	const onBeforeEnter = () => {
		element.style.opacity = 0
		element.style.transformOrigin = "center top"
	}

	const onEnter = (el, done) => {
		element.style.transition = "opacity 0.3s, transform 0.3s"
		element.style.opacity = 1
		element.style.transform = "scaleY(1)"
		element.addEventListener("transitioned", done)
	}

	const onAfterEnter = () => {
		element.style.transform = ""
	}
	const onBeforeLeave = () => {
		element.style.transformOrigin = "center top"
	}
	const onLeave = (el, done) => {
		element.style.transition = "opacity 0.3s, transform 0.3s";
		element.style.opacity = 0;
		element.style.transform = "scaleY(0)";
		element.addEventListener("transitioned", done);
	};


	const onAfterLeave = () => {
		element.style.display = "none"
		element.style.value = false
	}
	return {
		isDropdownOpen,
		onBeforeEnter,
		onEnter,
		onAfterEnter,
		onBeforeLeave,
		onLeave,
		onAfterLeave,
	}
}