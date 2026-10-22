const planets = [
  {
    name: "Mercury",
    color: "#a9a6a1",
    size: 48,
    distance: "57.9 million km",
    description: "The smallest planet and closest to the Sun."
  },
  {
    name: "Venus",
    color: "#e8bd85",
    size: 68,
    distance: "108.2 million km",
    description: "A scorching world with a dense atmosphere."
  },
  {
    name: "Earth",
    color: "#438de4",
    size: 76,
    distance: "149.6 million km",
    description: "Our home, with liquid water on its surface."
  },
  {
    name: "Mars",
    color: "#dc7256",
    size: 60,
    distance: "227.9 million km",
    description: "The Red Planet, home to giant volcanoes."
  },
  {
    name: "Jupiter",
    color: "#d7ad85",
    size: 100,
    distance: "778.6 million km",
    description: "The largest planet in our solar system."
  },
  {
    name: "Saturn",
    color: "#ddc79c",
    size: 90,
    distance: "1.43 billion km",
    description: "A gas giant famous for its spectacular rings.",
    ringed: true
  },
  {
    name: "Uranus",
    color: "#82d5dc",
    size: 72,
    distance: "2.87 billion km",
    description: "An ice giant that rotates on its side."
  },
  {
    name: "Neptune",
    color: "#4669e9",
    size: 70,
    distance: "4.50 billion km",
    description: "A distant ice giant with powerful winds."
  }
];

const planetGrid = document.getElementById("planet-grid");
const searchInput = document.getElementById("planet-search");
const emptyMessage = document.getElementById("empty-message");

function renderPlanets(list) {
  planetGrid.innerHTML = "";

  emptyMessage.hidden = list.length !== 0;

  list.forEach((planet) => {
    const card = document.createElement("article");
    card.className = "planet-card";

    const visual = document.createElement("div");
    visual.className = "planet-visual";

    const ball = document.createElement("div");
    ball.className = `planet-ball${planet.ringed ? " ringed" : ""}`;
    ball.style.setProperty("--planet-color", planet.color);
    ball.style.setProperty("--planet-size", `${planet.size}px`);

    visual.appendChild(ball);

    const title = document.createElement("h3");
    title.textContent = planet.name;

    const description = document.createElement("p");
    description.textContent = planet.description;

    const distance = document.createElement("span");
    distance.className = "planet-distance";
    distance.textContent = `FROM SUN · ${planet.distance}`;

    card.append(visual, title, description, distance);
    planetGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();

  const filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(query)
  );

  renderPlanets(filteredPlanets);
});

renderPlanets(planets);