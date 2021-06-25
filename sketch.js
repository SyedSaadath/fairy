var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyimg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    bgsound=loadSound("sound/JoyMusic.mp3");
	
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
bgsound.play()
	//create fairy sprite and add animation for fairy
fairysprite=createSprite(130,520);
fairysprite.scale=0.5
fairysprite.addAnimation("stop",fairyimg);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);


  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
if(starBody.position.y>470){
Body.setStatic(starBody,true);



}


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW) {
fairysprite.x=fairysprite.x+50;


	}
	if (keyCode === LEFT_ARROW) {
		fairysprite.x=fairysprite.x-10;
		
		
			}



}
