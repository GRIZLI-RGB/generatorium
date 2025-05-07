import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-50 text-center text-sm text-gray-500 py-8 border-t max-[768px]:py-5 border-gray-200">
			<div className="container mx-auto px-4">
				<div className="mb-3">
					© {new Date().getFullYear()} <strong>Generatorium</strong> —
					генераторы данных для разработчиков, дизайнеров и творческих
					людей
				</div>
				<nav className="flex flex-wrap justify-center gap-4 text-xs">
					{/* <Link
						href="/about"
						className="hover:text-blue-600 transition-colors"
					>
						О проекте
					</Link> */}
					<Link
						target="_blank"
						href="/api"
						className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
						aria-label="API документация"
					>
						API <ArrowTopRightOnSquareIcon className="w-3 h-3" />
					</Link>
					<Link
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
