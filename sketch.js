var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png,images/fairyImage.png")
}

function setup() {
	createCanvas(800, 750);


	fairy = createSprite(200,200,100,100);
	fairy.addAnimation(fairyImg);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

 if(star.y>470 && starBody.position.y>470){

Matter.Body.setStatic(starBody,true);

 }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(KeyDown(RIGHT_ARROW)){

		fairy.x = fair.x+2

	}
	
}
