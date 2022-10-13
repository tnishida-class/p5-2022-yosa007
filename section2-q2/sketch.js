// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i+j%2 == 0){
      fill(2)}
      else{
      fill(0)}
      rect(i*10,j*10,10,10)
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      
  }
}
}