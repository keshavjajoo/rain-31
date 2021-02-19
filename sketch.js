

function preload(){
    thunderboltmage=loadImage("images/thunderbolt")
}

function setup(){
    createCanvas(1600, 700);
   
    
}

function draw(){
 rand=Math.round(random(1,4))
  if(frameCount%80===0)
  thunderCreatedFrame=frameCount;
  thunder=createSprite(random(10,370),random(10,30),10,10);
  switch (rand){
    case 1:thunder.addImage(thunder1);
    break;
    case 2:thunder.addImage(thunder2)
     break;
     default:break;
  }
   thunder.scale = random(0,3,0.6)
    
}   

