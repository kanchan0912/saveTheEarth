var backgroundImg2;
var earth,earth2;
var textB;
var gameState ="serve";
var bg1,dismiss;
var dis;

function preload(){
  backgroundImg2=loadImage("images/Earth.png")
  bg1=loadImage("images/ufo towards the earth.png")
}

function setup(){
  
  createCanvas(1200,600);

  
  earth=createSprite(600,300,1200,600);
  
  earth2=createSprite(600,300,1200,600);
 
}

function draw(){
  background("black");

  if ( gameState === "serve")

  { 
    earth.visible=true; 
    earth.addImage("b1",bg1);  
  
   dismiss=createButton("ENTER GAME");
   dismiss.position(500,550);

  dismiss.mousePressed(changeState)
  

  }
  else if (gameState ==="play"){
   // earth.velocityY=1;
  // hide();
    textB=createInput("");
    textB.position(500,550);
    earth.visible=false;
    earth2.addImage("b2",backgroundImg2);

    // this is the line which we are using to change the background
  // could you please show me the code here we are setting different background?
  // Cn we try hiding the earth sprite which should ot be visible?
  // Both the earth sprites are visible when game enters next state.
  // /COuld you please let me know the destired output. so that we can code accordingl

  // yes actually student want ki at first bg1 will load and enter button should be there + text instruction for the user
  // should be there and once enters button pressed then next background and text input button will come in which 
  // we will enter some input 
  // right now background is not changing enter button is working and in text input 
  // we are not able to write any thing
  // how to make the text disappear ?? that also I'm trying with visible but not happening 
  // Joining  a session. I'll be right back.
  // ok
  }
  
   drawSprites();


   displayText();
  
}
function changeState(){
  gameState="play";
 
}
function displayText(){
  //dis.visibile=true;
  textSize(20);
  stroke ("yellow")
  strokeWeight (4)
  fill("white")   
 text ("SAVE THE EARTH",500,50);
}
//function hide(){
 // dis.visible=false;
//}
