class Pig {
  constructor(x, y, width, height,) {
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
    this.pig_image = loadImage("sprites/enemy.png");
    this.pig = Bodies.rectangle(x,y,width,height,options)
    World.add(world, this.pig)

  }
  display() {
console.log("hi")
    push();
    translate(this.x, this.y);
    rotate(this.pig.angle);
    imageMode(CENTER);
    image(this.pig_image, 0, 0, this.width, this.height);
    pop();
  }
}