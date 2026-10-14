// schema.ts — die Tabellen der Musik-DB als TypeScript-Schema (Drizzle).
// Wichtig: sqliteTable erzeugt KEINE Tabelle in der Datenbank — es definiert
// nur, wie Tabellen/Zeilen in TypeScript aussehen. Die Tabellen selbst legt
// db.ts mit DDL an (drizzle-kit/Migrationen kommen in KM6).
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const artist = sqliteTable("artist", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  gruendungsjahr: integer("gruendungsjahr"),
});

export const album = sqliteTable("album", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  titel: text("titel").notNull(),
  jahr: integer("jahr"),
  artistId: integer("artist_id").notNull().references(() => artist.id),
});

export const track = sqliteTable("track", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  titel: text("titel").notNull(),
  dauerSek: integer("dauer_sek").notNull(),
  albumId: integer("album_id").notNull().references(() => album.id),
});
