module.exports = {
	content: [
	  './assets/**/*.{vue,js,css}',
	  './components/**/*.{vue,js}',
	  './layouts/**/*.vue',
	  './pages/**/*.vue',
	  './plugins/**/*.{js,ts}',
	  './nuxt.config.{js,ts}',
	],
	variants: {
	  extend: {},
	},
	plugins: [],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg':'1024px',
			'xl': '1280px',
			'2xl': '1536px,'
		},
		extend:{
			fontSize: {
				'xs': ['0.95rem', '1.5'],
				'xs-tight': ['0.95rem', '1'],
				'1.2xl': ['1.2rem', '1.5'],
				'1.5xl': ['1.5rem', '1.5'],
				'2xl':['2rem', '1.25'],
				'2.5xl':['2.5rem', '1.25'],
				'3xl': ['3rem', '1.25'],
				'3.5xl':['3.5rem', '1.25'],
				'4xl': ['4rem', '1.5'],
				'4xl-tight': ['4rem', '1.25'],
				'5xl': ['4.8rem', '1.25']
			},
			colors: {
				'transparent': 'transparent',
				current: 'currentColor',
				'default-white': '#F4F4F4',
				'default-dark': '#301F40',
				'extra-light-purple': '#ECE4FB',
				'light-purple': '#DDCDEA',
				'medium-purple': '#B295DA',
				'dark-purple': '#7F4EC3',
				'light-peach': '#FFF4F0',
				'orange': '#FF7442',
			},
			fontFamily: {
				montserrant : ['Montserrat', 'sans-serif' ],
				heptaSlab: ['Hepta Slab', 'serif' ]
			},
			container:{
				padding: {
					DEFAULT: '2rem'
				}
			},
			screens: {
				'max-phone': {'max': '639px'}
			}

		}
	}
  };