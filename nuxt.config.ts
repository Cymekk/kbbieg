// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: [
		'@nuxt/icon',
		'@nuxt/eslint',
		'@nuxt/image',
		'@nuxt/ui',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Roboto: true,
					Poppins: true,
				},
			},
		],
		'@nuxtjs/google-fonts',
	],
	css: ['./assets/css/main.css'],
	app: {
		head: {
			htmlAttrs: {
				lang: 'PL',
			},
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: './logo.ico',
				},
			],

			bodyAttrs: {
				class: 'overflow-x-hidden bg-white text-black',
			},
		},
	},
	router: {
		options: { scrollBehaviorType: 'smooth' },
	},
})
