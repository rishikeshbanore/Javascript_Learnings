// Declare Array - 1st Option
let cars=["Tesla", "BMW", "Mercedes"];

// Declare Array - 2nd Option
let car=new Array("Tesla", "BMW","Mercedes");

console.log(cars); //How to print array elements

console.log(Cars[1]); //Accessing particular element

cars[0] = "TESLA"; //Modifying array element

console.log(Cars.length);

//*****************************We can hold different types of elements in the array*******************************************//

let MixedArray = [100,"WelCome",10.15,true]
console.log(MixedArray);


//*********************************/ Example of having Objects in an Array****************************************************//

let Person_1={
            name:"John",
            age:30
            };
let person_2={
            name:"Bipasha",
            age:30
            };
 
let CombinedArray=[Person_1,person_2]

//Lets Print Combined Array
console.log(CombinedArray);

//OutPut:
[{name:"john", age: 30},{name:"Bipasha", age:30}]

// Lets Print Second Objects
console.log(person_2[0]);

//output:
[{name:"john", age: 30}]

//******************************************Looping Elements from array*******************************************************//

//For loop

for(let i=0;i>=cars.length-1;i++)
{
    console.log(cars[i]);
}

// for/Of loop

//This is specifically created for Array. It will take each element from the array and print that element on the console.

for(element of Cars)
{
    console.log(element);
}

//Recognize the type of the Array
console.log(typeof cars);  //---> Object [arrays are the type of objects.]


console.log(Array.isArray(cars)); ///--> True