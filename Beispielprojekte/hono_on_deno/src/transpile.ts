import { bundle } from "@deno/emit";
import denoConfig from "../deno.json" with { type: "json" };

// Client-TypeScript liegt unter ./client/ und wird pro Request on demand
// gebuendelt. Der Import-Map kommt aus deno.json, damit Browser-Pakete
// (z. B. esm.sh-URLs) genau wie serverseitig aufgeloest werden.
const CLIENT_ROOT = new URL("../client/", import.meta.url);
const importMap = { imports: denoConfig.imports };
const isDev = Deno.env.get("DENO_ENV") !== "production";

export class ClientModuleError extends Error {
    readonly status: 404;

    constructor(message: string) {
        super(message);
        this.name = "ClientModuleError";
        this.status = 404;
    }
}

export function isDevelopment(): boolean {
    return isDev;
}

export async function transpileClientFile(
    relativePath: string,
): Promise<string> {
    const target = new URL(relativePath, CLIENT_ROOT);

    // Path-Traversal-Schutz: das aufgeloeste Ziel muss im client/-Ordner liegen.
    if (!target.href.startsWith(CLIENT_ROOT.href)) {
        throw new ClientModuleError("Pfad ausserhalb des client-Ordners");
    }

    try {
        await Deno.stat(target);
    } catch {
        throw new ClientModuleError(
            `Client-Modul nicht gefunden: ${relativePath}`,
        );
    }

    const result = await bundle(target.href, {
        allowRemote: true,
        importMap,
        minify: !isDev,
        type: "module",
    });

    if (!result.code) {
        throw new Error("Bundling hat kein JavaScript erzeugt");
    }

    return result.code;
}
