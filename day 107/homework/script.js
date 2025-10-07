function randomDelay() {
    return Math.floor(Math.random() * 1500) + 500;
}

const planetData = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.3
            ? resolve({ name: "Mars", size: "6,779 km", distance: "225 million km" })
            : reject("Failed to fetch planet data");
    }, randomDelay());
});

const satelliteData = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.3
            ? resolve({ moons: 2 })
            : reject("Failed to fetch satellite data");
    }, randomDelay());
});

const explorationData = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.3
            ? resolve({ missions: ["Mariner 4", "Viking 1", "Perseverance"] })
            : reject("Failed to fetch exploration data");
    }, randomDelay());
});

planetData
    .then(d => console.log("Planet Data:", d))
    .catch(e => console.error(e));

satelliteData
    .then(d => console.log("Satellite Data:", d))
    .catch(e => console.error(e));

explorationData
    .then(d => console.log("Exploration Data:", d))
    .catch(e => console.error(e));

Promise.all([planetData, satelliteData, explorationData])
    .then(values => {
        const [planet, satellites, exploration] = values;
        const planetReport = { ...planet, ...satellites, ...exploration };
        console.log("\n Combined Planet Report:");
        console.log(planetReport);
    })
    .catch(error => {
        console.error("\n Could not generate full Planet Report.");
        console.error("Reason:", error);
    });
