import { faker } from "@faker-js/faker";

const alben = Array.from({ length: 7 }).map((_) => {
    const rv = {
        album: faker.music.album(),
        artist: faker.music.artist(),
        genre: faker.music.genre(),
        year: faker.date.past({ years: 50 }).getFullYear(),
        songs: Array.from({ length: faker.number.int({ min: 1, max: 5 }) })
            .map(() => ({
                title: faker.music.songName(),
                duration: faker.number.int({ min: 50, max: 700 }), // Duration in seconds
            })),
    };
    rv.songs.sort(() => Math.random() - 0.5);
    return rv;
});

console.log("export const alben = " + JSON.stringify(alben, null, 4));
