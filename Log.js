class Log {
    constructor(x, y, width, height,angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      var options = {
        isStatic:false,
        restitution:0.8,
        density:1.0,
        friction:1.0
      }
      this.log_image = loadImage("sprites/wood2.png");
      this.log = Bodies.rectangle(x,y,width,height,options)
      Matter.Body.setAngle(this.log, angle)
      World.add(world, this.log)
  
    }
    display() {
  
      push();
      translate(this.x, this.y);
      rotate(this.log.angle);
      imageMode(CENTER);
      image(this.log_image, 0, 0, this.width, this.height);
      pop();
    }
  }
  