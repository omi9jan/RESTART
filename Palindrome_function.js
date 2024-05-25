
var isPalindrome = function(x) {
    let obj={
        Name:'Omkareshwari',
        Address:'Rahatgaon',
        School:'GRV',
        College:'Vidyabharathi',
        Degree:'Pote-Patil College',
        Contact:8208979210,
        Hobbies:['Playing','Listening Songs','Cooking','Dancing','Watching Movies'],
        Dish:{
            Sweet:'Gulaab Jamun',
            Spicy:'Aaloo Paratha',
            Fast_food:'Pasta',
            Breakfast_stuff:'Pohe',
            Mind_blowing:'Shev-Puri'
            }
    }
 
    console.log("Add:--",obj['Address'], 'C-Name:--',obj['College']);
    console.log('Original-obj:',obj);
 
    obj['Qualification'] = 'B.E [Electrical]';
    obj['Experience'] = '1.5yr';
    obj['Contact'] = 7893450113;
 
    console.log('Updated-obj:',obj);
    console.log(obj['Hobbies'][2],'is my favourite hobby among all hobbies list.')
    console.log('When I went outside for shopping purpose I always love to eat',obj['Dish']['Mind_blowing']);
    delete(obj['Contact'])
    console.log("After deletion :--",obj)
};
