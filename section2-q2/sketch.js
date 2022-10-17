// チェッカー
function setup() {
  let canvasWidth = 200;
  createCanvas(canvasWidth, canvasWidth);
  let squareNumber = 8
  let squareSize = canvasWidth / squareNumber;
  noStroke();
  for(let i = 0; i < squareNumber; i++){
    for(let j = 0; j < squareNumber; j++){
      let isColoredSquare = (i+j)%2 == 1
      if(isColoredSquare){
        let grey = 196
        fill(grey)
      }else{
        let white = 256
        fill(white)
      }
      let x = squareSize*i
      let y = squareSize*j
      rect(x,y,squareSize,squareSize)
    } //rect(i*10,j*10,10,10) ellipse(i*10+5,j*10+5,9)
  }
  for(let i = 0; i < squareNumber; i++){
    for(let j = 0; j < squareNumber; j++){
      if((i+j)%2 == 1){
        //fill(196) 
        if(j<3){
          fill(255,0,0)
          ellipse(i*squareSize+squareSize/2,j*squareSize+squareSize/2,squareSize)
        }
        if(squareNumber-4<j){
          fill(0)
          ellipse(i*squareSize+squareSize/2,j*squareSize+squareSize/2,squareSize)
        }
       //rect(i*10,j*10,10,10) ellipse(i*10+5,j*10+5,9)
      }
    }
  }
}