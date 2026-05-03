import { Chart, registerables } from "chart-js";

function getRequiredElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);

    if (!(element instanceof HTMLElement)) {
        throw new Error("Missing HTML element: " + id);
    }

    return element as T;
}

Chart.register(...registerables);

const chartCanvas = getRequiredElement<HTMLCanvasElement>("chart-canvas");
const refreshButton = getRequiredElement<HTMLButtonElement>(
    "refresh-chart-button",
);

function createDataset(): number[] {
    return Array.from({ length: 6 }, () => 20 + Math.round(Math.random() * 70));
}

const chart = new Chart(chartCanvas, {
    type: "bar",
    data: {
        labels: ["Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        datasets: [
            {
                label: "Besucher pro Tag",
                data: createDataset(),
                borderRadius: 10,
                backgroundColor: [
                    "#1262d6",
                    "#2782e6",
                    "#39a39f",
                    "#78c5b8",
                    "#f0b352",
                    "#f07f4f",
                ],
            },
        ],
    },
    options: {
        animation: {
            duration: 700,
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 100,
            },
        },
    },
});

refreshButton.addEventListener("click", () => {
    chart.data.datasets[0].data = createDataset();
    chart.update();
});
