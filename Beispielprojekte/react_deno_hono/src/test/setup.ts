import { GlobalRegistrator } from "@happy-dom/global-registrator";

// Deno test hat kein DOM – happy-dom stellt window/document/localStorage
// und matchMedia bereit. Die Registrierung muss vor React/RTL laufen,
// deshalb wird dieses Modul per --preload geladen.
await GlobalRegistrator.register({ url: "http://localhost/" });

// React 19 erwartet dieses Flag, damit act()-Warnungen unterdrückt werden.
(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;
