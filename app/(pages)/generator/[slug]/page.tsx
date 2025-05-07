import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import GenerateClient from "@/app/components/generate-client";
import { generators } from "@/app/lib/generators";

export const dynamic = "force-dynamic";

type GeneratorPageProps = {
	params: { slug: string };
};

export function generateMetadata({ params }: GeneratorPageProps): Metadata {
	const generator = generators.find((g) => g.slug === params.slug);
	if (!generator) return {};
	return {
		title: `${generator.title} — Generatorium`,
		description: generator.description,
	};
}

export default function GeneratorPage({ params }: GeneratorPageProps) {
	const generator = generators.find((g) => g.slug === params.slug);
	if (!generator) return notFound();

	return (
		<main className="min-h-screen flex flex-col items-center justify-center p-6 max-[768px]:px-4 max-[768px]:pt-8  bg-white">
			<div className="text-center max-w-2xl w-full">
				<div>
					<h1 className="text-3xl font-bold mb-2 max-[768px]:text-[26px]">
						{generator.emoji} {generator.title}
					</h1>
					<p className="text-gray-500 mb-8 max-[768px]:mb-6">
						{generator.description}
					</p>

					<GenerateClient
						slug={generator.slug}
						settings={generator.settings}
					/>

					<Link
						href="/"
						className="mt-8 inline-flex items-center text-sm text-blue-600 hover:underline"
					>
						<ArrowLeftIcon className="w-4 h-4 mr-1" />
						Назад на главную
					</Link>
				</div>
			</div>
		</main>
	);
}
