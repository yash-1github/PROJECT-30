class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.6,
          'density':1.3
      }
      this.body = bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible = 255;
      
      world.add(w, this.body);
    }
    display(){
      if(this.body.speed < 5){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle * 180/PI);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      }else if(this.body.speed > 5){
       this.visible = this.visible-5;
       world.remove(w, this.body);
      }
      
    }
  };