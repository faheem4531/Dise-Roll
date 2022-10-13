//insert img for player 1 

var randomno1=Math.floor( Math.random() * 6 ) + 1;
var randomimg1="img/dice" + randomno1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , randomimg1);

//player 2 img 
var randomno2=Math.floor( Math.random() * 6 ) + 1;
var randomimg2="img/dice" + randomno2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomimg2);
 



if(randomimg1>randomimg2)
{
    document.querySelector("h1").innerHTML='🚩 Play 1 Wins!';

}


else if(randomimg1 < randomimg2)
{
    document.querySelector("h1").innerHTML='Play 2 Wins! 🚩';

}

else{
    document.querySelector("h1").innerHTML='Draw';
}
