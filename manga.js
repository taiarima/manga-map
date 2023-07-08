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
  "Manga about stuff",
  "sample_cover.jpg",
  "28,28",
  "Tokyo, Japan"
);

const mangaList = [];

mangaList.push(hoshiNoSamidare);
