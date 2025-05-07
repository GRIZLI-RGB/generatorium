"use client";

import { useState, useRef } from "react";
import {
	MagnifyingGlassIcon,
	SparklesIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import { generators } from "../lib/generators";
import Footer from "../components/footer";

const popularGenerators = generators.filter((generator) => generator.popular);

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const filteredSuggestions = generators.filter(({ name }) =>
		name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleTagClick = (slug: string) => {
		setSearchQuery("");

		router.push(`/generator/${slug}`);
	};

	const handleSearchSubmit = () => {
		const match = popularGenerators.find(({ name }) =>
			name.toLowerCase().includes(searchQuery.toLowerCase())
		);

		if (match) {
			router.push(`/generator/${match.slug}`);
		}
	};

	return (
		<div className="min-h-screen flex flex-col bg-white">
			<main className="flex-grow flex flex-col items-center justify-center px-4 py-16 max-[768px]:py-10">
				<div className="text-center w-full">
					<h1 className="mb-4 flex items-center justify-center">
						<img className="-mr-1" src="/favicon.ico" alt="" />
						<span className="text-[#1786da] tracking-[0.01em] text-4xl md:text-5xl font-bold">
							eneratorium
						</span>
					</h1>
					<p className="text-gray-500 text-lg mb-10">
						Онлайн-генераторы для всего: создавай пароли, имена,
						фразы, идеи за секунды
					</p>

					{/* Поисковая строка */}
					<div className="relative w-full max-w-xl mx-auto mb-6">
						<MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
						<input
							autoComplete="off"
							ref={searchInputRef}
							type="text"
							placeholder="Хочу сгенерировать..."
							value={searchQuery}
							onFocus={() => setShowSuggestions(true)}
							onBlur={() =>
								setTimeout(() => setShowSuggestions(false), 150)
							}
							onChange={(e) => setSearchQuery(e.target.value)}
							onKeyDown={(e) =>
								e.key === "Enter" && handleSearchSubmit()
							}
							className="w-full pl-12 pr-10 py-4 rounded-full border border-gray-300 focus:border-blue-500 text-lg"
						/>
						{searchQuery && (
							<button
								onClick={() => setSearchQuery("")}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
							>
								<XMarkIcon className="w-5 h-5" />
							</button>
						)}

						{showSuggestions && searchQuery.length > 0 && (
							<ul className="absolute z-10 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
								{filteredSuggestions.length > 0 ? (
									filteredSuggestions.map(
										({ name, emoji, slug }) => (
											<li key={slug}>
												<button
													onClick={() =>
														handleTagClick(slug)
													}
													className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center"
												>
													<span className="mr-2">
														{emoji}
													</span>{" "}
													{name}
												</button>
											</li>
										)
									)
								) : (
									<li className="p-4 text-gray-400">
										Ничего не найдено
									</li>
								)}
							</ul>
						)}
					</div>

					{/* Популярные */}
					<div className="mb-12">
						<h2 className="text-sm text-gray-400 uppercase mb-4 tracking-wide font-medium">
							Популярное
						</h2>

						<div className="flex flex-wrap justify-center gap-3">
							{popularGenerators.map(({ name, emoji, slug }) => (
								<button
									key={name}
									onClick={() => handleTagClick(slug)}
									className="flex items-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm"
								>
									<span className="mr-2 text-lg">
										{emoji}
									</span>{" "}
									{name}
								</button>
							))}
						</div>
					</div>

					{/* CTA — случайный генератор */}
					<button
						className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700"
						onClick={() => {
							const random =
								popularGenerators[
									Math.floor(
										Math.random() * popularGenerators.length
									)
								];
							router.push(`/generator/${random.slug}`);
						}}
					>
						<SparklesIcon className="w-5 h-5 mr-2" />
						<span className="pb-0.5">Случайный генератор</span>
					</button>
				</div>
			</main>

			<Footer />
		</div>
	);
}
