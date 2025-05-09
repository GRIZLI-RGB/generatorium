// import Image from "next/image";

import Image from "next/image";
import SearchWithPopularGenerators from "../components/search-with-popular-generators";
import RandomGenerator from "../components/random-generator";
import Footer from "../components/footer";

// import Footer from "../components/footer";
// import RandomGenerator from "../components/random-generator";
// import SearchWithPopularGenerators from "../components/search-with-popular-generators";

// export default function Home() {
// 	return (
// 		<div className="min-h-screen flex flex-col bg-white">
// 			<main className="flex-grow flex flex-col items-center justify-center px-4 py-16 max-[768px]:py-10">
// 				<article className="text-center w-full">
// 					<h1 className="mb-4 text-[#1786da] tracking-[0.01em] text-4xl md:text-5xl font-bold flex items-center justify-center">
// 						<span itemProp="name" className="sr-only">
// 							Generatorium
// 						</span>
// 						<Image
// 							quality={100}
// 							width={64}
// 							height={64}
// 							className="-mr-1 max-[568px]:h-12 max-[568px]:w-12"
// 							src="/favicon.ico"
// 							alt="G"
// 							title="G"
// 						/>
// 						<span aria-hidden="true">eneratorium</span>
// 					</h1>

// 					<p className="text-gray-500 text-lg mb-10 max-[768px]:mb-8 max-[568px]:text-[16px]">
// 						Онлайн-генераторы для всего: создавай пароли, имена,
// 						фразы, идеи за секунды
// 					</p>

// 					<SearchWithPopularGenerators />

// 					<RandomGenerator />
// 				</article>
// 			</main>

// 			<Footer />
// 		</div>
// 	);
// }

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-white">
			<main className="flex-grow flex flex-col items-center justify-center px-4 py-16 max-[768px]:py-10">
				<article className="text-center w-full">
					<h1 className="mb-4 text-[#1786da] tracking-[0.01em] text-4xl md:text-5xl font-bold flex items-center justify-center">
						<span itemProp="name" className="sr-only">
							Generatorium
						</span>
						<Image
							quality={100}
							width={64}
							height={64}
							className="-mr-1 max-[568px]:h-12 max-[568px]:w-12"
							src="/favicon.ico"
							alt="G"
							title="G"
						/>
						<span aria-hidden="true">eneratorium</span>
					</h1>

					<p className="max-w-[560px] mx-auto text-gray-600 text-lg mb-10 max-[768px]:mb-8 max-[568px]:text-[16px]">
						Generatorium — коллекция онлайн-генераторов на все
						случаи жизни: пароли, никнеймы, идеи, цитаты, рандомные
						числа и строки, крылатые фразы и многое другое.
					</p>

					<SearchWithPopularGenerators />

					<RandomGenerator />

					<section className="mt-20 max-w-2xl mx-auto text-sm text-gray-500 leading-relaxed text-center px-2">
						<h2 className="sr-only">О сайте Generatorium</h2>
						<p>
							Generatorium — это простой и быстрый сервис, где ты
							можешь за секунды сгенерировать нужные данные:
							безопасные пароли, оригинальные имена, вдохновляющие
							идеи, никнеймы для игр и не только.
						</p>
						<p className="mt-4">
							Каждый генератор — это отдельный инструмент с
							возможностью настроить параметры генерации и получить
							уникальный результат. Не нужно регистрироваться или
							платить: всё работает в один клик, прямо в браузере.
						</p>
						<p className="mt-4">
							Мы постоянно добавляем новые генераторы, улучшаем
							качество генерации и стараемся сделать сервис
							полезным для всех — от разработчиков до авторов
							контента.
						</p>
					</section>
				</article>
			</main>

			<Footer />
		</div>
	);
}
