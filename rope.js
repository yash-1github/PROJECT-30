class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }
        
        this.pointB = pointB
        this.rope = Matter.Constraint.create(options);
        world.add(w, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("red");
           line(pointB.x, pointB.y ,pointA.x  + 25, pointA.y+25 );
           
            
            pop();
        }
    }
    
}