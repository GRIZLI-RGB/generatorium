"use client";

import { useState } from "react";
import { FaCopy, FaCheck, FaMagic, FaSlidersH } from "react-icons/fa";

import { generators } from "../lib/generators";

type Props = {
	slug: string;
	// eslint-disable-next-line
	settings?: Record<string, any>;
};

export default function GenerateClient({ slug, settings = {} }: Props) {
	const generate = generators.find((g) => g.slug === slug)?.generate;

	const initialState = Object.fromEntries(
		Object.entries(settings).map(([key, val]) => [key, val.default])
	);

	const [options, setOptions] = useState(initialState);
	const [result, setResult] = useState(() => generate!(initialState));
	const [copied, setCopied] = useState(false);
	const [showSettings, setShowSettings] = useState(true);

	if (!generate) return <div>Генератор не найден</div>;

	const handleGenerate = () => {
		setResult(generate(options));
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(result);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	// eslint-disable-next-line
	const toggleOption = (key: string, value: any) => {
		setOptions((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<div className="text-center space-y-6 max-[768px]:space-y-5">
			{/* Блок результата */}
			<div className="relative">
				{slug === "color" && options.preview && (
					<div
						className="w-full h-16 rounded-t-lg"
						style={{ backgroundColor: result }}
					/>
				)}
				<div
					className={`text-2xl max-[568px]:text-xl font-semibold ${
						slug === "color" && options.preview
							? "bg-gray-100 p-4 rounded-b-xl"
							: "bg-gray-100 p-4 rounded-xl"
					} text-blue-700 break-words`}
				>
					{result}
				</div>
				<div className="absolute right-3 top-1/2 -translate-y-1/2">
					<button
						onClick={handleCopy}
						className="group p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"
						title={copied ? "Скопировано!" : "Копировать"}
						aria-label="Copy"
					>
						{copied ? (
							<FaCheck className="text-green-500 text-lg" />
						) : (
							<FaCopy className="text-gray-500 text-lg group-hover:text-blue-500" />
						)}
					</button>
				</div>
			</div>

			{/* Кнопка генерации */}
			<button
				onClick={handleGenerate}
				className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
			>
				<FaMagic className="mr-2" />
				Сгенерировать ещё
			</button>

			{/* Переключатель настроек */}
			{Object.keys(settings).length > 0 && (
				<div>
					<button
						onClick={() => setShowSettings(!showSettings)}
						className="text-sm text-blue-600 hover:underline flex items-center mx-auto"
					>
						<FaSlidersH className="mr-2" />
						{showSettings
							? "Скрыть настройки"
							: "Показать настройки"}
					</button>

					{showSettings && (
						<div className="mt-4 grid grid-cols-2 gap-3 max-[568px]:gap-1.5 max-[568px]:flex max-[568px]:flex-col">
							{Object.entries(settings).map(([key, config]) => {
								if (config.type === "checkbox") {
									return (
										<div
											key={key}
											onClick={() =>
												toggleOption(key, !options[key])
											}
											className={`cursor-pointer p-4 rounded-lg border max-[568px]:p-3 text-sm text-center transition ${
												options[key]
													? "bg-blue-600 text-white border-blue-600 shadow-md"
													: "bg-white text-gray-800 border-gray-200 hover:border-blue-400"
											}`}
										>
											{config.label}
										</div>
									);
								}
								if (config.type === "range") {
									return (
										<div
											className="col-span-2 my-2.5 max-[768px]:my-2"
											key={key}
										>
											<div className="mb-1 max-[768px]:mb-0.5 text-sm font-medium text-gray-700">
												{config.label}:{" "}
												<span className="font-semibold">
													{options[key]}
												</span>
											</div>
											<input
												type="range"
												min={config.min}
												max={config.max}
												value={options[key]}
												onChange={(e) =>
													toggleOption(
														key,
														+e.target.value
													)
												}
												className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
											/>
										</div>
									);
								}
								if (config.type === "number") {
									return (
										<div key={key} className="my-2.5">
											<label
												htmlFor={key}
												className="mb-1 text-sm font-medium text-gray-700"
											>
												{config.label}:
											</label>
											<div className="flex items-center">
												<input
													type="number"
													id={key}
													value={options[key]}
													onChange={(e) =>
														toggleOption(
															key,
															+e.target.value
														)
													}
													className="w-full p-2 bg-transparent text-center text-sm font-medium border-b-2 border-gray-300 focus:border-b-blue-600"
												/>
											</div>
										</div>
									);
								}
								if (config.type === "select") {
									return (
										<div
											key={key}
											className="my-2.5 col-span-2"
										>
											<div className="flex w-full">
												{config.options.map(
													(option: {
														value: string;
														label: string;
													}) => (
														<button
															key={option.value}
															onClick={() =>
																toggleOption(
																	key,
																	option.value
																)
															}
															className={`w-full p-3 text-sm font-medium text-gray-700 border-b-2 border-blue-100 ${
																options[key] ===
																option.value
																	? "border-blue-600 text-blue-600"
																	: "hover:bg-gray-100 "
															}`}
														>
															{option.label}
														</button>
													)
												)}
											</div>
										</div>
									);
								}

								return null;
							})}
						</div>
					)}
				</div>
			)}
		</div>
	);
}
