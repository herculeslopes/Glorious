import DarkTheme from "./DarkTheme"
import LightTheme from "./LightTheme"

const enum Themes {
    DARK = 'Dark',
    LIGHT = 'Light',
    // DRACULAR = 'Dracula',
}

type StyleProperties = {
    bgColor: string,
    textColor: string,
    linesColor: string,
    // accentColor: string,
}

export type ThemeStyles = {
    primary: StyleProperties,
    secondary: StyleProperties,
}

export const ThemeStyleMap: Record<Themes, ThemeStyles> = {
    [Themes.DARK]: DarkTheme,
    [Themes.LIGHT]: LightTheme,
}