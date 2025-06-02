import { assert, assertEquals, assertThrows } from "@std/assert";
import * as plf from "../plf.js";
import { alben } from "../alben.js";
const songs = alben.flatMap((album) => album.songs);
const lengths = [
    1513,
    338,
    301,
    1041,
    2417,
    542,
    2365,
];

songs.forEach((song) => {
    song.duration = Number(song.duration);
});

Deno.test("Class Album exists 1P", () => {
    assertEquals(typeof plf.Album, "function", "Album sollte eine Klasse sein");
    assert(
        plf.Album instanceof Function,
        "Album sollte als Klasse exportiert werden",
    );
});
Deno.test("Class Song exists 1P", () => {
    assertEquals(typeof plf.Song, "function", "Song sollte eine Klasse sein");
    assert(
        plf.Song instanceof Function,
        "Song sollte als Klasse exportiert werden",
    );
});
// Hier wird geprüft, ob alles aus dem Album Constructor-Parameter übernommen wird.
Deno.test("Album constructor takes 1 argument object with properties 5P", () => {
    alben.forEach((album) => {
        album.songs = album.songs.map(
            (song) => new plf.Song(song),
        );
        const album_instance = new plf.Album(album);
        assertEquals(
            album_instance.genre,
            album.genre,
            `attribut genre sollte ${album.genre} sein`,
        );
        assertEquals(
            album_instance.year,
            album.year,
            `attribut year sollte ${album.year} sein`,
        );
        assertEquals(
            album_instance.artist,
            album.artist,
            `attribut artist sollte ${album.artist} sein`,
        );
        assertEquals(
            album_instance.album,
            album.album,
            `attribut album sollte ${album.album} sein`,
        );
        assertEquals(
            album_instance.songs,
            album.songs,
            "attribut songs sollte ein Array von Song-Instances sein",
        );
    });
});

// Hier wird geprüft, ob alles aus dem Song Constructor-Parameter übernommen wird.
Deno.test("Song constructor takes 1 argument object with properties 3P", () => {
    songs.forEach((song) => {
        const song_instance = new plf.Song({
            title: song.title,
            duration: song.duration,
        });
        assertEquals(
            song_instance.title,
            song.title,
            `attribut title sollte ${song.title} sein`,
        );
        assertEquals(
            song_instance.duration,
            song.duration,
            `attribut duration sollte ${song.duration} und typ "number" sein`,
        );
    });
});
// Hier wird getestet, ob der Constructor von Album bei falschen Argumenten eine Exception wirft.
Deno.test("constructor throws on wrong arguments 3P", () => {
    assertThrows(() => {
        new plf.Album();
    });
    assertThrows(() => {
        new plf.Album("Album");
    });
    assertThrows(() => {
        new plf.Album({});
    });
    assertThrows(() => {
        new plf.Album({
            genre: "Genre",
            year: 2020,
            artist: "Artist",
            album: "Album",
            songs: [],
        });
    }, "sollte Exception werfen, da mindestens 1 Song erwartet wird");
    assertThrows(() =>
        new plf.Album({
            genre: "Genre",
            year: 2020,
            artist: "Artist",
            album: "Album",
            songs: ["Hallo Dolly"],
        }), "sollte Exception werfen, da Song-Objekte erwartet werden");
    new plf.Album(alben[0]); // sollte nicht werfen, da alben[0] ein gültiges Album ist
});
Deno.test("Album::getTotalDuration() returns total duration of all songs 3P", () => {
    for (let i in alben) {
        const album = alben[i];
        const album_instance = new plf.Album(album);
        const total_duration = album_instance.getTotalDuration();
        const expected_duration = lengths[i];
        console.log(
            total_duration,
            expected_duration,
            `Gesamtdauer von Album ${album.album} sollte ${expected_duration} sein`,
        );
    }
});

/*
 * Album::getLongestSong() returns the longest song
 * Album::getShortestSong() returns the shortest song
 * Album::getSongsByDuration(minDuration) returns songs with duration >= minDuration
 * Album::getSongsSortedByDuration() returns songs sorted by duration
 * Album::getSongsByTitle(title) returns songs containing title
 * Album::getAllTitles() returns all song titles
 * Album::getAverageDuration() returns average duration of all songs
 */
// 8
