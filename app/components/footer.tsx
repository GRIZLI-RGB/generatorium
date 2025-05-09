import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
	return (
		<footer
			itemScope
			itemType="https://schema.org/WPFooter"
			className="bg-gray-50 text-center text-sm text-gray-500 py-8 border-t max-[768px]:py-5 border-gray-200"
		>
			<div className="container mx-auto px-4">
				<div className="mb-3">
					© {new Date().getFullYear()} <strong>Generatorium</strong> —
					генераторы данных для разработчиков, дизайнеров и творческих
					людей
				</div>
				<nav
					aria-label="Дополнительная навигация"
					className="flex flex-wrap justify-center gap-4 text-xs"
				>
					<Link
						title="Узнать о проекте Generatorium"
						href="/about"
						className="hover:text-blue-600 transition-colors"
					>
						О проекте
					</Link>
					<Link
						title="Документация API Generatorium для разработчиков"
						target="_blank"
						href="/api"
						className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
						aria-label="Перейти к документации API Generatorium"
					>
						API <ArrowTopRightOnSquareIcon className="w-3 h-3" />
					</Link>
					<Link
						title="Связаться с командой Generatorium"
						href="/contact"
						className="hover:text-blue-600 transition-colors"
					>
						Обратная связь
					</Link>
				</nav>
			</div>
		</footer>
	);
}
