
//Create a function for converting uppercase letter in lowercase letter
   
   
function ConvertToLower(letter)
{
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   
    let index;
   
    for(let u=0; u<upper.length; u++)
    {
        if(letter == upper[u])
        {
            index = u;
        }
    }
    for(let l=0; l<lower.length; l++)
    {
        return(lower[index]);
    }
}
 
let char = 'Y';
console.log(ConvertToLower(char));
 
 
//Create a function for converting uppercase word in lowercase word
 
function LowerWord(word)
{
    let bag = '';
    for(let w=0; w<word.length; w++)
    {
        bag += ConvertToLower(word[w]);
    }
    return(bag);
}
 
let String = 'OMKARESHWARI';
console.log(LowerWord(String));
 
//Create a function to convert uppercase array into lowercase array
 
function LowerArr(array)
{
    let store = [];
    for(let a=0; a<array.length; a++)
    {
        store.push(LowerWord(array[a]));
    }
    return store;
}
 
let arr = ['MY','WORD','MY','LIFE','IS','LORD','SHIVA'];
console.log(LowerArr(arr));
