/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				custom: {
					dark: "#0f172a",
				},
			},
			backgroundImage: {
				"top-layer": "url('/images/wave-top-dark.svg')",
				"bottom-layer": "url('/images/wave-bottom-dark.svg')",
				"bottom-layer2": "url('/images/wave-bottom-light.svg')",
			}
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
	],
};
