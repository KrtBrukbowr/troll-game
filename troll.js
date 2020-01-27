//script file for the troll game project 
//Kurt Bruckbauer 1-9-2020

// Decison making process for a 'choose your own adventure' type of game. user will be prompted by dialog box, based on respnse, they can either win or lose in various ways.


"use strict";

// Set up an event listener for button to trigger the game
document.getElementById("button").addEventListener("click", trollBattle);

//function to run the game
function trollBattle() {
    //Intial propt question for the user stored in a vaariable
    var action = window.prompt("You're walking through the forest minding your own business, and a troll suddenly appears !\n\nDo you FIGHT the troll ?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll ?").toUpperCase();

    //Switch statemnet to handle the initaial player's choice
    switch (action) {
        case "FIGHT":
            var smart = window.prompt("Are you a cunning warrior ?\n\nYES OR NO").toUpperCase();

            var strong = window.prompt("Are you stronger than a troll ?\n\nYES OR NO").toUpperCase();

            //if statement analyzes user response
            if(smart ==="YES" || strong ==="YES"){
                document.getElementById("result").innerHTML = "You can either be smarter or stronger than a troll to survive !<br/>You live another day !";

                //clear any bad messages from page
                document.getElementById("death").innerHTML = "";

                //play winning audio file
                document.getElementById("win").play();
            }
            else {
                document.getElementById("death").innerHTML = "DEAD !!!";

                //clear any bad messages from page
                document.getElementById("result").innerHTML = "";

                //play losing audio file
                document.getElementById("die").play();
            }
            break;
        case "RUN":
            var fast = window.prompt("Are you faster than a troll ?\n\nYES OR NO").toUpperCase();

             //if statement analyzes user response
            if (fast=== "YES") {
                document.getElementById("result").innerHTML = "Your speed has allowed you to survive !<br/>But can you live another day !";

                //clear any bad messages from page
                document.getElementById("death").innerHTML = "";

                //play winning audio file
                document.getElementById("win").play();
            }
            else {
                document.getElementById("death").innerHTML = "DEAD !!!";

                //clear any good messages from page
                document.getElementById("result").innerHTML = "";

                //play losing audio file
                document.getElementById("die").play();
            }

            break;
        case "BRIBE":
            var shekels = window.prompt("You have to pay the troll toll !\nDo you have money ? (YES OR     NO)").toUpperCase();
            if(shekels ==="YES") {
                var amount = window.prompt("How much money do you have ?\nPlease enter a NUMERIC VALUE");

                //convert the string from the prompt to an integer
                amount = parseInt(amount);

                if (amount > 50) {
                    document.getElementById("result").innerHTML = "Great job ! The troll is happy !<br/>But can you live another day !";

                    //clear any bad messages from page
                    document.getElementById("death").innerHTML = "";

                    //play winning audio file
                    document.getElementById("win").play();
                }
                else {
                    document.getElementById("death").innerHTML = "DEAD !!";

                    //clear any good messages from page
                    document.getElementById("result").innerHTML = "";

                    //play losing audio file
                    document.getElementById("die").play();
                }
            }
            else {
                document.getElementById("death").innerHTML = "CHEAP FUCK!!";

                //clear any good messages from page
                document.getElementById("result").innerHTML = "";

                //play losing audio file
                document.getElementById("die").play();
            }
            break;
    
        default:
            window.alert("Please enter valid choice");
            trollBattle();
            break;
    }
}
