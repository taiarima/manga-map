"use strict";

class App {
  #map;

  constructor() {
    this.startMap();
    this.loadManga();
  }

  startMap() {
    const tokyoLat = 35.652832;
    const tokyoLong = 139.839478;
    const tokyoCoords = [tokyoLat, tokyoLong];
    this.#map = L.map("map").setView(tokyoCoords, 8);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
  }

  loadManga() {
    mangaList.forEach(
      ({ coords, image, title, author, year, locationName, summary }) => {
        L.marker(coords)
          .addTo(this.#map)
          .bindPopup(
            `<div class="popup"><img class="manga-cover" src="${image}"/><span>Title: ${title}</span><span>Author: ${author}</span><span>${year}</span><span>${locationName}</span><span>${summary}</span></div>`,
            { minWidth: 200 }
          );
      }
    );
  }
}

const app = new App();
