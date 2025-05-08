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
		slug: "nickname",
		name: "Никнейм",
		title: "Генератор уникальных никнеймов",
		description:
			"Создание миллионов уникальных псевдонимов с продвинутыми настройками",
		emoji: "👤",
		popular: true,
		settings: {
			style: {
				type: "select",
				label: "Стиль",
				options: [
					{ value: "cyber", label: "Киберпанк" },
					{ value: "fantasy", label: "Фэнтези" },
					{ value: "abstract", label: "Абстрактный" },
					{ value: "russian", label: "Русский" },
				],
				default: "cyber",
			},
			complexity: {
				type: "range",
				label: "Сложность",
				min: 1,
				max: 5,
				default: 3,
			},
			mutations: {
				type: "checkbox",
				label: "Случайные мутации",
				default: true,
			},
			addNumbers: {
				type: "checkbox",
				label: "Добавить цифры",
				default: true,
			},
		},
		generate: ({
			style = "cyber",
			complexity = 3,
			mutations = true,
			addNumbers = true,
		}: {
			style?: string;
			complexity?: number;
			mutations?: boolean;
			addNumbers?: boolean;
		}) => {
			type MorphemeData = {
				prefixes: string[];
				cores: string[];
				suffixes: string[];
				connectors: string[];
			};

			const MORPHEMES: Record<string, MorphemeData> = {
				cyber: {
					prefixes: [
						"Neuro",
						"Cyber",
						"Quantum",
						"Nano",
						"Hyper",
						"X",
						"Zero",
						"Dark",
					],
					cores: [
						"void",
						"pulse",
						"bit",
						"code",
						"flux",
						"synth",
						"grid",
						"node",
					],
					suffixes: ["_x", "404", ".exe", "++", "~", "01"],
					connectors: ["-", "_", "", "."],
				},
				fantasy: {
					prefixes: [
						"Shadow",
						"Dragon",
						"Blood",
						"Iron",
						"Storm",
						"Night",
						"Fire",
					],
					cores: [
						"blade",
						"mage",
						"born",
						"heart",
						"fury",
						"wing",
						"horn",
					],
					suffixes: ["bane", "reaper", "seeker", "walker", "hunter"],
					connectors: ["", "-", "'"],
				},
				abstract: {
					prefixes: ["Zyx", "Qwert", "Asdf", "Jkl", "Vbnm", "Uiop"],
					cores: ["ol", "iu", "ert", "tyu", "op", "asd"],
					suffixes: ["!@", "#$", "%^", "&*", "()"],
					connectors: ["", "", ".", "~"],
				},
				russian: {
					prefixes: [
						"Темный",
						"Ярый",
						"Косой",
						"Быстрый",
						"Стальной",
						"Красный",
					],
					cores: [
						"волк",
						"медведь",
						"ворон",
						"тигр",
						"дракон",
						"воин",
					],
					suffixes: ["123", "X", "Z", "2023", "88"],
					connectors: ["_", "", "-"],
				},
			};

			const SPECIAL_CHARS = ["x", "z", "v", "*", "~", "_"];
			const NUMBER_SUFFIXES = [
				"123",
				"88",
				"2023",
				"42",
				"777",
				"69",
				"228",
				"112",
				"666",
				"777",
			];

			const getRandom = <T>(arr: T[]): T =>
				arr[Math.floor(Math.random() * arr.length)];
			const randomInt = (min: number, max: number): number =>
				Math.floor(Math.random() * (max - min + 1)) + min;
			const shouldMutate = (): boolean =>
				mutations && Math.random() > 0.6;

			const data = MORPHEMES[style] || MORPHEMES.cyber;
			const compLevel = Math.min(5, Math.max(1, complexity));

			// Генерация основы
			const generateBase = (): string => {
				const parts: string[] = [];

				// Добавляем префикс с вероятностью 70%
				if (Math.random() > 0.3) {
					parts.push(getRandom(data.prefixes));
				}

				// Добавляем 1-3 основы
				const coreCount = randomInt(1, Math.max(1, compLevel - 1));
				for (let i = 0; i < coreCount; i++) {
					parts.push(getRandom(data.cores));
				}

				// Добавляем суффикс с вероятностью 50%
				if (Math.random() > 0.5) {
					parts.push(getRandom(data.suffixes));
				}

				// Соединяем части
				return parts.join(getRandom(data.connectors));
			};

			let nickname = generateBase();

			// Мутации
			if (shouldMutate()) {
				const mutationType = randomInt(1, 4);
				const pos = randomInt(1, nickname.length - 2);

				switch (mutationType) {
					case 1:
						nickname =
							nickname.slice(0, pos) +
							getRandom(SPECIAL_CHARS) +
							nickname.slice(pos);
						break;
					case 2:
						nickname = nickname
							.split("")
							.map((c, idx) =>
								idx % 2 === 0
									? c.toUpperCase()
									: c.toLowerCase()
							)
							.join("");
						break;
					case 3:
						nickname =
							nickname.slice(0, pos) +
							nickname.slice(pos, pos + 2) +
							nickname.slice(pos);
						break;
					case 4:
						nickname =
							nickname.slice(0, pos) +
							nickname
								.slice(pos, pos + 2)
								.split("")
								.reverse()
								.join("") +
							nickname.slice(pos + 2);
						break;
				}
			}

			// Добавляем цифры
			if (addNumbers && Math.random() > 0.3) {
				nickname += getRandom(NUMBER_SUFFIXES);
			}

			// Ограничиваем длину
			const maxLength = 4 + compLevel * 3;
			return nickname.slice(0, maxLength);
		},
	},
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
