import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	site: "https://navic.app",
	trailingSlash: "ignore",
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Google Sans Flex",
			cssVariable: "--font-gsans",
			options: {
				variants: [
					{
						weight: "100 900",
						src: ["./src/assets/fonts/google-sans-flex.ttf"],
					},
				],
			},
		},
	],
});
