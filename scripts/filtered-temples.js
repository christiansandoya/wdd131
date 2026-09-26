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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    templeName: "Frankfurt Germany",
    location: "Frankfurt, Germany",
    dedicated: "1987, August, 28",
    area: 32895,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-1-2278179.jpg"
  }
];

const main = document.querySelector("main");
const pageTitle = document.querySelector("#pageTitle")

function displayTemples(temples, title) {
    main.innerHTML = "";
    pageTitle.textContent = title;

    temples.forEach((temple) => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>`;

        card.innerHTML += `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250"> `;
        main.appendChild(card);
    });
}

displayTemples(temples, "Home");

function filterOld() {
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated);
        return year < 1900;
    });

    displayTemples(filteredTemples, "Old Temples")
}

function filterNew() {
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated);
        return year > 2000;
    });

    displayTemples(filteredTemples, "New Temples")
}

function filterLarge () {
    const filteredTemples = temples.filter(temple => {
        return temple.area > 90000;
    });

   displayTemples(filteredTemples, "Large Temples") 
}

function filterSmall () {
    const filteredTemples = temples.filter(temple => {
        return temple.area < 10000;
    });

   displayTemples(filteredTemples, "Small Temples") 
}

const navLinks = document.querySelectorAll("#menu a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        if (link.textContent === "Home") {
            displayTemples(temples, "Home")
        }
        else if (link.textContent === "Old") {

            filterOld();
        }
        else if (link.textContent === "New") {

            filterNew();
        }
        else if (link.textContent === "Large") {

            filterLarge();
        }
        else if (link.textContent === "Small") {

            filterSmall();
        }
    })
})