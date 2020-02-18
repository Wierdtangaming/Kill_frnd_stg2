class Me extends BaseClass {
  constructor(x,y){
    super(x,y,100,80);
    this.image = loadImage("friends/ME.jpg");
    this.smokeImage = loadImage("friends/smoke.png");
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.4
    }
    this.trajectory =[];
  }

  display() {


    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
