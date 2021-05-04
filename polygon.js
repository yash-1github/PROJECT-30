class Polygon {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
         
      }
      this.body = bodies.circle(x, y,50, options);
      this.image = loadImage("polygon.png");
      
      world.add(w, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      imageMode(RADIUS);
      fill(255);
      image(this.image , pos.x, pos.y, 50, 50);
  
    }
  };