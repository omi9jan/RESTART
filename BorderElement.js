// Given an array.
// Find the element which is present at border of array.
 
let arr= [
    ['a','b','c','d'],
    ['e','f','g','h'],
    ['i','j','k','l'],
    ['m','n','o','p']
];
 
let bag = '';
 
for(let r=0; r<arr.length; r++)
{
    for(let c=0; c<arr[0].length; c++)
    {
        if(r==0 || c==0 || r==arr.length-1 || c==arr[0].length-1)
        {
            bag += arr[r][c] +' ';
        }
    }
}
console.log(bag);
