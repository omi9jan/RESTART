
[11:51 PM] Shaik Sabrin
[11:49 PM] Khupse Omkareshwari Bharat
let names=['Monu','Sonu',70,26,78];
   
    console.log("length:",names.length);
    console.log(names[2]);
    console.log(names[1]);
    console.log("last-item:-",names[names.length-1]);
    names.push(33,77,'pote college','vidyabharati',70,66,43,14,86);
    console.log(names);
    names.pop();
    names.pop();
    console.log(names);
    console.log("length:",names.length);
 
//Output:
// length: 5
// 70
// Sonu
// last-item:- 78
// [
//   'Monu',         'Sonu',
//   70,             26,
//   78,             33,
//   77,             'pote college',
//   'vidyabharati', 70,
//   66,             43,
//   14,             86
// ]
// [
//   'Monu',
//   'Sonu',
//   70,
//   26,
//   78,
//   33,
//   77,
//   'pote college',
//   'vidyabharati',
//   70,
//   66,
//   43
// ]
// length: 12
 
    console.log(Math.ceil(-8.9));
    console.log(Math.ceil(8.9));
    console.log(Math.ceil(5.2));
    console.log(Math.ceil(-1.2));
 
////////////////////////////////////////////////////
 
    console.log(Math.floor(2.5));
    console.log(Math.floor(3.9));
    console.log(Math.floor(-22.7));
    console.log(Math.floor(-0.06));
 
    let arr=[1,2,3,4,56];
    console.log("length:",arr.length)
    console.log("last-item:",arr[arr.length-1])
    arr.push('Monu','Sonu','Tina')
    console.log("arr:",arr)
    console.log("length:",arr.length)
    arr.pop();
    arr.pop()
     console.log("new-arr:",arr)
    console.log("new-length:",arr.length)
    console.log("updated-array:",arr.push(90,70,59,'dost','khuda'))
    console.log("arr after update:",arr)
    arr[5]='OMKARESHWARI'
    arr[8]='OM BHATT SWAHA'
    console.log("latest-arr:",arr)
 
    //OUTPUT:
// length: 5
// last-item: 56
// arr: [
//   1,      2,
//   3,      4,
//   56,     'Monu',
//   'Sonu', 'Tina'
// ]
// length: 8
// new-arr: [ 1, 2, 3, 4, 56, 'Monu' ]
// new-length: 6
// updated-array: 11
// arr after update: [
//   1,      2,       3,
//   4,      56,      'Monu',
//   90,     70,      59,
//   'dost', 'khuda'
// ]
// latest-arr: [
//   1,
//   2,
//   3,
//   4,
//   56,
//   'OMKARESHWARI',
//   90,
//   70,
//   'OM BHATT SWAHA',
//   'dost',
//   'khuda'
// ]
