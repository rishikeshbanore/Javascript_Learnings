//***********VAR**********

//Multiple line declaration
var x; //Declaration 
x=10; //Initialization

//single Statement declaration and Initialization
var x=110;

//single statement - Multiple variable
var x=100, y=200;

document.write(x +"\n");
document.write(y + "\n");

//*********let************/

//Multiple line declaration
let a; //Declaration 
a="WelCome \n"; //Initialization

//single Statement declaration and Initialization
let b="Welcome second Variable \n";

//single statement - Multiple variable
let c="Welcome third variable \n", d="Welcome and Thank you \n";

document.write(a);
document.write(b);
document.write(c);
document.write(d);


//******************* THEORY **********************

// Var is function scoped and let is block scoped.

//if you use consol.log(x) before declaring var x then it will throw error. It will show value as undefined
//if you use consol.log(x) before declaring le x then it will  throw error.Code will not execute.


//**************CONST***************/

const z=100;
document.write(z);

// Not Possible to assign any other value to the const variable. so X wil always have value of 100;


//Javascript is dynamically typed language. So it will consider appropriate datatype based on the the type of the data.

// Primitive Datatypes: Number, String, Boolean, Null and Undefined.

// Non Primitive Datatypes or Objects:  Object,array, Function, Date and Regx


//************** DATA TYPE*************

let Q=100;
document.write(typeof(Q)); // This is Number.

let P="Parrot";
document.write(typeof(P)); //this is String
console.log(typeof(P));

let R=100.25;
document.write(typeof(R)); //Integers and Number are both considered as Number in Javascript.
console.log(typeof(R));

let flag=true;
document.write(typeof(flag)); //this is boolean
console.log(typeof(flag));

let status_=null;
document.write(typeof(status_)); //this is object type.
console.log(typeof(status_));

let Value;
document.write(typeof(value)); //this is undefined
console.log(typeof(value));