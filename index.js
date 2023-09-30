var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");

var result=Math.floor(Math.random()*10)-1;
console.log(result);
var numberofguess=0;
var gN=[];


function play()
{
    var nG=document.querySelector("#guess").value;

    if(nG<1 || nG>10)
    {
        alert("Enter the number from 1 to 10");
    }
    else
    {
        gN.push(nG);
        numberofguess=numberofguess+1;

        if(nG>result)
        {
            msg1.textContent="Your Guess number is low";
            msg2.textContent="Number Of Guess:"+numberofguess;
            msg3.textContent="Guessed Number:"+gN;
        }
        else if(nG<result)
        {
            msg1.textContent="Your Guess number is High";
            msg2.textContent="Number Of Guess:" +numberofguess;
            msg3.textContent="Guessed Number:" +gN;
        }
        else if(nG==result)
        {
            msg1.textContent="Your are winner";
            msg2.textContent="The Number you Guess:"+result;
            msg3.textContent="Guessed Number:"+gN;
        }
    }
    
}