// Default program arguments
// players: true stands for greater than or equal and false stands for less than or equal
let vars = {
  "game": "classic",
  "players": [true, 1],
  "mode": "",
  "map": "",
  "location": "",
  "playalert": true,
  "stop": false,
}
// Data for the wb_mapper stript
const Modes = {
    "tdm": 128,
    "ml": 138,
    "bd": 275,
    "cp": 135,
    "ve": 136,
    "gg": 15,
};
const Modes_long = {
    "Team Death Match": "tdm",
    "Missile Launch": "ml",
    "Bomb Disposal": "bd",
    "Capture Points": "cp",
    "Vehicle Escort": "ve",
    "Gun Game": "gg",
};
const Maps = {
    "area15base": 21,
    "area15bunker": 22,
    "citypoint": 13,
    "cologne": 44,
    "desert": 0,
    "escapes": 6,
    "flooded": 4,
    "frontier": 31,
    "goldmine": 47,
    "goldminev2": 49,
    "heist": 32,
    "kitchen": 29,
    "moonbase": 20,
    "northwest": 1,
    "office": 3,
    "pacific": 2,
    "remagen": 8,
    "siege": 39,
    "skullisland": 24,
    "southwest": 7,
    "spacestation": 38,
    "temple": 5,
    "thesomme": 15,
    "tomb": 14,
    "tribute": 18,
    "cyberpunk": 19,
    "zengarden": 43,
    "containers": 37,
    "crisscross": 40,
    "dwarfsdungeon": 28,
    "hanger": 25,
    "pyramid": 36,
    "quarry": 27,
    "sniperalley": 35,
    "snipersonly": 41,
    "threelane": 34,
    "towerofpower": 33,
};
const Maps_long = {
    "Area 15 Base": "area15base",
    "Area 15 Bunker": "area15bunker",
    "City Point": "citypoint",
    "Cologne": "cologne",
    "Desert": "desert",
    "Escape": "escapes",
    "Flooded": "flooded",
    "Frontier": "frontier",
    "Goldmine": "goldmine",
    "Goldmine V2": "goldminev2"
    "Heist": "heist",
    "Kitchen": "kitchen",
    "Moonbase": "moonbase",
    "Northwest": "northwest",
    "Office": "office",
    "Pacific": "pacific",
    "Remagen": "remagen",
    "Siege": "siege",
    "Skull Island": "skullisland",
    "Southwest": "southwest",
    "Space Station": "spacestation",
    "Temple": "temple",
    "The Somme": "thesomme",
    "Tomb": "tomb",
    "Tribute": "tribute",
    "Tribute (Cyberpunk)": "cyberpunk",
    "Zen Garden": "zengarden",
    "Containers": "containers",
    "Criss Cross": "crisscross",
    "Dwarf's Dungeon": "dwarfsdungeon",
    "Hanger": "hanger",
    "Pyramid": "pyramid",
    "Quarry": "quarry",
    "Sniper Alley": "sniperalley",
    "Snipers Only": "snipersonly",
    "Three Lane": "threelane",
    "Tower of Power": "towerofpower",
};
const classic = ["USA","USA_WEST","ASIA","JAPAN","EUROPE","INDIA","AUSTRALIA","RUSSIA"];
const fourvfour = ["USA_4V4","EU_4V4","ASIA_4V4"];

// Data for displaying on the html
const Classic_maps = {
    "Area 15 Base": "area15base",
    "Area 15 Bunker": "area15bunker",
    "City Point": "citypoint",
    "Cologne": "cologne",
    "Desert": "desert",
    "Escape": "escapes",
    "Flooded": "flooded",
    "Frontier": "frontier",
    "Goldmine": "goldmine",
    "Goldmine V2": "goldminev2"
    "Heist": "heist",
    "Kitchen": "kitchen",
    "Moonbase": "moonbase",
    "Northwest": "northwest",
    "Office": "office",
    "Pacific": "pacific",
    "Remagen": "remagen",
    "Siege": "siege",
    "Skull Island": "skullisland",
    "Southwest": "southwest",
    "Space Station": "spacestation",
    "Temple": "temple",
    "The Somme": "thesomme",
    "Tomb": "tomb",
    "Tribute": "tribute",
    "Tribute (Cyberpunk)": "cyberpunk",
    "Zen Garden": "zengarden",
};
const Fourv4_maps = {
    "Containers": "containers",
    "Criss Cross": "crisscross",
    "Dwarf's Dungeon": "dwarfsdungeon",
    "Hanger": "hanger",
    "Pyramid": "pyramid",
    "Quarry": "quarry",
    "Sniper Alley": "sniperalley",
    "Snipers Only": "snipersonly",
    "Three Lane": "threelane",
    "Tower of Power": "towerofpower",
};
const Classic_regions = {
    "USA": "USA",
    "USA_WEST": "USA_WEST",
    "ASIA": "ASIA",
    "JAPAN": "JAPAN",
    "EUROPE": "EUROPE",
    "INDIA": "INDIA",
    "AUSTRALIA": "AUSTRALIA",
    "RUSSIA": "RUSSIA",
};
const Fourv4_regions = {
    "USA_4V4": "USA_4V4",
    "ASIA_4V4": "ASIA_4V4",
    "EU_4V4": "EU_4V4",
};
