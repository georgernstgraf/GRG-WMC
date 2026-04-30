import confetti from "canvas-confetti";

function getRequiredElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);

    if (!(element instanceof HTMLElement)) {
        throw new Error("Missing HTML element: " + id);
    }

    return element as T;
}

const burstButton = getRequiredElement<HTMLButtonElement>("burst-button");
const rainButton = getRequiredElement<HTMLButtonElement>("rain-button");
const statusText = getRequiredElement<HTMLElement>("status-text");

function launchBurst(): void {
    confetti({
        angle: 90,
        particleCount: 140,
        spread: 90,
        origin: { y: 0.7 },
    });

    statusText.textContent =
        "Konfetti ausgeliefert ueber den Transpile-Server.";
}

function launchRain(): void {
    const endTime = Date.now() + 1600;

    statusText.textContent = "Regenmodus aktiv...";

    const timer = setInterval(() => {
        if (Date.now() >= endTime) {
            clearInterval(timer);
            statusText.textContent = "Regenmodus beendet. Noch einmal?";
            return;
        }

        confetti({
            angle: 60,
            particleCount: 12,
            spread: 70,
            origin: { x: 0 },
        });

        confetti({
            angle: 120,
            particleCount: 12,
            spread: 70,
            origin: { x: 1 },
        });
    }, 180);
}

burstButton.addEventListener("click", launchBurst);
rainButton.addEventListener("click", launchRain);

launchBurst();
