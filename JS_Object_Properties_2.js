// In this Function is defined in the Object, so its called method. 
// We need to give semicolon at the end because it has method.
// Method also needs to be associated with some Property.

let employee =
{
    empname:"Ransh",
    empid:1703,
    Job:"scientist",
    basicsal:50000000,
    bonus: function()
            {
                return ((this.basicsal*10)/100);
            }
};

    console.log(employee["empname"]);
    console.log(employee.bonus());
