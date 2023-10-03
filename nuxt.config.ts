// import { typeH3Event } from 'h3';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	app: {
		head: {
			title: "Jessica Turner | 2023",
			charset: "utf-8",
			meta: [
				{
					name: "viewport",
					content:
						"width=device-width, initial-scale=1, viewport-fit=cover",
				},
			],
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "/static/images/favicon.png",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",

				},
				{
					href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap",
					rel: "stylesheet"
				},
				{
				href:"https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@300;400;500;700&display=swap",
				 rel: "stylesheet"
				},
				{ rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" }

			],
			noscript: [{ children: "Javascript is required" }],
			script: [],
		},
	},

	devtools: { enabled: true },
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: [
		"@/assets/scss/main.scss",
		"@/assets/scss/variables.scss",

	],
	modules: ["@nuxtjs/tailwindcss"],

	ssr: true,
	vite: {
		css: {
			devSourcemap: true,
		},
	},
	tailwindcss: {
		cssPath: false,
		configPath: "tailwind.config.js",

		config: {},
	},
	build: {
	},
	runtimeConfig:{
		public:{
			env: process.env.ENV,
			BASE_API_BROWSER_URL: ""
		}
	},
	experimental:{
		payloadExtraction: false,
	}
});
