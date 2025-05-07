import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./styles/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Generatorium",
	description:
		"Генератор паролей, имён, цитат и всего, что только можно вообразить",
	keywords: [
		"генератор паролей",
		"генератор имён",
		"генератор никнеймов",
		"идеи стартапов",
		"случайный генератор",
		"генератор цитат",
		"Generatorium",
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
