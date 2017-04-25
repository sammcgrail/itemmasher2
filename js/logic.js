console.log("JS File loaded")

var item1select = false
var item2select = false

var comboName = ""
var comboCost = 0
var comboStats = []
var comboDesc = ""

var image1number = 0;
var item1name = ""
var item1cost = 0
var item1stats = []
var item1desc = ""

var image2number = 0;
var item2name = ""
var item2cost = 0
var item2stats = []
var item2desc = ""

var selectedItems = [null, null];

var stats = ["Health", "Mana", "Attack Damage", "Ability Power",
  "% Base Health Regen","% Base Mana Regen", "% Movespeed", "% Attack Speed",
  "% Lifesteal", "% Omnivamp","Armor", "Magic Resistance",
  "Lethality", "% Armor Pen", "Magic Pen","% Magic Pen",
  "Gold per 10 seconds", "Cooldown Reduction", "% Crit Chance"]


function imgRedirect(destination){
   location.href = destination;
  }

function pullStats(imagenumber, imageindex){
  var item = {}
  item = [
  {
  	"id": 0,
  	"name": "Make Selection",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "noobs",
    "index": 0,
  },

  {
  	"id": 1001,
  	"name": "Boots of Speed",
    "cost": 300,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Limited to 1.<br>UNIQUE Passive: Enhanced Movement: +25 Movement Speed",
    "index": 1,
  },

  {
  	"id": 1004,
  	"name": "Faerie Charm",
    "cost": 125,
    "stats": [0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 2,
  },

  {
  	"id": 1006,
  	"name": "Rejuvenation Bead",
    "cost": 150,
    "stats": [0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 3,
  },

  {
  	"id": 1011,
  	"name": "Giant's Belt",
    "cost": 1000,
    "stats": [380,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 4,
  },

  {
  	"id": 1018,
  	"name": "Cloak of Agility",
    "cost": 800,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
  	"desc": "",
    "index": 5,
  },

  {
  	"id": 1026,
  	"name": "Blasting Wand",
    "cost": 850,
    "stats": [0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 6,
  },

  {
  	"id": 1027,
  	"name": "Sapphire Crystal",
    "cost": 350,
    "stats": [0,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 7,
  },

  {
  	"id": 1028,
  	"name": "Ruby Crystal",
    "cost": 400,
    "stats": [150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 8,
  },

  {
  	"id": 1029,
  	"name": "Cloth Armor",
    "cost": 300,
    "stats": [0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 9,
  },

  {
  	"id": 1031,
  	"name": "Chain Vest",
    "cost": 800,
    "stats": [0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 10,
  },

  {
  	"id": 1033,
  	"name": "Null-Magic Mantle",
    "cost": 450,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 11,
  },

  {
  	"id": 1036,
  	"name": "Long Sword",
    "cost": 350,
    "stats": [0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 12,
  },

  {
  	"id": 1037,
  	"name": "Pickaxe",
    "cost": 875,
    "stats": [0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 13,
  },

  {
  	"id": 1038,
  	"name": "B. F. Sword",
    "cost": 1300,
    "stats": [0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 14,
  },

  {
  	"id": 1039,
  	"name": "Hunter's Talisman",
    "cost": 350,
    "stats": [0,0,0,0,0,150,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "UNIQUE Passive - Tooth: Damaging a monster with a spell or attack steals 25 Health over 5 seconds.  Killing monsters grants special bonus experience.",
    "index": 15,
  },

  {
  	"id": 1041,
  	"name": "Hunter's Machete",
    "cost": 350,
    "stats": [0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
  	"desc": "UNIQUE Passive - Nail: Basic attacks deal 25 bonus damage on hit vs. Monsters.  Killing monsters grants special bonus experience.",
    "index": 16,
  },

  {
  	"id": 1042,
  	"name": "Dagger",
    "cost": 300,
    "stats": [0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 17,
  },

  {
  	"id": 1043,
  	"name": "Recurve Bow",
    "cost": 1000,
    "stats": [0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "UNIQUE Passive: Basic attacks deal an additional 15 physical damage on hit.",
    "index": 18,
  },

  {
  	"id": 1051,
  	"name": "Brawler's Gloves",
    "cost": 400,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
  	"desc": "",
    "index": 19,
  },

  {
  	"id": 1052,
  	"name": "Amplifying Tome",
    "cost": 435,
    "stats": [0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 20,
  },

  {
  	"id": 1053,
  	"name": "Vampiric Scepter",
    "cost": 900,
    "stats": [0,0,15,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
  	"desc": "",
    "index": 21,
  },

  {
  	"id": 1054,
  	"name": "Doran's Shield",
    "cost": 450,
    "stats": [80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Passive: Restores 6 Health every 5 seconds.<br>UNIQUE Passive: Blocks 8 damage from single target attacks and spells from champions.",
    "index": 22,
  },

    {
    	"id": 1055,
    	"name": "Doran's Blade",
      "cost": 450,
      "stats": [80,0,8,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0],
    	"desc": "",
      "index": 22,
    },

    {
    "id": 1056,
    "name": "Doran's Ring",
    "cost": 400,
    "stats": [60,0,0,15,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Passive: Restore 4 Mana upon killing a unit.",
    "index": 24,
    },

    {
    "id": 1057,
    "name": "Negatron Cloak",
    "cost": 720,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0],
    "desc": "",
    "index": 25,
    },

    {
    "id": 1058,
    "name": "Needlessly Large Rod",
    "cost": 1250,
    "stats": [0,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 26,
    },

    {
    "id": 1082,
    "name": "The Dark Seal",
    "cost": 350,
    "stats": [0,100,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "+25% Increased Healing from Potions <br> UNIQUE Passive - Dread: Grants +3 Ability Power per Glory. <br> UNIQUE Passive - Do or Die: Grants 2 Glory for a champion kill or 1 Glory for an assist, up to 10 Glory total. Lose 4 Glory on death.",
    "index": 27,
    },

    {
    "id": 1083,
    "name": "Cull",
    "cost": 450,
    "stats": [0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "+3 Life on Hit <br> UNIQUE Passive: Killing a lane minion grants 1 additional Gold. Killing 100 lane minions grants an additional 350 gole immediately and disables this passive.",
    "index": 28,
    },

    {
    "id": 1400,
    "name": "Stalker's Blade: Warrior",
    "cost": 2625,
    "stats": [0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
    "desc": "",
    "index": 29,
    },

    {
    "id": 1401,
    "name": "Stalker's Blade: Cinderhulk",
    "cost": 2625,
    "stats": [400,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "+15% Bonus Health <br> UNIQUE Passive - Immolate: Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters.",
    "index": 30,
    },

    {
    "id": 1402,
    "name": "Stalker's Blade: Runic Echoes",
    "cost": 2625,
    "stats": [0,0,0,60,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. <br> This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
    "index": 31,
    },

    {
    "id": 1408,
    "name": "Tracker's Knife: Warrior",
    "cost": 2625,
    "stats": [0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
    "desc": "",
    "index": 32,
    },

    {
    "id": 1410,
    "name": "Tracker's Knife: Runic Echoes",
    "cost": 2625,
    "stats": [0,0,0,60,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. <br> This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
    "index": 33,
    },

    {
    "id": 1412,
    "name": "Skirmisher's Sabre: Warrior",
    "cost": 2625,
    "stats": [0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
    "desc": "",
    "index": 34,
    },

    {
    "id": 1413,
    "name": "Skirmisher's Sabre: Cinderhulk",
    "cost": 2625,
    "stats": [400,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "+15% Bonus Health <br> UNIQUE Passive - Immolate: Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters.",
    "index": 35,
    },

    {
    "id": 1414,
    "name": "Skirmisher's Sabre: Runic Echoes",
    "cost": 2625,
    "stats": [0,0,0,60,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. <br> This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
    "index": 36,
    },

    {
    "id": 1416,
    "name": "Stalker's Blade: Bloodrazer",
    "cost": 2625,
    "stats": [0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "UNIQUE Passive: Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
    "index": 37,
    },

    {
    "id": 1418,
    "name": "Tracker's Knife: Bloodrazer",
    "cost": 2625,
    "stats": [0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "UNIQUE Passive: Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
    "index": 38,
    },

    {
    "id": 1419,
    "name": "Skirmisher's Sabre: Bloodrazer",
    "cost": 2625,
    "stats": [0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "UNIQUE Passive: Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
    "index": 39,
    },

    {
    "id": 2003,
    "name": "Health Potion",
    "cost": 50,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Limited to 5 at one time. Limited to 1 type of Healing Potion. <br> Click to Consume: Restores 150 Health over 15 seconds.",
    "index": 40,
    },

    {
    "id": 2009,
    "name": "Total Biscuit of Rejuvenation",
    "cost": 0,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Click to Consume: Restores 80 Health and 50 Mana over 10 seconds.",
    "index": 41,
    },

    {
    "id": 2015,
    "name": "Kircheis Shard",
    "cost": 750,
    "stats": [0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Passive: Moving and attacking will make an attack Energized. <br> UNIQUE Passive - Energized Strike: Your Energized attacks deal 40 bonus magic damage on hit.",
    "index": 42,
    },

    {
    "id": 2031,
    "name": "Refillable Potion",
    "cost": 150,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Limited to 1 type of Healing Potion. <br> UNIQUE Active: Consumes a charge to restore 125 Health over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.",
    "index": 43,
    },

    {
    "id": 2032,
    "name": "Hunter's Potion",
    "cost": 400,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Limited to 1 type of Healing Potion. <br> UNIQUE Active: Consumes a charge to restore 60 Health and 35 Mana over 8 seconds. Holds up to 5 charges and refills upon visiting the shop.",
    "index": 44,
    },

    {
    "id": 2033,
    "name": "Corrupting Potion",
    "cost": 500,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Limited to 1 type of Healing Potion. <br> UNIQUE Active: Consumes a charge to restore 125 health and 75 Mana over 12 seconds and grants Touch of Corruption during that time. Holds up to 3 charges and refills upon visiting the shop.",
    // even more text here that describes what Touch of Corruption does, but.... meh
    "index": 45,
    },

    {
    "id": 2045,
    "name": "Ruby Sightstone",
    "cost": 1600,
    "stats": [500,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "UNIQUE Passive: Item Active cooldowns are reduced by 20%. <br> UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 4 charges and refills when visiting the shop.",
    "index": 46,
    },

    {
    "id": 2047,
    "name": "Oracle's Extract",
    "cost": 300,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Click to Consume: Grants detection of nearby invisible or unseen enemy units for 5 minutes.",
    "index": 47,
    },

    {
    "id": 2049,
    "name": "Sightstone",
    "cost": 800,
    "stats": [150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding  area for 150 seconds. Holds up to 3 charges which refill upon visiting the shop.",
    "index": 48,
    },

    {
    "id": 2051,
    "name": "Guardian's Horn",
    "cost": 950,
    "stats": [150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Passive: Restores 20 Health every 5 seconds. <br> UNIQUE Passive: Blocks 12 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).",
    "index": 49,
    },

    {
    "id": 2053,
    "name": "Raptor Cloak",
    "cost": 1200,
    "stats": [0,0,0,0,125,0,0,0,0,0,40,0,0,0,0,0,0,0,0],
    "desc": "UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.",
    "index": 50,
    },

    {
    "id": 2054,
    "name": "Diet Poro-Snax",
    "cost": 0,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "All the flavor of regular Poro-Snax, without the calories! Keeps your Poro happy AND healthy. <br> Click to Consume: Gives your Poros a delicious healthy treat.",
    "index": 51,
    },

    {
    "id": 2055,
    "name": "Control Ward",
    "cost": 75,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "Can only carry 3 Control Wards in inventory. <br> Click to Consume: Places a ward that grants vision of the surrounding area. This device will also reveal invisible traps and reveal/disable wards. Control Wards do not disable other Control Wards. Camouflaged units will also be revealed. <br> Limit 1 Control Ward on the map per player.",
    "index": 52,
    },

    {
    "id": 2138,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 53,
    },

    {
    "id": 2139,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 54,
    },

    {
    "id": 2140,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 55,
    },

    {
    "id": 2301,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 56,
    },

    {
    "id": 2302,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 57,
    },

    {
    "id": 2303,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 58,
    },

    {
    "id": 3001,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 59,
    },

    {
    "id": 3003,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 60,
    },

    {
    "id": 3004,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 61,
    },

    {
    "id": 3006,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 62,
    },

    {
    "id": 3009,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 63,
    },

    {
    "id": 3010,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 64,
    },

    {
    "id": 3020,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 65,
    },

    {
    "id": 3022,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 66,
    },

    {
    "id": 3024,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 67,
    },

    {
    "id": 3025,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 68,
    },

    {
    "id": 3026,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 69,
    },

    {
    "id": 3027,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 70,
    },

    {
    "id": 3028,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 71,
    },

    {
    "id": 3030,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 72,
    },

    {
    "id": 3031,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 73,
    },

    {
    "id": 3033,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 74,
    },

    {
    "id": 3034,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 75,
    },

    {
    "id": 3035,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 76,
    },

    {
    "id": 3036,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 77,
    },

    {
    "id": 3040,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 78,
    },

    {
    "id": 3041,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 79,
    },

    {
    "id": 3043,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 80,
    },

    {
    "id": 3044,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 81,
    },

    {
    "id": 3046,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 82,
    },

    {
    "id": 3047,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 83,
    },

    {
    "id": 3048,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 84,
    },

    {
    "id": 3050,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 85,
    },

    {
    "id": 3056,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 86,
    },

    {
    "id": 3057,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 87,
    },

    {
    "id": 3060,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 88,
    },

    {
    "id": 3065,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 89,
    },

    {
    "id": 3067,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 90,
    },

    {
    "id": 3068,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 91,
    },

    {
    "id": 3069,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 92,
    },

    {
    "id": 3070,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 93,
    },

    {
    "id": 3071,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 94,
    },

    {
    "id": 3072,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 95,
    },

    {
    "id": 3074,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 96,
    },

    {
    "id": 3075,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 97,
    },

    {
    "id": 3077,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 98,
    },

    {
    "id": 3078,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 99,
    },

    {
    "id": 3082,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 100,
    },

    {
    "id": 3083,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 101,
    },

    {
    "id": 3084,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 102,
    },

    {
    "id": 3085,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 103,
    },

    {
    "id": 3086,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 104,
    },

    {
    "id": 3087,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 105,
    },

    {
    "id": 3089,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 106,
    },

    {
    "id": 3090,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 107,
    },

    {
    "id": 3091,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 108,
    },

    {
    "id": 3092,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 109,
    },

    {
    "id": 3094,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 110,
    },

    {
    "id": 3096,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 111,
    },

    {
    "id": 3097,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 112,
    },

    {
    "id": 3098,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 113,
    },

    {
    "id": 3100,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 114,
    },

    {
    "id": 3101,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 115,
    },

    {
    "id": 3102,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 116,
    },

    {
    "id": 3104,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 117,
    },

    {
    "id": 3105,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 118,
    },

    {
    "id": 3107,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 119,
    },

    {
    "id": 3108,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 120,
    },

    {
    "id": 3109,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 121,
    },

    {
    "id": 3110,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 122,
    },

    {
    "id": 3111,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 123,
    },

    {
    "id": 3112,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 124,
    },

    {
    "id": 3113,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 125,
    },

    {
    "id": 3114,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 126,
    },

    {
    "id": 3115,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 127,
    },

    {
    "id": 3116,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 128,
    },

    {
    "id": 3117,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 129,
    },

    {
    "id": 3122,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 130,
    },

    {
    "id": 3123,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 131,
    },

    {
    "id": 3124,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 132,
    },

    {
    "id": 3133,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 133,
    },

    {
    "id": 3134,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 134,
    },

    {
    "id": 3135,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 135,
    },

    {
    "id": 3136,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 136,
    },

    {
    "id": 3137,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 137,
    },

    {
    "id": 3139,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 138,
    },

    {
    "id": 3140,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 139,
    },

    {
    "id": 3142,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 140,
    },

    {
    "id": 3143,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 141,
    },

    {
    "id": 3144,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 142,
    },

    {
    "id": 3145,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 143,
    },

    {
    "id": 3146,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 144,
    },

    {
    "id": 3147,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 145,
    },

    {
    "id": 3151,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 146,
    },

    {
    "id": 3152,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 147,
    },

    {
    "id": 3153,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 148,
    },

    {
    "id": 3155,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 149,
    },

    {
    "id": 3156,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 150,
    },

    {
    "id": 3157,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 151,
    },

    {
    "id": 3158,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 152,
    },

    {
    "id": 3165,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 153,
    },

    {
    "id": 3170,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 154,
    },

    {
    "id": 3174,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 155,
    },

    {
    "id": 3175,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 156,
    },

    {
    "id": 3181,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 157,
    },

    {
    "id": 3184,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 158,
    },

    {
    "id": 3185,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 159,
    },

    {
    "id": 3187,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 160,
    },

    {
    "id": 3190,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 161,
    },

    {
    "id": 3191,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 162,
    },

    {
    "id": 3196,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 163,
    },

    {
    "id": 3197,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 164,
    },

    {
    "id": 3198,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 165,
    },

    {
    "id": 3200,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 166,
    },

    {
    "id": 3211,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 167,
    },

    {
    "id": 3222,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 168,
    },

    {
    "id": 3252,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 169,
    },

    {
    "id": 3285,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 170,
    },

    {
    "id": 3301,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 171,
    },

    {
    "id": 3302,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 172,
    },

    {
    "id": 3303,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 173,
    },

    {
    "id": 3340,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 174,
    },

    {
    "id": 3341,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 175,
    },

    {
    "id": 3345,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 176,
    },

    {
    "id": 3361,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 177,
    },

    {
    "id": 3362,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 178,
    },

    {
    "id": 3363,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 179,
    },

    {
    "id": 3364,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 180,
    },

    {
    "id": 3401,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 181,
    },

    {
    "id": 3460,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 182,
    },

    {
    "id": 3462,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 183,
    },

    {
    "id": 3504,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 184,
    },

    {
    "id": 3508,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 185,
    },

    {
    "id": 3512,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 186,
    },

    {
    "id": 3599,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 187,
    },

    {
    "id": 3630,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 188,
    },

    {
    "id": 3631,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 189,
    },

    {
    "id": 3632,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 190,
    },

    {
    "id": 3633,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 191,
    },

    {
    "id": 3634,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 192,
    },

    {
    "id": 3635,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 193,
    },

    {
    "id": 3636,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 194,
    },

    {
    "id": 3640,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 195,
    },

    {
    "id": 3641,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 196,
    },

    {
    "id": 3643,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 197,
    },

    {
    "id": 3647,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 198,
    },

    {
    "id": 3649,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 199,
    },

    {
    "id": 3680,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 200,
    },

    {
    "id": 3681,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 201,
    },

    {
    "id": 3682,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 202,
    },

    {
    "id": 3706,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 203,
    },

    {
    "id": 3711,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 204,
    },

    {
    "id": 3715,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 205,
    },

    {
    "id": 3742,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 206,
    },

    {
    "id": 3748,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 207,
    },

    {
    "id": 3751,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 208,
    },

    {
    "id": 3800,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 209,
    },

    {
    "id": 3801,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 210,
    },

    {
    "id": 3802,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 211,
    },

    {
    "id": 3812,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 212,
    },

    {
    "id": 3814,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 213,
    },

    {
    "id": 3901,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 214,
    },

    {
    "id": 3902,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 215,
    },

    {
    "id": 3903,
    "name": "",
    "cost": null,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "desc": "",
    "index": 216,
    },

]

// set placeholder objects to toss selected things into
var trayitems = {}
trayitems = [
  {
    "id": 0,
    "name": comboName,
    "cost": comboCost,
    "stats": comboStats,
    "desc": comboDesc,
    "index": 0,
  },
  {
    "id": image1number,
    "name": item1name,
    "cost": item1cost,
    "stats": item1stats,
    "desc": item1desc,
    "index": 1,
  },

  {
    "id": image2number,
    "name": item2name,
    "cost": item2cost,
    "stats": item2stats,
    "desc": item2desc,
    "index": 2,
  },
]

 // console.log("End of pullState function - file name id number of item " + imagenumber)
 image1filename = "./item/" + imagenumber + ".png"
 image2filename = "./item/" + imagenumber + ".png"
 combofilename = "./item/3410.png"
 // console.log(imagefilename)

 //
 // var item1Image = document.getElementById("item1-image");
 // if (item1Image.src == "") {
 //   document.getElementById("item1-image").src=imagefilename;
 // } else if (item1Image.src == imagefilename) {
 //   document.getElementById("item1-image").src= "";
 // }
 // else if (item1Image.src != "" && item1Image.src != imagefilename) {
 //   document.getElementById("item2-image").src=imagefilename;
 // }

 console.log(item[imageindex])

function statsToString(imageindex){
    stringarray = [];
    statstring = "";
    for(i=0;i<stats.length;i++){
      if(item[imageindex].stats[i]!=0){
        stringarray[i] = "+ " + item[imageindex].stats[i] + " " + stats[i] + "<br>";
        console.log(stringarray);
        }
      }
    stringarray = stringarray.filter(function( element ) {
   return element !== undefined;
});
    for(j=0;j<stringarray.length;j++){
      statstring += stringarray[j];
    }
    return statstring;
};

function comboStatsToString(){
    comboarray = comboStats;
    combostatstring = "";
    for(i=0;i<stats.length;i++){
      if(comboStats[i]!=0){
        comboarray[i] = "+ " + comboStats[i] + " " + stats[i] + "<br>";
        console.log(comboarray);
        }
      }
    comboarray = comboarray.filter(function( element ) {
   return element !== 0;
});
    for(j=0;j<comboarray.length;j++){
      combostatstring += comboarray[j];
    }
    return combostatstring;
};


// case where both slots empty, nothing picked yet
if((item1select==false) && (item2select==false) && (selectedItems[0]==null) && (selectedItems[1]==null)){
 //assign and display item
 item1select = true;
 selectedItems[0] = imageindex;
 image1nametext = item[imageindex].name
 image1costtext = item[imageindex].cost + " g"
 image1desctext = item[imageindex].desc
 image1statstext = statsToString(imageindex);
 document.getElementById("item1-image").src= image1filename;
 document.getElementById("name1").innerHTML = image1nametext;
 document.getElementById("cost1").innerHTML = image1costtext;
 document.getElementById("stats1").innerHTML = image1statstext;
 document.getElementById("desc1").innerHTML = image1desctext;
}
//case where first slot filled, second slot empty, different button pressed
else if((item1select==true) && (item2select==false) && (imageindex != selectedItems[0])){
  item2select = true;
  selectedItems[1] = imageindex;
  image2nametext = item[imageindex].name
  image2costtext = item[imageindex].cost + " g"
  image2desctext = item[imageindex].desc
  image2statstext = statsToString(imageindex);
  document.getElementById("item2-image").src= image2filename;
  document.getElementById("name2").innerHTML = image2nametext;
  document.getElementById("cost2").innerHTML = image2costtext;
  document.getElementById("stats2").innerHTML = image2statstext;
  document.getElementById("desc2").innerHTML = image2desctext;
}
//case where first is pressed while filled
else if((item1select==true) && (imageindex == selectedItems[0])){
  item1select = false;
  selectedItems[0] = null;
  document.getElementById("item1-image").src= "./item/3637.png";
  document.getElementById("name1").innerHTML = "Your first item goes here.";
  document.getElementById("cost1").innerHTML = null
  document.getElementById("stats1").innerHTML = null
  document.getElementById("desc1").innerHTML = ""
  document.getElementById("combo-image").src= "./item/3637.png";
  document.getElementById("namecombo").innerHTML = "Your recipe will show up here.";
  document.getElementById("costcombo").innerHTML = null
  document.getElementById("statscombo").innerHTML = null
  document.getElementById("desccombo").innerHTML = "Choose Wisely!"
}
//case where second is pressed while filled
else if((item2select==true) && (imageindex == selectedItems[1])){
  item2select = false;
  selectedItems[1] = null;
  document.getElementById("item2-image").src= "./item/3637.png";
  document.getElementById("name2").innerHTML = "Your second item goes here.";
  document.getElementById("cost2").innerHTML = null
  document.getElementById("stats2").innerHTML = null
  document.getElementById("desc2").innerHTML = ""
  document.getElementById("combo-image").src= "./item/3637.png";
  document.getElementById("namecombo").innerHTML = "Your recipe will show up here.";
  document.getElementById("costcombo").innerHTML = null
  document.getElementById("statscombo").innerHTML = null
  document.getElementById("desccombo").innerHTML = "Choose Wisely!"
}


//case where both slots get filled, automatically create combo
if((item1select==true) && (item2select==true)){
    comboName = "MA BOI"
    comboCost = item[selectedItems[0]].cost + item[selectedItems[1]].cost;
    combocosttext = comboCost;
    for(i=0;i<stats.length;i++){
      comboStats[i] = item[selectedItems[0]].stats[i]+item[selectedItems[1]].stats[i];
    }
    combostatstext = comboStatsToString();
    comboDesc = "It's craAaAaAaazy good!!"
    combodesctext = comboDesc;
    document.getElementById("combo-image").src= combofilename;
    document.getElementById("namecombo").innerHTML = comboName;
    document.getElementById("costcombo").innerHTML = combocosttext + " g";
    document.getElementById("statscombo").innerHTML = combostatstext;
    document.getElementById("desccombo").innerHTML = combodesctext;
}


//case where first item gets removed and replaced while second item is still filled
// if((item1select==false) && (item2select==true) && (selectedItems[0]==null) && (selectedItems[1]!==null)){
//
//  }


}


 function resetStats(){
   document.getElementById("item1-image").src= "./item/3637.png";
   document.getElementById("name1").innerHTML = "Your first item goes here.";
   document.getElementById("cost1").innerHTML = null
   document.getElementById("stats1").innerHTML = null
   document.getElementById("desc1").innerHTML = ""
   document.getElementById("item2-image").src= "./item/3637.png";
   document.getElementById("name2").innerHTML = "Your second item goes here.";
   document.getElementById("cost2").innerHTML = null
   document.getElementById("stats2").innerHTML = null
   document.getElementById("desc2").innerHTML = ""
   document.getElementById("combo-image").src= "./item/3637.png";
   document.getElementById("namecombo").innerHTML = "Your recipe will show up here.";
   document.getElementById("costcombo").innerHTML = null
   document.getElementById("statscombo").innerHTML = null
   document.getElementById("desccombo").innerHTML = "Choose Wisely!"
   item1select = false;
   item2select = false;
   selectedItems[0] = null;
   selectedItems[1] = null;
 };

// function swapItems(){
//
// };
