export type FetchHandler = (
    input: RequestInfo | URL,
    init?: RequestInit,
) => Response | Promise<Response>;

export function stubFetch(handler: FetchHandler): () => void {
    const original = globalThis.fetch;

    globalThis.fetch =
        ((input: RequestInfo | URL, init?: RequestInit) =>
            Promise.resolve(handler(input, init))) as typeof fetch;

    return () => {
        globalThis.fetch = original;
    };
}

export function jsonResponse(body: unknown, status = 200): Response {
    return new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}
