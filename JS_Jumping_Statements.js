
/*
    Jumping Statement - Break;
*/

    for(let v=1;v<=10;v++)
    {
        if(v==5)
        break;

        console.log(v);
    }
/*
    Jumping Statement - Continue.
*/

    for(let v=1;v<=10;v++)
    {
        if(v==5)
        continue; // This Programme will skip printing 5. It will jump to Printing 6 directly.

        console.log(v);
    }