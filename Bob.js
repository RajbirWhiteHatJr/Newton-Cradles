class Bob {
  
    constructor(x, y) {
      var options = {
        'isStatic':false,  
        'restitution':1,
          'friction':0.5,
          'density':1.0,
      }
      this.body = Matter.Bodies.circle(x, y, 50,options);
      this.radius = 50;
      World.add(world, this.body);
      
    } 
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse( 0, 0, this.radius,this.radius);
      pop();
   
      
    }
  };