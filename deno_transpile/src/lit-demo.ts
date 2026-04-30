import { css, html, LitElement } from "lit";

class ScoreBoard extends LitElement {
    static override properties = {
        score: { type: Number },
        mood: { type: String },
    };

    static override styles = css`
        :host {
            display: block;
        }

        .card {
            display: grid;
            gap: 18px;
            padding: 24px;
            border-radius: 24px;
            background: linear-gradient(135deg, #2d2f56, #5144b8);
            color: white;
        }

        .score {
            font-size: clamp(3rem, 8vw, 6rem);
            line-height: 0.9;
            font-weight: 700;
        }

        .mood {
            color: rgba(255, 255, 255, 0.78);
        }

        .button-row {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        button {
            border: 0;
            border-radius: 999px;
            padding: 12px 16px;
            font: inherit;
            cursor: pointer;
        }

        .primary {
            color: #17182a;
            background: #ffcf70;
        }

        .secondary {
            color: white;
            background: rgba(255, 255, 255, 0.12);
        }
    `;

    declare score: number;
    declare mood: string;

    constructor() {
        super();
        this.score = 4;
        this.mood = "Solider Start";
    }

    private increaseScore(): void {
        this.score += 1;
        this.mood = this.score > 7 ? "Starker Lauf" : "Solider Start";
    }

    private resetScore(): void {
        this.score = 0;
        this.mood = "Neu gestartet";
    }

    override render() {
        return html`
            <section class="card">
                <div>
                    <div class="score">${this.score}</div>
                    <div class="mood">${this.mood}</div>
                </div>
                <div class="button-row">
                    <button class="primary" @click="${() =>
                        this.increaseScore()}">
                        Punkt dazu
                    </button>
                    <button class="secondary" @click="${() =>
                        this.resetScore()}">
                        Reset
                    </button>
                </div>
            </section>
        `;
    }
}

customElements.define("score-board", ScoreBoard);
