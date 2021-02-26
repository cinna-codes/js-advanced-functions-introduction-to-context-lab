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
    let datesWorked = employee.timeInEvents.map(function(event){ return event.date })
    let allWages = datesWorked.reduce(function(total, date) { // `total` is total, `date` is the variable name for each item in the array
        return total + wagesEarnedOnDate(employee, date) // the return value automatically becomes the new `total` value
    }, 0) // 0 is the starting point
    return allWages
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(emp => firstName === emp.firstName)
}

function calculatePayroll(srcArray) {
    return srcArray.reduce(function(total, emp) {
        return total + allWagesFor(emp)
    }, 0)
}