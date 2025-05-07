import Link from "next/link";

export default function AboutPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
			<Link
				href="/"
				className="absolute top-6 left-6 text-blue-600 hover:underline"
			>
				← На главную
			</Link>

			<h1 className="text-3xl font-bold mb-4">О проекте Generatorium</h1>

			<p className="text-gray-600 max-w-xl mb-6">
				<strong>Generatorium</strong> — это генератор всего на свете.
				Здесь ты можешь получить:
			</p>

			<ul className="text-center text-gray-700 max-w-md mb-6 list-disc list-inside">
				<li>надёжные пароли;</li>
				<li>креативные идеи для стартапов;</li>
				<li>случайные цитаты и числа;</li>
				<li>
					персонализированные никнеймы, имена, поздравления и многое
					другое.
				</li>
			</ul>

			<p className="text-gray-500 max-w-xl">
				Проект сделан разработчиком из России в духе минимализма —
				быстро, удобно и бесплатно. Если ты нашёл баг или хочешь
				предложить идею — не стесняйся написать.
			</p>
		</main>
	);
}
