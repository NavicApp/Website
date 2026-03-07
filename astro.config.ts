import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	site: "https://navic.app",
	trailingSlash: "ignore",
	experimental: {
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
			{
				provider: fontProviders.local(),
				name: "Maple Mono",
				cssVariable: "--font-maple-mono",
				options: {
					variants: [
						{
							weight: "100 900",
							style: "normal",
							src: ["./src/assets/fonts/maple-mono.ttf"],
						},
						{
							weight: "100 900",
							style: "italic",
							src: ["./src/assets/fonts/maple-mono-italic.ttf"],
						},
					],
				},
			},
		],
	},
});
