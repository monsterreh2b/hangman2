
const form = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');

const wordDisplay = document.getElementById("word-display");
const underScoreDisplay = document.getElementById("underscore-display");
const incorrectGuessLetters = document.getElementById("incorrect-guess-letters");
const message = document.getElementById("message");

let messageInternal = "";

let index = 0;

let wrongGuesses = "";

const words = ["batman", "arielle", "kongsuni", "cocomelon"];
const validateLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let word = "";





function randomNumber() {
    let num1 = Math.random();
    let num2 = (num1 * 4) + 1;
    let num3 = Math.floor(num2);
    return num3;
}

window.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");
    
 
    index = randomNumber() - 1;
    console.log(index);
    word = words[index];
    console.log(word);
    console.log(word.length);
    let underScores = "";
    for (let i = 0; i < word.length; i++) {
        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        underScores += "_" + " ";
    }

    underScoreDisplay.innerHTML = underScores;

});

form.addEventListener('submit', function (i) {
    i.preventDefault();
    console.log("form submitted");
    let value2 = document.getElementById('guess-input').value;
    console.log(value2);
    guessInput.value = "";

    if (validateLetters.includes(value2.toLowerCase())) {
        console.log("input is a letter");
    }
    else {
        alert("Please input a single letter only");
    }

    if (word.includes(value2.toLowerCase())) {
        console.log("letter is in word");
     
        
        let indices = [];
        let index = word.indexOf(value2.toLowerCase());

        while (index != -1) {
            indices.push(index);
            index = word.indexOf(value2.toLowerCase(), index + 1);
        }

        if (indices.length) {
            console.log("The search term '" + value2.toLowerCase() + "' was found at indices: " + indices);
        } else {
            console.log("The search term '" + value2.toLowerCase() + "' was not found in the word '" + word + "'");
        }
       





        //console.log(word.indexOf(value2.toLowerCase()));  //find position of value 2 in word
    }   // e.g. if value2 is 'k' in word = kongsuni, then indexOf yields 0
    else {
        messageInternal = "Sorry, " + value2.toLowerCase() + " was not found in the word. Please try again!";
        message.innerHTML = messageInternal;

        setTimeout(function () {
            message.innerHTML = " ";
        }, 5000)
       
       
        wrongGuesses += value2.toLowerCase() + " ";
        

        incorrectGuessLetters.innerHTML = wrongGuesses;
    }
    });
