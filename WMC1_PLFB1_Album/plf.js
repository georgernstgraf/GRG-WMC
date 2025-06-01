import { assertEquals } from "@std/assert";
export class Song {
    constructor({ title, duration }) {
        assertEquals(typeof title, "string", "Titel muss ein String sein");
        assertEquals(typeof duration, "number", "Dauer muss eine Zahl sein");
        assertEquals(1, arguments.length, "Es wird 1 Argument erwartet");
        assertEquals(
            duration > 0,
            true,
            "Dauer muss größer als 0 sein",
        );
        this.title = title;
        this.duration = duration;
    }
}
export class Album {
    constructor({ genre, year, artist, album, songs }) {
        assertEquals(typeof genre, "string", "Genre muss ein String sein");
        assertEquals(typeof year, "number", "Jahr muss eine Zahl sein");
        assertEquals(typeof artist, "string", "Künstler muss ein String sein");
        assertEquals(typeof album, "string", "Album muss ein String sein");
        assertEquals(Array.isArray(songs), true, "Songs muss ein Array sein");
        assertEquals(
            songs.every((song) => song instanceof Song),
            true,
            "Alle Songs müssen Instanzen der Klasse Song sein",
        );
        assertEquals(
            songs.length > 0,
            true,
            "Es müssen mindestens 1 Song im Album sein",
        );
        this.genre = genre;
        this.year = year;
        this.artist = artist;
        this.album = album;
        this.songs = songs;
    }
    getTotalDuration() {
        return this.songs.reduce((total, song) => total + song.duration, 0);
    }
    getLongestSong() {
        return this.songs.reduce((longest, song) =>
            song.duration > longest.duration ? song : longest
        );
    }
    getShortestSong() {
        return this.songs.reduce((shortest, song) =>
            song.duration < shortest.duration ? song : shortest
        );
    }
    getSongsByDuration(minDuration) {
        return this.songs.filter((song) => song.duration >= minDuration);
    }
    getSongsSortedByDuration() {
        return this.songs.sort((a, b) => a.duration - b.duration);
    }
    getSongsByTitle(title) {
        return this.songs.filter((song) => song.title.includes(title));
    }
    getAllTitles() {
        return [...new Set(this.songs.map((song) => song.title))];
    }
    getAverageDuration() {
        const totalDuration = this.getTotalDuration();
        return totalDuration / this.songs.length;
    }
}
