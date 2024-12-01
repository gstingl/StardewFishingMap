//Input season and weather then display fish and show the location and times
//Potentialy make a large array called "fish" and have an array of objects to iterate through

let currentSeason = 'summer';
let currentWeather = 'sun';
let catchableFishSeason = [];

//first check if any fish in the 'fish' array have properties that match the
// current season or weather.

const fishList = {
    'puffer fish': {
        location: ['ocean', 'ginger island oceans'],
        minTime: 12,
        maxTime: 16,
        season: 'summer',
        weather: 'sun',
},
    anchovy: {
        location: 'ocean',
        minTime: 0,
        maxTime: 24,
        season: ['spring', 'fall'],
        weather: 'any',
},
    tuna: {
        location: ['ocean', 'ginger island oceans'],
        minTime: 6,
        maxTime: 19,
        season: ['summer', 'winter'],
        weather: 'any',
},
    sardine: {
        location: 'ocean',
        minTime: 6,
        maxTime: 19,
        season: ['spring', 'fall', 'winter'],
        weather: 'any',
},
    bream: {
        location: ['river_town', 'river_forest'],
        minTime: 6,
        maxTime: 2,
        season: 'any',
        weather: 'any',
}};


const seasonCheck = (fishName) => {
    if (typeof fishList[fishName].season === 'string') {
        if (fishList[fishName].season === currentSeason || fishList[fishName].season === 'any') {
            return true;
        } else return false;
    } else {
        if (fishList[fishName].season.includes(currentSeason)) {
            return true;
        } else return false;
    };
};

const weatherCheck = (fishName) => {
    if (typeof fishList[fishName].weather === 'string') {
        if (fishList[fishName].weather === currentWeather || fishList[fishName].weather === 'any') {
            return true;
        } else return false;
    } else {
        if (fishList[fishName].weather.includes(currentWeather)) {
            return true;
        } else return false;
    };
};


for(let fishName in fishList) {
    if(weatherCheck(fishName) === true && seasonCheck(fishName) === true) {
        console.log(fishName);
    }
};





