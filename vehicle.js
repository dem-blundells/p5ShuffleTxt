function Vehicle(x,y,letter) {
    this.letter = letter
    this.pos = createVector(x,y);
    this.target = createVector(x,y);
    this.vel = createVector(0,0);//.random2D();
    this.acc = createVector();
    this.r = 8;
    this.maxspeed = 50;
    this.maxforce = 50;
}

Vehicle.prototype.behaviours = function(){
    var arrive = this.arrive(this.target);
    this.applyForce(arrive);
}

Vehicle.prototype.applyForce = function (f) {
    this.acc.add(f);
}

Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);

}

Vehicle.prototype.show = function() {
    fill(255);
    textSize(window.innerWidth/30);
    text(this.letter, this.pos.x, this.pos.y)
}

Vehicle.prototype.arrive = function(target){
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d<1000){
        var speed = map(d, 0, window.innerWidth, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer
}
