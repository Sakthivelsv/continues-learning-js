function search() {
    let  myData= document.querySelector('body')
    myData.style.background ='yellow'
}

//function Revert() {
  //  let  myData= document.querySelector('body')
    //myData.style.background ='white'
//}

function revert() {
    let  ul = document.querySelector('ul')
    let newLi = document.createElement('li')
    newLi.textContent ='Changing css with javascript!!!'
    ul.appendChild(newLi)
}
