//Ejercicio base 1
//taller de intro a la programacion en p5
//cadjd - junio 2017

var x = 0;

function setup() {
createCanvas(800,500);
background(255,0,0);
}

function draw() {
  background(255,0,0);
  fill(100,255,100);
ellipse(mouseX,mouseY,200,200);
x = x + 1;
}
