// Hier zeigen wir einfach die console Ausgabe, je nachdem, welchen Wert die Variable javaScriptConsole hat.
var javaScriptCourse = true;
if(javaScriptCourse) {
    console.log("This is a javaScriptCourse!");
} else {
    console.log("This is not a Java Script Course!");
}
// Eventuell kann man hier noch die Variable auf true oder false mit einer Funktion setzen und so dynamisch ändern.

// comparism operators
// < > <= > == != and === !==

var age = 43;

if (age < 2) {
    console.log("I'm a baby");
} else if (age < 18) {
    ("I'm a child");
} else if (age < 60) {
    console.log ("I'm an adult");
} else {
    // age >= 60
    console.log("I'm old");
}

if (age == 72) {
    console.log("I'm", age, "years old.");
}
age = 13;
if(( age > 12) && (age < 14)) {
    console.log("I'm a young teenager.");
}
/* avoiding type errors by using the triple === the double ones will try to convert a string into a 
number! example below:
*/
var age = "45"
if (age == 45) {
    console.log(age);
}
//output will be 45; contrary to:

var age = "45"
if (age === 45) {
    console.log(age);
}
// undifined because we checked against a number not a string or another type!

// Logical AND && OR || Operations
var boo = (0/0) || 42
console.log (boo);
/* Ausgabe ist 42. Was ist passiert?
Zeile 49 declares the variable boo and checks (0/0) for a boolean value.
(0/0) equals NaN and that in case of the boolean check equals false
|| means "OR"
If the value of boo is true js will stop at the operator and will ignore the statement after ||
(0/0) is false, therefor boo will be set to 42 and that will be logged into the console.
*/
var x = 2;
var y = 5;

if(y > 0) { // true
    if ((x > 2) && (y < 10)) { //first statement is false, therefor it will not test the 2nd statement (AND)
        if(x === 2) console.log("YES"); // not tested
    } else {                            // this will be tested
        if((x > 10) && (y === 5)) console.log("NO"); // again false, so no output
    }
} else {
    console.log("MAYBE"); // not tested, because y < 0 was true!
}
console.log(" THE END"); // the only output!

//switch statement: switch statemens can simplify if then else statements! Remember to use the break!
//even better use arrays :)
//example from the course (changed a bit to understand it better while working on it):

// Between 0 and 2
// Math.random() returns a value between 0 and 1
// Math.round returns the value of a number rounded to the nearest integer
var month = Math.round(2*Math.random());

console.log("Picked month number: " + month); 

// VERSION 1: a bit stupid, but it works...
if(month === 0) { 
  console.log('Januar');
} 
if(month === 1) { 
  console.log('Februar');
} 
if(month === 2) { 
  console.log('März');
} 
 

// Version 2: using if... else, a bit better

if(month === 0) { 
  console.log('Januar');
} else if(month === 1) { 
  console.log('Februar');
} else if(month === 2) { 
  console.log('März');
} 


// Version 3: using a switch

switch(month) {
  case 0:
    console.log('Januar');
    break;
  case 1:
    console.log('Februar');
    break;
  case 2:
    console.log('März');
    break;
  }

// You may not use breaks to regroup cases

switch(month) {
  case 0:
  case 1:
  case 2:
    console.log('First Quarter'); 
    break; 
}


// We can not do that, case is always followed by a value, not
// an expression
/*
switch(month) {
  case ((month >=0) && (month <=4)): // ERROR !!!!
    console.log('month: we go to work!');
    break;
  case ((month === 5) || (month === 6)):
    console.log('WEEK END!'); 
    break; 
}
*/

// FINALLY: you'd better use an array :-)

var monthsInYear = ['Januar', 'Februar', 'März'];

console.log("month (using an array): " + monthsInYear[month]);

/* That works splendidly. And typing speed increases a lot while working on this!
Loops are next!
*/
