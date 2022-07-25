let person=
{
    firstname:"John",
    lastname:"Kenedy",
    age:50,
    weight:60    
}

//accessing Object Properties

    console.log(person["firstname"])
    console.log(person.age);

// Add new Property to existing object

    person["height"] =5.5;  //person.height = 5.5
    console.log(person["height"]);

//Update Existing Property

    Person["weight"]=65;

    console.log(person["weight"]);

    //remove Property from Object
    delete person["age"];
    console.log(person["age"]);  // undefined

console.log("**************************Looping Objects*******************************");

//for/in loop

    for(let x in person)
    {
        console.log(x); //prints only property names.
        console.log(person[x]);  //Prints only values of the Prosperity.
        console.log(x+"  "+person[x]); //Prints Property name and the Value.
    }