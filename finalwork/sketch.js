// 最終課題を制作しよう
function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  square(50,100,100,50,150,100,100,150)
}

function draw(){
  background(200,150,200);
  count = (count + 0.7) % cycle;
  console.log(count);
  square(50,100,100,50,150,100,100,150)
  function square (x1,y1,x2,y2,x3,y3,x4,y4){
    line(x1,y1,x2,y2)
    line(x2,y2,x3,y3)
    line(x3,y3,x4,y4)
    line(x4,y4,x1,y1)
  }
  for(let i = 0; i < 40; i++){
    if(i<20){
      stroke(255,0,0);}
    else{
      stroke(0,0,255)}
    line(count%cycle,5*i+50-count%cycle,200-5*i-count%cycle,count%cycle);
    if(keyIsDown(" ".charCodeAt(0))){
      count = (count*1.0001) % cycle;
      }
  }
  for(let i = 0; i < 40; i++){
    if(i<20){
      stroke(0,0,255);}
    else{
      stroke(255,0,0)}
    line(5*i+count%cycle,200-count%cycle,200-count%cycle,150-5*i+count%cycle);
    if(keyIsDown(" ".charCodeAt(0))){
      count = (count*1.0001) % cycle;
      }
  }
  for(let i = 0; i < 40; i++){
    if(i<20){
      stroke(0,0,255);}
    else{
      stroke(255,0,0)}
    line(5*i+count%cycle,count%cycle,200-count%cycle,50+5*i-count%cycle);
    if(keyIsDown(" ".charCodeAt(0))){
      count = (count*1.0001) % cycle;
    }
  }
  for(let i = 0; i < 40; i++){
    if(i<20){
      stroke(255,0,0);}
    else{
      stroke(0,0,255)}
    line(count%cycle,5*i+count%cycle,50+5*i-count%cycle,200-count%cycle);
    if(keyIsDown(" ".charCodeAt(0))){
      count = (count*1.0001) % cycle;
      }
  }
  ellipse(100,100,100-count%cycle/1.3)
    fill(255,0,0)
    if(keyIsDown(" ".charCodeAt(0))){
    count = (count*1.0001 + 1) % cycle;
    }
}

