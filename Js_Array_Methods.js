let fruits=["Banana", "Orange", "Apple", "Mango"];

console.log(fruit.tostring());  //Banana,Orange,Apple,Mango
console.log(fruit.join());     //Banana,Orange,Apple,Mango
console.log(fruit.join("*")); //Banana*Orange*Apple*Mango

//pop()
fruits=["Banana","Orange","Apple","Mango"];
console.log(fruit.pop());
console.log(fruits); //["Banana", "Orange", "Apple", "Mango"]

//Push()
fruits=["Banana","Orange","Apple","Mango"];
console.log(fruits.push("Kiwi")); //5
console.log(fruits); //["Banana", "Orange", "Apple", "Mango"]

//shift()
fruits=["Banana","Orange","Apple","Mango"];
console.log(fruits.shift()); //Banana
console.log(fruits); ["Orange", "Apple", "Mango"]

//unshift()
fruits=["Orange","Apple","Mango"]
console.log(fruits.unshift("Lemon"));
console.log(fruits); ["Lemon","Orange","Apple","Mango"]

//Deleting element from Array
fruits=["Banana","Orange","apple","Mango"];
delete fruits[1];
console.log(fruits); ["Banana",  , "Apple", "Mango"]

//conact() - joining/merging 2 or more Arrays
let arr1 =[10,20];
let arr2 =["A","B","C"];
console.log(arr1.concat(arr2)); //[10,20,A,B,C]

let arr3=["x","y","z"];
console.log(arr1.concat(arr2,arr3));

//slice()
fruits=["Banana","Orange","apple","Mango"];
console.log(fruits.slice(1)); //["Orange","apple","Mango"]
console.log(fruits.slice(2)); //["apple","Mango"]

//sort()
fruits=["Banana","Orange","apple","Mango"];
console.log(fruits.sort()); // ["Apple","Banana","Mango","Orange"];

let nums=[100,200,500,800,1000];
console.log(nums.sort());

//reverse()
fruits=["Banana","Orange","apple","Mango"];
console.log("Original  Array Elements:" + fruits);
fruits.reverse();
console.log("After Reversing:" + fruits);


