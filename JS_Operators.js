//Arithmetic Operators

/* Arithmetic Operators


    +       Addition 
    -       Subtraction
    *       Multiplication
    **      Exponentiation [ES2016]
    /       Division
    %       Modulus
    ++      Increment
    --      Decrement

*/

// Assignment Operators

/* Assignment Operators
    =       x=y         x=y
    +=      x+=y        x=x+y   
    -=      x-=y        x=x-y
    *=      x*=y        x=x*y
    /=      x/=y        x=x/y
    %=      x%=y        x=x%y

*/

//Relational/ Comparison Operators

/* Relational/ Comparison Operators
    ==      equal to            x == 8      false	
                                x == 5      true	
                                x == "5"	true

    ===	    equal value 
            and equal type	    x === 5	    true	
                                x === "5"	false	
    !=	    not equal	        x != 8	    true	

    !==	    not equal value 
            or not equal type	x !== 5	    false	
                                x !== "5"	true	
                                x !== 8	    true	
    
    >	    greater than	    x > 8	    false	
    
    <	    less than	        x < 8	    true	

    >=	    greater than or 
            equal to	        x >= 8	    false	

    <=	    less than or equal  x <= 8	    true 
            to	

    ?       ternary Operator
*/

// Logical Operators

/* Logical Operators
    &&      logical and
    
    ||      logical OR

    !       logical not


*/

// Arithmetic Operator Example:

let x=10, y=20;

console.log(x+y);  //30
console.log(y-x);  //10
console.log(x*y);  //200
console.log(y%x);  //0
console.log(y/x);  //2
console.log(5**2); //25
console.log(x++);  //10   // Post increment
console.log(++x);  //12   // Pre Increment  
console.log(y--);  //20    // Post Decrement
console.log(--y);  //18    // Pre Decrement

//Assignment Operator Examples:

m=100; n=50;

console.log(m);     //100
console.log(m+n);   //150
console.log(m-=n);  //50    //m=m-n
console.log(m*=n);  //2500  //m=m*n
console.log(m/=n);  //50    //m=m/n
console.log(m%=n);  //0     //m=m%n

//Logical Operator Examples:

p=10;q=20;

console.log(p>q);   // false
console.log(p<q);   //true

console.log(p>=q);  //false
console.log(p<=q);  //true

console.log(p!=q);  //true

//Ternary Operator Example:

console.log(p<q?p:q) // return p value 10
console.log(p>q?p:q) // return q values 20 

//Logical Operator Exmaple:

let a = true, b= false, c=true;

console.log(a&&b);  //false
console.log(a&&c);  //true

console.log(a||b);  //true

console.log(!a);    //false