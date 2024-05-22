
 
//Ternary Operator:
 
let marks = [90,90,80,90,80];
let total = 0;
 
//Normal way (without using ternary operator)
 
for(let i=0; i<marks.length; i++)
{
    total += marks[i];
}
console.log('total:-',total);
 
if(total < 200)
{
    console.log("Failed");
}
else if(total <= 300)
{
    console.log("Passed with Grade-C");
}
else if(total <= 400)
{
    console.log("Passed with Grade-B");
}
else
{
    console.log("Passed with Grade-A");
}
 
//Output:-
 
// total:- 430
// Passed with Grade-A
 
 
//By using ternary operator
 
let total_marks = 0;
let student_marks = marks.forEach((ele,i)=>{
    total_marks += ele;
})
console.log('Total_marks:-',total_marks);
 
total_marks < 200 ? console.log("Student Failed")
: total_marks <= 300 ? console.log('Grade-C student')
: total_marks <= 400 ? console.log('Grade-B student')
: console.log('Student passed with Destintion')
 
 
//output:-
 
// Total_marks:- 430
// Student passed with Destintion
 
 
