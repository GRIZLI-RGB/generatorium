import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./styles/globals.css";

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
