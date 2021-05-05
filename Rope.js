class Rope {

    constructor(body1,body2,x,y){
        this.x = x
        this.y = y
    var options ={
    
        bodyA: body1,
        bodyB: body2,
        pointB: {x:this.x , y:this.y},
        // length:,
        // stiffness:0.05,
        
    
         }
        
         this.chain= Constraint.create(options);
         World.add(world,this.chain);
    
    }
    
    display(){
    var posA = this.chain.bodyA.position
    var posB = this.chain.bodyB.position
    var ptBX = posB.x+this.x
    var ptBY = posB.y// + this.y
    fill("black")
    strokeWeight(5);
    line(posA.x,posA.y,ptBX,ptBY)
    
    
    }
    
    
    }