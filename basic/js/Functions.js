function sayHello() {
    console.log('Hello Rohit');
}
sayHello();

function fullNmae(firstName,secondName) {
    console.log(`${firstName} ${secondName}`);
}
fullNmae('King','Virat');

let addTwonumbers =function (num1, num2) 
{
    console.log(num1 + num2);
}

addTwonumbers(100,164);

let addTwoplayers = function (Ininings1, Ininings2) {
    let added =Ininings1 + Ininings2;
    return added;
}

console.log(`Your score is ${addTwoplayers(208,109)} `);