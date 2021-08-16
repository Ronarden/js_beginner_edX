var myself = {
    familyName:'Zschirnt',
    givenName: 'Ronny (yeah that is right)',
    age: '41'
}
for (var property in myself) {
    console.log(property);
    console.log(myself[property]);
}

/* random number quizz
trying a quizz to guess a random number and getting hints about to small or to big
*/
let randomNumber = Math.round(Math.random() *100);
console.log(randomNumber);
//this was just a test, if I understood how to get to a randon number
//now I need an input from the user to get an estimate for the number to check against
//I just don't know how, so I'll just write the formula

var yourGuess = 41;

//while (randomNumber!=yourGuess);   // I need to loop that till the right number is found, need to find the right syntax and the user input!
if(yourGuess < randomNumber) { 
    console.log('zu niedrig!');
  } else if (yourGuess === randomNumber) { 
    console.log('Das stimmt! Die Zahl war' + randomNumber);
  } else if(yourGuess > randomNumber) { 
    console.log('Zu hoch geraten! Probiere es noch einmal');
  }

  // I need to loop that till the right number is found
