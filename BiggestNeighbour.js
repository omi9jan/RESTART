//given is an array.
//Find the elements in the array whose is bigger than his neighbour elements.
 
let arr=[5,7,6,9,8,10];
   
let bag="";
for(let i=1; i<arr.length-1; i++)
    {
        let prev = arr[0];
        let cr = arr[i];
        let next = arr[i+1];
        if(prev<cr && cr>next)
            {
                console.log(cr);
            }
    }
