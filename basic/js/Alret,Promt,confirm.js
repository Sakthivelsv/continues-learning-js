let age = prompt ( "what is your age ? ", 18);

if (age < 18) 
{
    let parentPermission = confirm("I have my parentPermission");
   
    
    if (parentPermission) 
    {
        alert("you are allowed to drive a car");
    }
    else 
    {
        alert("you are Not allowed to drive a car");
    }
}    
else 
{
    alert("you are allowed to drive a car");
}