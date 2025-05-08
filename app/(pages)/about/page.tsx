import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "О проекте | Generatorium — генератор никнеймов, паролей, идей, цитат и многого другого",
	description:
		"Узнай, что такое Generatorium — универсальный генератор паролей, идей, никнеймов и многого другого. Бесплатно, быстро, без регистрации.",
};

export default function AboutPage() {
	return (
		<main className="min-h-screen flex flex-col items-center px-4 py-20 text-center">
			<Link
				title="Вернуться на главную страницу"
				href="/"
				className="absolute top-6 left-6 text-blue-600 hover:underline"
			>
				← На главную
			</Link>

			<article className="max-w-2xl">
				<h1 className="text-4xl font-bold mb-6">
					О проекте Generatorium
				</h1>

				<p className="text-gray-700 mb-6 leading-relaxed">
					<strong>Generatorium</strong> — это универсальный
					онлайн-сервис, который позволяет бесплатно генерировать
					никнеймы, генерировать пароли, идеи для стартапов, идеи для
					разработки, поздравления, цитаты, случайные числа и многое
					другое. Сайт создан для быстрого получения нужной информации
					без регистрации бесплатно.
				</p>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold mb-3">
						Что можно сгенерировать на Generatorium?
					</h2>
					<ul className="text-center text-gray-800 list-disc list-inside space-y-2">
						<li>надёжные и уникальные пароли любой длины;</li>
						<li>оригинальные идеи для стартапов и проектов;</li>
						<li>случайные вдохновляющие цитаты и числа;</li>
						<li>
							персонализированные никнеймы, имена и поздравления;
						</li>
						<li>
							и другие полезные генераторы — от названий брендов
							до крутых фраз.
						</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold mb-3">
						Почему стоит выбрать Generatorium?
					</h2>
					<ul className="text-center text-gray-800 list-disc list-inside space-y-2">
						<li>Минималистичный и быстрый интерфейс;</li>
						<li>Полная анонимность и отсутствие рекламы;</li>
						<li>Постоянное развитие и новые генераторы;</li>
						<li>
							Проект с открытым подходом — всегда можно предложить
							идею.
						</li>
					</ul>
				</section>

				<p className="text-gray-600 mt-8">
					Сайт разработан энтузиастом из России с целью создать
					полезный инструмент для всех, кто хочет быстро и удобно
					получать случайные и уникальные данные. Нашёл баг или хочешь
					поделиться идеей? Пиши в Телеграмм{" "}
					<Link
						title="https://t.me/hackman_prog"
						href="https://t.me/hackman_prog"
						target="_blank"
						className="text-blue-600 underline"
					>
						@hackman_prog
					</Link>
					.
				</p>
			</article>
		</main>
	);
}
