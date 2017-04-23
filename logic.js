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

var stats = ["Health", "Mana", "Attack Damage", "Ability Power",
  "% Base Health Regen","% Base Mana Regen", "Movespeed", "Attack Speed",
  "% Lifesteal", "% Omnivamp","Armor", "Magic Resistance",
  "Lethality", "% Armor Pen", "Magic Pen","% Magic Pen",
  "Gold/5", "Cooldown Reduction", "% Crit Chance"]


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
    "stats": null,
  	"desc": "noobs",
    "index": 0,
  },

  {
  	"id": 1001,
  	"name": "Boots of Speed",
    "cost": 300,
    "stats": [0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Speed increase!",
    "index": 1,
  },

  {
  	"id": 1004,
  	"name": "Faerie Charm",
    "cost": 125,
    "stats": [0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Mana ++",
    "index": 2,
  },

  {
  	"id": 1006,
  	"name": "Combined thing!",
    "cost": 425,
    "stats": [0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Combined output",
    "index": 3,
  },

  {
  	"id": 1011,
  	"name": "Giant's Belt",
    "cost": 1000,
    "stats": [380,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Big health thing",
    "index": 4,
  },

  {
  	"id": 1018,
  	"name": "Cloak of Agility",
    "cost": 800,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
  	"desc": "Invis cloak",
    "index": 5,
  },

  {
  	"id": 1026,
  	"name": "Blasting Wand",
    "cost": 850,
    "stats": [0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Magic wand",
    "index": 6,
  },

  {
  	"id": 1027,
  	"name": "Sapphire Crystal",
    "cost": 350,
    "stats": [0,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Mana thing",
    "index": 7,
  },

  {
  	"id": 1028,
  	"name": "Ruby Crystal",
    "cost": 400,
    "stats": [150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Health thing",
    "index": 8,
  },

  {
  	"id": 1029,
  	"name": "Cloth Armor",
    "cost": 300,
    "stats": [0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0],
  	"desc": "Armor thing",
    "index": 9,
  },

  {
  	"id": 1031,
  	"name": "Chain Vest",
    "cost": 800,
    "stats": [0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0],
  	"desc": "Armor big thing",
    "index": 10,
  },

  {
  	"id": 1033,
  	"name": "Null-Magic Mantle",
    "cost": 450,
    "stats": [0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0],
  	"desc": "Description of mantle",
    "index": 11,
  },

  {
  	"id": 1036,
  	"name": "Long Sword",
    "cost": 350,
    "stats": [0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Long sword",
    "index": 12,
  },

  {
  	"id": 1037,
  	"name": "Pickaxe",
    "cost": 875,
    "stats": [0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Dig thing",
    "index": 13,
  },

  {
  	"id": 1038,
  	"name": "B. F. Sword",
    "cost": 1300,
    "stats": [0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Big friend sward",
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
  	"desc": "Stab thing",
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
  	"desc": "Gloves",
    "index": 19,
  },

  {
  	"id": 1052,
  	"name": "Amplifying Tome",
    "cost": 435,
    "stats": [0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Its a book",
    "index": 20,
  },

  {
  	"id": 1053,
  	"name": "Vampiric Scepter",
    "cost": 900,
    "stats": [0,0,15,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Grr steal",
    "index": 21,
  },

  {
  	"id": 1054,
  	"name": "Doran's Shield",
    "cost": 450,
    "stats": [80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Passive: Restores 6 Health every 5 seconds.\nUNIQUE Passive: Blocks 8 damage from single target attacks and spells from champions.",
    "index": 22,
  },

/**
PUT ALL REST OF ITEMS HERE
**/

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


if((item1select==false) && (item2select==false)){
 //assign and display item 1
 image1nametext = item[imageindex].name
 image1costtext = item[imageindex].cost
 image1desctext = item[imageindex].desc
 image1statstext = statsToString(imageindex);
 document.getElementById("item1-image").src= image1filename;
 document.getElementById("name1").innerHTML = image1nametext;
 document.getElementById("cost1").innerHTML = image1costtext;
 document.getElementById("stats1").innerHTML = image1statstext;
 document.getElementById("desc1").innerHTML = image1desctext;
}

//
//  //assign and display item 2
//  image2nametext = item[2].name
//  image2costtext = item[2].cost
//  image2statstext = item[2].stats.length
//  image2desctext = item[2].desc
//  document.getElementById("item2-image").src= image2filename;
//  document.getElementById("name2").innerHTML = image2nametext;
//  document.getElementById("cost2").innerHTML = image2costtext;
//  document.getElementById("stats2").innerHTML = image2statstext;
//  document.getElementById("desc2").innerHTML = image2desctext;
//
//  //do something for combo item
//  imagecombonametext = item[3].name
//  imagecombocosttext = item[3].cost
//  imagecombostatstext = item[3].stats.length
//  imagecombodesctext = item[3].desc
//  // document.getElementById("combo-image").src= "";
//  document.getElementById("namecombo").innerHTML = comboName;
//  document.getElementById("costcombo").innerHTML = comboCost;
//  document.getElementById("statscombo").innerHTML = comboStats;
//  document.getElementById("desccombo").innerHTML = comboDesc;


 // document.getElementById("item2-image").src="item2.jpg";
 // document.getElementById("combo-image").src="combo.jpg";



}
