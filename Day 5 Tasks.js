// Task 1 - Student Details

let name = "Mohithram";
let age = 25;
let department = "Mechanical";
let cgpa = 8.5;

// Normal concatenation
console.log(
"Name: " + name +
", Age: " + age +
", Department: " + department +
", CGPA: " + cgpa
);

// Template literals
console.log(
`Name: ${name}, Age: ${age}, Department: ${department}, CGPA: ${cgpa}`
);

// Task 2 - Simple Calculator

let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

// Task 3 - Age Checker

let votingAge = Number(prompt("Enter your age:"));

if (votingAge >= 18) {
console.log("Eligible to vote");
} else {
console.log("Not eligible");
}


// Task 4 - Student Grade

let studentMark = Number(prompt("Enter your marks:"));

if (studentMark >= 90 && studentMark <= 100) {
console.log("A");
} else if (studentMark >= 80 && studentMark <= 89) {
console.log("B");
} else if (studentMark >= 70 && studentMark <= 79) {
console.log("C");
} else if (studentMark >= 60 && studentMark <= 69) {
console.log("D");
} else if (studentMark >= 0 && studentMark < 60) {
console.log("Fail");
} else {
console.log("Invalid Mark");
}

// Task 5 - Login System

let correctUsername = "admin";
let correctPassword = "1234";

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username === correctUsername && password === correctPassword) {
console.log("Login successful");
} else if (username !== correctUsername && password === correctPassword) {
console.log("Invalid username");
} else if (username === correctUsername && password !== correctPassword) {
console.log("Invalid password");
} else {
console.log("Invalid credentials");
}

// Task 6 - ATM Withdrawal

let balance = 10000;
let withdrawal = Number(prompt("Enter withdrawal amount:"));

if (withdrawal <= 0) {
console.log("Invalid withdrawal amount");
} else if (withdrawal > balance) {
console.log("Insufficient balance");
} else if (withdrawal % 100 !== 0) {
console.log("Withdrawal amount must be a multiple of ₹100");
} else {
balance = balance - withdrawal;

console.log("Withdrawal successful");
console.log("Remaining balance:", balance);
}

// Task 7 - Multiplication Table

let tableNumber = Number(prompt("Enter a number for multiplication table:"));

for (let i = 1; i <= 10; i++) {
console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// Task 8 - Reverse Number

let number = Number(prompt("Enter a number to reverse:"));
let reverse = 0;
let temporaryNumber = number;

while (temporaryNumber > 0) {
let digit = temporaryNumber % 10;
reverse = reverse * 10 + digit;
temporaryNumber = Math.floor(temporaryNumber / 10);
}

console.log("Original Number:", number);
console.log("Reversed Number:", reverse);


// Task 9 - OTP System

let correctOTP = 1234;
let otpVerified = false;

for (let attempt = 1; attempt <= 3; attempt++) {

let enteredOTP = Number(prompt(`Enter OTP (Attempt ${attempt}/3):`));

if (enteredOTP === correctOTP) {
    console.log("OTP verified");
    otpVerified = true;
    break;
} else {
    console.log("Try again");
}
}

if (!otpVerified) {
console.log("Account blocked");
}


// Task 10 - Salary Calculator

function calculateSalary(basicSalary, bonus) {
return basicSalary + bonus;
}

let finalSalary = calculateSalary(30000, 5000);

console.log("Final Salary:", finalSalary);

// Task 11 - Calculator Functions

function add(num1, num2) {
return num1 + num2;
}

function subtract(num1, num2) {
return num1 - num2;
}

function multiply(num1, num2) {
return num1 * num2;
}

function divide(num1, num2) {
return num1 / num2;
}

console.log("Addition:", add(20, 10));
console.log("Subtraction:", subtract(20, 10));
console.log("Multiplication:", multiply(20, 10));
console.log("Division:", divide(20, 10));


// Task 12 - Eligibility Function

function checkEligibility(candidateAge, height, weight) {

if (
    candidateAge >= 21 &&
    height >= 170 &&
    weight >= 70
) {
    return "Eligible";
} else {
    return "Not eligible";
}
}

console.log(
"Eligibility:",
checkEligibility(25, 175, 72)
);


// Task 13 - Shopping Cart

let cart = ["Laptop", "Mouse", "Keyboard"];

// 1. Add Monitor
cart.push("Monitor");

// 2. Remove Mouse
cart.splice(cart.indexOf("Mouse"), 1);

// 3. Add Headset at beginning
cart.unshift("Headset");

// 4. Remove last item
cart.pop();

// 5. Print final cart
console.log("Final Cart:", cart);


// Task 14 - Find Maximum

let numbers = [10, 45, 23, 89, 12, 67];
let maximum = numbers[0];

for (let i = 1; i < numbers.length; i++) {

if (numbers[i] > maximum) {
    maximum = numbers[i];
}
}

console.log("Maximum Number:", maximum);


// Task 15 - Remove Duplicate Values

let duplicateNumbers = [1, 2, 3, 2, 4, 1, 5];
let uniqueNumbers = [];

for (let i = 0; i < duplicateNumbers.length; i++) {

if (!uniqueNumbers.includes(duplicateNumbers[i])) {
    uniqueNumbers.push(duplicateNumbers[i]);
}
}

console.log("Original Array:", duplicateNumbers);
console.log("Unique Array:", uniqueNumbers);

// Task 16 - Employee Salary Filter

let employees = [
{ name: "Arun", salary: 30000 },
{ name: "Bala", salary: 50000 },
{ name: "Kumar", salary: 25000 },
{ name: "Ravi", salary: 70000 }
];

let highSalaryEmployees = employees.filter(
employee => employee.salary >= 40000
);

console.log("Employees with salary >= ₹40000:");
console.log(highSalaryEmployees);


// Task 17 - Increase Salary

let updatedEmployees = employees.map(employee => {

if (employee.salary < 40000) {
    return {
        ...employee,
        salary: employee.salary + 5000
    };
} else {
    return {
        ...employee,
        salary: employee.salary + 10000
    };
}

});

console.log("Updated Salaries:");
console.log(updatedEmployees);

// Task 18 - Total Salary

let totalSalary = employees.reduce(
(total, employee) => total + employee.salary,
0
);

console.log("Total Salary:", totalSalary);


// Task 19 - Check Employee

let employeeAbove100000 = employees.some(
employee => employee.salary > 100000
);

let allEmployeesAbove20000 = employees.every(
employee => employee.salary >= 20000
);

console.log(
"Any employee earning more than ₹100000:",
employeeAbove100000
);

console.log(
"All employees earning at least ₹20000:",
allEmployeesAbove20000
);


// Task 20 - Employee Management Mini Program

let employeeList = [
{
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
},
{
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
},
{
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
}
];


// 1. Print all employee names using forEach()

console.log("Employee Names:");

employeeList.forEach(employee => {
console.log(employee.name);
});


// 2. Get only IT employees using filter()

let itEmployees = employeeList.filter(
employee => employee.department === "IT"
);

console.log("IT Employees:");
console.log(itEmployees);


// 3. Increase every salary by 10% using map()

let increasedSalaries = employeeList.map(employee => ({
...employee,
salary: employee.salary * 1.10
}));

console.log("Employees with 10% Salary Increase:");
console.log(increasedSalaries);


// 4. Find employee with salary ₹45000 using find()

let employeeWith45000 = employeeList.find(
employee => employee.salary === 45000
);

console.log("Employee with ₹45000 Salary:");
console.log(employeeWith45000);


// 5. Calculate total salary using reduce()

let employeeTotalSalary = employeeList.reduce(
(total, employee) => total + employee.salary,
0
);

console.log("Total Employee Salary:", employeeTotalSalary);


// 6. Check whether anyone earns above ₹50000 using some()

let hasSalaryAbove50000 = employeeList.some(
employee => employee.salary > 50000
);

console.log(
"Anyone earning above ₹50000:",
hasSalaryAbove50000
);


// 7. Check whether everyone earns above ₹20000 using every()

let everyoneAbove20000 = employeeList.every(
employee => employee.salary > 20000
);

console.log(
"Everyone earning above ₹20000:",
everyoneAbove20000
);


// 8. Sort employees by salary from highest to lowest

let sortedEmployees = [...employeeList].sort(
(a, b) => b.salary - a.salary
);

console.log("Employees Sorted by Salary:");
console.log(sortedEmployees);


// 9. Destructure each employee's name and salary

console.log("Employee Name and Salary:");

employeeList.forEach(employee => {

const { name, salary } = employee;

console.log(
    `Name: ${name}, Salary: ₹${salary}`
);

});


// 10. Use spread operator to create a new employee list

let newEmployeeList = [...employeeList];

console.log("New Employee List:");
console.log(newEmployeeList);