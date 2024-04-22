//Transvers array from left to right
   
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
 
let bag = '';
for(let r=0; r<arr.length; r++)
{
for(let c=0; c<arr[0].length; c++)
{
bag += arr[r][c] + ' ';
}
}
console.log(bag);
 
//Transverse array from right to left
 
let store = '';
for(let r=arr.length-1; r>=0; r--)
{
for(let c=arr[0].length-1; c>=0; c--)
{
store += arr[r][c] + ' ';
}
}
console.log(store);
 
//Transvers array from left to right
 
for(let r=0; r<arr.length; r++)
    {
        let bag = '';
        for(let c=0; c<arr[0].length; c++)
        {
            bag += arr[r][c] + " ";
        }
        console.log(bag);
    }
   
    //Transverse array from right to left
   
    for(let r = arr.length-1; r>=0; r--)
    {
        let store = '';
        for(let c=arr[0].length-1; c>=0; c--)
        {
            store += arr[r][c] + ' ';
        }
        console.log(store);
    }
