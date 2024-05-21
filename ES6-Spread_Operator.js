
 
// Spread Operator used in object
// to copied data of one object within second object
// in object data is already their then it will simply update that data
// not going to create duplicate key value pair of data
 
 
let myVehicle = {
    'brand' : 'Ford',
    'type' : 'car',
    'color' : 'black'
};
 
let myUpdatedVehicle = {
    'year' : 2030,
    'model': 'Mustang',
    'color' : 'Dark Grey'
}
 
let dream_car = {
    ...myVehicle,
    ...myUpdatedVehicle,
    'owner' : 'Myself'
}
 
console.log('Dream Car :- ',dream_car);
 
 
 
//output:
 
// Dream Car :-  {
//     brand: 'Ford',
//     type: 'car',
//     color: 'Dark Grey',
//     year: 2030,
//     model: 'Mustang',
//     owner: 'Myself'
//   }
 
 
// Spread Operator used in Array
// to copied data of one Array within second Array
// in object data is already their then it will simply update that data
// not going to create duplicate key value pair of data
// but in Array it not happened...duplicate element get created
 
let my_roommates = ['Sandhiya','Sabrin','Vanshika','Gayatri'];
 
let my_friends = ['Shiva','Sarita','Arpita','Manisha'];
 
let enjoyment = [...my_friends, ...my_roommates,'Gayatri'];
 
console.log(enjoyment);
 
 
//Output:
 
// [
//     'Shiva',    'Sarita',
//     'Arpita',   'Manisha',
//     'Sandhiya', 'Sabrin',
//     'Vanshika', 'Gayatri',
//     'Gayatri'
//  ]
