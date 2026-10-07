// ─── Dummy-Daten ────────────────────────────────────────────────────────────

interface Item {
  id: number;
  name: string;
  description: string;
}

const items: Item[] = [
  { id: 1, name: "Laptop", description: "MacBook Pro 14" },
  { id: 2, name: "Maus", description: "Logitech MX Master 3" },
  { id: 3, name: "Tastatur", description: "Keychron K2" },
];

let nextId = 4;

// ─── Hilfsfunktionen ────────────────────────────────────────────────────────

function json(data: unknown, status = 200): Response {
  return Response.json(data, { status });
}

function findItem(id: number): Item | undefined {
  return items.find((item) => item.id === id);
}

// ─── Handler ─────────────────────────────────────────────────────────────────

function handleGet(url: URL): Response {
  const idParam = url.searchParams.get("id");

  if (idParam) {
    const item = findItem(Number(idParam));
    if (!item) return json({ error: "Item nicht gefunden" }, 404);
    return json(item);
  }

  return json(items);
}

function handlePost(req: Request): Response {
  return req.json().then((body: Partial<Item>) => {
    if (!body.name) {
      return json({ error: "Name ist erforderlich" }, 400);
    }

    const newItem: Item = {
      id: nextId++,
      name: body.name,
      description: body.description ?? "",
    };

    items.push(newItem);
    return json(newItem, 201);
  });
}

function handlePatch(req: Request, url: URL): Response {
  const idParam = url.searchParams.get("id");
  if (!idParam) return json({ error: "id als Query-Param erforderlich" }, 400);

  const item = findItem(Number(idParam));
  if (!item) return json({ error: "Item nicht gefunden" }, 404);

  return req.json().then((body: Partial<Item>) => {
    if (body.name !== undefined) item.name = body.name;
    if (body.description !== undefined) item.description = body.description;
    return json(item);
  });
}

function handleDelete(url: URL): Response {
  const idParam = url.searchParams.get("id");
  if (!idParam) return json({ error: "id als Query-Param erforderlich" }, 400);

  const index = items.findIndex((item) => item.id === Number(idParam));
  if (index === -1) return json({ error: "Item nicht gefunden" }, 404);

  const [removed] = items.splice(index, 1);
  return json({ message: "Gelöscht", item: removed });
}

// ─── Router ──────────────────────────────────────────────────────────────────

export function handler(req: Request): Response {
  const url = new URL(req.url);

  if (url.pathname === "/api") {
    return json({
      message: "Hello, world!",
      time: new Date().toISOString(),
    });
  }

  if (url.pathname === "/api/items") {
    switch (req.method) {
      case "GET":
        return handleGet(url);
      case "POST":
        return handlePost(req);
      case "PATCH":
        return handlePatch(req, url);
      case "DELETE":
        return handleDelete(url);
      default:
        return json({ error: `Methode ${req.method} nicht erlaubt` }, 405);
    }
  }

  return new Response("<h1>I am the default handler</h1>", {
    headers: { "content-type": "text/html" },
  });
}

if (import.meta.main) {
  Deno.serve(handler);
}
