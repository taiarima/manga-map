"use strict";

const favoritesList = document.querySelector(".favorites-list");
const favoritesContainer = document.querySelector(".favorites-container");

class App {
  #map;
  #currentPopId;
  #favorites = [];
  #markerMap = new Map();

  constructor() {
    this._startMap();
    this._loadManga();
    this._addFavoriteListener();
    this._addToFavorites = this._addToFavorites.bind(this);
    favoritesList.addEventListener("click", this._moveMapToManga.bind(this));
    this.#map.on("popupopen", this._addPopupListener.bind(this));
  }

  _startMap() {
    const tokyoLat = 35.652832;
    const tokyoLong = 139.839478;
    const tokyoCoords = [tokyoLat, tokyoLong];
    this.#map = L.map("map", { worldCopyJump: true }).setView(tokyoCoords, 4);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
  }

  _loadManga() {
    mangaList.forEach(
      ({ coords, image, title, author, year, locationName, summary }) => {
        const marker = L.marker(coords)
          .addTo(this.#map)
          .bindPopup(
            `<div class="popup">
              <div class="star" data-title="Add to favorites">⚪</div>
              <img class="manga-cover" src="${image}"/>
              <span>Title: ${title}</span>
              <span>Author: ${author}</span>
              <span>${year}</span>
              <span>Setting: ${locationName}</span>
              <span>${summary}</span>
            </div>`,
            { minWidth: 200 }
          );
        const { lat, lng } = marker.getLatLng();
        this.#markerMap.set(`${lat},${lng}`, marker);
      }
    );
  }

  _addFavoriteListener() {
    document.body.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("star")) {
        // Check if the star is already checked
        if (e.target.getAttribute("data-checked") === "true") {
          // If it's already checked, uncheck it and change the title and symbol
          e.target.setAttribute("data-checked", "false");
          e.target.textContent = "⚪";
          e.target.setAttribute("data-title", "Add to favorites");

          // Also remove it from the favorites array
          this._removeFromFavorites();
        } else {
          // If it's not checked, check it and change the title and symbol
          e.target.setAttribute("data-checked", "true");
          e.target.textContent = "⭐";
          e.target.setAttribute("data-title", "Remove from favorites");

          const popup = e.target.parentElement;
          this._addToFavorites(popup);
        }
      }
    });

    document.body.addEventListener("mouseover", function (e) {
      if (e.target && e.target.classList.contains("star")) {
        e.target.setAttribute("title", e.target.getAttribute("data-title"));
      }
    });
  }

  _addToFavorites(popup) {
    this.#favorites.push(this.#currentPopId);

    favoritesContainer.classList.remove("hidden");

    // Create a new div for the item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("favorites-item");

    // Add an id for use with class selection later
    itemDiv.classList.add(`id-${this.#currentPopId}`);

    // Extract and clone the necessary information from the popup
    const img = popup.querySelector(".manga-cover").cloneNode(true);
    img.classList.add("manga-cover-list");

    const titleSpan = popup.querySelector("span:nth-child(3)").cloneNode(true);
    const authorSpan = popup.querySelector("span:nth-child(4)").cloneNode(true);
    const locationSpan = popup
      .querySelector("span:nth-child(6)")
      .cloneNode(true);

    // Append everything to the item div
    itemDiv.appendChild(img);
    itemDiv.appendChild(titleSpan);
    itemDiv.appendChild(authorSpan);
    itemDiv.appendChild(locationSpan);

    favoritesList.appendChild(itemDiv);
    favoritesList.scrollTop = favoritesList.scrollHeight;
  }

  _removeFromFavorites() {
    const index = this.#favorites.indexOf(this.#currentPopId);
    if (index != -1) {
      this.#favorites.splice(index, 1);
    }

    const itemToRemove = favoritesList.querySelector(
      `.id-${this.#currentPopId}`
    );
    itemToRemove.remove();

    if (this.#favorites.length == 0) {
      favoritesContainer.classList.add("hidden");
    }
  }

  _moveMapToManga(e) {
    const mangaToFind = e.target.closest(".favorites-item");
    if (!mangaToFind) return;

    const mangaTitle = mangaToFind
      .querySelector("span")
      .outerText.split("Title: ")[1];

    const manga = mangaList.find((ele) => ele.title === mangaTitle);

    this.#map.setView(manga.coords, 6, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // Open the popup at the location
    this.#markerMap.get(manga.coords.join(",")).openPopup();
  }

  _findID(element) {
    for (let i = 0; i < element.classList.length; i++) {
      if (element.classList[i].startsWith("id-")) {
        return element.classList[i];
      }
    }
    return null;
  }

  _addPopupListener(e) {
    this.#currentPopId = e.popup._leaflet_id;
    const star = e.popup.getElement().querySelector(".star");
    const isFavorite = this.#favorites.includes(this.#currentPopId);
    if (isFavorite) {
      star.setAttribute("data-checked", "true");
      star.textContent = "⭐";
      star.setAttribute("data-title", "Remove from favorites");
    } else {
      star.setAttribute("data-checked", "false");
      star.textContent = "⚪";
      star.setAttribute("data-title", "Add to favorites");
    }
  }

  addSearchResults(resultsArray) {
    favoritesContainer.classList.remove("hidden");

    if (resultsArray.length == 0) {
      const noResultsMessage = document.createElement("div");
      noResultsMessage.classList.add("no-results-msg");
      noResultsMessage.textContent = "No results found.";
      favoritesList.appendChild(noResultsMessage);
      return;
    }

    resultsArray.forEach((manga) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("favorites-item");

      const image = document.createElement("img");
      image.src = manga.image;
      image.classList.add("manga-cover-list");

      const title = document.createElement("span");
      title.textContent = manga.title;

      const author = document.createElement("span");
      author.textContent = manga.author;

      const location = document.createElement("span");
      location.textContent = manga.locationName;

      // Append everything to the item div
      itemDiv.appendChild(image);
      itemDiv.appendChild(title);
      itemDiv.appendChild(author);
      itemDiv.appendChild(location);

      favoritesList.appendChild(itemDiv);
    });

    favoritesList.scrollTop = favoritesList.scrollHeight;
  }
}

const app = new App();

// Search Functionality

// Get the necessary elements
const searchInput = document.querySelector(".search-input");
const searchTypeRadios = document.querySelectorAll(".radio-search input");
const searchButton = document.querySelector(".search-button");

// Define an event listener for the search button
searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

// Function to perform the search
function performSearch() {
  // Get the search term and search type
  const searchTerm = searchInput.value.toLowerCase().trim();
  const searchType = document.querySelector(
    'input[name="search-type"]:checked'
  ).value;

  // Filter the mangaList based on the search term and search type
  const searchResults = mangaList.filter((manga) => {
    if (searchType === "all") {
      // Check if any of the manga properties contain the search term
      return Object.values(manga).some((value) =>
        value.toString().toLowerCase().includes(searchTerm)
      );
    } else {
      // Check if the specific manga property matches the search term
      return manga[searchType].toString().toLowerCase().includes(searchTerm);
    }
  });

  // Display the search results (you can modify this part based on your needs)
  console.log(searchResults);
  app.addSearchResults(searchResults);
}
