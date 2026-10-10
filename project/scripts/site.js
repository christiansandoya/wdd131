const fullDate = new Date();
const currentYear = fullDate.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const menubutton = document.querySelector("#menu");

menubutton.addEventListener("click", (event) => {
    if (event.target.tagName !== "A") {
        menubutton.classList.toggle("show");
    }
});

if (document.body.classList.contains("battles-page")) {
    const main = document.querySelector("main");
    const pageTitle = document.querySelector("#pageTitle");

    const battles = [
        {
            id: "christophsis",
            name: "Battle of Christophsis",
            location: "Christophsis",
            description: "One of the early battles of the Clone Wars, where Republic forces fought Separatist armies to defend the strategically important planet Christophsis.",
            imageUrl: "images/christophsis.webp",
            alt: "Republic forces fighting Separatist armies on Christophsis"
        },
        {
            id: "ryloth",
            name: "Battle of Ryloth",
            location: "Ryloth",
            description: "Republic forces launched a campaign to liberate Ryloth from Separatist occupation, with clone troopers and Jedi working together to free the Twi'lek population.",
            imageUrl: "images/ryloth.webp",
            alt: "Clone troopers fighting during the campaign on Ryloth"
        },
        {
            id: "umbara",
            name: "Battle of Umbara",
            location: "Umbara",
            description: "Clone troopers fought through the dark and dangerous terrain of Umbara in a difficult campaign that tested their loyalty, discipline, and leadership.",
            imageUrl: "images/umbara.webp",
            alt: "Clone troopers advancing through the dark terrain of Umbara"
        },
        {
            id: "geonosis",
            name: "Battle of Geonosis",
            location: "Geonosis",
            description: "The First Battle of Geonosis marked the beginning of the Clone Wars, as Jedi and the newly deployed clone army fought Separatist forces.",
            imageUrl: "images/geonosis.webp",
            alt: "Republic clone army battling Separatist forces on Geonosis"
        },
        {
            id: "mon-cala",
            name: "Battle of Mon Cala",
            location: "Mon Cala",
            description: "Republic forces helped defend Mon Cala during a conflict involving the planet's inhabitants and a Separatist-backed attempt to seize control.",
            imageUrl: "images/mon-cala.webp",
            alt: "Republic forces fighting underwater on Mon Cala"
        },
        {
            id: "mandalore",
            name: "Siege of Mandalore",
            location: "Mandalore",
            description: "Near the end of the Clone Wars, Ahsoka Tano and Captain Rex led Republic forces against Maul and his influence over Mandalore.",
            imageUrl: "images/mandalore.webp",
            alt: "Ahsoka Tano and Republic forces during the Siege of Mandalore"
        }
    ];

    const favoritesFilter = document.querySelector("#favoritesFilter");

    let favoriteBattles = JSON.parse(
        localStorage.getItem("favoriteBattles")
    ) || [];

    let showingFavorites = false;

    function displayBattles(battlesToDisplay, title) {
        if (!main || !pageTitle) {
            return;
        }

        main.innerHTML = "";
        pageTitle.textContent = title;

        battlesToDisplay.forEach((battle) => {
            const card = document.createElement("section");

            card.innerHTML = `
                <h2>${battle.name}</h2>
                <p><strong>Location:</strong> ${battle.location}</p>
                <p>${battle.description}</p>
                <img
                    src="${battle.imageUrl}"
                    alt="${battle.alt}"
                    loading="lazy"
                    width="400"
                    height="250">
                <button class="favorite-button" data-id="${battle.id}" type="button">
                    ${favoriteBattles.includes(battle.id) ? "Remove from Favorites" : "Add to Favorites"}
                </button>

            `;

            main.appendChild(card);
        });
    }


    main.addEventListener("click", (event) => {
        if (event.target.classList.contains("favorite-button")) {
            const battleId = event.target.dataset.id;

            if (favoriteBattles.includes(battleId)) {
                favoriteBattles = favoriteBattles.filter(
                    (id) => id !== battleId
                );
            } else {
                favoriteBattles.push(battleId);
            }

            localStorage.setItem(
                "favoriteBattles",
                JSON.stringify(favoriteBattles)
            );

            displayBattles(
                showingFavorites
                    ? battles.filter((battle) => favoriteBattles.includes(battle.id))
                    : battles,
                showingFavorites ? "Favorite Battles" : "Major Battles of the Clone Wars"
            );
        }
    });

    
    favoritesFilter.addEventListener("click", () => {
        showingFavorites = !showingFavorites;

        if (showingFavorites) {
            const filteredBattles = battles.filter((battle) =>
                favoriteBattles.includes(battle.id)
            );

            displayBattles(filteredBattles, "Favorite Battles");
            favoritesFilter.textContent = "Show All Battles";
        } else {
            displayBattles(battles, "Major Battles of the Clone Wars");
            favoritesFilter.textContent = "Show Favorites";
        }
    });

    displayBattles(battles, "Major Battles of the Clone Wars");
}

const favoriteForm = document.querySelector("#favoriteForm");

if (favoriteForm) {
    favoriteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const visitorName = document.querySelector("#visitorName").value.trim();
        const favoriteTopic = document.querySelector("#favoriteTopic").value;
        const favoriteReason = document.querySelector("#favoriteReason").value.trim();

        const confirmation = document.createElement("p");
        confirmation.setAttribute("role", "status");

        const displayName = visitorName || "Star Wars fan";

        confirmation.textContent =
            `Thank you, ${displayName}! Your answer have been recorded`;

        favoriteForm.replaceWith(confirmation);
    });
}