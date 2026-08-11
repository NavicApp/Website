import { defineConfig, fontProviders } from "astro/config"

export default defineConfig({
	site: "https://navic.app",
	trailingSlash: "ignore",
	server: {
		host: "0.0.0.0"
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Google Sans Flex",
			cssVariable: "--font-gsans",
			options: {
				variants: [
					{
						weight: "100 900",
						src: ["./src/assets/fonts/google-sans-flex.ttf"]
					}
				]
			}
		},
		{
			provider: fontProviders.local(),
			name: "Maple Mono",
			cssVariable: "--font-maple-mono",
			options: {
				variants: [
					{
						weight: "100 900",
						src: ["./src/assets/fonts/maple-mono.ttf"]
					}
				]
			}
		}
	]
})
