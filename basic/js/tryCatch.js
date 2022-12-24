//let convertRupees = (doller) => {
  //  return doller *69
//}   

//console.log(convertRupees (1));

//let convertRupees = (doller) => {
  //if(typeof doller ==='number'){
    //return doller*69
  //} else{
    //throw Error('Amount should be in numbers')
 // }
//}
//console.log(convertRupees ('one'));

//console.log('This line will not shows if statement fails');


let convertRupees = (doller) => {
  if(typeof doller === 'number') {

    return doller *69
  }
  else {
    throw Error ('Amount need to be in number')
  }
}

try {
  console.log(convertRupees(one));
} catch (error) {
  console.log(error);
}
console.log('This line will not shows if statement fails'); // here we can seen "This line will not shows if statement fails"if program fails also
