import type { MetadataRoute } from "next";
import { generators } from "./lib/generators";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://generatorium.ru";
	const lastModified = new Date();

	const staticPages = [
		{
			url: `${baseUrl}/`,
			lastModified,
			priority: 1.0,
			changeFrequency: "weekly",
		},
	];

	const generatorPages = generators.map((generator) => ({
		url: `${baseUrl}/generator/${generator.slug}`,
		lastModified,
		priority: 0.8,
		changeFrequency: "monthly",
	}));

	// @ts-expect-error: ""
	return [...staticPages, ...generatorPages];
}
