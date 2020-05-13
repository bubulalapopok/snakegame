var s;
var scl = 20;

var food;

function setup () {
  createCanvas (600,600);
  s = new Snake ();
  frameRate (10);
  food = createVector (random (width),random (height))
}

function pickLocation () {
  var cols = floor (widht/scl);
  var rows = floor (height/scl);
  food = createVector (floor(random (cols)),(floor(random (rows))
  food.mult(scl);
}

function draw () {
  background (51);
  s.update ();
  s.show ();

  if (s.eat(food)) {
      food = pickLocation ();
  }

  fill (255,0,100)
  rect (food.x, food.y, scl, scl);
}

function keyPressed (){
  if (keyCode === UP_ARROW){
    s.dir (0, -1);
  } else if (keyCode === DOWN_ARROW){
    s.dir (0, 1);
  } else if (keyCode === RIGHT_ARROW){
    s.dir (1, 0);
  }else if (keyCode === LEFT_ARROW){
    s.dir (-1, 0);
  }
}

function Snake (){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  this.dir = function (x,y){
    this.xspeed = x;
    this.yspeed = y;

    this.eat = function (pos){
       var d =  dist (this.x, this.y,pos.x, pos.y)
       if (d < 1){
           return true;
       }   else {
           return false;
       }
    }
  }
  this.update = function () {
    for (var i = 0; i < this.tail.length-1; i++) {
        var pos = this.tail [i]
        var d = dist(this.x, this.y, pos.x, pos.y);
        

this.update = function () {
    for (var i = 0; i < this.tail.length-1; i++) {
      this.tail [i] = this.tail [i+1];
    }
    tail [tail-1] = createVector (this.x, this.y);

  this.x = this.x + this.xspeed*scl;
  this.y = this.y + this.yspeed*scl;

  this.x = constrain (this.x,0,width-scl);
  this.y = constrain (this.y,0,height-scl);

  for (var i = 0; i < total; i++) {

  }
}   

this.show = function (){
 fill (255)
 for (var i = 0; i < total-1; i++) {
 rect (this.tail[i]x, this.tail[i].y, 10, 10;)
}
  

}