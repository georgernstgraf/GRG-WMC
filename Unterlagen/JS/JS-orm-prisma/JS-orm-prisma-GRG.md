# Prisma

## Javascript basiertes ORM

ORM: "object relational mapper".

### Installation / Setup

-   `npm i prisma`
-   `alias prisma='npx prisma'` (npx: node package executor)
-   vscode plugin: `Prisma` (von Prisma)

## Prisma Schema

im Ordner 'prisma' die Datei 'schema.prisma', sie ist die zentrale Steuerung.
Die Blöcke `datasource` sowie `generator` sind ziemlich standard:

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./Test.db"
}
generator client {
  provider = "prisma-client-js"
}
```

## Generierung des Clients

Mit `prisma generate`. Dazu wird der Eintrag mit `provider = "prisma-client-js"`
in `schema.prisma` verwendet. Es können viele andere Clients generiert werden:
<https://www.prisma.io/docs/orm/prisma-schema/overview/generators>.

Es wird die `PrismaClient` Klasse erzeugt, die man importieren kann:

```javascript
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
```

Danach kann über das `prisma` Objekt mit der Datenbank interagiert werden, gemäß
API: <https://www.prisma.io/docs/orm/prisma-client/queries/crud>

## Schema File aus vorhandener Datenbank generieren

... mit `prisma db pull`. Dabei wird `schema.prisma` upgedated durch das
Datenmodell, welches Prisma in der Datenbank vorfindet.

Jetzt findet man die Models in der gleichen Datei angefügt.

## Trickier Migrationen ohne Datenverlust

Normalerweise macht man nur "prisma migrate dev" und die Schema-Migration wird
auf die Datenbank angewendet. Table-Namen und Column-Namen, die umbenannt
werden, werden von prisma nicht erkannt, man muß in so einem Fall deshalb in
drei Schritten das migrationsfile erstellen lassen, dieses händisch ausbessern
und danach auf die Datenbank ausrollen:

1. schema.prisma editieren (z.B. Table oder Column rename)
1. Danach: `prisma validate`
1. Dump anlegen: `echo | sqlite3 -cmd .dump Test.db > dump.sql`
1. `prisma migrate dev --create-only`. Dies erzeugt nur das migration-file,
   ändert aber nicht die DB. Man antworte mutig mit "y".
1. Das migration file händisch editieren, z.B.
   `ALTER TABLE "OldName" RENAME TO "NewName";` statt `drop ... create`
1. Oder auch `ALTER TABLE "MyTable" RENAME COLUMN "oldName" TO "newName";` statt
   `drop column ... create column`.
1. Run `prisma migrate dev`
1. Kontrolle der Daten
