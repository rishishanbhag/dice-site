
let guy=prompt("enter the guy's name");
let girl=prompt("enter the girls name");

function lovecalc(guy,girl){
    let score=Math.random()*100;
    score=Math.floor(score);
    if (score>70){
        alert(`your lovescore is ${score}% and yall love each other like kanye loves kanye`);
    }
    else{
    alert(` love score of ${guy} and ${girl} is ${score}%`)
    }
}
 
lovecalc(guy,girl)