function createEmployeeRecord(employeeArr) {
    let newEmployeeObject = {
        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return newEmployeeObject
}

function createEmployeeRecords(arrOfArr) {
    let employeesArr = arrOfArr.map(createEmployeeRecord)
    return employeesArr
}

function createTimeInEvent(employee, dateStamp) {
    debugger
    let newTimeIn = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    }
    debugger
    employee.timeInEvents.push(newTimeIn)
    debugger
    return employee
}

function createTimeOutEvent(employee, dateStamp) {
    let newTimeOut = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    }
    employee.timeOutEvents.push(newTimeOut)
    return employee
}

function hoursWorkedOnDate(employee, date) {
    let timeOutHour 
    let timeInHour 
    for (const timeOut of employee.timeOutEvents) { if (timeOut.date === date) { timeOutHour = timeOut.hour }}
    for (const timeIn of employee.timeInEvents) { if (timeIn.date === date) { timeInHour = timeIn.hour }}
    let hoursWorked = (timeOutHour - timeInHour) / 100
    return hoursWorked
}

function wagesEarnedOnDate(employee, date) {
    let wagesEarned = hoursWorkedOnDate(employee, date) * employee.payPerHour
    return wagesEarned
}

function allWagesFor(employee) {
    // let allWages
    // iterate over employee.timeInEvents & timeOutEvents...maybe get length? .map all the dates and then .reduce that new array? 
    // let datesWorked = employee.timeInEvents.map(ev => ev.date)
    // datesWorked.reduce
    let allDates = employee.timeInEvents.map(function(e){ e.date })
}

function findEmployeeByFirstName(srcArray, firstName) {

}

function calculatePayroll(srcArray) {

}