/*
    This file will contain simple examples of Javascript functions.
*/

//Example 1 - Function which accept arguments.

    function addition(x,y)
    {
        console.log(x+y); //Printing addition of two number.
    }

    //Calling function 

    addition(200,500);

//Example 2 - Function which also returns result.

    function subtraction(x,y)
    {
        return (x-y); //Printing addition of two number.
    }

    //Calling function 

    console.log("Printing Subtraction - " + subtraction(500,200));

// Example 3 - Function which does not return any result.

    function greetings()
    {
        console.log("Hey Good Morning..");
    }

    //calling function

    greetings();

//Example 4 - Function return argument without any input

    function greetings()
    {
        return("Hey Good Morning..");
    }

    //calling function

    greetings();