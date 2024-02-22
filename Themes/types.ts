import DarkTheme from "./DarkTheme"
import LightTheme from "./LightTheme"

export const enum Themes {
    DARK = 'Dark',
    LIGHT = 'Light',
    // DRACULAR = 'Dracula',
}

type StyleProperties = {
    background: string,
    text: string,
    lines: string,
    // accentColor: string,
}

export type ThemeStyles = {
    primary: StyleProperties,
    secondary: StyleProperties,
    accent: {
        default: string,
        // hover: string,
    }
}

export const ThemeStyleMap: Record<Themes, ThemeStyles> = {
    [Themes.DARK]: DarkTheme,
    [Themes.LIGHT]: LightTheme,
}