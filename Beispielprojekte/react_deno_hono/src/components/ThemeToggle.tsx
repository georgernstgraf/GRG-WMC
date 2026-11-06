import { useTheme } from "../hooks/useTheme.ts";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const ziel = theme === "dark" ? "hell" : "dunkel";

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Zu ${ziel}em Design wechseln`}
            title={`Zu ${ziel}em Design wechseln`}
        >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
        </button>
    );
}
