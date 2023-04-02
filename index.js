function createEmployeeRecord(myArray){
    return {
        firstName: myArray[0],
        familyName:myArray[1],
        title:myArray[2],
        payPerHour:myArray[3],
        timeInEvents:[],
        timeOutEvents:[],

    }
}

function createEmployeeRecords(employeesArray){
    return employeesArray.map(employee => createEmployeeRecord(employee))

}

function createTimeInEvent(employee, dateStamp){
    const [date, hour] = dateStamp.split('') ;

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date,
    });

    return employee;

}

function createTimeOutEvent(employee,dateStamp){

    const [date , hour] = dateStamp.split('');

    employee.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date,
    });

    return employee;
}

function hoursWorkedOnDate(employee,date){
    const timeInEvent = employee.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find(event => event.date === date);

    const hoursWorked = (timeOutEvent - timeInEvent)/100;

    return hoursWorked;
}

function wagesEarnedOnDate(employee, date){

    const hoursWorked = hoursWorkedOnDate(employee,date);
    const pay = employee.payPerHour;

    const wageEarned = hoursWorked*pay;

}
