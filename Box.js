class Box {
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
    this.box_image = loadImage("sprites/wood1.png");
    this.box = Bodies.rectangle(x,y,width,height,options)
    World.add(world, this.box)

  }
  display() {

    push();
    translate(this.x, this.y);
    rotate(this.box.angle);
    imageMode(CENTER);
    image(this.box_image, 0, 0, this.width, this.height);
    pop();
  }
}
