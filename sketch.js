var monkey, monkey_running;
var background1,backg;
var banana, banana1;
var stone, stone1;
var r, spawnbanana, spwanstone;
var invisibleground;
var score =0;
var bananaGroup,stoneGroup;


function preload(){
  background1 = loadImage("jungle.png");
  monkey_running =
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 banana1= loadImage("banana.png");
  stone1= loadImage("stone.png");
 
}


function setup() {
  createCanvas(600,300);
  backg = createSprite(0,0,600,300);
  backg.addImage("Jungle1",background1);
  backg.scale = 1.25;
  backg.x =backg.width/2;
 
  invisibleground = createSprite(300,275,600,1);
  invisibleground.visible = true;
  monkey = createSprite(40,260,10,10);
  monkey.addAnimation("Monkey1",monkey_running);
  monkey.scale = 0.05;
 
  bananaGroup = new Group();
  stoneGroup = new Group();
}


function draw(){
   background(255);
 
        if (keyDown("space") && monkey.y >= 20 ){

        monkey.velocityY = -10;
        }
        monkey.velocityY = monkey.velocityY +0.8;
        backg.velocityX = -3;
        if (backg.x <0){
        backg.x =backg.width/2;
        }
       if ( frameCount%130===0){
       spawnbanana();
       }
       if (frameCount%300 ===0){
       spawnstone();
       }

      if (bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
      score = score + 1;
      }
      if(stoneGroup.isTouching(monkey)){
      monkey.scale = 0.05;
      }
 
    switch(score){
      case 10 : monkey.scale = 0.12;
      break;
      case 20 : monkey.scale = 0.14;
      break;  
      case 30 : monkey.scale = 0.16;
      break;
      case 40 : monkey.scale = 0.18;
      break;
      default: break;
    }
 
  monkey.collide(invisibleground);
  drawSprites();
  fill("white");
  textSize(20);
 text("Score :"+ score,200,100);
}

function spawnbanana(){
   r = Math.round(random(5,200));
     banana = createSprite(590,r,1,1);
  banana.addImage("bana",banana1);
  banana.scale=0.05;
  banana.velocityX = -4;
  banana.lifetime= 200;
  bananaGroup.add(banana);

}

function spawnstone(){
  stone = createSprite(590,260,1,1);
  stone.addImage("ston",stone1);
  stone.scale = 0.25;
  stone.velocityX =-3;
  stone.lifetime = 200;
  stoneGroup.add(stone);
}
