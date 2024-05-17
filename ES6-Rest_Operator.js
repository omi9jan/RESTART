
// Rest Opertor
 
//Rest operator and Spread Operator are same by symbol (...)
//Spread Operator used to copy data of Array/Object to another Array/Object
//But Rest Operator are used to pass multiple data
//at a time i.e arguments inside function as a parameter
//Rest Operator work only in Function
//Rest Operator return array of that parameters which we passed as arguments.
 
//whatever parameters passed,
//we taking it by using REST OPERATOR (..x)----second step
 
function Sum(...x){
   
    //that REST OPERATOR return all parameter combining in ARRAY ------third step
    console.log('x:- ',x);
   
    let s=0;
    let total = x.forEach((ele,i)=>{
        s+=ele;
    })
    console.log("total:- ",total); //forEach function never return anything
   return s;
   
}
 
//calling Sum function and
//here we passing multiple element without combining in array-----first step
let a = Sum(1,2,3,4,5,6,7,8,9,10);
console.log(a);
 
 
//Output:-
 
// x:-  [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]
//   total:-  undefined
//   55
has context menu
