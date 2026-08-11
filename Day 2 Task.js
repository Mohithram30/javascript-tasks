
// Task 1 - Variables – Student Details

let studentName = "Mohithram";
var age = 25;
const course = "Full Stack Development";
let mark = 85;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);
console.log("Mark:", mark);

// Task 2 - User Input

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

console.log("User Name:", userName);
alert("Your age is: " + userAge);

// Task 3 - Data Types

let stringValue = "JavaScript";
let numberValue = 100;
let booleanValue = true;
let undefinedValue;
let nullValue = null;

console.log("String:", stringValue, typeof stringValue);
console.log("Number:", numberValue, typeof numberValue);
console.log("Boolean:", booleanValue, typeof booleanValue);
console.log("Undefined:", undefinedValue, typeof undefinedValue);
console.log("Null:", nullValue, typeof nullValue);

// Task 4 - Array – Shopping List

let shoppingList = ["Shirt", "Pant","Shoes","Watch","Bag","Cap"];

console.log("First Product:", shoppingList[0]);
console.log("Third Product:", shoppingList[2]);
console.log("Last Product:", shoppingList[5]);
console.log("Complete Shopping List:", shoppingList);

// Task 5 - Object – Employee Details

let employee = {
name: "Mohithram",
age: 25,
role: "Software Developer",
salary: 40000
};

console.log("Employee Name:", employee.name);
console.log("Employee Age:", employee.age);
console.log("Employee Role:", employee.role);
console.log("Employee Salary:", employee.salary);

// Task 6 - Arithmetic Operator – Bill Calculator

let productPrice = 500;
let quantity = 3;
let totalPrice = productPrice * quantity;
let discount = 100;
let finalAmount = totalPrice - discount;

console.log("Product Price:", productPrice);
console.log("Quantity:", quantity);
console.log("Total Price:", totalPrice);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

// Task 7 - Comparison Operators

console.log("25 > 20:", 25 > 20);
console.log("15 < 10:", 15 < 10);
console.log('50 == "50":', 50 == "50");
console.log('50 === "50":', 50 === "50");
console.log('100 != "100":', 100 != "100");
console.log('100 !== "100":', 100 !== "100");

// Task 8 - Logical Operators


// Output:
// true
// true
// false
// true
// true

console.log(10 > 5 && 20 > 15 || 5 > 10);

console.log(10 < 5 || 20 >= 20 && 5 == "5");

console.log(15 === "15" || 10 > 5 && 8 < 3);

console.log(20 >= 20 && 5 !== "5" || 10 < 5);

console.log(25 < 20 || 30 == "30" && 10 >= 10);


// Task 9 - Ternary Operator – Login

let passwordCorrect = true;
let loginMessage = passwordCorrect
? "Login successful"
: "Invalid password";

console.log(loginMessage);

// Task 10 - Type Casting – Marks

let mark1 = "80";
let mark2 = "70";
let convertedMark1 = Number(mark1);
let convertedMark2 = Number(mark2);
let marksTotal = convertedMark1 + convertedMark2;

console.log("Mark 1:", convertedMark1);
console.log("Mark 2:", convertedMark2);
console.log("Total Marks:", marksTotal);

// Task 11 - Voting Eligibility

let voterAge = 20;

if (voterAge >= 18) {
console.log("You can vote");
} else {
console.log("You cannot vote");
}

// Task 12 - Student Grade

let studentMark = 85;

if (studentMark < 0 || studentMark > 100) {
console.log("Invalid Mark");
} else if (studentMark >= 90) {
console.log("A Grade");
} else if (studentMark >= 75) {
console.log("B Grade");
} else if (studentMark >= 50) {
console.log("C Grade");
} else {
console.log("Fail");
}

// Task 13 - Time Greeting

let time = 15;

if (time >= 1 && time <= 6) {
console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
console.log("Good Afternoon");
} else if (time >= 16 && time <= 19) {
console.log("Good Evening");
} else if (time >= 20 && time <= 24) {
console.log("Good Night");
} else {
console.log("Invalid Time");
}

// Task 14 - Nested If – Job Eligibility

let candidateAge = 25;
let candidateHeight = 175;
let candidateWeight = 72;

if (candidateAge >= 21) {

if (candidateHeight >= 170) {

    if (candidateWeight >= 70) {
        console.log("Candidate is eligible for the job");
    } else {
        console.log("Candidate is not eligible: Weight must be 70 kg or above");
    }

} else {
    console.log("Candidate is not eligible: Height must be 170 cm or above");
}

} else {
console.log("Candidate is not eligible: Age must be 21 or above");
}

// Task 15 - Switch – Traffic Light

let trafficLight = "green";

switch (trafficLight) {

case "red":
console.log("Stop the vehicle");
break;

case "yellow":
console.log("Get ready");
break;

case "green":
console.log("Go");
break;

default:
console.log("Invalid traffic light");
}