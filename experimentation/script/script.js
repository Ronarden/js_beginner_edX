document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    let b = document.querySelector("#box1");
    b.addEventListener('click', function(evt) {
        alert("clicked!");
        console.log('clicked');
      })   
  });

//1 get a reference on the element
let b = document.querySelector("#box1");
    
      /* 2 add the event listener
      b.addEventListener('click', function(evt) {
        alert("clicked!");
        console.log('clicked');
      })   
      */