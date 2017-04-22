console.log("JS File loaded")

function imgRedirect(destination){

 location.href = destination;

}

function pullStats(imagenumber){
  var dictionary =
  {
  	"id": 1001,
  	"name": "Boots of Speed",
    "cost": 300,
    "stats": [0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0],
  	"desc": "Limited to 1.\nUNIQUE Passive: Enhanced Movement: +25 Movement Speed",
  }
  //
  // {
  // 	"id": 2,
  // 	"name": "fairie charm",
  //   "cost": 125,
  //   "stats": [0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0],
  // 	"desc": "Gives mana regen",
  // },
  console.log(imagenumber)
  console.log("item stats")
  // console.log(dictionary.id)
  // console.log(dictionary.name)
  // console.log(item.id)

 // console.log("file name id number of item " + imagenumber)
 // console.log( "Limited to 1.\nUNIQUE Passive: Enhanced Movement: +25 Movement Speed")

}
