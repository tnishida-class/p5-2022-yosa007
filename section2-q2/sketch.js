// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2 == 1) {
      fill(196)}
      else{fill(256)}
      rect(i*10,j*10,10,10)} //rect(i*10,j*10,10,10) ellipse(i*10+5,j*10+5,9)
    }
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2 == 1) {
      fill(196) 
      if(j<3) {
      fill(255,0,0)}
      else if (j<5){
      ;}
      else{fill(0)}}
      else{fill(256)}
      ellipse(i*10+5,j*10+5,9)} //rect(i*10,j*10,10,10) ellipse(i*10+5,j*10+5,9)
    }
  }