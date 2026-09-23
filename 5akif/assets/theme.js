// Gemeinsamer Hell/Dunkel-Umschalter der 5akif-Lessons (WMC).
// Markup im Header: <button class="theme-toggle no-print" type="button">…</button>
// Default folgt dem Betriebssystem (prefers-color-scheme); eine Klick-Wahl
// wird in localStorage gemerkt. Print bleibt per CSS hell. Kein CDN.
(() => {
    const KEY = "wmc-theme";
    const root = document.documentElement;
    const gespeichert = localStorage.getItem(KEY);

    if (gespeichert === "dark" || gespeichert === "light") {
        root.dataset.theme = gespeichert;
    }

    const istDunkel = () =>
        root.dataset.theme
            ? root.dataset.theme === "dark"
            : matchMedia("(prefers-color-scheme: dark)").matches;

    document.addEventListener("DOMContentLoaded", () => {
        const button = document.querySelector(".theme-toggle");
        if (!button) {
            return;
        }

        const beschriften = () => {
            button.textContent = istDunkel() ? "☀ hell" : "☾ dunkel";
            button.setAttribute(
                "aria-label",
                istDunkel() ? "Zu hellem Design wechseln" : "Zu dunklem Design wechseln",
            );
        };
        beschriften();

        button.addEventListener("click", () => {
            const neu = istDunkel() ? "light" : "dark";
            root.dataset.theme = neu;
            localStorage.setItem(KEY, neu);
            beschriften();
        });
    });
})();
