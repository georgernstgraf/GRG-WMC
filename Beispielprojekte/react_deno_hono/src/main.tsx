import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico/css/pico.min.css";
import "./styles/app.css";
import { App } from "./App.tsx";

const rootElement = document.getElementById("root");

if (rootElement === null) {
    throw new Error("Root-Element #root fehlt in index.html");
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
