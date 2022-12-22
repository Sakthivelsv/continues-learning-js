let myTrip =[
{day: 1, place:'Glass bridge'},
{day: 2, place:'Resort'},
{day: 3, place:'Zipline'},
{day: 4, place:'Waterfalls'},
];

//find
//let result = myTrip.find(function (myTrip) {
  //  return myTrip.place ==="Waterfalls"
//})

//console.log(result);

//findindex

let result = myTrip.findIndex(function (myTrip) {
    return myTrip.place ==="Waterfalls"
})

console.log(result);