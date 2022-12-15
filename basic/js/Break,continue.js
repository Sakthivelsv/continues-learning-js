//Break:loop execution & take program flow out
//continue:stop loop execution & take program flow to start of loop

var month = prompt("Enter the number between 1 to 12",6);
for (var days  = 1; days <=31; days ++) 
{
    if ((month ==4 || month ==6 || month ==9|| month ==11) && days==31) continue; 
    console.log(' Day:', days);
    
    if ( month ==2 && days==28) break;

    
    
}