// Footer dates
const currentyear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

if (currentyear) currentyear.textContent = new Date().getFullYear();
if (lastModified) lastModified.textContent = document.lastModified;

// Mobile Navigation Toggle
const filterMenuBtn = document.getElementById('filter-menu-btn');
const filterContainer = document.getElementById('filter-container');

if (filterMenuBtn && filterContainer) {
    filterMenuBtn.addEventListener('click', () => {
        filterContainer.classList.toggle('show');
        filterMenuBtn.classList.toggle('open'); 
    });
}

// Tour Data
const hikes = [
    {
        Name: "Agua Volcano",
        Height: "12340 ft",
        Difficulty: "Medium",
        Price: "$40.00",
        Details: "Moderate climb with stunning views.",
        img: "images/agua-hike.jpeg"
    },
    {
        Name: "Atitlan",
        Height: "11600 ft",
        Difficulty: "High",
        Price: "$80.00",
        Details: "Challenging trek to one of Guatemala’s most beautiful volcanoes.",
        img: "images/atitlan-hike.jpeg"
    },
    {
        Name: "Chicabal",
        Height: "9517 ft",
        Difficulty: "Low",
        Price: "$75.00",
        Details: "Leisurely walk to a sacred Mayan volcano.",
        img: "images/chicabal-hike.jpeg"
    },
    {
        Name: "Pacaya",
        Height: "8373 ft",
        Difficulty: "Low",
        Price: "$35.00",
        Details: "Easy trek to an active volcano.",
        img: "images/pacaya-hike.jpg"
    },
    {
        Name: "Santa Maria",
        Height: "12380 ft",
        Difficulty: "High",
        Price: "$80.00",
        Details: "Challenging climb on an active volcano.",
        img: "images/santa-maria-hike.jpeg"
    },
    {
        Name: "Siete Orejas (Seven Ears)",
        Height: "11060 ft",
        Difficulty: "Medium",
        Price: "$80.00",
        Details: "Moderate trek with seven distinct peaks.",
        img: "images/siete-orejas-hike.jpeg"
    },
    {
        Name: "Tacana",
        Height: "13320 ft",
        Difficulty: "High",
        Price: "$100.00",
        Details: "Challenging climb to Guatemala’s highest volcano.",
        img: "images/tacana-hike.jpeg"
    },
    {
        Name: "Tajumulco",
        Height: "13790 ft",
        Difficulty: "Low",
        Price: "$100.00",
        Details: "Easy trek to the highest peak in Central America.",
        img: "images/tajumulco-hike.jpeg"
    },
    {
        Name: "Zunil",
        Height: "11621 ft",
        Difficulty: "Medium",
        Price: "$80.00",
        Details: "Moderate trek with beautiful views.",
        img: "images/zunil-hike.jpg"
    }
];

const hikeCardsContainer = document.getElementById("tour-cards-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const pageTitle = document.getElementById("page-title");

function displayHikes(filteredHikes) {
    hikeCardsContainer.innerHTML = "";

    if (filteredHikes.length === 0) {
        hikeCardsContainer.innerHTML = "<p>No tours found for this difficulty level.</p>";
        return;
    }

    filteredHikes.forEach(hike => {
        const card = document.createElement("section");
        card.classList.add("hike-card");
        card.innerHTML = `
            <img src="${hike.img}" alt="${hike.Name} hike" loading="lazy" width="400" height="250">
            <h3>${hike.Name}</h3>
            <p><strong>Height:</strong> ${hike.Height}</p>
            <p><strong>Difficulty:</strong> ${hike.Difficulty}</p>
            <p><strong>Price:</strong> ${hike.Price}</p>
            <p><strong>Details:</strong> ${hike.Details}</p>
        `;
        hikeCardsContainer.appendChild(card);
    });
}

// Initial display
displayHikes(hikes);

// Filter functionality
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const difficulty = btn.getAttribute("data-difficulty");
        pageTitle.textContent = btn.textContent;

        const filtered = difficulty === "All"
            ? hikes
            : hikes.filter(h => h.Difficulty === difficulty);

        displayHikes(filtered);
    });
});