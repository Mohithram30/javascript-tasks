
// Task 1 - Employee Eligibility

let employeeName = prompt("Enter employee name:");
let employeeAge = Number(prompt("Enter employee age:"));
let experience = Number(prompt("Enter experience in years:"));
let salary = Number(prompt("Enter salary:"));

if (employeeAge >= 21 && experience >= 1 && salary >= 20000) {
console.log("Employee is eligible");
} else {
if (employeeAge < 21) {
console.log("Employee is not eligible: Age must be 21 or above");
}

if (experience < 1) {
console.log("Employee is not eligible: Experience must be at least 1 year");
}

if (salary < 20000) {
console.log("Employee is not eligible: Salary must be ₹20,000 or above");
}
}

// Task 2 - ATM Withdrawal

let balance = 10000;
let withdrawalAmount = Number(
prompt("Enter withdrawal amount:")
);

if (
withdrawalAmount > 0 &&
withdrawalAmount <= balance &&
withdrawalAmount % 100 === 0
) {
balance = balance - withdrawalAmount;

console.log("Balance: ₹" + (balance + withdrawalAmount));
console.log("Withdraw: ₹" + withdrawalAmount);
console.log("Withdrawal successful");
console.log("Remaining balance: ₹" + balance);
} else {
if (withdrawalAmount <= 0) {
console.log("Invalid amount: Amount must be greater than 0");
} else if (withdrawalAmount > balance) {
console.log("Insufficient balance");
} else if (withdrawalAmount % 100 !== 0) {
console.log("Invalid amount: Withdrawal amount must be a multiple of 100");
}
}

// Task 3 - Login System with 3 Attempts

let correctUsername = "admin";
let correctPassword = "12345";
let attempts = 0;
let loginSuccessful = false;

while (attempts < 3) {

let username = prompt("Enter username:");
let password = prompt("Enter password:");

attempts++;

if (
username === correctUsername &&
password === correctPassword
) {
console.log("Login successful");
loginSuccessful = true;
break;
} else {
console.log("Invalid username or password");
console.log("Attempt " + attempts + " of 3");
}
}

if (!loginSuccessful) {
console.log("Account locked");
}

// Task 4 - Student Grade System

let math = Number(prompt("Enter Math mark:"));
let english = Number(prompt("Enter English mark:"));
let science = Number(prompt("Enter Science mark:"));
let social = Number(prompt("Enter Social mark:"));
let computer = Number(prompt("Enter Computer mark:"));
let total = math + english + science + social + computer;
let average = total / 5;
let grade;

if (average >= 90 && average <= 100) {
grade = "A";
} else if (average >= 80) {
grade = "B";
} else if (average >= 70) {
grade = "C";
} else if (average >= 60) {
grade = "D";
} else {
grade = "F";
}

console.log("Math:", math);
console.log("English:", english);
console.log("Science:", science);
console.log("Social:", social);
console.log("Computer:", computer);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);

// Task 5 - Number Pattern

// Pattern 1
// 1
// 2
// 3
// 4
// 5

console.log("Pattern 1:");

for (let i = 1; i <= 5; i++) {
console.log(i);
}

// Pattern 2
// 5
// 4
// 3
// 2
// 1

console.log("Pattern 2:");

for (let i = 5; i >= 1; i--) {
console.log(i);
}


// Pattern 3
// 1 2 3 4 5

console.log("Pattern 3:");

let pattern = "";

for (let i = 1; i <= 5; i++) {
pattern = pattern + i + " ";
}

console.log(pattern);

// Task 6 - Shopping Cart


let products = ["Laptop","Mouse","Keyboard","Monitor"];
let prices = [50000,1000,2000,15000];
let cartTotal = 0;

for (let i = 0; i < products.length; i++) {

console.log(
products[i] + " - ₹" + prices[i]
);

cartTotal = cartTotal + prices[i];
}

console.log("Total = ₹" + cartTotal);

// Task 7 - Employee Object

let employee = {
name: "Arun",
empId: "STK-101",
role: "Software Engineer",
salary: 45000
};

for (let key in employee) {
console.log(key + " : " + employee[key]);
}

// Bonus Calculation Function

function calculateBonus(salary) {

if (salary >= 40000) {
return 5000;
} else {
return 3000;
}
}

let bonus = calculateBonus(employee.salary);

console.log("Bonus:", bonus);

// Task 8 - Bank Account Functions

function deposit(balance, amount) {

return balance + amount;
}

function withdraw(balance, amount) {

if (amount <= balance) {
return balance - amount;
}

console.log("Insufficient balance");

return balance;
}

function checkBalance(balance) {

return balance;
}

let bankBalance = 10000;

bankBalance = deposit(bankBalance, 5000);

console.log("Deposited: ₹5000");

bankBalance = withdraw(bankBalance, 2000);

console.log("Withdrawn: ₹2000");
console.log("Current Balance: ₹" + checkBalance(bankBalance));

// Task 9 - Callback Calculator

function add(a, b) {
return a + b;
}

function sub(a, b) {
return a - b;
}

function mul(a, b) {
return a * b;
}

function div(a, b) {

if (b === 0) {
return "Cannot divide by zero";
}

return a / b;
}


function calculate(callback, a, b) {

return callback(a, b);
}

console.log("Addition:", calculate(add, 20, 10));
console.log("Subtraction:", calculate(sub, 20, 10));
console.log("Multiplication:", calculate(mul, 20, 10));
console.log("Division:", calculate(div, 20, 10));