//let myTags = document.querySelector('p');
//console.log(myTags);// here O/P is print <p> tag itself so we cann't change this

// now use this property
//myTags.textContent ='changes has been made by javascript' // here 1st <p> tag only changed, because  javascript takes 1st <p> tage position only/

// method 2:-
//let myTags = document.querySelectorAll('p');
//myTags.forEach ((p) =>{
  //  p.textContent ="changed using loops in JS"

//})

// method 3:- arrow func


let myTags = document.querySelectorAll('p');
//myTags.forEach ((p) => p.textContent ="changed using  in JS");

// remove 
myTags.forEach ((p) => p.remove());


