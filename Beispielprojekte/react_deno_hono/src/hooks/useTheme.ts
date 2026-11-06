import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "klangraum-theme";

function systemTheme(): Theme {
    const query = globalThis.matchMedia?.("(prefers-color-scheme: light)");

    return query?.matches ? "light" : "dark";
}

function readTheme(): Theme {
    try {
        const stored = globalThis.localStorage?.getItem(STORAGE_KEY);

        if (stored === "light" || stored === "dark") {
            return stored;
        }
    } catch {
        // localStorage kann z. B. im privaten Modus gesperrt sein.
    }

    return systemTheme();
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(readTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // Persistenz ist optional; die Seite funktioniert auch ohne.
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((current) => current === "dark" ? "light" : "dark");
    }, []);

    return { theme, toggleTheme };
}
