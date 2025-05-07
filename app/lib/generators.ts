export type Generator = {
	slug: string;
	name: string;
	title: string;
	description: string;
	emoji: string;
	generate: (options: Record<string, unknown>) => string;
	popular?: boolean;
	settings?: {
		[key: string]: {
			type: "range" | "checkbox" | "number" | "select";
			label?: string;
			min?: number;
			max?: number;
			default: unknown;
			options?: {
				label: string;
				value: string;
			}[];
		};
	};
};

export const generators: Generator[] = [
	{
		slug: "password",
		name: "Пароль",
		title: "Генератор безопасных паролей",
		description:
			"Мощный генератор криптостойких паролей с настройкой сложности для максимальной защиты аккаунтов.",
		emoji: "🔒",
		popular: true,
		settings: {
			length: {
				type: "range",
				label: "Длина",
				min: 8,
				max: 32,
				default: 12,
			},
			useNumbers: { type: "checkbox", label: "Цифры", default: true },
			useSymbols: {
				type: "checkbox",
				label: "Спец. символы",
				default: true,
			},
			useUppercase: {
				type: "checkbox",
				label: "Прописные буквы",
				default: true,
			},
			useRussian: {
				type: "checkbox",
				label: "Русские буквы",
				default: true,
			},
			useEnglish: {
				type: "checkbox",
				label: "Английские буквы",
				default: true,
			},
			noRepeats: {
				type: "checkbox",
				label: "Без повторов",
				default: false,
			},
		},
		generate: ({
			length,
			useNumbers,
			useSymbols,
			useUppercase,
			useRussian,
			useEnglish,
			noRepeats,
		}) => {
			const lower = "abcdefghijklmnopqrstuvwxyz";
			const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			const russianLower = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
			const russianUpper = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
			const numbers = "0123456789";
			const symbols = "!@#$%^&*()-_=+[]{};:,.<>?";

			let chars = "";

			// Если выбраны английские буквы
			if (useEnglish) {
				chars += lower;
				if (useUppercase) chars += upper;
			}

			// Если выбраны русские буквы
			if (useRussian) {
				chars += russianLower;
				if (useUppercase) chars += russianUpper;
			}

			// Если выбраны цифры и спецсимволы
			if (useNumbers) chars += numbers;
			if (useSymbols) chars += symbols;

			// Проверка на наличие доступных символов для генерации
			if (chars.length === 0) {
				return "Ошибка: выберите опции!";
			}

			let result = "";

			if (noRepeats) {
				// Если повторы запрещены, генерируем уникальные символы
				const charsArray = chars.split("");
				if (
					charsArray.length <
					(typeof length === "number" ? length : 8)
				) {
					return "Ошибка: мало уникальных символов!";
				}
				// Перемешиваем и берем уникальные символы
				while (
					result.length < (typeof length === "number" ? length : 8)
				) {
					const randomIndex = Math.floor(
						Math.random() * charsArray.length
					);
					result += charsArray.splice(randomIndex, 1);
				}
			} else {
				// Если повторы разрешены, генерируем символы с возможными повторами
				for (
					let i = 0;
					i < (typeof length === "number" ? length : 8);
					i++
				) {
					result += chars[Math.floor(Math.random() * chars.length)];
				}
			}

			return result;
		},
	},
	{
		slug: "number",
		name: "Число",
		title: "Генератор случайных чисел",
		description: "Генерация случайных чисел в заданном диапазоне.",
		emoji: "🔢",
		popular: true,
		settings: {
			min: {
				type: "number",
				label: "Минимальное число",
				default: 1,
			},
			max: {
				type: "number",
				label: "Максимальное число",
				default: 100,
			},
		},
		generate: ({ min, max }) => {
			if (
				(typeof max === "number" ? max : 1) <
				(typeof min === "number" ? min : 1)
			) {
				return "Ошибка: максимум не может быть меньше минимума!";
			}

			return (
				Math.floor(
					Math.random() *
						((typeof max === "number" ? max : 1) -
							(typeof min === "number" ? min : 1) +
							1)
				) + (typeof min === "number" ? min : 1)
			).toString();
		},
	},
	{
		slug: "color",
		name: "Цвет",
		title: "Генератор случайных цветов",
		description:
			"Генерация случайных цветов в различных форматах (HEX, RGB, HSL).",
		emoji: "🎨",
		popular: true,
		settings: {
			format: {
				type: "select",
				label: "Формат",
				options: [
					{ value: "hex", label: "HEX" },
					{ value: "rgb", label: "RGB" },
					{ value: "hsl", label: "HSL" },
				],
				default: "hex",
			},
			alpha: {
				type: "checkbox",
				label: "Прозрачность (alpha)",
				default: false,
			},
			preview: {
				type: "checkbox",
				label: "Превью",
				default: true,
			},
		},
		generate: ({ format, alpha }) => {
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
			const a = Math.round((Math.random() * 0.5 + 0.5) * 100) / 100; // Alpha от 0.5 до 1

			switch (format) {
				case "hex":
					const hex = `#${r.toString(16).padStart(2, "0")}${g
						.toString(16)
						.padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
					return alpha
						? `${hex}${Math.floor(a * 255)
								.toString(16)
								.padStart(2, "0")}`
						: hex;
				case "rgb":
					return alpha
						? `rgba(${r}, ${g}, ${b}, ${a})`
						: `rgb(${r}, ${g}, ${b})`;
				case "hsl":
					const rNorm = r / 255;
					const gNorm = g / 255;
					const bNorm = b / 255;
					const max = Math.max(rNorm, gNorm, bNorm);
					const min = Math.min(rNorm, gNorm, bNorm);
					let h = 0,
						s,
						l = (max + min) / 2;

					if (max !== min) {
						const d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						switch (max) {
							case rNorm:
								h =
									(gNorm - bNorm) / d +
									(gNorm < bNorm ? 6 : 0);
								break;
							case gNorm:
								h = (bNorm - rNorm) / d + 2;
								break;
							case bNorm:
								h = (rNorm - gNorm) / d + 4;
								break;
						}
						h /= 6;
					} else {
						s = 0;
					}

					h = Math.round(h * 360);
					s = Math.round(s * 100);
					l = Math.round(l * 100);

					return alpha
						? `hsla(${h}, ${s}%, ${l}%, ${a})`
						: `hsl(${h}, ${s}%, ${l}%)`;
				default:
					return `#${r.toString(16)}${g.toString(16)}${b.toString(
						16
					)}`;
			}
		},
	},
	{
		slug: "uuid",
		name: "UUID",
		title: "Генератор UUID",
		description: "Генерация уникальных идентификаторов (UUID v4).",
		emoji: "🆔",
		popular: true,
		settings: {},
		generate: () => {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
				/[xy]/g,
				function (c) {
					const r = (Math.random() * 16) | 0;
					const v = c === "x" ? r : (r & 0x3) | 0x8;
					return v.toString(16);
				}
			);
		},
	},
];
