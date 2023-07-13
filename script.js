"use strict";

// Selecting elements
const favoritesList = document.querySelector(".favorites-list");
const favoritesContainer = document.querySelector(".favorites-container");

const resultsList = document.querySelector(".results-list");
const resultsContainer = document.querySelector(".results-container");

const favoritesTab = document.querySelector(".favorites-tab");
const searchTab = document.querySelector(".search-tab");

const favoritesPane = document.querySelector(".favorites-pane");
const resultsPane = document.querySelector(".results-pane");

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanes = document.querySelectorAll(".tab-pane");

const searchInput = document.querySelector(".search-input");
const searchTypeRadios = document.querySelectorAll(".radio-search input");
const searchButton = document.querySelector(".search-button");

// App class that handles map and all related methods
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
    resultsList.addEventListener("click", this._moveMapToManga.bind(this));
    this.#map.on("popupopen", this._popUpListener.bind(this));
    this._restoreFavoritesFromLocalStorage();
    setSearchPromptText();
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
    if (this.#favorites.length == 0) {
      while (favoritesList.firstChild) {
        favoritesList.removeChild(favoritesList.firstChild);
      }
    }

    // Switch to favorites tab if not currently active
    if (!favoritesTab.classList.contains("active")) {
      favoritesTab.classList.add("active");
      searchTab.classList.remove("active");
      favoritesPane.classList.add("active");
      resultsPane.classList.remove("active");
    }

    this.#favorites.push(this.#currentPopId);

    favoritesContainer.classList.remove("hidden");

    // Create a new div for the item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("favorites-item");
    itemDiv.classList.add("active");

    // Add an id for use with class selection later
    itemDiv.classList.add(this.#currentPopId);

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
    this._saveFavoritesToLocalStorage();
  }

  _removeFromFavorites() {
    const index = this.#favorites.indexOf(this.#currentPopId);
    if (index != -1) {
      this.#favorites.splice(index, 1);
    }

    const itemToRemove = favoritesList.querySelector(`.${this.#currentPopId}`);
    itemToRemove.remove();

    if (this.#favorites.length == 0) {
      setFavoritesEmptyText();
    }

    this._saveFavoritesToLocalStorage();
  }

  _moveMapToManga(e) {
    const mangaToFind = e.target.closest(".favorites-item");
    if (!mangaToFind || mangaToFind.classList.contains("active")) return;

    const favoriteItems = document.querySelectorAll(".favorites-item");
    favoriteItems.forEach((item) => item.classList.remove("active"));

    mangaToFind.classList.add("active");

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
    if (mangaToFind.parentElement.classList.contains("favorites-list")) {
      const star = document.querySelector(".star");
      star.setAttribute("data-checked", "true");
      star.textContent = "⭐";
      star.setAttribute("data-title", "Remove from favorites");
    }
  }

  _findID(element) {
    for (let i = 0; i < element.classList.length; i++) {
      if (element.classList[i].startsWith("id-")) {
        return element.classList[i];
      }
    }
    return null;
  }

  _popUpListener(e) {
    this._highlightFavorite(e);
    this._setStar(e);
  }

  _highlightFavorite(e) {
    const favoriteItems = document.querySelectorAll(".favorites-item");

    // Timer necessary because otherwise active class gets immediately removed by click
    setTimeout(() => {
      favoriteItems.forEach((item) => {
        if (
          item.querySelector("span").outerText ==
          e.popup._wrapper.querySelector("span").outerText
        ) {
          item.classList.add("active");
        }
      });
    }, 10);
  }

  _setStar(e) {
    this.#currentPopId =
      "id-" + e.popup._latlng.lat.toString().replace(/\./g, "");

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

  _saveFavoritesToLocalStorage() {
    localStorage.setItem(
      "favoritesList",
      JSON.stringify(favoritesList.innerHTML)
      // JSON.stringify("")
    );
  }

  _restoreFavoritesFromLocalStorage() {
    const restoredFavorites = JSON.parse(localStorage.getItem("favoritesList"));
    if (!restoredFavorites) {
      setFavoritesEmptyText();
      return;
    }
    favoritesList.innerHTML += restoredFavorites;
    const favoriteItems = document.querySelectorAll(".favorites-item");

    favoriteItems.forEach((item) => {
      const id = this._findID(item);
      this.#favorites.push(id);
      item.classList.remove("active");
    });
  }
}

// Instantiate the app
const app = new App();

///////////////////////////////////////
// Functions for Search Functionality//
///////////////////////////////////////
function performSearch() {
  // Switch to search tab if not currently active
  if (favoritesTab.classList.contains("active")) {
    favoritesTab.classList.remove("active");
    searchTab.classList.add("active");
    favoritesPane.classList.remove("active");
    resultsPane.classList.add("active");
  }

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
  addSearchResults(searchResults);
}

function addSearchResults(resultsArray) {
  while (resultsList.firstChild) {
    resultsList.removeChild(resultsList.firstChild);
  }

  if (resultsArray.length == 0) {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.classList.add("no-results-msg");
    noResultsMessage.textContent = "No results found.";
    resultsList.appendChild(noResultsMessage);
    return;
  }

  resultsArray.forEach((manga) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("favorites-item");

    const image = document.createElement("img");
    image.src = manga.image;
    image.classList.add("manga-cover-list");

    const title = document.createElement("span");
    title.textContent = "Title: " + manga.title;

    const author = document.createElement("span");
    author.textContent = "Author: " + manga.author;

    const location = document.createElement("span");
    location.textContent = "Setting: " + manga.locationName;

    // Append everything to the item div
    itemDiv.appendChild(image);
    itemDiv.appendChild(title);
    itemDiv.appendChild(author);
    itemDiv.appendChild(location);

    resultsList.appendChild(itemDiv);
  });
}

function setSearchPromptText() {
  const noResultsMessage = document.createElement("div");
  noResultsMessage.classList.add("no-results-msg");
  noResultsMessage.textContent =
    "Use the search bar above to search for a manga.";
  resultsList.appendChild(noResultsMessage);
}

function setFavoritesEmptyText() {
  const noFavoritesMsg = document.createElement("div");
  noFavoritesMsg.classList.add("no-results-msg");
  noFavoritesMsg.textContent =
    "Explore manga and create a favorites list by clicking the white button in the top left of a manga window.";
  favoritesList.appendChild(noFavoritesMsg);
}

// Event listeners for search and favorites features
searchButton.addEventListener("click", performSearch);

searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

searchTypeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    // If search input field is not empty, perform search
    if (searchInput.value.trim() !== "") {
      performSearch();
    }
  });
});

// Tab buttons to switch between favorites and search results
tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    const targetId = tabButton.getAttribute("data-target");

    // Remove "active" class from all tab buttons and tab panes
    tabButtons.forEach((button) => button.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    // Add "active" class to the clicked tab button and corresponding tab pane
    tabButton.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});

// Listen to click events on the document to remove the "active" class from selected manga
document.addEventListener("click", (e) => {
  if (!e.target.closest(".favorites-item") && !e.target.closest(".star")) {
    document.querySelectorAll(".favorites-item").forEach((item) => {
      item.classList.remove("active");
    });
  }
});
