// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",10,20);
}

function balloon(t,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5;// pは隙間
  fill(0,0,255);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, p+x, h + p + y);
}
