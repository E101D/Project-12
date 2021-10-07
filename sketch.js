var jaxon, jaxon_running;
var edges, road, road_invisible, road_invisible2, road_image;

function preload(){
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
  road_image = loadImage("path.png");
}
function setup(){
  createCanvas(400,400);
  
  road = createSprite(200,200,100,400);
  road.addImage("road", road_image);
  road.velocityY = 5;
  road.scale = 1.2;

  jaxon = createSprite(200,310,50,15);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.1;

  road_invisible = createSprite(15,200,20,400);
  road_invisible.visible = false;
  road_invisible2 = createSprite(385,200,20,400);
  road_invisible2.visible = false;

  edges = createEdgeSprites();
}

function draw() {
  background("white");
  drawSprites();

  if(road.y > 500){
    road.y = 125;
  }

  jaxon.x = mouseX;

  jaxon.collide(road_invisible);
  jaxon.collide(road_invisible2);
}
