class Drop {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y,25,options);
     this.radius=70
      

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.rain.position.y>height){
          Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
      }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
     image(this.image,0,0,this.radius,this.radius)
      pop();
      for(var i=0; i<maxDrops;i++){
          drops.push(new createDrop(random(0,400),random(0.400)))
      }

    }
  };