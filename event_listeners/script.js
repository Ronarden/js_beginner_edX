/*
Optional project
Try to write a small game that will display a word taken from an array,
randomly, and you will have to type the letters of this word as fast as you can.
A bit like the "type of the dead" game (look on YouTube). You can imagine the evolution
such as choosing the level, start with 3 letter words, 4 letter words, etc.
Choose a topic (medicine, with very difficult words to spell, etc.).
If you look at the end of the module, you will see how to work with graphics and animation,
you can also imagine a graphic version of this game.
project suggested from the course
I'll need:

Start input from the user to get a word to copy.
An array of words.
A function to choose randomly from the array.
an input field where the user can write the word
a function that compares the user input with the choosen word from the array (or using key events?)
an output to the user if he typed correctly

Very optional:
multiple word arrays from different topics
highscore
difficulty settings
I will propably copy a lot of the examples from the course to get this to work!
*/
/* first try:
var randomWord = "random";   // this needs to be randomized in another  function?
function showWordToType() {
      // This should show the user a word to type!
            document.body.innerHTML += "randomWord";
   }
*/
// randomizing 10 numbers to get the value of an array to choose from:
//let randomNumber = Math.round(Math.random() *10);
//console.log(randomNumber);
//how to run this on click on the button?
// Make it a function and call it in the html on a button click?
/*old:
function randomizedNumber () {
    var randomNumber= Math.round(Math.random() *10);
  console.log (randomNumber); //will this work?! Check to find out, if the function will be called.
}
*/
//will this work?! NEW:
function randomizedNumber () {
    var randomNumber= Math.round(Math.random() *9);
    var arrayOfForLetterWords=['test', 'rest', 'hike', 'stop', 'cool', 'look', 'born', 'love', 'hate', 'heat'];
    var randomWord = arrayOfForLetterWords[randomNumber];
    console.log (randomNumber);
    console.log (arrayOfForLetterWords[randomNumber]);
    console.log (randomWord);
    document.body.innerHTML += " " + randomWord;
}
//calling the function on click will show the number (I know it's not truly random) 
//and the word at the array position!
//Now of to display the word on the canvas. (This code woll look disgusting to any programmer for sure). Works!
//I'm the greatest :D Should put the word into a container with an id, but that's for the future.
// Need key input from the user now. Eventlistener with key codes?
// Setting up an input field an continiously checking if the input value === randomWord could work. Tommorrow!





