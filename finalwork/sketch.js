// 最終課題を制作しよう
let count

function setup(){
  createCanvas(200, 200);
  background(160, 192, 255);
  count = 0;
  cycle = 50;
  console.log(count);
  for(let i = 0; i < 30; i++){
    if(i<15){
      stroke(180,0,180);}
    else{
      stroke(255,0,255)}
    line(count%cycle,5*i+50,200-5*i,0);
  }
  for(let i = 0; i < 30; i++){
    if(i<15){
      stroke(180,0,180);}
    else{
      stroke(255,0,255)}
    line(5*i,200,200,150-5*i);
  }
  //arrowSign(20,40,180,20,40,90,100,110,160,180)
  
}

//for(let i = 0; i < 10; i++){
  //if(i<5){
    //stroke(0,0,255);}
  //else{
    //stroke(255,0,0)}
  //line(0,5*i+130,180-5*i,0);
//}
//function arrowSign (x1,x2,x3,y1,y2,y3,y4,y5,y6,y7){
  //line(x1,y3,x3,y1);
  //line(x3,y1,x3,y2);
  //line(x3,y2,x2,y4);
  //line(x2,y4,x3,y6);
  //line(x3,y6,x3,y7);
  //line(x3,y7,x1,y5);
  //line(x1,y5,x1,y3);
//}  



//function draw(){
  //background(160, 192, 255);
//}

//function windowResized(){
  //resizeCanvas(200, 200);
//}

