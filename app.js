
const form = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');

const wordDisplay = document.getElementById("word-display");
const underScoreDisplayTopper = document.getElementById("underscore-display-topper");
const underScoreDisplay = document.getElementById("underscore-display");
const incorrectGuessLetters = document.getElementById("incorrect-guess-letters");
const imageGuy = document.getElementById("image-guy"); 

const message = document.getElementById("message");



let messageInternal = "";

let index = 0;

let wrongGuesses = "";

const words = ["batman", "arielle", "kongsuni", "cocomelon"];
const validateLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let word = "";

let word2 = [];

let word3 = [];

let word4 = "";

let hangmanDead = 0;


//2). generate a random number from 1-4
function randomNumber() {
    let num1 = Math.random();
    let num2 = (num1 * 4) + 1;
    let num3 = Math.floor(num2);
    return num3;
}

//1). on page load 
window.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");
    
 
    index = randomNumber() - 1; //2.5) alter index for index start at 0
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
    //underScoreDisplayTopper.innerHTML = word;
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

        //if value in "word" , e.g value = b, word = batman, find position of b in
        //word(e.g.index = 0) 

        if (indices.length) {
            console.log("The search term '" + value2.toLowerCase() + "' was found at indices: " + indices);

            
            for (let i = 0; i < word.length; i++) {


                

                for (let j = 0; j < indices.length; j++) {
                    

                    console.log(word2);
                    console.log(indices.length);
                    console.log(indices);
                    console.log(value2.toLowerCase());
                    
                    if (indices[j] === i) { //loop through j array of indices = [0,2], so if value of 0 found at j array equals INDEX of 
                        // i array  0 , 1, 2 etc, then I array at position i changes to value2.toLowerCase()
                        console.log(word[i]);
                        word2.splice(indices[j], 1, value2.toLowerCase());
                        console.log(word2);
                        word3[indices[j]] = value2.toLowerCase();
                        
                        //let word3 = word2.join(" ");
                        //console.log(word3);
                        //underScoreDisplayTopper.innerHTML = word3;
                    }
                    
                    //word2[i] += "_ ";
                    //word2[indices[j]] += value2.toLowerCase();
                   
                }
                console.log(word3);
                word4 = word3.join(" ");
                console.log(word4);
                underScoreDisplayTopper.innerHTML = word4;
                console.log(word3.length); //word3.length is the hit counter, for successful hits to the word
                
            }
           
            


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

        hangmanDead++;
        console.log(hangmanDead);
        if (hangmanDead === 1) {
            imageGuy.setAttribute("src", "./1hang.jpg");
        }
        else if (hangmanDead === 2) {
            imageGuy.setAttribute("src", "./2hang.jpg");
        }
        else if (hangmanDead === 3) {
            imageGuy.setAttribute("src", "./3hang.jpg");
        }
        else if (hangmanDead === 4) {
            imageGuy.setAttribute("src", "./4hang.jpg");
        }
        else if (hangmanDead === 5) {
            imageGuy.setAttribute("src", "./5hang.jpg");
        }
        else if (hangmanDead === 6) {
            imageGuy.setAttribute("src", "./6hang.jpg");
        }
        else {
            imageGuy.setAttribute("src", "./7hang.jpg");
            setTimeout(function () {
                if (confirm("Sorry, you lost! Please try again.")) {
                    window.location.reload();
                }
            }, 1500)
            
        }

    }
    });
