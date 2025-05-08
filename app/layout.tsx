import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Script from "next/script";

import "./styles/globals.css";

export const metadata: Metadata = {
	title: "Generatorium — генератор никнеймов, паролей, идей, цитат и многого другого",
	description:
		"Generatorium — это универсальный онлайн-сервис для генерации никнеймов, паролей, идей, цитат и многого другого. Простое и бесплатное решение для любых нужд. Есть API для разработчиков.",
	keywords: [
		"генератор паролей",
		"генератор имён",
		"генератор никнеймов",
		"генератор цитат",
		"генератор идей",
		"генератор идей для стартапов",
		"генератор случайных слов",
		"генератор случайных чисел",
		"генератор цвета",
		"генератор псевдонимов",
		"онлайн генератор",
		"генератор названий",
		"генератор списков",
		"генератор текстов",
		"рандомайзер",
		"случайный генератор",
		"генератор фраз",
		"генератор email",
		"генератор пар",
		"генератор дат",
		"генератор всего",
		"generatorium",
	],
	openGraph: {
		title: "Generatorium — генератор всего",
		description:
			"Генератор паролей, имён, цитат, стартапов и многого другого — всё в одном месте!",
		url: "https://generatorium.ru",
		siteName: "Generatorium",
		locale: "ru_RU",
		type: "website",
		images: [
			{
				url: "https://generatorium.ru/og-image.jpg", // подготовь такой файл
				width: 1200,
				height: 630,
				alt: "Generatorium — генератор всего",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Generatorium — генератор всего",
		description:
			"Генератор всего, что угодно: пароли, никнеймы, имена, идеи и т.д.",
		images: ["https://generatorium.ru/og-image.jpg"],
	},
	metadataBase: new URL("https://generatorium.ru"),
	authors: [
		{
			name: "Generatorium Team",
			url: "https://generatorium.ru",
		},
	],
	creator: "Generatorium",
	applicationName: "Generatorium",
	publisher: "Generatorium",
	alternates: {
		canonical: "https://generatorium.ru",
		languages: {
			"ru-RU": "https://generatorium.ru",
		},
	},
	category: "utilities",
};

const inter = Inter({
	subsets: ["latin", "cyrillic", "cyrillic-ext", "latin-ext"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				{children}

				<Script id="yandex-metrika" strategy="afterInteractive">
					{`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(101674959, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
				</Script>
			</body>
		</html>
	);
}
