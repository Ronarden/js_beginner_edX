
var wordTemplate = 'cat';
var i = 0;
//var displayWord = document.querySelector("#wordTemplate");


function compareText() {
  document.getElementById('wordTemplate').innerHTML = wordTemplate;
  var word = document.getElementById("typedWord").value;
    whatYouTyped.innerHTML = typedWord.value;  
    document.getElementById('wordTemplate').innerHTML = wordTemplate;

if (typedWord.value === wordTemplate) {
    i = i+1; //counts how many success the user got!
    outcome.innerHTML = 'Success! Streak of: ' + i;
    console.log(i);
    document.getElementById("typedWord").value = ""; //resets the input field!
    var possValues = ["cat", "dog", "horse", "cow", "truth", "lie", "known", "uncomprehensible", "visible", "unseen", "incorrigible", "fox", "beauty", "rose", "grace", "forgiveness", "cross", "adams", "belgium", "value", "praise", "life", "zaphod", "arthur", "home", "farm", "city", "country", "rural", "urban"];
    //change the var wordTemplate in reference to successes (5 successes = more difficult array to choose from.)
    wordTemplate = possValues[Math.round((possValues.length-1)*Math.random())];
    console.log(wordTemplate);
    document.getElementById('wordTemplate').innerHTML = wordTemplate;
    //change value of wordTemplate
      } 
}

/*
polish:
*get the first word to display immediatly.
*showing of the highscore


possible new features:
*changing the difficulty with more arrays of words in reference to the score (presented by the variable 'i')
*spellchecking while typing

*/