
// Task 1 - Student Details

const college = "PSG Engineering College";
let studentName = "Mohithram";
var studentAge = 25;

console.log(college);
console.log(studentName);
console.log(studentAge);

// Task 2 - Mobile Price

let price = 25000;
price = 27000;

console.log("Updated Price:", price);

// Task 3 - Company Name

const company = "Stackly";
console.log(company);

// Task 4 - Console Practice

console.log("Login Successful");
console.warn("Password is Weak");
console.error("Network Error");


// Task 5 - Data Types

let name = "Mohithram";
let age = 25;
let isDeveloper = true;
let address;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isDeveloper, typeof isDeveloper);
console.log(address, typeof address);

// Task 6 - Shopping Cart Array

let cart = [
"Laptop",
"Mouse",
"Keyboard",
"Headset",
"Monitor"
];

console.log("First Product:", cart[0]);
console.log("Third Product:", cart[2]);
console.log("Last Product:", cart[4]);

// Task 7 - Favorite Movies

let movies = [
"Leo",
"Master",
"Vikram",
"Jailer",
"Kanguva",
"Thunivu"
];

console.log("Second Movie:", movies[1]);
console.log("Fifth Movie:", movies[4]);
console.log("Last Movie:", movies[5]);

// Task 8 - Employee Object

let employee = {
name: "Mohithram",
age: 25,
department: "Software Developer",

skills: [
"HTML",
"CSS",
"JavaScript"
],

salary: 40000

};

console.log(employee.name);
console.log(employee.department);
console.log(employee.skills[0]);
console.log(employee.salary);

// Task 9 - Product Details


let product = {
productName: "Laptop",
brand: "Dell",
price: 65000,
colors: [
"Black",
"Silver",
"Blue"
]
};

console.log(product.brand);
console.log(product.price);
console.log(product.colors[1]);

// Task 10 - Arithmetic Calculator

let num1 = 20;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponent:", num1 ** num2);

// Task 11 - Increment Practice

let a = 5;

a++;
console.log(a);

++a;
console.log(a);

a--;
console.log(a);

--a;
console.log(a);

// Task 12 - Predict the Output

let a1 = 10;
let b1 = a1++;
let c1 = ++b1;

console.log(a1);
console.log(b1);
console.log(c1);


// Task 13 - Predict the Output

let x = 7;
let y = --x;
let z = y++;

console.log(x);
console.log(y);
console.log(z);

// Task 15 - Grocery List

let grocery = [
"Rice",
"Sugar",
"Milk",
"Oil",
"Salt",
"Soap",
"Tea",
"Eggs"
];

console.log(grocery[0]);
console.log(grocery[3]);
console.log(grocery[7]);

// Task 16 - User Profile

let username = "Mohithram";
let email = "mohithram@gmail.com";
let userAge = 25;
let isPremium = true;

console.log(username, typeof username);
console.log(email, typeof email);
console.log(userAge, typeof userAge);
console.log(isPremium, typeof isPremium);



// Task 17 - Variable Rules

var city = "Chennai";
let state = "Tamil Nadu";
const country = "India";

// Reassign

city = "Bangalore";
state = "Karnataka";

// country = "USA"; // Error

console.log(city);
console.log(state);
console.log(country);

// Redeclare

var city = "Delhi";

// let state = "Kerala"; // Error
// const country = "UK"; // Error

console.log(city);


// Task 18 - Marks Calculation

let tamil = 85;
let english = 90;
let maths = 95;
let total = tamil + english + maths;
let average = total / 3;

console.log("Total:", total);
console.log("Average:", average);


// Task 19 - Company Database

let companyDetails = {
company: "Stackly",
employees: [
"Mohithram",
"Madhumitha",
"Vasanth"
],
location: "Bangalore",
foundedYear: 2020,
ceo: "Premalatha"
};

console.log(companyDetails.ceo);
console.log(companyDetails.location);
console.log(companyDetails.employees[0]);

