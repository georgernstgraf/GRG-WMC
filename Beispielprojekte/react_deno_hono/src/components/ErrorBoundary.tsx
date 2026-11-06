import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    override state: State = { error: null };

    static getDerivedStateFromError(error: Error): State {
        return { error };
    }

    override componentDidCatch(error: Error, info: ErrorInfo): void {
        console.error("Renderfehler:", error, info.componentStack);
    }

    override render(): ReactNode {
        if (this.state.error !== null) {
            return (
                <main className="container page">
                    <article className="error-card">
                        <h1>Da ist etwas schiefgelaufen</h1>
                        <p>{this.state.error.message}</p>
                        <button
                            type="button"
                            onClick={() => this.setState({ error: null })}
                        >
                            Erneut versuchen
                        </button>
                    </article>
                </main>
            );
        }

        return this.props.children;
    }
}
