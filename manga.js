"use strict";

// This class is used for creating manga that will be added to map
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

// All manga should be pushed to this array to be added to map upon initialization
const mangaList = [];

const hoshiNoSamidare = new manga(
  "Lucifer and the Biscuit Hammer",
  "Satoshi Mizukami",
  "28 April 2005 - 30 August 2010",
  "Yuuhi Amamiya, a disillusioned college student, suddenly finds himself chosen as a Beast Knight, tasked to protect the world from a destructive mage wielding a cosmic mallet, the Biscuit Hammer. Though initially uninterested, Yuuhi is swayed into the epic battle when he meets Samidare Asahina, the princess he must serve.",
  "manga-covers/sample_cover.jpg",
  [35.652832, 139.839478],
  "Tokyo, Japan"
);

const goldenKamuy = new manga(
  "Golden Kamuy",
  "Satoru Noda",
  "21 August 2014 - Present",
  "In far northern Japan, 'Invincible' Sugimoto, a war veteran, hunts for a hidden stash of gold in Hokkaido. He partners with an Ainu girl in this survival adventure against other gold seekers.",
  "manga-covers/golden_kamuy_cover.jpg",
  [43.1907, 141.0028],
  "Otaru, Hokkaido, Japan"
);

const flyingWitch = new manga(
  "Flying Witch",
  "Chihiro Ishizuka",
  "5 September 2012 - Present",
  "15-year-old Makoto Kowata moves from Yokohama to Aomori to live with her relatives. The series follows her daily life as she learns to live with her new surroundings and the fact that she's a witch in training.",
  "manga-covers/flying_witch_cover.jpg",
  [40.6036, 140.4643],
  "Hirosaki, Aomori, Japan"
);
const initialD = new manga(
  "Initial D",
  "Shuichi Shigeno",
  "November 6, 1995 - July 29, 2013",
  "Takumi Fujiwara, a high school student with natural talent in drifting, becomes unintentionally involved in the local street racing scene. His journey tests his skills against various racers, transforming him from an unknowing beginner to a renowned street racing legend.",
  "manga-covers/initial_d_cover.jpg",
  [36.4391, 138.9186],
  "Mount Haruna, Gunma, Japan"
);
const crayonShinChan = new manga(
  "Crayon Shin-chan",
  "Yoshito Usui",
  "August 1990 - February 2010",
  "The series follows the misadventures of Shinnosuke Nohara, also known as Shin-chan, a mischievous and boisterous five-year-old, and his parents, baby sister, dog, neighbours, and friends, set in Kasukabe, Saitama Prefecture.",
  "manga-covers/crayon_shin_chan_cover.jpg",
  [35.9831, 139.7498],
  "Kasukabe, Saitama, Japan"
);

const luckyStar = new manga(
  "Lucky Star",
  "Kagami Yoshimizu",
  "December 2003 - Present",
  "The series follows the daily lives of four high school girls and their quirky conversations and behaviors. Among them, Konata Izumi's love for anime and manga frequently shapes their interactions.",
  "manga-covers/lucky_star_cover.jpg",
  [36.0186, 139.7063],
  "Washinomiya Shrine, Kuki, Saitama, Japan"
);

const slamDunk = new manga(
  "Slam Dunk",
  "Takehiko Inoue",
  "October 1990 - June 1996",
  "Hanamichi Sakuragi, a high school delinquent and a beginner in basketball, develops a love for the game and aims for the top as part of the Shohoku High School team. The story follows their quest to become the best in Japan.",
  "manga-covers/slam_dunk_cover.png",
  [35.4474, 139.6425],
  "Kanagawa, Japan"
);

mangaList.push(hoshiNoSamidare);
mangaList.push(goldenKamuy);
mangaList.push(flyingWitch);
mangaList.push(initialD);
mangaList.push(crayonShinChan);
mangaList.push(luckyStar);
mangaList.push(slamDunk);

const orange = new manga(
  "Orange",
  "Ichigo Takano",
  "March 2012 - August 2017",
  "Naho Takamiya, a high school student, receives letters from her future self, asking her to prevent her biggest regrets, which are all connected to the new transfer student, Kakeru Naruse.",
  "manga-covers/orange_cover.jpg",
  [36.238, 137.972],
  "Matsumoto, Nagano, Japan"
);

mangaList.push(orange);

const saki = new manga(
  "Saki",
  "Ritz Kobayashi",
  "February 3, 2006 - Present",
  "Saki Miyanaga, a high school student, is drawn into the world of competitive mahjong by another student. Despite her initial reluctance, she finds herself enjoying and being incredibly skilled at it.",
  "manga-covers/saki_cover.jpg",
  [36.6513, 138.181],
  "Nagano, Japan"
);

mangaList.push(saki);

const chibiMarukoChan = new manga(
  "Chibi Maruko-chan",
  "Momoko Sakura",
  "August 1986 - June 2018",
  "The series depicts the simple, everyday life of Momoko Sakura, a young girl nicknamed Maruko, and her family in suburban Japan in the year 1974.",
  "manga-covers/chibi_maruko_chan_cover.jpg",
  [34.9756, 138.3827],
  "Shizuoka, Japan"
);

mangaList.push(chibiMarukoChan);

const livingInKobe = new manga(
  "Living in Kobe",
  "Machiko Satonaka",
  "September 1996 - March 1999",
  "Living in Kobe is an autobiographical manga that portrays the life and experiences of the author, Machiko Satonaka, and her daily life in the city of Kobe, Japan.",
  "manga-covers/living_in_kobe_cover.jpg",
  [34.6901, 135.1955],
  "Kobe, Hyōgo, Japan"
);

mangaList.push(livingInKobe);

const cookingPapa = new manga(
  "Cooking Papa",
  "Tochi Ueyama",
  "November 1984 - Present",
  "Cooking Papa follows the story of Kazumi Araiwa, a salaryman who excels at cooking, creating delicious dishes and solving people's dietary problems with food.",
  "manga-covers/cooking_papa_cover_fix.jpg",
  [33.5902, 130.4017],
  "Fukuoka, Japan"
);

mangaList.push(cookingPapa);

const barakamon = new manga(
  "Barakamon",
  "Satsuki Yoshino",
  "February 2009 - December 2018",
  "Calligrapher Seishū Handa is sent to Gotō Islands after a professional faux pas, where he navigates rural life and quirky locals, and rediscovers his passion for calligraphy.",
  "manga-covers/barakamon_cover.jpg",
  [32.6962, 128.8419],
  "Gotō Islands, Nagasaki, Japan"
);

mangaList.push(barakamon);

const blankCanvas = new manga(
  "Blank Canvas: My So-Called Artist's Journey",
  "Akiko Higashimura",
  "March 2012 - February 2015",
  "This autobiographical tale follows Akiko Higashimura from her student days, through art school, and into her career as a successful mangaka, all while struggling with self-doubt and seeking inspiration.",
  "manga-covers/blank_canvas_cover.jpg",
  [31.9077, 131.4202],
  "Miyazaki, Japan"
);

mangaList.push(blankCanvas);

const sunKenRock = new manga(
  "Sun-Ken Rock",
  "Boichi",
  "April 2006 - February 2016",
  "Sun-Ken Rock follows Ken, a young Japanese man who becomes the leader of a gang in Seoul, navigating the trials and tribulations of underworld life.",
  "manga-covers/sun_ken_rock_cover.jpg",
  [37.5665, 126.978],
  "Seoul, South Korea"
);

mangaList.push(sunKenRock);

const sangokushi = new manga(
  "Sangokushi",
  "Mitsuteru Yokoyama",
  "1971 - 1986",
  "Sangokushi is a dramatic retelling of the historical text 'Records of the Three Kingdoms', depicting the intricate political and military struggles of the late Eastern Han dynasty.",
  "manga-covers/sangokushi_cover.jpg",
  [34.6634, 112.4345],
  "Luoyang, China"
);

mangaList.push(sangokushi);

const steelBallRun = new manga(
  "Steel Ball Run",
  "Hirohiko Araki",
  "January 19, 2004 - April 19, 2011",
  "Steel Ball Run is set in the United States during the late 19th century. The story revolves around a transcontinental horse race called the Steel Ball Run, which starts in San Diego, California, and spans various locations as racers compete for victory.",
  "manga-covers/steel_ball_run_cover.jpg",
  [32.7157, -117.1611],
  "San Diego, California, USA"
);

mangaList.push(steelBallRun);

const bananaFish = new manga(
  "BANANA FISH",
  "Akimi Yoshida",
  "May 1985 - April 1994",
  "BANANA FISH is a thrilling manga set in the streets of New York City. The story follows Ash Lynx, a young gang leader, as he unravels the dark secrets surrounding a mysterious drug called 'banana fish' and seeks to uncover the truth behind his brother's tragic past.",
  "manga-covers/banana_fish_cover.jpg",
  [40.7128, -74.006],
  "New York City, USA"
);

mangaList.push(bananaFish);

const buddha = new manga(
  "Buddha",
  "Osamu Tezuka",
  "1972 - 1983",
  "Buddha is an epic historical manga that retells the life and teachings of Gautama Buddha. The story follows the journey of Siddhartha, from his birth as a prince to his enlightenment and the foundation of Buddhism.",
  "manga-covers/buddha_cover.jpg",
  [27.6745, 83.449],
  "Lumbini, Nepal"
);

mangaList.push(buddha);

const messageToAdolf = new manga(
  "Message to Adolf",
  "Osamu Tezuka",
  "1983 - 1985",
  "Message to Adolf is a gripping historical manga set during World War II. The story revolves around three men named Adolf, their intertwined fates, and the secrets that connect them in the midst of a world on the brink of chaos.",
  "manga-covers/message_to_adolf_cover.jpg",
  [52.52, 13.405],
  "Berlin, Germany"
);

mangaList.push(messageToAdolf);

const emma = new manga(
  "Emma",
  "Kaoru Mori",
  "August 2002 - October 2006",
  "Emma is a captivating Victorian romance manga set in 19th-century London. The story revolves around the love between Emma, a maid with a mysterious past, and William, a young aristocrat, as they navigate the complexities of their different social statuses and strive for their love to prevail.",
  "manga-covers/emma_cover.jpg",
  [51.5074, -0.1278],
  "London, United Kingdom"
);

mangaList.push(emma);

const masterKeaton = new manga(
  "Master Keaton",
  "Naoki Urasawa",
  "December 1988 - June 1994",
  "Master Keaton is an enthralling mystery and adventure manga following the life of Taichi Hiraga-Keaton, an archaeology professor and former SAS soldier. Keaton becomes an insurance investigator, solving complex cases while exploring his own past and the world's diverse cultures.",
  "manga-covers/master_keaton_cover.jpg",
  [51.514, -0.1878],
  "London, United Kingdom"
);

mangaList.push(masterKeaton);

const thermaeRomae = new manga(
  "Thermae Romae",
  "Mari Yamazaki",
  "2008 - 2013",
  "Thermae Romae is a unique manga that combines historical fiction, time travel, and comedy. The story follows Lucius, a Roman bath designer who travels through time and encounters modern-day Japan, leading to cultural exchanges and hilarious situations.",
  "manga-covers/thermae_romae_cover.jpg",
  [41.9028, 12.4964],
  "Rome, Italy"
);

mangaList.push(thermaeRomae);
