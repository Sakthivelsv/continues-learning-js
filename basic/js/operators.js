// Relational Operators

console.log('10 > 5 =', 10 > 5);
console.log('2 > 5 =', 2 > 5);
console.log('10 < 55 =', 10 < 55);
console.log('10 > 5 =', 10 > 5);
console.log('105 == 105 =',105 == 105);
console.log('105 != 105 =',105 != 105);
console.log('105 == "105" =',105 == "105");
console.log('105 != 105 =',105 != 105);
console.log('105 === 105 =',105 === 105);
console.log('105 !== 105 =',105 !== 105);
// Logical operators
console.log('!10 =', !10);
console.log('!true =', !true);

// or operator 
// here falsy values are  false 0,("empty string"), null, underfined
// remaining all truthy values
console.log('10 || "ok"=', 10 || 'ok');
console.log('10 || 25 =', 10 || 25);
console.log('"" || 10 =', "" || 10);
console.log('0 || null =', 0 || null);

// And operator
console.log('10 && 25 =', 10 && 25);
console.log('10 && false =', 10 && false);
console.log('undefined && 25 =', undefined && 25);
console.log('false && undefined =', false && undefined);