let number1 = Math.floor (Math.random() * 6 ) +1;

let image1="dice" + number1 + ".png";
let randomimage="images/" + image1;


let alpha=document.querySelectorAll("img")[0];

alpha.setAttribute("src",randomimage);



let number2 = Math.floor (Math.random() * 6 ) +1;
let image2="dice" + number2 + ".png";
let randomimage2="images/" + image2;


let beta=document.querySelectorAll("img")[1];

beta.setAttribute("src",randomimage2);


if(number1>number2){
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(number1==number2)
{
    document.querySelector("h1").innerHTML="Its a draw";
}
else{
    document.querySelector("h1").innerHTML="player2 wins"
}