function rng(){
    var p1,p2;
p1=Math.floor(Math.random()*6+1);
p2=Math.floor(Math.random()*6+1);

img1="dice"+p1;
img2="dice"+p2;
var titleText="";
if(p1>p2){
    titleText="🚩 Player 1 Wins!";
}
if(p1<p2){
    titleText="Player 2 Wins! 🚩";
}
if(p1===p2){
    titleText="It's a tie!"
}

document.querySelector(".img1").setAttribute("src","./images/"+img1+".png");
document.querySelector(".img2").setAttribute("src","./images/"+img2+".png");

document.querySelector("h1").innerHTML=titleText;
}

