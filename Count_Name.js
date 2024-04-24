let n=10;
let arr=['Baba','Shiva','MONIKA','Shiva','Baba','MONIKA','MONIKA','MONIKA','MONIKA','Shiva'];
let obj={};
 
for(let i=0; i<n; i++)
    {
        if(obj[arr[i]] == undefined)
            {
                obj[arr[i]] = 1;
            }
        else{
            obj[arr[i]]++;
        }
    }
 
console.log("OBJECT:--",obj);
 
for(let key in obj)
    {
        console.log(key, obj[key]);
    }
 
