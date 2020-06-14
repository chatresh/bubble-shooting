var score = 0;
var player;
var bubble1,
    bubble2,
    bubble3,
    bubble4,
    bubble5,
    bubble6,
    bubble7

function preload(){
 bubbleimg = loadImage("bubble.jpg");
}

function setup() {
  createCanvas(600,500);
 player = createSprite(300,250,20,20)
 player.shapeColor = "yellow";

//bubble1
 bubble1 = createSprite(random(20,600),random(20,350));
 bubble1.addImage(bubbleimg);
 bubble1.scale = 0.5;

 bubble1.velocityX =random(+5,+3);
 bubble1.velocityY =random(+5,+3);

 //bubble2
 bubble2 = createSprite(random(20,600),random(20,350));
 bubble2.addImage(bubbleimg);
 bubble2.scale = 0.5;

 bubble2.velocityX =random(+5,+3);
 bubble2.velocityY =random(+5,+3);

//bubble3
 bubble3 = createSprite(random(20,600),random(20,350));
 bubble3.addImage(bubbleimg);
 bubble3.scale = 0.5;
 bubble3.velocityX =random(+5,+3);
 bubble3.velocityY =random(+5,+3);

 //bubble4
 bubble4 = createSprite(random(20,600),random(20,350));
 bubble4.addImage(bubbleimg);
 bubble4.scale = 0.5;

 bubble4.velocityX =random(+5,+3);
 bubble4.velocityY =random(+5,+3);

//bubble5
 bubble5 = createSprite(random(20,600),random(20,350));
 bubble5.addImage(bubbleimg);
 bubble5.scale = 0.5;

 bubble5.velocityX =random(+5,+3);
 bubble5.velocityY =random(+5,+3);

//bubble6
 bubble6 = createSprite(random(20,600),random(20,350));
 bubble6.addImage(bubbleimg);
 bubble6.scale = 0.5;

 bubble6.velocityX =random(+5,+3);
 bubble6.velocityY =random(+5,+3);

//bubble7
 bubble7 = createSprite(random(20,600),random(20,350));
 bubble7.addImage(bubbleimg);
 bubble7.scale = 0.5;

 bubble7.velocityX =random(+5,+3);
 bubble7.velocityY =random(+5,+3);

   }

function draw() {
 background(0,0,0); 


 fill(0,255,255);
 textSize(19);
 text("Score : "+ score,300,20);
 text(" Score Atleast 300 To Win The Game ",100,470);

if(score<300){
 if(keyDown(UP_ARROW))
 {
    setDir(0,-6);
 } else if(keyDown(DOWN_ARROW)){
   setDir(0,6);
 } else if(keyDown(RIGHT_ARROW)){
   setDir(6,0);
 } else if(keyDown(LEFT_ARROW)){
   setDir(-6,0);
 }


 
     if(player.x<0) {
       player.x = 600;
     }
     
      if(player.x>600){
       player.x = 0;
     }
     
      if(player.y<0){
       player.y = 600;
     }
     
       if(player.y>600){
       player.y = 0;
     }}
  //bubble1
    if(bubble1.x<0) {
       bubble1.x = 600;
     }
     
      if(bubble1.x>600){
       bubble1.x = 0;
     }
     
      if(bubble1.y<0){
       bubble1.y = 600;
     }
     
       if(bubble1.y>600){
       bubble1.y = 0;
     }
     //bubble2
     if(bubble2.x<0) {
       bubble2.x = 600;
     }
     
      if(bubble2.x>600){
       bubble2.x = 0;
     }
     
      if(bubble2.y<0){
       bubble2.y = 600;
     }
     
       if(bubble2.y>600){
       bubble2.y = 0;
     }
     //bubble3
     if(bubble3.x<0) {
       bubble3.x = 600;
     }
     
      if(bubble3.x>600){
       bubble3.x = 0;
     }
     
      if(bubble3.y<0){
       bubble3.y = 600;
     }
     
       if(bubble3.y>600){
       bubble3.y = 0;
     }
    //bubble4
     if(bubble4.x<0) {
       bubble4.x = 600;
     }
     
      if(bubble4.x>600){
       bubble4.x = 0;
     }
     
      if(bubble4.y<0){
       bubble4.y = 600;
     }
     
       if(bubble4.y>600){
       bubble4.y = 0;
     }
     //bubble5
     if(bubble5.x<0) {
       bubble5.x = 600;
     }
     
      if(bubble5.x>600){
       bubble5.x = 0;
     }
     
      if(bubble5.y<0){
       bubble5.y = 600;
     }
     
       if(bubble5.y>600){
       bubble5.y = 0;
     }
     //bubble6
     if(bubble6.x<0) {
       bubble6.x = 600;
     }
     
      if(bubble6.x>600){
       bubble6.x = 0;
     }
     
      if(bubble6.y<0){
       bubble6.y = 600;
     }
     
       if(bubble6.y>600){
       bubble6.y = 0;
     }
     //bubble7
     if(bubble7.x<0) {
       bubble7.x = 600;
     }
     
      if(bubble7.x>600){
       bubble7.x = 0;
     }
     
      if(bubble7.y<0){
       bubble7.y = 600;
     }
     
       if(bubble7.y>600){
       bubble7.y = 0;
     }



    if(player.isTouching(bubble1)){
      score++;
    }
     if(player.isTouching(bubble2)){
      score++;
    }
     if(player.isTouching(bubble3)){
      score++;
    }
     if(player.isTouching(bubble4)){
      score++;
    }
     if(player.isTouching(bubble5)){
      score++;
    }
     if(player.isTouching(bubble6)){
      score++;
    }
     if(player.isTouching(bubble7)){
      score++;
    }


    if(score===300){
      bubble1.destroy();
      bubble2.destroy();
      bubble3.destroy();
      bubble4.destroy();
      bubble5.destroy();
      bubble6.destroy();
      bubble7.destroy();
      textSize(35);
      text("You Win",250,250);
      player.velocityY = -5;
      player.lifetime = 75;
    }

  drawSprites();
}
function setDir(x,y){
  player.x = player.x + x;
  player.y = player.y + y;
}

