let dinoDeck = "Dinos";
let exoDeck = "Exosisters";
let dinoMain = ["Soul Eating Oviraptor", "Soul Eating Oviraptor", "Soul Eating Oviraptor", "Fossil Dig", "Fossil Dig", "Fossil Dig", "Miscellaneousaurus", "Ultimate Conductor Tyranno", "Ultimate Conductor Tyranno", "Giant Rex", "Pank", "Dogoran", "Ground Xeno", "Ground Xeno", "Pot of Prosperity", "Pot of Prosperity", "Pot of Prosperity", "Infinite Impermanence", "Infinite Impermanence", "Infinite Impermanence", "Ash Blossom & Joyous Spring", "Ash Blossom & Joyous Spring", "Ash Blossom & Joyous Spring", "Double Evolution Pill", "Double Evolution Pill", "Animadorned Archosaur", "Animadorned Archosaur", "Babycerasaurus", "Babycerasaurus", "Babycerasaurus", "Petiteranodon", "Xeno Meteorus", "Book of Eclipse", "Book of Eclipse", "Lost World", "Lost World", "Lost World", "Kashtira Fenrir", "Kashtira Fenrir", "Harpie's Feather Duster", "Frostasaurus", "Nibiru the Primal Being", "Nibiru the Primal Being"];
let dinoSide = ["Droll & Lock Bird", "Droll & Lock Bird", "Droll & Lock Bird", "Triple Tactics Thrust", "Triple Tactics Thrust", "Dark Hole", "Triple Tactics Talent", "Cosmic Cyclone", "Cosmic Cyclone", "Raigeki", "Ground Xeno", "Effect Veiler", ];
let dinoExtra = ["Linkuriboh", "Secure Gardna", "SP:Little Knight", "Gigantozowler", "Baronne de Fleur", "Evolzar Lars", "Evolzar Dolkka", "Evolzar Laggia", "Knightmare Unicorn", "Accesscode Talker", "Ty-Phon", "Abyss Dweller", "Number 60:Dugares", "Pentestag", "Knightmare Phoenix"];
let exoMain = ["Exosister Martha", "Exosister Martha", "Exosister Martha", "Exosister Elis", "Exosister Elis", "Exosister Elis", "Exosister Stella", "Exosister Sophia", "Exosister Irene", "Exosister Pax", "Exosister Pax", "Exosister Pax", "Exosister Returnia", "Exosister Vadis", "Pot of Prosperity", "Pot of Prosperity", "Pot of Prosperity", "Infinite Impermanence", "Infinite Impermanence", "Infinite Impermanence", "Ash Blossom & Joyous Spring", "Ash Blossom & Joyous Spring", "Ash Blossom & Joyous Spring", "Book of Moon", "Book of Moon", "Book of Moon", "Aratama", "Aratama", "Aratama", "Sakitama", "Sakitama", "Crossout Designator", "Crossout Designator", "Crossout Designator", "Exosister Returnia", "Dimension Shifter", "Dimension Shifter", "Nibiru the Primal Being", "Nibiru the Primal Being", "Exosister Stella", "Dimension Shifter"];
let exoSide = ["Droll & Lock Bird", "Droll & Lock Bird", "Droll & Lock Bird", "Triple Tactics Thrust", "Triple Tactics Thrust", "Evenly Matched", "Evenly Matched", "Evenly Matched", "Efect Veiler", "Dark Hole", "Cosmic Cyclone", "Harpie's Feather Duster", "Raigeki", "Called by the Grave", "Triple Tactics Talent"];
let exoExtra = ["Tornado Dragon", "Exosister Mikailis", "Exosister Mikailis", "Exosister Mikailis", "Exosister Kaspitall", "Exosister Kaspitall", "Exosister Gibrene", "Exosister Asophiel", "Zeus", "Ty-Phon", "Donner", "Bagooska", "Exciton Knight", "Exosisters Magnifica", "Exosisters Magnifica"];
/* SORT DINO DECK IN RANDOM ORDER /*/
dinoMain.sort(function(){return 0.5 - Math.random()});
//alert(dinoMain);