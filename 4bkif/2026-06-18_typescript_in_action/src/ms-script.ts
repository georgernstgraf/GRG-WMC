import ms, { StringValue } from "ms";

type MsFunction = typeof ms;

declare global {
    var ms: MsFunction;
}

globalThis.ms = ms;

const input = document.querySelector("#input") as HTMLInputElement;
const output = document.querySelector("#output") as HTMLOutputElement;
const submitButton = document.querySelector("#button") as HTMLButtonElement;

submitButton.addEventListener("click", () => {
    const inputValue = input.value.trim();

    if (inputValue === "") {
        output.textContent = "Bitte eine Zeitangabe eingeben.";
        return;
    }

    try {
        const milliseconds = ms(inputValue as StringValue);
        if (!milliseconds) {
            throw ("Ergebnis: undefined");
        }
        output.textContent =
            `${inputValue} entspricht ${milliseconds} Millisekunden.`;
    } catch (error) {
        output.textContent = `Error: ${
            error instanceof Error ? error.message : String(error)
        }`;
    }
});
