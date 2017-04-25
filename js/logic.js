console.log("JS File loaded")

var item1select = false
var item2select = false

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
"% Lifesteal", "% Base Attack Damage","Armor", "Magic Resistance",
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
      "name": "B.F. Sword",
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
      "desc": "Limited to 1 Jungle item. <br> +10% Lifesteal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> UNIQUE Passive - Chilling Smite: Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds. <br> UNIQUE Passive - Tooth/Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience.",
      "index": 29,
    },

    {
      "id": 1401,
      "name": "Stalker's Blade: Cinderhulk",
      "cost": 2625,
      "stats": [400,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item. <br> +10% Lifesteal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> +15% Bonus Health <br> UNIQUE Passive - Chilling Smite: Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds. <br> UNIQUE Passive - Tooth/Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Passive - Immolate: Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters.",
      "index": 30,
    },

    {
      "id": 1402,
      "name": "Stalker's Blade: Runic Echoes",
      "cost": 2625,
      "stats": [0,0,0,60,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item. <br> +10% Lifesteal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> +15% Bonus Health <br> UNIQUE Passive - Chilling Smite: Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds. <br> UNIQUE Passive - Tooth/Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. <br> This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
      "index": 31,
    },

    {
      "id": 1408,
      "name": "Tracker's Knife: Warrior",
      "cost": 2625,
      "stats": [0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 2 charges which refill upon visiting the shop.",
      "index": 32,
    },

    {
      "id": 1410,
      "name": "Tracker's Knife: Runic Echoes",
      "cost": 2625,
      "stats": [0,0,0,60,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 2 charges which refill upon visiting the shop. <br> UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. <br> This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
      "index": 33,
    },

    {
      "id": 1412,
      "name": "Skirmisher's Sabre: Warrior",
      "cost": 2625,
      "stats": [0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> Passive - Challenging Smite: Smite can be cast on enemy champions, marking them for 4 seconds. While marked, the target is revealed, your basic attacks deal bonus true damage over 3 seconds, and their damage to you is reduced by 20%. <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience.",
      "index": 34,
    },

    {
      "id": 1413,
      "name": "Skirmisher's Sabre: Cinderhulk",
      "cost": 2625,
      "stats": [400,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> +15% Bonus Health <br> Passive - Challenging Smite: Smite can be cast on enemy champions, marking them for 4 seconds. While marked, the target is revealed, your basic attacks deal bonus true damage over 3 seconds, and their damage to you is reduced by 20%. <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Passive - Immolate: Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters.",
      "index": 35,
    },

    {
      "id": 1414,
      "name": "Skirmisher's Sabre: Runic Echoes",
      "cost": 2625,
      "stats": [0,0,0,60,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> Passive - Challenging Smite: Smite can be cast on enemy champions, marking them for 4 seconds. While marked, the target is revealed, your basic attacks deal bonus true damage over 3 seconds, and their damage to you is reduced by 20%. <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. <br> This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
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
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 2 charges which refill upon visiting the shop. <br> UNIQUE Passive: Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
      "index": 38,
    },

    {
      "id": 1419,
      "name": "Skirmisher's Sabre: Bloodrazer",
      "cost": 2625,
      "stats": [0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> Passive - Challenging Smite: Smite can be cast on enemy champions, marking them for 4 seconds. While marked, the target is revealed, your basic attacks deal bonus true damage over 3 seconds, and their damage to you is reduced by 20%. <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Passive: Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
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
      "desc": "Limited to 1 type of Healing Potion. <br> UNIQUE Active: Consumes a charge to restore 125 health and 75 Mana over 12 seconds and grants Touch of Corruption during that time. Holds up to 3 charges and refills upon visiting the shop. <br> Touch of Corruption: Damaging spells and attacks burn enemy champions for 15 - 30 magic damage over 3 seconds. (Half Damage for Area of Effect or Damage over Time spells. Damage increases with champion level.)",
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
      "name": "Elixir of Iron",
      "cost": 500,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Level 9 required to purchase. <br> Click to Consume: Grants +300 Health, 25% Tenacity, increased champion size, and Path of Iron for 3 minutes. <br> Path of Iron: Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.",
      "index": 53,
    },

    {
      "id": 2139,
      "name": "Elixir of Sorcery",
      "cost": 500,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Level 9 required to purchase. <br> Click to Consume: Grants +50 Ability Power, 15 bonus Mana Regen per 5 seconds and Sorcery for 3 minutes. <br> Sorcery: Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.",
      "index": 54,
    },

    {
      "id": 2140,
      "name": "Elixir of Wrath",
      "cost": 500,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Level 9 require to purchase. <br> Click to Consume: Grants +30 Attack Damage and Bloodlust for 3 minutes. <br> Bloodlust: Dealing physical damage to champions heals for 15% of the damage dealt.",
      "index": 55,
    },

    {
      "id": 2301,
      "name": "Eye of the Watchers",
      "cost": 2200,
      "stats": [200,0,0,25,0,100,0,0,0,0,0,0,0,0,0,0,2,10,0],
      "desc": "UNIQUE Passive - Tribute: Spells and basic attacks against champions or building deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds. <br> UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop. <br> Limited to 1 Gold Income item.",
      "index": 56,
    },

    {
      "id": 2302,
      "name": "Eye of the Oasis",
      "cost": 1900,
      "stats": [200,0,0,0,100,100,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive - Favor: Being near a minion's death without dealing the killing blow grants 6 Gold and 10 Health. <br> UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop. <br> Limited to 1 Gold Income item.",
      "index": 57,
    },

    {
      "id": 2303,
      "name": "Eye of the Equinox",
      "cost": 2300,
      "stats": [500,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,2,10,0],
      "desc": "UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges. <br> UNIQUE Passive - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop. <br> Limited to 1 Gold Income item.",
      "index": 58,
    },

    {
      "id": 3001,
      "name": "Abyssal Scepter",
      "cost": 2750,
      "stats": [0,0,0,60,0,0,0,0,0,0,0,60,0,0,0,0,0,10,0],
      "desc": "UNIQUE Aura: Nearby enemy champions take 10% more magic damage.",
      "index": 59,
    },

    {
      "id": 3003,
      "name": "Archangel's Staff",
      "cost": 3100,
      "stats": [0,250,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Awe: Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent. <br> UNIQUE Passive - Mana Charge: Grants +8 maximum Mana (max +750 Mana) for each spell cast or Mana expenditure (occurs up to 2 times every 8 seconds). <br> Transforms into Seraph's Embrace at +750 Mana.",
      "index": 60,
    },

    {
      "id": 3004,
      "name": "Manamune",
      "cost": 2400,
      "stats": [0,250,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent. <br> UNIQUE Passive - Mana Charge: Grants +4 maximum Mana (max +750 Mana) for each basic attack, spell cast or Mana expenditure (occurs up to 2 times every 8 seconds). <br> Transforms into Muramana at +750 Mana.",
      "index": 61,
    },

    {
      "id": 3006,
      "name": "Berserker's Greaves",
      "cost": 900,
      "stats": [0,0,0,0,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Enhanced Movement: +45 Movement Speed",
      "index": 62,
    },

    {
      "id": 3009,
      "name": "Boots of Swiftness",
      "cost": 900,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Enhanced Movement: +55 Movement Speed <br> UNIQUE Passive - Slow Resist: Movement slowing effects are reduced by 25%.",
      "index": 63,
    },

    {
      "id": 3010,
      "name": "Catalyst of Aeons",
      "cost": 1100,
      "stats": [225,300,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Eternity: 15% of damage taken from champions is gained as Mana. <br> Spending Mana restores 20% of the cost as Health, up to 15 per spell cast. <br> (Toggled Spells heal for a maximum of 15 per second).",
      "index": 64,
    },

    {
      "id": 3020,
      "name": "Sorcerer's Shoes",
      "cost": 1100,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0],
      "desc": "UNIQUE Passive - Enhanced Movement: +45 Movement Speed",
      "index": 65,
    },

    {
      "id": 3022,
      "name": "Frozen Mallet",
      "cost": 3100,
      "stats": [700,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Icy: Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 30% slow for ranged attacks).",
      "index": 66,
    },

    {
      "id": 3024,
      "name": "Glacial Shroud",
      "cost": 1100,
      "stats": [0,250,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +10% Cooldown Reduction",
      "index": 67,
    },

    {
      "id": 3025,
      "name": "Iceborn Gauntlet",
      "cost": 2700,
      "stats": [0,500,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,20,0],
      "desc": "UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown). <br> Size of zone increases with bonus armor.",
      "index": 68,
    },

    {
      "id": 3026,
      "name": "Guardian Angel",
      "cost": 2400,
      "stats": [0,0,0,0,0,0,0,0,0,0,60,45,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Upon taking lethal damage, restores the greater of 700 Health or 30% of maximum Health and 30% of maximum Mana after 4 seconds of stasis (300 second cooldown).",
      "index": 69,
    },

    {
      "id": 3027,
      "name": "Rod of Ages",
      "cost": 2700,
      "stats": [300,300,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Passive: Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks). <br> UNIQUE Passive - Eternity: 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
      "index": 70,
    },

    {
      "id": 3028,
      "name": "Chalice of Harmony",
      "cost": 800,
      "stats": [0,0,0,0,0,50,0,0,0,0,0,30,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Harmony: Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.",
      "index": 71,
    },

    {
      "id": 3030,
      "name": "Hextech GLP-800",
      "cost": 3000,
      "stats": [300,400,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Eternity: 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast. <br> UNIQUE Active - Frost Bolt: Fires a spray of icy bolts that explode, dealing 100 - 200 (+35% of your Ability Power) magic damage to all enemies hit. (40 second cooldown, shared with other Hextech items). <br> Enemies hit are slowed by 65% decaying over 0.5 seconds.",
      "index": 72,
    },

    {
      "id": 3031,
      "name": "Infinity Edge",
      "cost": 3600,
      "stats": [0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
      "desc": "UNIQUE Passive: Critical strike bonus damage is increased by 50%.",
      "index": 73,
    },

    {
      "id": 3033,
      "name": "Mortal Reminder",
      "cost": 2700,
      "stats": [0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Executioner: Physical damage inflicts Grievous Wounds on enemy champions for 5 seconds. <br> UNIQUE Passive - Last Whisper: +45% Bonus Armor Penetration.",
      "index": 74,
    },

    {
      "id": 3034,
      "name": "Giant Slayer",
      "cost": 1000,
      "stats": [0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Giant Slayer: Grants up to +10% physical damage against enemy champions with greater maximum Health than you (+1% damage per 100 Health difference, maxing at 1000 Health difference).",
      "index": 75,
    },

    {
      "id": 3035,
      "name": "Last Whisper",
      "cost": 1300,
      "stats": [0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Last Whisper: +45% Bonus Armor Penetration",
      "index": 76,
    },

    {
      "id": 3036,
      "name": "Lord Dominik's Regards",
      "cost": 2700,
      "stats": [0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Giant Slayer: Grants up to +15% physical damage against enemy champions with greater maximum Health than you (+1.5 damage per 100 Health difference, maxing at 1000 Health difference). <br> UNIQUE Passive - Last Whisper: +45% Bonus Armor Penetration",
      "index": 77,
    },

    {
      "id": 3040,
      "name": "Seraph's Embrace",
      "cost": 0,
      "stats": [0,1000,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Awe: Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent. <br> UNIQUE Active - Mana Shield: Consumes 20% of current Mana to grant a shield that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).",
      "index": 78,
    },

    {
      "id": 3041,
      "name": "Mejai's Soulstealer",
      "cost": 1400,
      "stats": [0,200,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Dread: Grants +5 Ability Power per Glory. Grants 10% Movement Speed if you have at least 15 Glory. <br> UNIQUE Passive - Do or Die: Grants 4 Glory for a champion kill or 2 Glory for an assist, up to 25 Glory total. Lose 10 stacks of Glory upon dying.",
      "index": 79,
    },

    {
      "id": 3043,
      "name": "Muramana",
      "cost": 0,
      "stats": [0,1000,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent. <br> UNIQUE Passive - Shock: Single target spells and attacks (on hit) on Champions consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.",
      "index": 80,
    },

    {
      "id": 3044,
      "name": "Phage",
      "cost": 1250,
      "stats": [200,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Rage: Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.",
      "index": 81,
    },

    {
      "id": 3046,
      "name": "Phantom Dancer",
      "cost": 2550,
      "stats": [0,0,0,0,0,0,5,45,0,0,0,0,0,0,0,0,0,0,30],
      "desc": "UNIQUE Passive - Spectral Waltz: While within 550 units of an enemy champion you can see, +7 Movement Speed and you can move through units. <br> UNIQUE Passive - Lament: The last champion hit deals 12% less damage to you (ends after 10 seconds of not hitting).",
      "index": 82,
    },

    {
      "id": 3047,
      "name": "Ninja Tabi",
      "cost": 1100,
      "stats": [0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Blocks 12% of the damage from basic attacks. <br> UNIQUE Passive - Enhanced Movement: +45 Movement Speed",
      "index": 83,
    },

    {
      "id": 1409,
      "name": "Tracker's Knife: Cinderhulk",
      "cost": 2625,
      "stats": [400,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> +15% Bonus Health <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 2 charges which refill upon visiting the shop. <br> UNIQUE Passive - Immolate: Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters.",
      "index": 84,
    },

    {
      "id": 3050,
      "name": "Zeke's Harbinger",
      "cost": 2250,
      "stats": [0,250,0,50,0,0,0,0,0,0,30,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Active - Conduit: Bind to target ally (60 second cooldown). <br> UNIQUE Passive: When within 1000 units of each other, you and you ally generate Charges. Attack or casting spells generates extra Charges. At 100 Charges, causing damage consumes them, increasing your and your Ally's Ability Power by 20% and Critical Strike Chance by 50% for 8 seconds.",
      "index": 85,
    },

    {
      "id": 3056,
      "name": "Ohmwrecker",
      "cost": 2650,
      "stats": [300,0,0,0,150,0,0,0,0,0,50,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Active: Prevents nearby enemy turrets from attacking for 3 seconds (120 second cooldown). This effect cannot be used against the same turret more than once every 8 seconds. <br> UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets (including fallen turrets) and Void Gates.",
      "index": 86,
    },

    {
      "id": 3057,
      "name": "Sheen",
      "cost": 1050,
      "stats": [0,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown).",
      "index": 87,
    },

    {
      "id": 3060,
      "name": "Banner of Command",
      "cost": 2200,
      "stats": [0,400,0,0,0,0,0,0,0,0,60,30,0,0,0,0,0,10,0],
      "desc": "UNIQUE Active - Promote: Greatly increases the power of a lane minion and grants it immunity to magic damage (120 second cooldown).",
      "index": 88,
    },

    {
      "id": 3065,
      "name": "Spirit Visage",
      "cost": 2800,
      "stats": [500,0,0,0,200,0,0,0,0,0,0,55,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive: Increases all healing received by 25%.",
      "index": 89,
    },

    {
      "id": 3067,
      "name": "Kindlegem",
      "cost": 800,
      "stats": [200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +10% Cooldown Reduction",
      "index": 90,
    },

    {
      "id": 3068,
      "name": "Sunfire Cape",
      "cost": 2900,
      "stats": [500,0,0,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Immolate: Deals 25 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
      "index": 91,
    },

    {
      "id": 3069,
      "name": "Talisman of Ascension",
      "cost": 2400,
      "stats": [0,0,0,0,150,75,0,0,0,0,45,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets, and Void Gates. <br> UNIQUE Passive - Favor: Being near a minion's death without dealing the killing blow grants 6 Gold and 10 Health. <br> UNIQUE Active: Grants nearby allies +40% Movement Speed for 3 seconds (60 second cooldown). <br> Limited to 1 Gold Income Item.",
      "index": 92,
    },

    {
      "id": 3070,
      "name": "Tear of the Goddess",
      "cost": 750,
      "stats": [0,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Awe: Refunds 15% of Mana spent. <br> UNIQUE Passive - Mana Charge: Grants +4 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds). <br> Caps at +750 Mana.",
      "index": 93,
    },

    {
      "id": 3071,
      "name": "The Black Cleaver",
      "cost": 3000,
      "stats": [400,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0],
      "desc": "UNIQUE Passive: Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 5% for 6 seconds (stacks up to 6 times, up to 30%). <br> UNIQUE Passive - Rage: Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.",
      "index": 94,
    },

    {
      "id": 3072,
      "name": "The Bloodthirster",
      "cost": 3700,
      "stats": [0,0,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +20% Life Steal <br> UNIQUE Passive: Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level. <br> This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.",
      "index": 95,
    },

    {
      "id": 3074,
      "name": "Ravenous Hydra",
      "cost": 3500,
      "stats": [0,0,75,0,100,0,0,0,12,0,0,0,0,0,0,0,0,0,0],
      "desc": "Passive: 50% of total Life Steal applies to damage dealt by this item. <br> UNIQUE Passive - Cleave: Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage). <br> UNIQUE Active - Crescent: Deals 60% to 100% of total Attack Damage as physical damage to nearby units (closest enemies take the most damage) (10 second cooldown).",
      "index": 96,
    },

    {
      "id": 3075,
      "name": "Thornmail",
      "cost": 2350,
      "stats": [0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Upon being hit by a basic attack, reflects magic damage back to the attacker equal to 25% of your bonus Armor plus 15% of the incoming damage.",
      "index": 97,
    },

    {
      "id": 3077,
      "name": "Tiamat",
      "cost": 1200,
      "stats": [0,0,20,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Cleave: Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage). <br> UNIQUE Active - Crescent: Deals 60% to 100% of total Attack Damage as physical damage to naerby enemy units (enemies closest to the target take the most damage) (10 second cooldown).",
      "index": 98,
    },

    {
      "id": 3078,
      "name": "Trinity Force",
      "cost": 3733,
      "stats": [250,250,25,0,0,0,5,40,0,0,0,0,0,0,0,0,0,20,0],
      "desc": "UNIQUE Passive - Rage: Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions. <br> UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).",
      "index": 99,
    },

    {
      "id": 3082,
      "name": "Warden's Mail",
      "cost": 1000,
      "stats": [0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Cold Steel: When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 second.",
      "index": 100,
    },

    {
      "id": 3083,
      "name": "Warmog's Armor",
      "cost": 2850,
      "stats": [800,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +10% Cooldown Reduction <br> UNIQUE Passive: Grants Warmog's Heart if you have at least 3000 maximum Health. <br> Warmog's Heart: Restores 15% of maximum Health every 5 seconds if damage hasn't been taken within 8 seconds.",
      "index": 101,
    },

    {
      "id": 3084,
      "name": "Overlord's Bloodmail",
      "cost": 2550,
      "stats": [800,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Upon champion kill or assist, restores 300 Health over 5 seconds.",
      "index": 102,
    },

    {
      "id": 3085,
      "name": "Runaan's Hurricane",
      "cost": 2600,
      "stats": [0,0,0,0,0,0,7,40,0,0,0,0,0,0,0,0,0,0,30],
      "desc": "UNIQUE Passive - Wind's Fury: When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (25% of Attack Damage) physical damage. Bolts can critically strike and apply on hit effects. <br> UNIQUE Passive: Basic attacks deal an additional 15 physical damage on hit.",
      "index": 103,
    },

    {
      "id": 3086,
      "name": "Zeal",
      "cost": 1300,
      "stats": [0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,20],
      "desc": "UNIQUE Passive: +5% Movement Speed",
      "index": 104,
    },

    {
      "id": 3087,
      "name": "Statikk Shiv",
      "cost": 2600,
      "stats": [0,0,0,0,0,0,5,35,0,0,0,0,0,0,0,0,0,0,30],
      "desc": "Passive: Moving and attacking will make an attack Energized. <br> UNIQUE Passive - Shiv Lightning: Your Energized attacks deal 50-120 bonus magic damage (based on level) to up to 5 targets on hit (deals 120% bonus damage to minions and can critically strike).",
      "index": 105,
    },

    {
      "id": 3089,
      "name": "Rabadon's Deathcap",
      "cost": 3800,
      "stats": [0,0,0,120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Increases Ability Power by 35%.",
      "index": 106,
    },

    {
      "id": 3090,
      "name": "Wooglet's Witchcap",
      "cost": 3500,
      "stats": [0,0,0,100,0,0,0,0,0,0,45,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Increases Ability Power by 25% <br> UNIQUE Active: Champion becmoes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spel0, or use items during this time (120 second cooldown).",
      "index": 107,
    },

    {
      "id": 3091,
      "name": "Wit's End",
      "cost": 2500,
      "stats": [0,0,0,0,0,0,0,40,0,0,0,40,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Basic attacks deal 40 bonus magic damage on hit. <br> UNIQUE Passive: Basic attacks steal 5 Magic Resist from the target on hit (stacks up to 5 times).",
      "index": 108,
    },

    {
      "id": 3092,
      "name": "Frost Queen's Claim",
      "cost": 2200,
      "stats": [0,0,0,50,0,75,0,0,0,0,0,0,0,0,0,0,2,10,0],
      "desc": "UNIQUE Passive - Tribute: Spells and basic attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds. <br> UNIQUE Active: Summon 2 icy ghosts for 6 seconds that seek out nearby enemy champions. Ghosts reveal enemies on contact and reduce their Movement Speed by 40% for between 2 and 5 seconds based on how far the ghosts have traveled (90 second cooldown). <br> Limited to 1 Gold Income Item.",
      "index": 109,
    },

    {
      "id": 3094,
      "name": "Rapid Firecannon",
      "cost": 2600,
      "stats": [0,0,0,0,0,0,5,30,0,0,0,0,0,0,0,0,0,0,30],
      "desc": "Passive: Moving and attacking will make an attack Energized. <br> UNIQUE Passive - Firecannon: Your Energized attacks gain 35% bonus Range (+150 range maximum) and deal 50-160 bonus magic damage (based on level) on hit. <br> Energized attacks function on structures.",
      "index": 110,
    },

    {
      "id": 3096,
      "name": "Nomad's Medallion",
      "cost": 850,
      "stats": [0,0,0,0,25,75,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive - Favor: Being near a minion's death without dealing the killing blow grants 6 Gold and 10 Health. <br> Limited to 1 Gold Income Item.",
      "index": 111,
    },

    {
      "id": 3097,
      "name": "Targon's Brace",
      "cost": 850,
      "stats": [0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,2,0,0],
      "desc": "UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 200 (+10 per level) Health. Killing a minion heals the owner and the nearest allied champion for 40 Health and grants them kill Gold. <br> These effects require a nearby ally. Recharges every 30 seconds. Max 3 charges. <br> Limited to 1 Gold Income Item.",
      "index": 112,
    },

    {
      "id": 3098,
      "name": "Frostfang",
      "cost": 850,
      "stats": [0,0,0,15,0,75,0,0,0,0,0,0,0,0,0,0,2,0,0],
      "desc": "UNIQUE Passive - Tribute: Spells and basic attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds. <br> Limited to 1 Gold Income Item.",
      "index": 113,
    },

    {
      "id": 3100,
      "name": "Lich Bane",
      "cost": 3200,
      "stats": [0,250,0,80,0,0,7,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).",
      "index": 114,
    },

    {
      "id": 3101,
      "name": "Stinger",
      "cost": 1100,
      "stats": [0,0,0,0,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +10% Cooldown Reduction",
      "index": 115,
    },

    {
      "id": 3102,
      "name": "Banshee's Veil",
      "cost": 2450,
      "stats": [300,0,0,0,100,0,0,0,0,0,0,70,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.",
      "index": 116,
    },

    {
      "id": 3104,
      "name": "Lord Van Damm's Pillager",
      "cost": 3000,
      "stats": [300,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive - Ashes to Ashes: Controlling the nearest Altar sets you aflame, dealing 25 (+1 per champion level) magic damage per second to nearby enemies (deals 50% bonus damage to minions and monsters). Controller the furthest Altar causes your basic attacks to burn targets for up to 114 true damage (based on champion level) over 3 seconds.",
      "index": 117,
    },

    {
      "id": 3105,
      "name": "Aegis of the Legion",
      "cost": 1100,
      "stats": [0,0,0,0,0,0,0,0,0,0,30,30,0,0,0,0,0,0,0],
      "desc": "",
      "index": 118,
    },

    {
      "id": 3107,
      "name": "Redemption",
      "cost": 2100,
      "stats": [300,0,0,0,75,125,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive: +10% Heal and Shield Power <br> UNIQUE Active: Target and area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 40 (+25 per level of target) Health, burn enemy champions for 10% of their maximum Health as true damage and deal 250 true damage to enemy minions (120 second cooldown). <br> Can be used while dead.",
      "index": 119,
    },

    {
      "id": 3108,
      "name": "Fiendish Codex",
      "cost": 900,
      "stats": [0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +10% Cooldown Reduction",
      "index": 120,
    },

    {
      "id": 3109,
      "name": "Knight's Vow",
      "cost": 2300,
      "stats": [400,0,0,0,100,0,0,0,0,0,40,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Active: Designate an allied champion as your Partner (90 second cooldown). <br> UNIQUE Passive: If your Partner is nearby, gain +20 additional Armor and +15% Movement Speed towards them. <br> UNIQUE Passive: If your Partner is nearby, heal for 12% of the damage your Partner deals to champions and redirect 12% of the damage your Partner takes from champions to you as true damage (healing and damage redirection are reduced by 50% if you are ranged).",
      "index": 121,
    },

    {
      "id": 3110,
      "name": "Frozen Heart",
      "cost": 2700,
      "stats": [0,400,0,0,0,0,0,0,0,0,90,0,0,0,0,0,0,20,0],
      "desc": "UNIQUE Aura: Reduces the Attack Speed of nearby enemies by 15%.",
      "index": 122,
    },

    {
      "id": 3111,
      "name": "Mercury's Treads",
      "cost": 1100,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Enhanced Movement: +45 Movement Speed <br> UNIQUE Passive - Tenacity: Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 30%.",
      "index": 123,
    },

    {
      "id": 3112,
      "name": "Guardian's Orb",
      "cost": 950,
      "stats": [150,0,0,30,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Guardian's Item.",
      "index": 124,
    },

    {
      "id": 3113,
      "name": "Aether Wisp",
      "cost": 850,
      "stats": [0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +5 Movement Speed",
      "index": 125,
    },

    {
      "id": 3114,
      "name": "Forbidden Idol",
      "cost": 800,
      "stats": [0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +10% Cooldown Reduction <br> UNIQUE Passive: +8% Heal and Shield Power",
      "index": 126,
    },

    {
      "id": 3115,
      "name": "Nashor's Tooth",
      "cost": 3000,
      "stats": [0,0,0,80,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +20% Cooldown Reduction <br> UNIQUE Passive: Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.",
      "index": 127,
    },

    {
      "id": 3116,
      "name": "Rylai's Crystal Scepter",
      "cost": 2600,
      "stats": [300,0,0,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Damaging spells and abilities reduce enemy movement speed by 20% for 1 second.",
      "index": 128,
    },

    {
      "id": 3117,
      "name": "Boots of Mobility",
      "cost": 900,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Enhanced Movement: +25% Movement Speed. Increases to +115 Movement Speed when out of combat for 5 seconds.",
      "index": 129,
    },

    {
      "id": 3122,
      "name": "Wicked Hatchet",
      "cost": 1200,
      "stats": [0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
      "desc": "UNIQUE Passive: Critical Strikes cause your target to bleed for an additional 60% of your bonus Attack Damage as magic damage over 3 seconds.",
      "index": 130,
    },

    {
      "id": 3123,
      "name": "Executioner's Calling",
      "cost": 800,
      "stats": [0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Executioner: Physical damage inflicts Grievous Wounds on enemy champions for 3 seconds.",
      "index": 131,
    },

    {
      "id": 3124,
      "name": "Guinsoo's Rageblade",
      "cost": 3600,
      "stats": [0,0,35,50,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Passive: Basic attacks deal an additional 15 magic damage on hit. <br> UNIQUE Passive: Basic attacks grant +8% Attack Speed, +3 Attack Damage, and +4 Ability Power for 5 seconds (stacks up to 6 times). While you have 6 stacks, gain Guinsoo's Rage. <br> Guinsoo's Rage: Every other basic attack will trigger on hit effects an additional time.",
      "index": 132,
    },

    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "cost": 1100,
      "stats": [0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +10% Cooldown Reduction",
      "index": 133,
    },

    {
      "id": 3134,
      "name": "Serrated Dirk",
      "cost": 1100,
      "stats": [0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +10 Lethality <br> UNIQUE Passive: +20 Movement Speed out of Combat.",
      "index": 134,
    },

    {
      "id": 3135,
      "name": "Void Staff",
      "cost": 2650,
      "stats": [0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +35% Magic Penetration.",
      "index": 135,
    },

    {
      "id": 3136,
      "name": "Haunting Guise",
      "cost": 1500,
      "stats": [200,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Eyes of Pain: +15 Magic Penetration",
      "index": 136,
    },

    {
      "id": 3137,
      "name": "Dervish Blade",
      "cost": 2700,
      "stats": [0,0,0,0,0,0,0,50,0,0,0,45,0,0,0,0,0,10,0],
      "desc": "UNIQUE Active - Quicksilver: Removes all debuffs, and if the champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
      "index": 137,
    },

    {
      "id": 3139,
      "name": "Mercurial Scimitar",
      "cost": 3600,
      "stats": [0,0,65,0,0,0,0,0,10,0,0,35,0,0,0,0,0,0,0],
      "desc": "UNIQUE Active - Quicksilver: Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
      "index": 138,
    },

    {
      "id": 3140,
      "name": "Quicksilver Sash",
      "cost": 1300,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0],
      "desc": "UNIQUE Active - Quicksilver: Removes all crowd control debuffs (90 second cooldown).",
      "index": 139,
    },

    {
      "id": 3142,
      "name": "Youmuu's Ghostblade",
      "cost": 2900,
      "stats": [0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive: +15 Lethality <br> UNIQUE Passive: +20 Movement Speed out of Combat <br> UNIQUE Active: Grants +20% Movement Speed for 6 seconds (45 second cooldown).",
      "index": 140,
    },

    {
      "id": 3143,
      "name": "Randuin's Omen",
      "cost": 2900,
      "stats": [500,0,0,0,0,0,0,0,0,0,60,0,0,0,0,0,0,0,0],
      "desc": "-10% Damage taken from Critical Strikes <br> UNIQUE Passive - Cold Steel: When hit by basic attacks, reduces the attacker's Attack Speed by 15% (1 second duration). <br> UNIQUE Active: Slows the Movement Speed of nearby enemy units by 35% for 4 seconds (60 second cooldown).",
      "index": 141,
    },

    {
      "id": 3144,
      "name": "Bilgewater Cutlass",
      "cost": 1500,
      "stats": [0,0,25,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Active: Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).",
      "index": 142,
    },

    {
      "id": 3145,
      "name": "Hextech Revolver",
      "cost": 1050,
      "stats": [0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Magic Bolt: Damaging an enemy champion with a basic attack shocks them for 50 - 125 bonus magic damage (40 second cooldown, shared with other Hextech items). <br> Magic Bolt's cooldown is reduced by Active Item cooldown reduction.",
      "index": 143,
    },

    {
      "id": 3146,
      "name": "Hextech Gunblade",
      "cost": 3400,
      "stats": [0,0,40,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage. <br> UNIQUE Active - Lightning Bolt: Deals 175 - 250 (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other Hextech items).",
      "index": 144,
    },

    {
      "id": 3147,
      "name": "Duskblade of Draktharr",
      "cost": 3250,
      "stats": [0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +15 Lethality <br> UNIQUE Passive: +20 Movement Speed out of Combat <br> UNIQUE Passive - Nightstalker: After being unseen for at least 1 second, your next Basic Attack against an enemy champion will deal 75 (+200% Lethality) true damage on-hit (lasts for 4 seconds after being seen by an enemy champion). <br> UNIQUE Passive - Blackout: When spotted by an enemy ward, causes a blackout for 8 seconds, revealing invisible traps and revealing / disabling wards (90 second cooldown).",
      "index": 145,
    },

    {
      "id": 3151,
      "name": "Liandry's Tormet",
      "cost": 3100,
      "stats": [300,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Eyes of Pain: +15 Magic Penetration <br> UNIQUE Passive: Spells burn enemies for 3 seconds, dealing bonus magic damage equal to 2% of their current Health per second. Burn damage is doubled against movement-impaired units.",
      "index": 146,
    },

    {
      "id": 3152,
      "name": "Hextech Protobelt-01",
      "cost": 2500,
      "stats": [300,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Active - Fire Bolt: Dash forward and unleash a nova of fire bolts that deal 75 - 150 (+25% of your Ability Power) as magic damage (40 second cooldown, shared with other Hextech items). <br> Champions and Monsters hit by multiple fire bolts take 10% damage per additional bolt.",
      "index": 147,
    },

    {
      "id": 3153,
      "name": "Blade of the Ruined King",
      "cost": 3300,
      "stats": [0,0,40,0,0,0,0,25,15,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Basic attacks deal 8% of the target's current Health in bonus physical damage (max 60 vs. monsters and minions) on hit. Life Steal applies to this damage. <br> UNIQUE Active: Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).",
      "index": 148,
    },

    {
      "id": 3155,
      "name": "Hexdrinker",
      "cost": 1300,
      "stats": [0,0,20,0,0,0,0,0,0,0,0,35,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Lifeline: Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 110 to 280 (based on level) magic damage for 5 seconds (90 second cooldown).",
      "index": 149,
    },

    {
      "id": 3156,
      "name": "Maw of Malmortius",
      "cost": 3250,
      "stats": [0,0,50,0,0,0,0,0,0,0,0,45,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive - Lifeline: Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs magic damage equal to 300 +1 per bonus Magic Resistance for 5 seconds (90 second cooldown). <br> Lifegrip: When Lifeline triggers, gain +20 Attack Damage, +10 Spell Vamp and +10% Life Steal until out of combat.",
      "index": 150,
    },

    {
      "id": 3157,
      "name": "Zhonya's Hourglass",
      "cost": 2900,
      "stats": [0,0,0,70,0,0,0,0,0,0,45,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Active - Stasis: Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spel0, or use items during this time (120 second cooldown).",
      "index": 151,
    },

    {
      "id": 3158,
      "name": "Ionian Boots of Lucidity",
      "cost": 900,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +10% Cooldown Reduction <br> UNIQUE Passive - Enhanced Movement: +45 Movement Speed <br> UNIQUE Passive: Reduces Summoner Spell cooldowns by 10%",
      "index": 152,
    },

    {
      "id": 3165,
      "name": "Morellonomicon",
      "cost": 2900,
      "stats": [0,400,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +20% Cooldown Reduction <br> UNIQUE Passive: Dealing magic damage to champions below 35% Health inflicts Grievous Wounds for 8 seconds. <br> UNIQUE Passive: Kills and Assists restore 20% of your maximum Mana.",
      "index": 153,
    },

    {
      "id": 3170,
      "name": "Moonflair Spellblade",
      "cost": 2500,
      "stats": [0,0,0,50,0,0,0,0,0,0,50,50,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Tenacity: Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.",
      "index": 154,
    },

    {
      "id": 3174,
      "name": "Athene's Unholy Grail",
      "cost": 2100,
      "stats": [0,0,0,40,0,75,0,0,0,0,0,30,0,0,0,0,0,20,0],
      "desc": "UNIQUE Passive: Gain 20% of the premitigation damage dealt to champions as Blood Charges, up to 100 - 250 max. Healing or shielding another ally consumes charges to heal them, up to the original effect amount. <br> UNIQUE Passive - Harmony: Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.",
      "index": 155,
    },

    {
      "id": 3052,
      "name": "Jaurim's Fist",
      "cost": 1200,
      "stats": [150,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Killing a unit grants 5 maximum Health. This bonus stacks up to 30 times.",
      "index": 156,
    },

    {
      "id": 3181,
      "name": "Sanguine Blade",
      "cost": 2400,
      "stats": [0,0,45,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Basic attacks grant +6 Attack Damage and +1% Life Steal for 8 seconds on hit (effect stacks up to 5 times).",
      "index": 157,
    },

    {
      "id": 3184,
      "name": "Guardian's Hammer",
      "cost": 950,
      "stats": [150,0,15,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Guardian's Item.",
      "index": 158,
    },

    {
      "id": 3185,
      "name": "The Lightbringer",
      "cost": 2350,
      "stats": [0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30],
      "desc": "UNIQUE Passive: Critical Strikes cause enemies to bleed for an additional 90% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration. <br> UNIQUE Passive - Trap Detection: Nearby stealthed enemy traps are revealed. <br> UNIQUE Active - Hunter's Sight: A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
      "index": 159,
    },

    {
      "id": 3187,
      "name": "Arcane Sweeper",
      "cost": 2150,
      "stats": [225,250,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,20,0],
      "desc": "UNIQUE Passive - Trap Detection: Grants True Sight of nearby enemy traps. <br> UNIQUE Active - Hunter's Sight: An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions in the area for 3 seconds (60 second cooldown).",
      "index": 160,
    },

    {
      "id": 3190,
      "name": "Locket of the Iron Solari",
      "cost": 2200,
      "stats": [0,0,0,0,0,0,0,0,0,0,30,60,0,0,0,0,0,0,0],
      "desc": "UNIQUE Active: Grants a decaying shield to nearby allies for 2.5 seconds that absorbs up to 35 (+35 per level) damage (90 second cooldown).",
      "index": 161,
    },

    {
      "id": 3191,
      "name": "Seeker's Armguard",
      "cost": 1200,
      "stats": [0,0,0,20,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.",
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
      "name": "Spectre's Cowl",
      "cost": 1200,
      "stats": [250,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Grants 150% Base Health Regen for up to 10 seconds after taking  damage from an enemy champion.",
      "index": 167,
    },

    {
      "id": 3222,
      "name": "Mikael's Crucible",
      "cost": 2100,
      "stats": [0,0,0,0,0,100,0,0,0,0,0,40,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive: +20% Heal and Shield Power <br> UNIQUE Passive - Harmony: Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen. <br> UNIQUE Active: Cleanses all stuns, roots, taunts, fears, silences, and slows on an allied champion and grants them slow immunity for 2 seconds (120 second cooldown). <br> Successfully cleansing an effect this way grants the ally 40% movement speed for 2 seconds.",
      "index": 168,
    },

    {
      "id": 3252,
      "name": "Poacher's Dirk",
      "cost": 750,
      "stats": [0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +20 Movement Speed out of Combat <br> UNIQUE Passive: After poaching 3 large monsters from the enemy jungle (60 second cooldown), transforms into a Serrated Dirk.",
      "index": 169,
    },

    {
      "id": 3285,
      "name": "Luden's Echo",
      "cost": 3200,
      "stats": [0,0,0,100,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.",
      "index": 170,
    },

    {
      "id": 3301,
      "name": "Ancient Coin",
      "cost": 350,
      "stats": [0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,5,0],
      "desc": "UNIQUE Passive - Favor: Being near a minion's death without dealing the killing blow grants 4 Gold and 5 Health. <br> Limited to 1 Gold Income Item.",
      "index": 171,
    },

    {
      "id": 3302,
      "name": "Relic Shield",
      "cost": 350,
      "stats": [75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],
      "desc": "UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 195 (+5 per level) Health. Killing a minion heals the owner and the nearest allied champion for 15 Health and grants them kill Gold. <br> These effects require a nearby ally. Recharges every 40 seconds. Max 2 charges. <br> Limited to 1 Gold Income Item.",
      "index": 172,
    },

    {
      "id": 3303,
      "name": "Spellthief's Edge",
      "cost": 350,
      "stats": [0,0,0,5,0,25,0,0,0,0,0,0,0,0,0,0,2,0,0],
      "desc": "UNIQUE Passive - Tribute: Spells and basic attacks against champions or buildings deal 10 additional damage and grant 8 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds. <br> Limited to 1 Gold Income Item.",
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
      "name": "Face of the Mountain",
      "cost": 2200,
      "stats": [450,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,2,10,0],
      "desc": "UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges. <br> UNIQUE Active: Grants a shield to you and an ally equal to 10% of your maximum Health for 4 seconds. After 4 seconds, the shields explode to slow nearby enemies by 40% for 2 seconds (60 second cooldown). Automatically targets the most wounded ally if cast upon self. <br> Limited to 1 Gold Income Item.",
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
      "name": "Sterak's Gage",
      "cost": 2600,
      "stats": [400,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Lifeline: Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain a rapidly decaying Shield for 30% of your maximum Health for 8 seconds (60 second cooldown). <br> Sterak's Fury: When Lifeline triggers, grow in size and strength, gaining +25% additional Base Attack Damage.",
      "index": 183,
    },

    {
      "id": 3504,
      "name": "Ardent Censer",
      "cost": 2300,
      "stats": [0,0,0,60,0,50,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive: +10% Heal and Shield Power <br> UNIQUE Passive: +8% Movement Speed <br> UNIQUE Passive: Your heals and shields on another allied champion grant them 20% - 35% Attack Speed and their attacks drain 20 - 35 health on hit for 6 seconds.",
      "index": 184,
    },

    {
      "id": 3508,
      "name": "Essence Reaver",
      "cost": 3600,
      "stats": [0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
      "desc": "UNIQUE Passive: +10% Cooldown Reduction <br> UNIQUE Passive: Gain increasingly more Cooldown Reduction from Critical Strike Chance provided by other items (maximum +20% additional Cooldown Reduction at 30% Critical Strike Chance). <br> UNIQUE Passive: Critical strikes restore 3% of your maximum Mana pool.",
      "index": 185,
    },

    {
      "id": 3512,
      "name": "Zz'Rot Portal",
      "cost": 2700,
      "stats": [0,0,0,0,125,0,0,0,0,0,55,55,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates. <br> UNIQUE Active: Spawns a Void Gate for 120 seconds (120 second cooldown). <br> Every 4 seconds the gate makes a Voidspawn. The first and every fourth Voidspawn gains 15% of maximum Health as damage.",
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
      "name": "Stalker's Blade",
      "cost": 1000,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item. <br> +10% Lifesteal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> UNIQUE Passive - Chilling Smite: Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds. <br> UNIQUE Passive - Tooth/Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience.",
      "index": 203,
    },

    {
      "id": 3711,
      "name": "Tracker's Knife",
      "cost": 1000,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. <br> UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 2 charges which refill upon visiting the shop.",
      "index": 204,
    },

    {
      "id": 3715,
      "name": "Skirmisher's Sabre",
      "cost": 1000,
      "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "Limited to 1 Jungle item <br> +10% Life Steal vs. Monsters <br> +180% Base Mana Regen while in Jungle <br> Passive - Challenging Smite: Smite can be cast on enemy champions, marking them for 4 seconds. While marked, the target is revealed, your basic attacks deal bonus true damage over 3 seconds, and their damage to you is reduced by 20%. <br> UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience.",
      "index": 205,
    },

    {
      "id": 3742,
      "name": "Dead Man's Plate",
      "cost": 2900,
      "stats": [500,0,0,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Dreadnought: While moving, build stacks of Momentum, increasing movement speed by up to 60 at 100 stacks. Momentum quickly decays while under the effects of a stun, taunt, fear, polymorph, or immobile effect, and slowly decays while slowed. <br> UNIQUE Passive - Crushing Blow: Basic attacks discharge all Momentum, dealing 1 physical damage per 2 stacks. If 100 stacks are discharged,damage is doubled and the target is slowed by 50% decaying over 1 second (melee only).",
      "index": 206,
    },

    {
      "id": 3748,
      "name": "Titanic Hydra",
      "cost": 3500,
      "stats": [450,0,35,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Cleave: Basic attacks deal 5 + 1% of your maximum health as bonus physical damage to your target and 40 + 2.5% of your maximum health as physical damage to other enemies in a cone on hit. <br> UNIQUE Active - Crescent: Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage in a larger cone for your next basic attack (20 second cooldown).",
      "index": 207,
    },

    {
      "id": 3751,
      "name": "Bami's Cinder",
      "cost": 1100,
      "stats": [280,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Immolate: Deals 5 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
      "index": 208,
    },

    {
      "id": 3800,
      "name": "Righteous Glory",
      "cost": 2500,
      "stats": [500,300,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive - Eternity: 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast. <br> UNIQUE Active: Grants 75% Movement Speed when moving towards enemies or enemy turrets for 4 seconds. After 3 seconds, a shockwave is emitted, slowing nearby enemy chapion Movement Speed by 75% for 2 seconds (90 second cooldown).",
      "index": 209,
    },

    {
      "id": 3801,
      "name": "Crystalline Bracer",
      "cost": 650,
      "stats": [200,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "",
      "index": 210,
    },

    {
      "id": 3802,
      "name": "Lost Chapter",
      "cost": 900,
      "stats": [0,300,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: Upon leveling up, restores 20% of your maximum Mana over 3 seconds.",
      "index": 211,
    },

    {
      "id": 3812,
      "name": "Death's Dance",
      "cost": 3500,
      "stats": [0,0,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
      "desc": "UNIQUE Passive: Dealing physical damage heals for 15% of the damage dealt. This is 33% as effective for Area of Effect damage. <br> UNIQUE Passive: 15% of the damage taken is dealt as a Bleed effect over 3 seconds instead.",
      "index": 212,
    },

    {
      "id": 3814,
      "name": "Edge of Night",
      "cost": 3100,
      "stats": [0,0,55,0,0,0,0,0,0,0,0,35,0,0,0,0,0,0,0],
      "desc": "UNIQUE Passive: +15 Lethality <br> UNIQUE Passive: +20 Movement Speed out of Combat <br> UNIQUE Active - Night's Veil: Channel for 1.5 seconds to grant a spell shield that blocks the next enemy ability. Last for 5 seconds (45 second cooldown).",
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

  image1filename = "./item/" + imagenumber + ".png"
  image2filename = "./item/" + imagenumber + ".png"
  combofilename = "./item/3647.png"

  function statsToString(imageindex){
    stringarray = [];
    statstring = "";
    for(i=0;i<stats.length;i++){
      if(item[imageindex].stats[i]!=0){
        stringarray[i] = "+ " + item[imageindex].stats[i] + " " + stats[i] + "<br>";
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

  function generateComboDesc(){
    comboDesc = ""
    item1desc = item[selectedItems[0]].desc.split(" ");
    item2desc = item[selectedItems[1]].desc.split(" ");
    arraysize = 0;
    if (item1desc.length>=item2desc.length){
      arraysize = item1desc.length;
    }
    else if (item2desc.length>item1desc.length){
      arraysize = item2desc.length;
    }
    wordfrom = 1;
    for(i=0;i<arraysize;i++){
      if (wordfrom == 1){
        comboDesc += item1desc[i] + " ";
        if ((item2desc[i+1] !== undefined) && (item1desc[i] !== item2desc[i+1])){
          wordfrom = 2;
        }
      }
      else if (wordfrom == 2){
        comboDesc += item2desc[i] + " ";
        if ((item1desc[i+1] !== undefined) && (item2desc[i] !== item1desc[i+1]))
        wordfrom = 1;
      }
    }
    return comboDesc;
  };

  function generateComboName(){
    comboName = "";
    itemname1 = item[selectedItems[0]].name.split(" ");
    itemname2 = item[selectedItems[1]].name.split(" ");
    arraysize = 0;
    if (itemname1.length>=itemname2.length){
      arraysize = itemname1.length;
    }
    else if (itemname2.length>itemname1.length){
      arraysize = itemname2.length;
    }
    wordfrom = 1;
    for(i=0;i<arraysize;i++){
      if (wordfrom == 1){
        comboName += itemname1[i] + " ";
        if (itemname2[i+1] !== undefined){
          wordfrom = 2;
        }
        else if ((i == itemname1.length-2) && (itemname2.length == 1)){
          comboName += itemname2[0] + " ";
          return comboName;
        }
      }
      else if (wordfrom == 2){
        comboName += itemname2[i] + " ";
        if (itemname1[i+1] !== undefined){
          wordfrom = 1;
        }
      }
    }
    return comboName;
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
    document.getElementById("name1").innerHTML = "";
    document.getElementById("cost1").innerHTML = null
    document.getElementById("stats1").innerHTML = null
    document.getElementById("desc1").innerHTML = ""
    document.getElementById("combo-image").src= "./item/3637.png";
    document.getElementById("namecombo").innerHTML = "";
    document.getElementById("costcombo").innerHTML = null
    document.getElementById("statscombo").innerHTML = null
    document.getElementById("desccombo").innerHTML = ""
  }
  //case where second is pressed while filled
  else if((item2select==true) && (imageindex == selectedItems[1])){
    item2select = false;
    selectedItems[1] = null;
    document.getElementById("item2-image").src= "./item/3637.png";
    document.getElementById("name2").innerHTML = "";
    document.getElementById("cost2").innerHTML = null
    document.getElementById("stats2").innerHTML = null
    document.getElementById("desc2").innerHTML = ""
    document.getElementById("combo-image").src= "./item/3637.png";
    document.getElementById("namecombo").innerHTML = "";
    document.getElementById("costcombo").innerHTML = null
    document.getElementById("statscombo").innerHTML = null
    document.getElementById("desccombo").innerHTML = ""
  }

  //case where both slots get filled, automatically create combo
  if((item1select==true) && (item2select==true)){
    combonametext = generateComboName();
    comboCost = item[selectedItems[0]].cost + item[selectedItems[1]].cost;
    combocosttext = comboCost;
    comboStats = [];
    for(i=0;i<stats.length;i++){
      comboStats[i] = item[selectedItems[0]].stats[i]+item[selectedItems[1]].stats[i];
    }
    combostatstext = comboStatsToString();
    combodesctext = generateComboDesc();
    document.getElementById("combo-image").src= combofilename;
    document.getElementById("namecombo").innerHTML = combonametext;
    document.getElementById("costcombo").innerHTML = combocosttext + " g";
    document.getElementById("statscombo").innerHTML = combostatstext;
    document.getElementById("desccombo").innerHTML = combodesctext;
  }


} //end pullstats

function resetStats(){
  document.getElementById("item1-image").src = "./item/3637.png";
  document.getElementById("name1").innerHTML = "Your first item goes here.";
  document.getElementById("cost1").innerHTML = null
  document.getElementById("stats1").innerHTML = null
  document.getElementById("desc1").innerHTML = ""
  document.getElementById("item2-image").src = "./item/3637.png";
  document.getElementById("name2").innerHTML = "Your second item goes here.";
  document.getElementById("cost2").innerHTML = null
  document.getElementById("stats2").innerHTML = null
  document.getElementById("desc2").innerHTML = ""
  document.getElementById("combo-image").src = "./item/3637.png";
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
