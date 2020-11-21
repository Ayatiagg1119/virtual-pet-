//Create variables here
var dog, happyDog, database, foodS, foodStock; 
function preload()

{
	//load images here
}

function setup() {
	createCanvas(500, 500);
  foodStock=database.ref("Food");
  foodStock.on("value", readStock); 
}


function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
   writeStock(foods);
   dog.addImage(dogHappy);
 }
  drawSprites();
  //add styles here
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){

  database.ref("/").update({
    Food:x
  })
}


