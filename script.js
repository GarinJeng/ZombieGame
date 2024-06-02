const outM = document.getElementById("outM")
const outM2 = document.getElementById("outM2")
const outL = document.getElementById("outL")
const outFs = document.getElementById("outFs")
const outS = document.getElementById("outS")
const outL2 = document.getElementById("outL2")
const outMM = document.getElementById("outMM")
var data = {};
data.c = 0;
data.x = 0;
data.y = 0;
data.wave =  1;
data.ex = [];
data.ey = [];
var pyv = 0;
var pxv = 0;
var t1 = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;
var t5 = 0;
var cost1 = [60,120,250,1000];
var cost2 = [100,200,300];
var cost4 = [100,200,500,1000,1700];
var cost5 = [20,40,100,500,1000];
var killed = [];
var Z = 0;
var money = 0;
var MoneyX = 1;
var enemysalive;
var wave = 1;
var ex = [];
var ey = [];
var invins = 0;
const images = [];
var xV = 0;
var yV = 0;
var c1 = 0; 
var Mx;
var My;
var px = 0;
var py = 0;
var cx = [];
var cy = [];
var Cs = 5;
var S = 7;
var fireS = 5000;
var Smult = 1.5;
var face;
var lives = 5;
var enemyNum = 2;
var id = [];
var i;
var countB1 = 0;
var countB2 = 0;
var countB3 = 0;
var countB4 = 0;
var countB5 = 0;
var newSide1;
var newSide2;
var keys = [false, false, false, false, false, false, false, false];
var time;
var q = 0;
var allWidth;
var allHeight;
function setxy(x,y){
  data.x = x;
  data.y = y;
}
function Character1(){
  window.location.href='Game.html?lives='+lives+'&S='+S+'&fireS='+fireS+'&MoneyX='+MoneyX+'&Money='+money+"&c1="+countB1+"&c2="+countB2+"&c4="+countB4+"&c5="+countB5;

  data.c = 1;
  //setProperty("image2", "image", "red.png");
}
function Character2() {
  window.location.href='Game.html?lives='+3+'&S='+10+'&fireS='+fireS+'&MoneyX='+MoneyX+'&Money='+money+"&c1="+countB1+"&c2="+countB2+"&c4="+countB4+"&c5="+countB5;
  data.c = 2;
  //setProperty("image2", "image", "blue.png");
}
function Character3() {
  window.location.href='Game.html?lives='+7+'&S='+5+'&fireS='+4500+'&MoneyX='+MoneyX+'&Money='+money+"&c1="+countB1+"&c2="+countB2+"&c4="+countB4+"&c5="+countB5;
  data.c = 3;
  //setProperty("image2", "image", "orange.png");
}
function Character4(){
  window.location.href='Game.html?lives='+3+'&S='+S+'&fireS='+fireS+'&MoneyX='+2+'&Money='+money+"&c1="+countB1+"&c2="+countB2+"&c4="+countB4+"&c5="+countB5;
  data.c = 4;
  //setProperty("image2", "image", "green.png");
}
function moveRect(e) {
  switch(e.keyCode) {
   case 65:
      keys[1] = true
    break;
  case 87:
      keys[0] = true
   break;
 case 68: 
      keys[3] = true
  break;
 case 83:
      keys[2] = true
  break;
  case 16:
      keys[4] = true
  break;
  case 80:
    pause()
  break;
  }
}
function moveRect2(e) {
  switch(e.keyCode) {
   case 65:
      keys[1] = false
    break;
  case 87:
      keys[0] = false
   break;
 case 68: 
      keys[3] = false
  break;
 case 83:
      keys[2] = false
  break;
  case 16:
    keys[4] = false
   break;
 }
}
function pause(){
  window.location.href='shop.html?lives='+lives+'&S='+S+'&fireS='+fireS+'&MoneyX='+MoneyX+'&Money='+money+"&c1="+countB1+"&c2="+countB2+"&c4="+countB4+"&c5="+countB5;
  }
function run(w,h){
  allWidth = w;
  allHeight = h;
  time =  setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    controls()
    }, 30)
}
function movement() {
    xV = 0;
    yV = 0;
    
    if (keys[0]){
      if (data.y <= 240){
        yV += S;
      }else{
        yV += 0;
      }
    }
    if (keys[1]){
      if (data.x <= 240){
        xV += S;
      }else{
        xV += 0;
      }
    }
    if (keys[2]){
      if (data.y >= -740){
        yV += -S
      }else{
        yV += 0;
      }
    }
    if (keys[3]){
      if (data.x >= -740){
        xV += -S;
      }else{
        xV += 0;
      }
    }
    if (keys[4]){
      xV = xV * Smult;
      yV = yV * Smult;
    }
    ctx.drawImage(img,data.x + xV,data.y + yV,1000,1000);
    data.x = data.x + xV;
    data.y = data.y + yV;
    //facing();
}
 function move(){
   for(let j=0; j < images.length; j++) {
     var exV = (Math.random() * 10)-5
     var eyV = (Math.random() * 10)-5
     if (ex[j] > 240){
       exV = -Cs;
       if (ey[j] < 245){
          eyV = -1
        }
     }else if (ex[j] < 240){
       exV = Cs;
       if (ey[j] > 235){
          eyV = 1
        }
     }else{
       exV = 0;
     }
     if (ey[j] > 240){
        eyV = -Cs;
       if (ey[j] < 245){
          eyV = -1
        }
      }else if (ey[j] < 240){ 
       eyV = Cs;
       if (ey[j] > 235){
         eyV = 1
       }
      }else{
        eyV= 0;
      }
     ex[j] = ex[j] + xV + exV;
    ey[j] = ey[j] + yV + eyV;
     ctx.drawImage(images[j], ex[j], ey[j],20,20);    
   }
}
function controls(){
  outM2.innerHTML = "Money: "+ money
  outL.innerHTML = "Lives: "+ lives
  hit();
  movement();
  move();
  ctx.drawImage(img2,240, 240,20,20);
  shooting();
  //Hearts();
  death();
  
}
document.onmousemove = function(e){
  Mx = e.clientX - canvas.offsetLeft;;
  My = e.clientY - canvas.offsetTop;
};
function shooting(){
  Z++
  if (Z%(Math.floor(fireS/30)) == 0){
    px = 250
    py = 250
    pxv = Mx-250;
    pyv = My-250;
    console.log(Mx,My)
    PVol();
  }
  ctx.drawImage(projec, px + xV + newSide1, py + yV + newSide2,5,5);
  px = px + xV + newSide1
  py = py + yV + newSide2

}

function createImages(count) {

    for (let i = 0; i < count; i++) {
        const image = `image${i + 1}.jpg`;
        images.push(image);
    }

    return images;
}
function summonEnemys(){
  //enemysalive = enemyNum;
  enemyNum = 5
  var createdImages = createImages( enemyNum);
  for(let j=0; j < enemyNum; j++) {

    images[j] = new Image();
    images[j].onload = function () {
      ex[j] = (Math.floor(Math.random() * 1000))
      ey[j] = (Math.floor(Math.random() * 1000))
      ctx.drawImage(images[j], ex[j], ey[j], 20,20);
    }

    images[j].src = "download.jpg";

  }
}
function hit(){
    //setText("text_area6", "$"+money);
    for(var j = 0; j < images.length; j++){  
      if (px + 5 >= ex[j] && px <= ex[j] + 20){
        if (py +5 >= ey[j] && py <= ey[j] + 20){
          ex[j] = (Math.floor(Math.random() * 1000))
          ey[j] = (Math.floor(Math.random() * 1000))
          ctx.drawImage(images[j], ex[j], ey[j], 20,20);
          money = money + (10 * MoneyX);
        }
      }
    } 
}
function death(){
  //Hearts();
    if (invins == 1){
      q++
      if (q == 30){
        invins = 0;
        q = 0;
      }
    }
    for(i = 0; i < images.length; i++){  
      if (invins != 1){
        if (260 >= ex[i] && 240 <= ex[i] + 20){
          if (260 >= ey[i] && 240 <= ey[i] + 20){
            lives--;
            if (lives == 0){
              reset();
              window.location.href='index.html';
            }
            invin();
          }
        }
      }
    }
}
function invin(){
  invins = 1;
}
function button1(){
  if(countB1 < 4){
    if (money >= cost1[countB1]){
      //setText("text_area11", "        "+countB1+"/4");
      fireS = fireS - 1000;
      money = money - cost1[countB1];
      countB1++;
      outFs.innerHTML = "Fire Rate: "+countB1+"/4 Cost: " + cost1[countB1]
      //setText("button1", "Fire Rate: $" + cost1[countB1]);
    }
  }
  if (countB1 == 4){
    //setText("button1", "Fire Rate: Max level");
    outFs.innerHTML = "Fire Rate: Max level"
  }
  outM.innerHTML = "Money: "+ money
}
function button2() {
  if(countB2 < 3){
    if (money >= cost2[countB2]){
      //setText("text_area10", "        "+countB2+"/3");
      S++;
      money = money - cost2[countB2];
      countB2++;
      outS.innerHTML = "Speed: "+countB2+"/3 Cost: " + cost2[countB2]
      //setText("button2", "Speed: $" + cost2[countB2]);
    }
  }
  if (countB2 == 3){
    //setText("button2", "Speed: Max level");
     outS.innerHTML = "Speed: Max level"
  }
  outM.innerHTML = "Money: "+ money
}
function button4() {
  if(countB4 < 5){
    if (money >= cost4[countB4]){
      //setText("text_area8", "        "+countB4+"/5");
      lives++;
      money = money - cost4[countB4];
      countB4++;
      outL2.innerHTML = "Lives: "+countB4+"/5 Cost: " + cost4[countB4]
      //setText("button4", "Extra Lives: $" + cost4[countB4]);
    }
  }
  if (countB4 == 5){
    //setText("button4", "Extra Lives: Max level");
    outL2.innerHTML = "Lives: Max level"
  }
  outM.innerHTML = "Money: "+ money
}
function button5() {
  if(countB5 < 5){
    if (money >= cost5[countB5]){
      //setText("text_area7", "        "+countB5+"/5");
      MoneyX++;
      money = money - cost5[countB5];
      countB5++;
      outMM.innerHTML = "Money Multiplier: "+countB5+"/5 Cost: " + cost5[countB5]
      //setText("button5", "Money X: $" + cost5[countB5]);
    }
  }
  if (countB5 == 5){
    //setText("button5", "Money X: Max level");
    outMM.innerHTML = "Money Multiplier: Max level"
  }
  outM.innerHTML = "Money: "+ money
}
function Hearts(){

  if (lives == 10){
    setImageURL("image8", "Yellow_Heart.png");
    setImageURL("image7", "Yellow_Heart.png");
    setImageURL("image6", "Yellow_Heart.png");
    setImageURL("image5", "Yellow_Heart.png");
    setImageURL("image4", "Yellow_Heart.png");
  }else if (lives == 9){
    setImageURL("image8", "Red_Heart.png");
    setImageURL("image7", "Yellow_Heart.png");
    setImageURL("image6", "Yellow_Heart.png");
    setImageURL("image5", "Yellow_Heart.png");
    setImageURL("image4", "Yellow_Heart.png");
  }else if (lives == 8){
    setImageURL("image8", "Red_Heart.png");
    setImageURL("image7", "Red_Heart.png");
    setImageURL("image6", "Yellow_Heart.png");
    setImageURL("image5", "Yellow_Heart.png");
    setImageURL("image4", "Yellow_Heart.png");
  }else if (lives == 7){
    setImageURL("image8", "Red_Heart.png");
    setImageURL("image7", "Red_Heart.png");
    setImageURL("image6", "Red_Heart.png");
    setImageURL("image5", "Yellow_Heart.png");
    setImageURL("image4", "Yellow_Heart.png");
  }else if (lives == 6){
    setImageURL("image8", "Red_Heart.png");
    setImageURL("image7", "Red_Heart.png");
    setImageURL("image6", "Red_Heart.png");
    setImageURL("image5", "Red_Heart.png");
    setImageURL("image4", "Yellow_Heart.png");
  }else if (lives == 5){
    setImageURL("image8", "Red_Heart.png");
    setImageURL("image7", "Red_Heart.png");
    setImageURL("image6", "Red_Heart.png");
    setImageURL("image5", "Red_Heart.png");
    setImageURL("image4", "Red_Heart.png");
  }else if (lives == 4){
    setImageURL("image8", "Empty_Heart.png");
    setImageURL("image7", "Red_Heart.png");
    setImageURL("image6", "Red_Heart.png");
    setImageURL("image5", "Red_Heart.png");
    setImageURL("image4", "Red_Heart.png");
  }else if (lives == 3){
    setImageURL("image8", "Empty_Heart.png");
    setImageURL("image7", "Empty_Heart.png");
    setImageURL("image6", "Red_Heart.png");
    setImageURL("image5", "Red_Heart.png");
    setImageURL("image4", "Red_Heart.png");
  }else if (lives == 2){
    setImageURL("image8", "Empty_Heart.png");
    setImageURL("image7", "Empty_Heart.png");
    setImageURL("image6", "Empty_Heart.png");
    setImageURL("image5", "Red_Heart.png");
    setImageURL("image4", "Red_Heart.png");
  }else if (lives == 1){
    setImageURL("image8", "Empty_Heart.png");
    setImageURL("image7", "Empty_Heart.png");
    setImageURL("image6", "Empty_Heart.png");
    setImageURL("image5", "Empty_Heart.png");
    setImageURL("image4", "Red_Heart.png");
  }
}
function PVol(){
var hyp1;
var hyp2 = 20;
var angle;
var p;
hyp1 = (pxv * pxv) + (pyv * pyv);
hyp1 = Math.sqrt(hyp1);
p = (pxv/hyp1);
angle = Math.asin(p);
newSide1 = Math.sin(angle) * hyp2;
newSide2 = (hyp2 * hyp2) - (newSide1 * newSide1);
if (pyv <= 0){
  newSide2 = Math.sqrt(newSide2);
  newSide2 = -1 * newSide2;
}else{
  newSide2 = Math.sqrt(newSide2);
}
}
function reset(){
  money = 0;
  S = 7;
  fireS = 5000;
  lives = 5;
  MoneyX = 1;
  countB5 = 0;
  t5 = 0;
  countB4 = 0;
  t4 = 0;
  countB3 = 0;
  t3 = 0;
  countB2 = 0;
  t2 = 0;
  countB1 = 0;
  t1 = 0;
}
function resume(){
  window.location.href='Game.html?lives='+lives+'&S='+S+'&fireS='+fireS+'&MoneyX='+MoneyX+'&Money='+money+"&c1="+countB1+"&c2="+countB2+"&c4="+countB4+"&c5="+countB5;
}
