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

const silverSpoon = new manga(
  "Silver Spoon",
  "Hiromu Arakawa",
  "2011 - 2019",
  "Yugo Hachiken, a diligent city boy, enroll in an agricultural school in rural Hokkaido as an escape from the academic pressures of his previous life. Over time, Yugo learns life lessons about farming, food production, animal care, and the realities of agricultural life, forming strong bonds with his classmates and coming to understand and appreciate the relationship between life and food",
  "manga-covers/silver_spoon_cover.jpg",
  [43.0032, 143.1],
  "Obihiro, Japan"
);

mangaList.push(silverSpoon);

const innocent = new manga(
  "Innocent",
  "Shin'ichi Sakamoto",
  "2013 - 2015",
  "Set during the French Revolution, this historical drama follows the story of Charles-Henri Sanson, the Royal Executioner of France, and his role in the execution of criminals, dissidents, and most notably, the royal family itself. This compelling series presents the revolution's iconic events and Sanson's personal journey through Sakamoto's stunning and intense visual style.",
  "manga-covers/innocent_cover.jpg",
  [48.8566, 2.3522],
  "Paris, France"
);

mangaList.push(innocent);

const roseOfVersailles = new manga(
  "The Rose of Versailles",
  "Riyoko Ikeda",
  "1972 - 1973",
  "Set in the years leading up to the French Revolution, this historical drama follows the life of Lady Oscar, a woman raised as a man to become her father's successor as leader of the Palace Guards. A classic of shoujo manga, its richly detailed depictions of France and the court of Versailles have captivated readers for decades.",
  "manga-covers/rose_of_versailles_cover.jpg",
  [48.804865, 2.123353],
  "Versailles, France"
);

mangaList.push(roseOfVersailles);

const monkFalco = new manga(
  "Monk Falco",
  "Yasuko Aoike",
  "1991 - Present",
  "The story follows the protagonist, Monk Falco, a German-Spanish monk, also known as 'Bernardo', who used to be a knight known as the 'Hawk of Navarra'. Despite his desire to serve faithfully as a monk, his past as a knight and his distinctive appearance often lead him into various events that require him to use his skills from his secular life.",
  "manga-covers/monk_falco_cover.jpg",
  [42.8125, -1.6458], // Pamplona, Navarre, Spain
  "Navarre, Spain"
);

mangaList.push(monkFalco);

const kimbaLion = new manga(
  "Kimba the White Lion",
  "Osamu Tezuka",
  "1950 - 1954",
  "This classic manga tells the story of Kimba, a young white lion who is destined to become the Emperor of the Jungle, after his father, the previous Emperor, was killed by a human hunter. Throughout the series, Kimba strives to create a society where animals can live in peace alongside humans, facing various threats and challenges along the way.",
  "manga-covers/kimba_cover.jpg",
  [-2.3333, 34.8333],
  "Serengeti, Tanzania"
);

mangaList.push(kimbaLion);

const kidsOnTheSlope = new manga(
  "Kids on the Slope",
  "Yuki Kodama",
  "2007 - 2012",
  "In the late 1960s, classical pianist Kaoru Nishimi moves to Kyushu and befriends the delinquent drummer, Sentaro Kawabuchi. Through their shared love for jazz, they navigate the ups and downs of high school life, family, and first loves.",
  "manga-covers/kids_on_slope_cover.jpg",
  [33.1799, 129.7159],
  "Sasebo, Japan"
);

mangaList.push(kidsOnTheSlope);

const circusDaughterOlga = new manga(
  "Circus Daughter Olga",
  "Runrun Yamamoto",
  "2015 - 2019",
  "Set in early 20th-century Russia, the story follows Olga, a young girl sold to the Tomsky Circus, who falls in love with Yuri, the son of a wealthy man. To make their forbidden love possible, Olga decides to become a star in the circus.",
  "manga-covers/circus_olga_cover.jpg",
  [55.7558, 37.6176], // Moscow, Russia
  "Moscow, Russia"
);

mangaList.push(circusDaughterOlga);

const naniwaKinyuden = new manga(
  "Naniwa Kinyū-den Minami no Teiō",
  "Yūji Aoki",
  "1990 - Present",
  "This manga focuses on Ginji Kusanagi, also known as 'The Emperor of Minami', a self-made man who lends money and collects debts in the Minami (southern) area of Osaka. The story portrays Ginji's life in the complex world of Osaka's lending business, dealing with other financiers, gangsters, and the common people in his unique way.",
  "manga-covers/naniwa_kinyuden_cover.jpg",
  [34.65, 135.5], // Osaka, Japan
  "Osaka, Japan"
);

mangaList.push(naniwaKinyuden);

const gate7 = new manga(
  "GATE 7",
  "CLAMP",
  "2011 - Present",
  "The manga series follows Chikahito Takamoto, a high school student who ends up in an alternate dimension in Kyoto. There, he encounters Hana, a child with mysterious powers, and her warriors. Together, they fight dark forces in a mystified version of Kyoto filled with supernatural creatures.",
  "manga-covers/gate_7_cover.jpg",
  [35.0116, 135.768], // Kyoto, Japan
  "Kyoto, Japan"
);

mangaList.push(gate7);

const barefootGen = new manga(
  "Barefoot Gen",
  "Keiji Nakazawa",
  "1973 - 1985",
  "Barefoot Gen is a story about the life of Gen, a young boy in Hiroshima, based on the author's own experiences as a Hiroshima survivor. The manga covers the time before, during, and after the atomic bomb, depicting the horrors of the event and its aftermath, while also promoting a message of peace.",
  "manga-covers/barefoot_gen_cover.jpg",
  [34.3927, 132.4596], // Hiroshima, Japan
  "Hiroshima, Japan"
);

mangaList.push(barefootGen);

const haikyu = new manga(
  "Haikyu!!",
  "Haruichi Furudate",
  "2012 - 2020",
  "Haikyu!! is a sports-themed manga about Shōyō Hinata, a boy determined to become a great volleyball player despite his small stature. The story follows his and his team's growth and development as they strive to become the best in Japan, competing in various matches and tournaments.",
  "manga-covers/haikyuu_cover.jpg",
  [38.2682, 140.8694], // Sendai, Japan
  "Sendai, Japan"
);

mangaList.push(haikyu);

const vinlandSaga = new manga(
  "Vinland Saga",
  "Makoto Yukimura",
  "2005 - ongoing",
  "Vinland Saga is a historical manga set in 11th-century England during the age of the Vikings. It tells the story of Thorfinn, a young Viking warrior who seeks to avenge his father's death by a mercenary leader and his journey that leads him to the far-off land of Vinland.",
  "manga-covers/vinland_saga_cover.jpg",
  [64.9631, -19.0208], // Approximate coordinates for Vinland, speculated to be in present-day Iceland
  "Iceland"
);

mangaList.push(vinlandSaga);

const littleLotus = new manga(
  "Little Lotus",
  "Kio Nishihara",
  "2018 - ongoing",
  "On the verge of graduating from university, Shunsuke Sakurai finds himself in Ho Chi Minh City, Vietnam due to an unexpected series of events. There, he meets a young girl named Sen, who is his cousin. Shunsuke thinks about what he can do to help Sen, who has become orphaned, and comes to a conclusion. This is the beginning of their delicious relationship, highlighted by the colorful and gentle Vietnamese cuisine.",
  "manga-covers/little_lotus_cover.jpg",
  [10.762622, 106.660172], // Ho Chi Minh City, Vietnam
  "Ho Chi Minh City, Vietnam"
);

mangaList.push(littleLotus);

const kuboIbuki = new manga(
  "Kūbo Ibuki (Aircraft Carrier Ibuki)",
  "Kawaguchi Kaiji and Sato Koichi",
  "2014 - present",
  "Set in the near future of 20XX, Kūbo Ibuki focuses on a political crisis around the Senkaku Islands. A suspected operative posing as a castaway lands on Minami Kojima, one of the islands, claiming it as Chinese territory and triggering the 'Senkaku Islands Landing Incident'. As tensions escalate with clashes between the Japan Coast Guard and Chinese vessels, and threatening actions towards Japan's Self-Defense Forces, the Japanese government decides to expedite the 'Pegasus Plan', which involves the commissioning of a new type of escort ship and the formation of a new escort fleet, despite partly yielding to China's actions.",
  "manga-covers/kubo_ibuki_cover.jpg",
  [25.7452, 123.4756],
  "Senkaku Islands"
);

mangaList.push(kuboIbuki);

const gundam0083 = new manga(
  "Mobile Suit Gundam 0083: Stardust Memory - Operation Stardust",
  "Hiroki Kase and Yoshiyuki Tomino",
  "2000 - 2001",
  "Three years after the end of the One Year War, the Earth Federation Army orders a Gundam development project from the military-industrial complex 'Anaheim Electronics'. The first and second prototype Gundams are brought to the Torrington Base in Australia for performance testing.",
  "manga-covers/gundam_0083_cover.jpg",
  [-25.2744, 133.7751],
  "Australia"
);

mangaList.push(gundam0083);

const aoNoMaharaja = new manga(
  "Ao no Maharaja (Blue Maharaja)",
  "Tomoko Kamisaka",
  "1990 - 1993",
  "Ao no Maharaja is an adventure manga by Tomoko Kamisaka. The story revolves around Raja, a young man who embarks on a thrilling journey across Asia, from Japan to India, to reclaim his rightful place as the Maharaja. Through this journey, Raja encounters various challenges and experiences diverse cultures, all while slowly uncovering the secrets of his lineage and destiny.",
  "manga-covers/ao_no_maharaja_cover.jpg",
  [27.0238, 74.2179],
  "Rajasthan, India"
);

mangaList.push(aoNoMaharaja);

const redRiver = new manga(
  "Sora wa Akai Kawa no Hotori (Red River)",
  "Chie Shinohara",
  "1995 - 2002",
  "Red River, also known as Anatolia Story, is a historical fantasy manga by Chie Shinohara. The story features Yuri Suzuki, a modern-day Japanese teen girl, who gets pulled through time to ancient Hittite Empire in Anatolia. She was summoned by Queen Nakia who means to use Yuri as a human sacrifice. Yuri's blood is the key element needed in placing a curse upon the princes of the land so they will perish, leaving Nakia's son as the sole heir to the throne.",
  "manga-covers/red_river_cover.jpg",
  [38.9637, 35.2433],
  "Ankara, Turkey"
);

mangaList.push(redRiver);

const aoiHorus = new manga(
  "Aoi Horus no Hitomi - Dansou no Joou no Monogatari (Blue Horus' Eye - The Story of the Cross-Dressing Queen)",
  "Chie Inudoh",
  "2014 - 2021",
  "Blue Horus' Eye - The Story of the Cross-Dressing Queen is a historical drama manga by Chie Inudoh. The narrative revolves around Hatshepsut, one of the most powerful women in the ancient world. She was the fifth pharaoh of the Eighteenth Dynasty of Egypt and she is generally regarded by Egyptologists as one of the most successful pharaohs. This manga is her fascinating story as she ascends the throne and leads Egypt to prosperity, all while cross-dressing as a man.",
  "manga-covers/aoi_horus_cover.jpg",
  [26.8206, 30.8025],
  "Egypt"
);

mangaList.push(aoiHorus);

const dororo = new manga(
  "Dororo",
  "Osamu Tezuka",
  "1967 - 1968",
  "Dororo is a classic manga by the renowned Osamu Tezuka. The plot focuses on Hyakkimaru, a ronin who is on a quest to recover 48 parts of his body that were traded to demons by his father for power. He is accompanied by Dororo, a young thief. As Hyakkimaru regains each body part, he also gains a new ability or sense, bringing him closer to becoming fully human.",
  "manga-covers/dororo_cover.jpg",
  [36.5947, 136.6256],
  "Ishikawa Prefecture, Japan"
);

mangaList.push(dororo);

const myBrideIsAMermaid = new manga(
  "My Bride is a Mermaid",
  "Tahiko Kimura",
  "2002 - 2010",
  "My Bride is a Mermaid is a comedy manga by Tahiko Kimura. The story follows Nagasumi Michishio, a young man who is saved from drowning by a mermaid named Sun Seto. According to mermaid law, however, either the mermaid who has revealed herself or the human who has learned of a mermaid's existence must die. The only solution is for Nagasumi to marry Sun and keep her secret safe, leading to all sorts of hilarious and awkward situations.",
  "manga-covers/my_bride_is_a_mermaid_cover.jpg",
  [34.3401, 134.0434],
  "Kagawa Prefecture, Japan"
);

mangaList.push(myBrideIsAMermaid);

const taiyoNoMakibao = new manga(
  "Taiyō no Makibaō",
  "Tsutomu Takahashi",
  "2007 - 2017",
  "Set in the Kochi Racetrack in Kochi City, Taiyō no Makibaō features a unique blend of seemingly absurd and unrealistic styles, while simultaneously drawing out various societal issues and problems within the horse racing world. Notably featuring crude humor, the story follows the protagonist, Makibaō, from his active racing days to retirement.",
  "manga-covers/taiyo_no_makibao_cover.jpg",
  [33.5597, 133.5311],
  "Kochi City, Japan"
);

mangaList.push(taiyoNoMakibao);

const oneTwoNoSanshiro = new manga(
  "1-2 no Sanshiro",
  "Makoto Kobayashi",
  "1978 - 1983",
  "Set in the fictional city of Shigata in New Kagata Prefecture, a place modeled after Niigata City, Niigata Prefecture. This unique setting reappears in many of the author's subsequent works.",
  "manga-covers/1-2_no_sanshiro_cover.jpg",
  [37.9161, 139.0364],
  "Niigata Prefecture, Japan"
);

mangaList.push(oneTwoNoSanshiro);

const tsurikichiSanpei = new manga(
  "Tsurikichi Sanpei",
  "Takao Yaguchi",
  "1973 - 1983",
  "Tsurikichi Sanpei is a story of a young boy named Sanpei who loves fishing. His expertise and adventurous spirit often lead him to incredible fishing expeditions and wild adventures in nature.",
  "manga-covers/tsurikichi_sanpei_cover.jpg",
  [39.72, 140.1025],
  "Akita Prefecture, Japan"
);

mangaList.push(tsurikichiSanpei);

const fushigiYuugiGenbuKaiden = new manga(
  "Fushigi Yuugi: Genbu Kaiden",
  "Yu Watase",
  "2003 - 2013",
  "The story follows a girl named Takiko Okuda who is brought into a book where she becomes the Priestess of Genbu. She must gather the Seven Celestial Warriors of the north to summon the beast god Genbu and make a wish.",
  "manga-covers/fushigi_yuugi_genbu_kaiden_cover.jpg",
  [39.702, 141.1545],
  "Morioka, Iwate Prefecture, Japan"
);

mangaList.push(fushigiYuugiGenbuKaiden);

console.log(mangaList.length);
