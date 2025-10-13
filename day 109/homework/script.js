const moviesData = [
    {
        title: "Taxi (1998)",
        director: "Gérard Pirès",
        genre: "Action, Comedy",
        image: "assets/photos/taxi.png"
    },
    {
        title: "The Commuter (2018)",
        director: "Jaume Collet-Serra",
        genre: "Thriller, Action",
        image: "assets/photos/thecommuter.png"
    },
    {
        title: "Home Alone (1990)",
        director: "Chris Columbus",
        genre: "Comedy, Family",
        image: "assets/photos/homealone.png"
    }
];

async function loadMovies() {
    const container = document.getElementById("movies")

    for (const movie of moviesData) {
        await addMovie(container, movie)
    }
}

async function addMovie(container, movie) {
    const div = document.createElement("div")
    div.className = "movie"

    div.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
    `

    container.appendChild(div)
}

loadMovies()