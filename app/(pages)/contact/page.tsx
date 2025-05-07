import Link from "next/link";

export default function ContactPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
			<Link href="/" className="absolute top-6 left-6 text-blue-600 hover:underline">
				← На главную
			</Link>

			<h1 className="text-3xl font-bold mb-4">Контакты</h1>

			<p className="text-gray-600 max-w-xl mb-6">
				Хочешь предложить вариант генератора, сообщить об ошибке или просто сказать «спасибо»? Напиши:
			</p>

			<div className="text-gray-700">
				<p className="mb-2">
					📬 Email:{" "}
					<a
						href="mailto:hello@generatorium.ru"
						className="text-blue-600 hover:underline"
					>
						support@generatorium.ru
					</a>
				</p>
				<p>
					💬 Telegram:{" "}
					<a
						href="https://t.me/your_username"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline"
					>
						@hackman_prog
					</a>
				</p>
			</div>
		</main>
	)
}
