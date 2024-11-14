/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
						'./public/**/*.html'],
	theme: {
		extend: {
			colors: {
				'mate-green': '#4a7c59',
				'mate-brown': '#8c6d46',
			},
		},
	},
	plugins: [],
}