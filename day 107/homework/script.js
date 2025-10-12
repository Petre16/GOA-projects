const solarSystemPlanets = [
    {
        planetName: "Mercury",
        planetSize: "4,879 km",
        distanceFromEarth: "77 million km",
        numberOfMoons: 0,
        missionSent: true
    },
    {
        planetName: "Venus",
        planetSize: "12,104 km",
        distanceFromEarth: "38 million km",
        numberOfMoons: 0,
        missionSent: false
    },
    {
        planetName: "Mars",
        planetSize: "6,779 km",
        distanceFromEarth: "225 million km",
        numberOfMoons: 2,
        missionSent: true
    },
    {
        planetName: "Jupiter",
        planetSize: "139,820 km",
        distanceFromEarth: "628 million km",
        numberOfMoons: 95,
        missionSent: false
    },
    {
        planetName: "Saturn",
        planetSize: "116,460 km",
        distanceFromEarth: "1.2 billion km",
        numberOfMoons: 146,
        missionSent: true
    },
    {
        planetName: "Uranus",
        planetSize: "50,724 km",
        distanceFromEarth: "2.6 billion km",
        numberOfMoons: 27,
        missionSent: false
    },
    {
        planetName: "Neptune",
        planetSize: "49,244 km",
        distanceFromEarth: "4.3 billion km",
        numberOfMoons: 14,
        missionSent: true
    }
];

// ეს ფუნქცია დააბრუნებს promise-ს რაღაც დროის შემდეგ და promise-ის მნიშვნელობა იქნება პლანეტის ობიექტი
const chooseRandomPlanet = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomPlanet = solarSystemPlanets[Math.floor(Math.random() * solarSystemPlanets.length)];

            resolve(randomPlanet)
        }, 1000)
    })
}

// ეს ფუნქცია აბრუნებს პლანეტის სახელს, ზომას და დისტანციას დედამიწიდან
const returnBasicData = planet => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: planet.planetName, size: planet.planetSize, distance: planet.distanceFromEarth})
        }, 2000)
    })
}

// ეს ფუნქცია აბრუნებს პლანეტის მთვარეების რაოდენობას
const returnNumberOfMoons = planet => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({moons: planet.numberOfMoons})
        }, 1000)
    })
}

//ეს ფუნქცია აბრუნებს ინფორმაცის, ამ პლანეტაზე გაგზავნილია თუ არა რაღაც მისია
const returnMission = planet => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (planet.missionSent) {
                resolve({mission: planet.missionSent})
            } else {
                reject({mission: planet.missionSent})
            }
        }, 3000)
    })
}

chooseRandomPlanet()
    .then(pl => {
        return Promise.all([returnBasicData(pl), returnNumberOfMoons(pl), returnMission(pl)])
    })
    .then(resolvedValue => console.log(resolvedValue))
    .catch(rejectedValue => console.log({error: rejectedValue}))