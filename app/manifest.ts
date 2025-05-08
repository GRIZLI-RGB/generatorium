import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Generatorium — генератор данных",
		short_name: "Generatorium",
		description:
			"Минималистичный онлайн-генератор: пароли, никнеймы, идеи и многое другое.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
		lang: "ru",
	};
}
