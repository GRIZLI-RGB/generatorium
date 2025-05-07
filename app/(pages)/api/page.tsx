// // app/api-docs/page.tsx
// import Link from "next/link";

// export default function ApiDocsPage() {
// 	return (
// 		<main className="min-h-screen px-4 py-20 text-left max-w-3xl mx-auto">
// 			<Link
// 				href="/"
// 				className="text-blue-600 hover:underline mb-4 inline-block"
// 			>
// 				← На главную
// 			</Link>

// 			<h1 className="text-3xl font-bold mb-6">API Generatorium</h1>

// 			<p className="mb-4 text-gray-700">
// 				Вы можете использовать генераторы напрямую через HTTP-запросы.
// 			</p>

// 			<div className="space-y-6 text-sm text-gray-800">
// 				<div>
// 					<h2 className="font-semibold">🔐 Генерация пароля</h2>
// 					<code className="block bg-gray-100 p-2 rounded text-sm mt-1">
// 						GET /api/generate?type=password
// 					</code>
// 				</div>

// 				<div>
// 					<h2 className="font-semibold">🧠 Идея стартапа</h2>
// 					<code className="block bg-gray-100 p-2 rounded text-sm mt-1">
// 						GET /api/generate?type=startup
// 					</code>
// 				</div>

// 				<div>
// 					<h2 className="font-semibold">🎨 Цвет</h2>
// 					<code className="block bg-gray-100 p-2 rounded text-sm mt-1">
// 						GET /api/generate?type=color
// 					</code>
// 				</div>

// 				<p className="text-gray-500 mt-6">
// 					⚠️ Ответы приходят в формате JSON. Подключение не требует
// 					ключа. Использование разрешено с указанием источника.
// 				</p>
// 			</div>
// 		</main>
// 	);
// }

import Link from "next/link";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

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
					Следите за обновлениями на <Link href="/" className="underline text-blue-600 hover:text-blue-700">главной странице</Link>.
				</p>
			</div>
		</main>
	);
}
