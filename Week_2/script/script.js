var wordTemplate = 'cat';
var i = 0;
var j = 0;
//let the dom be loaded and then add "cat" as the first word.
//It was wrong to no wait on it!
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  document.getElementById('wordTemplate').innerHTML = wordTemplate;
});


function compareText() 
{
  var word = document.getElementById("typedWord").value;
  whatYouTyped.innerHTML = typedWord.value;  
  document.getElementById('wordTemplate').innerHTML = wordTemplate;

  if (typedWord.value === wordTemplate)
  {
    i = i+1; //counts how many success the user got!
    outcome.innerHTML = 'Success! Streak of: ' + i;
    console.log(i);
    document.getElementById("typedWord").value = ""; //resets the input field!
    var possValues = ["cat", "dog", "horse", "cow", "truth", "lie", "known", "uncomprehensible", "visible", "unseen", "incorrigible", "fox", "beauty", "rose", "grace", "forgiveness", "cross", "adams", "belgium", "value", "praise", "life", "zaphod", "arthur", "home", "farm", "city", "country", "rural", "urban"];
    //change the var wordTemplate in reference to successes (5 successes = more difficult array to choose from.)
    wordTemplate = possValues[Math.round((possValues.length-1)*Math.random())];
    console.log(wordTemplate);
    document.getElementById('wordTemplate').innerHTML = wordTemplate;
      // code block to be executed
    }
  }

  /*
polish:
*get the first word to display immediatly. DONE!!!! Had to wait on the DOM to be ready! Yeehaa.
*showing of the highscore


possible new features:
*changing the difficulty with more arrays of words in reference to the score (presented by the variable 'i')
*spellchecking while typing

*/