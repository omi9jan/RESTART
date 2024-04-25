//Find given string is palindrome or not.
 
let str1 = 'madao';
    let rev_str = '';
   
    for(let i = str1.length-1; i >= 0; i--)
    {
        rev_str += str1[i];  
    }
   
    if(str1 == rev_str)
    {
        console.log('Palindrome');
    }
    else
    {
        console.log("Not Palindrome");
    }
 
///////////////////////////////// OR  ////////////////////////////////
 
let str = 'madam';
    let flag = true;
   
    for(let i=0; i<Math.floor((str.length)/2); i++)
    {
        let start = str[i];
        let end = str[str.length-1-i];
       
        //console.log(start,end)
       
        if(start !== end)
        {
            flag = false;
            console.log("Not Palindrome");
        }
    }
    if(flag)
    {
        console.log("Palindrome");
    }
