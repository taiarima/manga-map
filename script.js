"use strict";

let image = "sample_cover.jpg";
let title = "Title: Manga Title";
let author = "Author: Author Name";
let year = "Year: 2001-2011";
let locationName = "Location: Tokyo, Japan";
let summary = "Synopsis: This is what happened";

navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    const map = L.map("map").setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup(
        `<div class="popup"><img class="manga-cover" src="${image}"/><span>${title}</span><span>${author}</span><span>${year}</span><span>${locationName}</span><span>${summary}</span></div>`,
        { minWidth: 200 }
      )
      .openPopup();
  },
  function () {
    alert("User's geolocation could not be retrieved.");
  }
);
