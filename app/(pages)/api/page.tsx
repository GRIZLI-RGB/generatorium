import Link from "next/link";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "API | Generatorium — генератор никнеймов, паролей, идей, цитат и многого другого",
	description:
		"Подключите генераторы Generatorium к своему проекту. Удобное и бесплатное API для генерации паролей, имён, идей и многого другого.",
};

export default function ApiDocsPage() {
	return (
		<main className="min-h-screen px-4 py-20 text-left max-w-2xl mx-auto flex-middle">
			<div className="text-center">
				<WrenchScrewdriverIcon className="w-16 h-16 text-gray-400 mx-auto mb-6" />
				<h1 className="text-3xl font-bold mb-4">API в разработке</h1>
				<p className="text-gray-600 mb-6">
					Мы работаем над публичным API Generatorium. В ближайшее
					время здесь появится документация с примерами запросов.
				</p>
				<p className="text-sm text-gray-500">
					Следите за обновлениями на{" "}
					<Link
						title="Вернуться на главную страницу"
						href="/"
						className="underline text-blue-600 hover:text-blue-700"
					>
						главной странице
					</Link>
					.
				</p>
			</div>
		</main>
	);
}
