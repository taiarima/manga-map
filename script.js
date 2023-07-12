"use strict";

class App {
  #map;

  constructor() {
    this._startMap();
    this._loadManga();
    this._addFavoriteListener();
    this._addToFavorites = this._addToFavorites.bind(this);
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
        L.marker(coords)
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
    const favoritesContainer = document.querySelector(".favorites-container");
    favoritesContainer.classList.remove("hidden");
    // Create a new div for the item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("favorites-item");

    // Extract the necessary information from the popup
    const imageSrc = popup.querySelector(".manga-cover").src;
    const title = popup.querySelector("span:nth-child(3)").textContent;
    const author = popup.querySelector("span:nth-child(4)").textContent;
    const location = popup.querySelector("span:nth-child(6)").textContent;

    // Extract the image
    const img = document.createElement("img");
    img.src = imageSrc;
    img.classList.add("manga-cover-list");

    // Extract the text elements
    const titleSpan = document.createElement("span");
    titleSpan.textContent = title;

    const authorSpan = document.createElement("span");
    authorSpan.textContent = author;

    const locationSpan = document.createElement("span");
    locationSpan.textContent = location;

    // Append everything to the item div
    itemDiv.appendChild(img);
    itemDiv.appendChild(titleSpan);
    itemDiv.appendChild(authorSpan);
    itemDiv.appendChild(locationSpan);

    const favoritesList = document.querySelector(".favorites-list");
    favoritesList.appendChild(itemDiv);
    favoritesList.scrollTop = favoritesList.scrollHeight;
  }
}

const app = new App();
