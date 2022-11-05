const usernames = [
    'HinlgeMcCringleberry',
    'JackmeriusTacktheritrix',
    'JavarisJamarJavarison-Lamar',
    'IbrahimMoizoos',
    'QuatroQuatro',
    'BeezerTwelveWashingbeard',
    'XWing@Aliciousness',
    'TorqueLewith',
    'ScoishMaloish',
    'DanSmith',
    'DonkeyTeeth',
];

const email = [
    'note.real@gmail.com',
    'note.real@yahoo.com',
    'note.real@aol.com',
    'note.real@hotmail.com',
    'note.real@msn.com',
    'place.holder@gmail.com',
    'place.holder@yahoo.com',
    'place.holder@aol.com',
    'place.holder@hotmail.com',
    'place.holder@msn.com',
    'krustyKrab@gmail.com',
    'krustyKrab@yahoo.com',
    'krustyKrab@aol.com',
    'krustyKrab@hotmail.com',
    'krustyKrab@msn.com',
    'drinkWater@gmail.com',
    'drinkWater@yahoo.com',
    'drinkWater@aol.com',
    'drinkWater@hotmail.com',
    'drinkWater@msn.com',
    'love.yourself@gmail.com',
    'love.yourself@yahoo.com',
    'love.yourself@aol.com',
    'love.yourself@hotmail.com',
    'love.yourself@msn.com',
    'pickleChips@gmail.com',
    'pickleChips@yahoo.com',
    'pickleChips@aol.com',
    'pickleChips@hotmail.com',
    'pickleChips@msn.com',
    'utahDude@gmail.com',
    'utahDude@yahoo.com',
    'utahDude@aol.com',
    'utahDude@hotmail.com',
    'utahDude@msn.com',
    'hungry.hippo@gmail.com',
    'hungry.hippo@yahoo.com',
    'hungry.hippo@aol.com',
    'hungry.hippo@hotmail.com',
    'hungry.hippo@msn.com',
    'do.not.reply@gmail.com',
    'do.not.reply@yahoo.com',
    'do.not.reply@aol.com',
    'do.not.reply@hotmail.com',
    'do.not.reply@msn.com',
    'taylor.swift@gmail.com',
    'taylor.swift@yahoo.com',
    'taylor.swift@aol.com',
    'taylor.swift@hotmail.com',
    'taylor.swift@msn.com',
    'marcus@gmail.com',
    'marcus@yahoo.com',
    'marcus@aol.com',
    'marcus@hotmail.com',
    'marcus@msn.com',
    'purple.rain@gmail.com',
    'purple.rain@yahoo.com',
    'purple.rain@aol.com',
    'purple.rain@hotmail.com',
    'purple.rain@msn.com',
    'cool.address@gmail.com',
    'cool.address@yahoo.com',
    'cool.address@aol.com',
    'cool.address@hotmail.com',
    'cool.address@msn.com',
    'nothing@gmail.com',
    'nothing@yahoo.com',
    'nothing@aol.com',
    'nothing@hotmail.com',
    'nothing@msn.com',
];

const thoughtText =[
    'heavy',
    'metal',
    'winds',
    'blow',
    'exit night',
    'creep',
    'growing darkness',
    'desire',
    'love',
    'endless circle',
    'rain',
    'never never land',
    'sad but true',
    'doors',
    'pale',
    'ice',
    'earth',
    'fate',
    'jackals',
    'damage',
    'fever',
    'hetfield',
    'ulrich',
    'furry',
    'one',
    'black',
    'bells',
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () =>
    `${getRandomArrItem(usernames)}`;

// Gets a random email
const getRandomEmail = () =>
    `${getRandomArrItem(email)}`;

// Function to generate random thought text.
const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: `${getRandomArrItem(thoughtText)} ${getRandomArrItem(thoughtText)} ${getRandomArrItem(thoughtText)} ${getRandomArrItem(thoughtText)}` ,
        });
    }
    return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomEmail, getRandomThoughts };
