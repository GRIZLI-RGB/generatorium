import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-white">
			<div className="text-7xl mb-4 animate-glitch text-blue-600 font-extrabold select-none">
				🤖 404
			</div>
			<h1 className="text-2xl font-semibold text-gray-800 mb-2">
				Страница не найдена
			</h1>
			<p className="text-gray-500 mb-6 max-w-md">
				Похоже, вы сгенерировали что-то несуществующее. Попробуйте ещё
				раз или вернитесь на главную.
			</p>
			<Link
				title="Вернуться на главную страницу"
				href="/"
				className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium"
			>
				← На главную
			</Link>
		</div>
	);
}
