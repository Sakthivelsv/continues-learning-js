let myTodos = [
    {fruits : "Apple"    ,     Quantity :'2kg' , Price : 100 },
    {fruits : "Banana"   ,     Quantity :'1kg' , Price : 60 },
    {fruits : "Cherry"   ,     Quantity :'1kg' , Price : 40 },
    {fruits : "Dates"    ,     Quantity :'2kg' , Price : 140 },
    {fruits : "Emuapple" ,     Quantity :'1kg' , Price : 190 }
];

//let filter = myTodos.filter((todo) => {
  //  return todo.Quantity === "1kg";
//})
    
let filter = myTodos.filter((todo) =>  todo.Quantity === "2kg");


console.log(filter);