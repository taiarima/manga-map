"use strict";

// This class is used for adding a new manga to the map,
// just to ensure consistency
class manga {
  constructor(title, author, year, summary, image, coords, locationName) {
    this.image = image;

    this.title = title;
    this.author = author;
    this.year = year;
    this.summary = summary;

    this.coords = coords;
    this.locationName = locationName;
  }
}

const hoshiNoSamidare = new manga(
  "Lucifer and the Biscuit Hammer",
  "Satoshi Mizukami",
  "28 April 2005 - 30 August 2010",
  "Yuuhi Amamiya, a disillusioned college student, suddenly finds himself chosen as a Beast Knight, tasked to protect the world from a destructive mage wielding a cosmic mallet, the Biscuit Hammer. Though initially uninterested, Yuuhi is swayed into the epic battle when he meets Samidare Asahina, the princess he must serve.",
  "sample_cover.jpg",
  [35.652832, 139.839478],
  "Tokyo, Japan"
);

const mangaList = [];

mangaList.push(hoshiNoSamidare);
