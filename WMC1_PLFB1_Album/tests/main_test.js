import { assert, assertEquals, assertThrows } from "@std/assert";
import * as plf from "../plf.js";
import { alben as alben_pojo } from "../alben.js"; // werden in test 3 mit durch array mit Song-Objekten ersetzt
const songs = alben_pojo.flatMap((album) => album.songs);
//console.log(songs);
const lengths = [
    1513,
    338,
    301,
    1041,
    2417,
    542,
    2365,
];

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
// 3: Hier wird geprüft, ob alles aus dem Album Constructor-Parameter übernommen wird.
Deno.test("Album constructor takes 1 argument object with properties 5P", () => {
    alben_pojo.forEach((album) => {
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
    new plf.Album(alben_pojo[0]); // sollte nicht werfen, da alben[0] ein gültiges Album ist
});
Deno.test("Album::getTotalDuration() returns total duration of all songs 4P", () => {
    for (const i in alben_pojo) {
        const album = alben_pojo[i];
        const album_instance = new plf.Album(album);
        const total_duration = album_instance.getTotalDuration();
        const expected_duration = lengths[i];
        assertEquals(
            total_duration,
            expected_duration,
            `Gesamtdauer von Album ${album.album} sollte ${expected_duration} sein`,
        );
    }
});
Deno.test("Album::getLongestSong() returns the longest song 4P", () => {
    const longestSongs = { 1: 3, 3: 5, 6: 14 };
    const songinstances = songs.map((s) => (new plf.Song(s)));
    Object.keys(longestSongs).forEach((key) => {
        const album = alben_pojo[key];
        const album_instance = new plf.Album(album);
        const longest_song = album_instance.getLongestSong();
        const expected_song = songinstances[longestSongs[key]];
        assertEquals(
            longest_song,
            expected_song,
            `Längste Song von Album ${album.album} sollte ${expected_song.title} sein`,
        );
    });
});
Deno.test("Album::getShortestSong() returns the shortest song", () => {
    const shortestSongs = { 1: 3, 3: 6, 5: 12 };
    const songinstances = songs.map((s) => (new plf.Song(s)));
    Object.keys(shortestSongs).forEach((key) => {
        const album = alben_pojo[key];
        const album_instance = new plf.Album(album);
        const shortest_song = album_instance.getShortestSong();
        const expected_song = songinstances[shortestSongs[key]];
        assertEquals(
            shortest_song,
            expected_song,
            `Kürzester Song von Album ${album.album} sollte ${expected_song.title} sein`,
        );
    });
});
Deno.test("Album::getSongsSortedByDuration() returns songs sorted by duration ascending", () => {
    //const expected = {0: [2,0,1], 1: [0], 2: [0], 3: [1,0], 4: [0,1], 5: [0,1], 6: [2,1,4,3,0]};
    const expected = { 6: [2, 1, 4, 3, 0] };

    for (const alb_no in Object.keys(expected)) {
        const album = new plf.Album(alben_pojo[alb_no]);
        const sorted_songs = album.getSongsSortedByDuration();
        for (const i in expected[alb_no]) {
            assertEquals(
                sorted_songs.shift().title,
                album`Song ${i} von Album ${alb_no} sollte ${
                    songs[song_index].title
                } sein`,
            );
        }
    }
});
Deno.test("Album::getSongsByTitle(title) returns songs containing title case-insensitive", () => {
    const expected = {
        0: ["The", [1, 2]],
        6: ["love", [15]],
    };
    for (const alb_no of Object.keys(expected)) {
        const album = new plf.Album(alben_pojo[alb_no]);
        const search = expected[alb_no][0];
        const songs_by_title_actual = new Set(
            album.getSongsByTitleCaseInsensitive(search).map((_) => _.title),
        );
        const songs_by_title_expected = new Set();
        expected[alb_no][1].forEach((song_index) => {
            songs_by_title_expected.add(songs[song_index].title);
        });
        assertEquals(songs_by_title_actual, songs_by_title_expected);
    }
});
/*
 * Album::getSongsByDuration(minDuration) returns songs with duration >= minDuration
 * Album::getAllTitles() returns all song titles
 * Album::getAverageDuration() returns average duration of all songs
 */
// 8
