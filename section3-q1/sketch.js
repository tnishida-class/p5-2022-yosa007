// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let diameter = 60

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 50;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  //console.log(count);
  // BLANK[1]
  fill(255,0,0);
  ellipse(width / 2, height / 2,diameter+count);
  if(keyIsDown(" ".charCodeAt(0))){
  count = (count*1.001 + 1) % cycle;
  }
}

//function keyPressed(){
 //if(key == "A"){
  //count = (count*2 + 1) % cycle; 
 //}   
//}
//function keyReleased(){
  //if(key == !"A"){
  //count = (count*2 + 1) % cycle;
  //}
//}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}