"use client";

import { SparklesIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import { generators } from "../lib/generators";

const popularGenerators = generators.filter((generator) => generator.popular);

export default function RandomGenerator() {
	const router = useRouter();

	return (
		<button
			aria-label="Случайный генератор"
			className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700"
			onClick={() => {
				const random =
					popularGenerators[
						Math.floor(Math.random() * popularGenerators.length)
					];
				router.push(`/generator/${random.slug}`);
			}}
		>
			<SparklesIcon className="w-5 h-5 mr-2" />
			<span className="pb-0.5">Случайный генератор</span>
		</button>
	);
}
