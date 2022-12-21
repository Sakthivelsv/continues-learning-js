let email ='rohit@gmail.com';
let pass='12345';

function emailCheck(userMail) {
    if (userMail.includes('@')) {
        return true;
    }else {
        return false;
    }
}
console.log(emailCheck(email));

function passCheck(strongPass) 
{
    if ((strongPass.includes('1234')) && (strongPass.length > 6))
    {
        return true;
    } 
    else
    {
        return false;
    }
}

console.log(passCheck(pass));