import { light_language_list, light_theme_list } from "./constant";

export interface LightCodeProps {
    code: string;
    language?: typeof light_language_list[number];
    theme?: typeof light_theme_list[number];
    width?: string | number;
    height?: string | number;
    custom?: boolean;
}

export interface LightCodeEmits {
    (e: 'copy', code: string): void;
    (e: 'languageChange', language: string): void;
    (e: 'themeChange', theme: string): void;
}

export interface LightCodeInstance {
    copyCode: () => string;
    setTheme: (theme: string) => void;
    setLanguage: (language: string) => void;
}