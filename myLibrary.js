function isTouching(o1,o2){

    if(o1.x-o2.x< o1.width/2+o2.width/2 && o2.x-o1.x<o1.width/2+o2.width/2
      &&o1.y-o2.y< o1.height/2+o2.height/2 && o2.y-o1.y<o1.height/2+o2.height/2 ){
      return true;
    }
    else{
     return false;
    }
  
  }
  
  function bounceOff(y1,y2){
    if(y1.x-y2.x< y1.width/2+y2.width/2 && y2.x-y1.x<y1.width/2+y2.width/2){
      y1.velocityX = -1 * y1.velocityX;
      y2.velocityX = -1* y2.velocityX;
    }
    
    if(y1.y-y2.y< y1.height/2+y2.height/2 && y2.y-y1.y<y1.height/2+y2.height/2 ){
      y1.velocityY = -1 * y1.velocityY;
      y2.velocityY = -1* y2.velocityY;
    }
  }