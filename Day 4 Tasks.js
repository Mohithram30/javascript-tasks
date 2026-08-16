
// Task 1 - Salary Calculator

let salary = 30000;
let bonus = 5000;
let tax = 2000;
let finalSalary = salary + bonus - tax;

console.log("Final Salary:", finalSalary);

// Task 2 - Predict the Output

let a = 10;
let b = a++;
let c = ++a;

console.log("Task 2 - a:", a);
console.log("Task 2 - b:", b);
console.log("Task 2 - c:", c);

// Task 3 - Logical Operators

console.log(10 > 5 && 20 < 10 || 5 === "5");

console.log(10 < 5 || 20 >= 20 && 5 == "5");

console.log(!(10 > 5));

// Task 4 - ATM Withdrawal

let balance = 10000;
let withdrawal = 2500;

if (withdrawal <= 0) {
    console.log("Invalid withdrawal amount");
} else if (withdrawal > balance) {
    console.log("Insufficient balance");
} else if (withdrawal % 100 !== 0) {
    console.log("Withdrawal amount must be a multiple of 100");
} else {
    balance = balance - withdrawal;

    console.log("Withdrawal successful");
    console.log("Remaining balance:", balance);
}

// Task 5 - Student Grade

let mark = 78;

if (mark >= 90 && mark <= 100) {
    console.log("Grade: A");
} else if (mark >= 80 && mark <= 89) {
    console.log("Grade: B");
} else if (mark >= 70 && mark <= 79) {
    console.log("Grade: C");
} else if (mark >= 60 && mark <= 69) {
    console.log("Grade: D");
} else if (mark >= 0 && mark < 60) {
    console.log("Grade: Fail");
} else {
    console.log("Invalid Mark");
}


// Task 6 - Nested Login

let username = "admin";
let password = "1234";
let otp = 5555;

if (username === "admin") {

    if (password === "1234") {

        if (otp === 5555) {
            console.log("Login successful");
        } else {
            console.log("Invalid OTP");
        }

    } else {
        console.log("Invalid password");
    }

} else {
    console.log("Invalid username");
}


// Task 7 - Number Pattern

console.log("Task 7 - Number Pattern");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 8 - Multiplication Table

let num = 7;

console.log("Multiplication Table");

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// Task 9 - Reverse Countdown

let count = 10;

while (count >= 0) {
    console.log(count);
    count--;
}

// Task 10 - OTP System

let correctOTP = 1234;
let attempts = 0;
let otpVerified = false;

while (attempts < 3) {

    let enteredOTP = Number(prompt("Enter OTP:"));

    attempts++;

    if (enteredOTP === correctOTP) {
        console.log("OTP verified");
        otpVerified = true;
        break;
    } else {
        console.log("Incorrect OTP");
    }
}

if (!otpVerified) {
    console.log("Account blocked");
}

// Task 11 - Array Search

let fruits = [ "apple","banana","orange","grapes","mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Task 12 - Object Details

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};

for (let key in employee) {
    console.log(key + " : " + employee[key]);
}

// Task 13 - Calculator Function

function calculator(a, b, operator) {

    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else if (operator === "%") {
        return a % b;
    } else {
        return "Invalid operator";
    }
}

console.log("Addition:", calculator(20, 5, "+"));
console.log("Subtraction:", calculator(20, 5, "-"));
console.log("Multiplication:", calculator(20, 5, "*"));
console.log("Division:", calculator(20, 5, "/"));
console.log("Modulus:", calculator(20, 5, "%"));

// Task 14 - Employee Salary

function salaryDetails(salary, bonus) {
    return salary + bonus;
}

console.log("Final Salary:", salaryDetails(40000, 5000));

// Task 15 - Function With Default Parameter

function employeeDetails(name, role = "Trainee") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Kamal", "Developer");

// Task 16 - Callback Task

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

console.log("Addition:", calculate(20, 10, add));
console.log("Subtraction:", calculate(20, 10, sub));
console.log("Multiplication:", calculate(20, 10, mul));

// Task 17 - Generator Task

function* rewards() {
    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}

let rewardGenerator = rewards();

console.log(rewardGenerator.next().value);
console.log(rewardGenerator.next().value);
console.log(rewardGenerator.next().value);
console.log(rewardGenerator.next().value);
console.log(rewardGenerator.next().value);

// Task 18 - Spread Operator

let frontend = ["HTML","CSS","JavaScript"];

let backend = ["Node","Express","MongoDB"];

let fullStack = [
    ...frontend,
    ...backend
];

console.log("Full Stack:", fullStack);

// Task 19 - Array Destructuring

let student = [ "Arun","ECE",8.5,"Developer"];

let [ studentName,department,cgpa,role] = student;

console.log("Name:", studentName);
console.log("Department:", department);
console.log("CGPA:", cgpa);
console.log("Role:", role);

// Task 20 - Nested Object Destructuring

let company = {
    name: "Stackly",

    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};

let {
    employee: {
        name: employeeName,
        role: employeeRole,
        salary: employeeSalary
    }
} = company;

console.log("Employee Name:", employeeName);
console.log("Role:", employeeRole);
console.log("Salary:", employeeSalary);

// FINAL CHALLENGE
// Student Management Console Program


let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },

    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },

    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];


// 1. Print all students

console.log("All Students:");

for (let student of students) {
    console.log(student);
}


// 2. Print only ECE students

console.log("ECE Students:");

for (let student of students) {

    if (student.department === "ECE") {
        console.log(student);
    }
}


// 3. Students who scored above 80

console.log("Students who scored above 80:");

for (let student of students) {

    if (student.mark > 80) {
        console.log(student.name);
    }
}


// 4. Calculate total marks

function calculateTotal(students) {

    let total = 0;

    for (let student of students) {
        total = total + student.mark;
    }

    return total;
}

let totalMarks = calculateTotal(students);

console.log("Total Marks:", totalMarks);


// 5. Calculate average

function calculateAverage(students) {

    let total = calculateTotal(students);

    return total / students.length;
}

let averageMarks = calculateAverage(students);

console.log("Average Marks:", averageMarks);


// 6. Display highest mark

function findHighestMark(students) {

    let highest = students[0].mark;

    for (let student of students) {

        if (student.mark > highest) {
            highest = student.mark;
        }
    }

    return highest;
}

let highestMark = findHighestMark(students);

console.log("Highest Mark:", highestMark);


// 7. Display lowest mark

function findLowestMark(students) {

    let lowest = students[0].mark;

    for (let student of students) {

        if (student.mark < lowest) {
            lowest = student.mark;
        }
    }

    return lowest;
}

let lowestMark = findLowestMark(students);

console.log("Lowest Mark:", lowestMark);


// 8 & 9 & 10
// for...of, functions and object destructuring

console.log("Student Details Using Destructuring:");

for (let student of students) {

    let {
        name,
        department,
        mark
    } = student;

    console.log(
        "Name:",
        name,
        "| Department:",
        department,
        "| Mark:",
        mark
    );
}