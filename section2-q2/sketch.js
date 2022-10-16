// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2 == 1 ) {
      fill(196)}
      else{
      fill(256)}
      rect(i*10,j*10,10,10)}
    }
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2 == 1 && j < 3){
      fill(255,0,0)}
      else if((i+j)%2 == 1 && j > 4) (fill(0))
      else (fill (256))
      ellipse(i*10+5,j*10+5,9)}
    }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      
  
}