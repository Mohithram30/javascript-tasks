// 1. Employee Data

let employees = [
{
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 45000,
    experience: 2,
    skills: ["HTML", "CSS", "JavaScript"],
    joiningDate: new Date("2022-06-15")
},

{
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 35000,
    experience: 3,
    skills: ["Recruitment", "Communication", "Excel"],
    joiningDate: new Date("2021-04-10")
},

{
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 65000,
    experience: 5,
    skills: ["JavaScript", "React", "Node.js"],
    joiningDate: new Date("2019-08-20")
},

{
    id: 104,
    name: "Ravi",
    department: "Finance",
    salary: 55000,
    experience: 4,
    skills: ["Accounting", "Excel", "SQL"],
    joiningDate: new Date("2020-03-12")
},

{
    id: 105,
    name: "Karthik",
    department: "IT",
    salary: 80000,
    experience: 6,
    skills: ["Python", "Django", "MySQL"],
    joiningDate: new Date("2018-01-25")
},

{
    id: 106,
    name: "Suresh",
    department: "Marketing",
    salary: 28000,
    experience: 1,
    skills: ["SEO", "Content Writing", "Social Media"],
    joiningDate: new Date("2023-07-05")
},

{
    id: 107,
    name: "Vijay",
    department: "IT",
    salary: 95000,
    experience: 7,
    skills: ["Java", "Spring Boot", "AWS"],
    joiningDate: new Date("2017-11-18")
},

{
    id: 108,
    name: "Manoj",
    department: "Support",
    salary: 30000,
    experience: 2,
    skills: ["Linux", "Networking", "Docker"],
    joiningDate: new Date("2022-09-30")
}
];

// 2. Display All Employees - forEach()

function displayEmployees(employeeList) {

console.log("========== ALL EMPLOYEES ==========");

employeeList.forEach(function(employee) {

    console.log(
        "ID:", employee.id,
        "| Name:", employee.name,
        "| Department:", employee.department,
        "| Salary:", employee.salary,
        "| Experience:", employee.experience,
        "| Skills:", employee.skills
    );

});
}

displayEmployees(employees);


// 3. Find Employees With Salary Greater Than ₹40,000
//    filter()

let highSalaryEmployees = employees.filter(function(employee) {
return employee.salary > 40000;
});

console.log("========== SALARY > ₹40,000 ==========");

console.log(highSalaryEmployees);

// 4. Find Particular Employee Using ID
//    find()

let searchId = 103;

let foundEmployee = employees.find(function(employee) {
return employee.id === searchId;
});

console.log("========== SEARCH EMPLOYEE ==========");

if (foundEmployee) {
console.log("Employee Found:", foundEmployee);
} else {
console.log("Employee not found");
}

// 5. Calculate Total Salary
//    reduce()

function calculateTotalSalary(employeeList) {

return employeeList.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

}

let totalSalary = calculateTotalSalary(employees);

console.log("========== TOTAL SALARY ==========");

console.log("Total Salary: ₹" + totalSalary);

// 6. Check Salary Condition
//    some()

let salaryAboveOneLakh = employees.some(function(employee) {
return employee.salary > 100000;
});

console.log("========== SALARY CONDITION ==========");

console.log(
"Is there an employee earning above ₹1,00,000?",
salaryAboveOneLakh
);

// 7. Check Experience
//    every()

let allHaveExperience = employees.every(function(employee) {
return employee.experience >= 1;
});

console.log("========== EXPERIENCE CONDITION ==========");

console.log(
"Does every employee have at least 1 year experience?",
allHaveExperience
);

// 8. Sort Employees By Salary
//    Highest to Lowest

// Using spread so the original array is not modified.

let sortedEmployees = [...employees].sort(function(a, b) {
return b.salary - a.salary;
});

console.log("========== SORTED BY SALARY ==========");

sortedEmployees.forEach(function(employee) {
console.log(employee.name + " - ₹" + employee.salary);
});

// 9. Array Manipulation
//    push(), pop(), unshift(), shift()

console.log("========== ARRAY MANIPULATION ==========");

let employeeList = [...employees];

// push()

let newEmployee = {
id: 109,
name: "Prakash",
department: "IT",
salary: 42000,
experience: 2,
skills: ["React", "JavaScript"],
joiningDate: new Date("2024-02-10")
};

employeeList.push(newEmployee);

console.log("After push:", employeeList);

// pop()

let removedLastEmployee = employeeList.pop();

console.log("Removed last employee:", removedLastEmployee);

// unshift()

let firstEmployee = {
id: 110,
name: "Dinesh",
department: "Admin",
salary: 32000,
experience: 2,
skills: ["Management", "Excel"],
joiningDate: new Date("2023-05-15")
};

employeeList.unshift(firstEmployee);

console.log("After unshift:", employeeList);

// shift()
let removedFirstEmployee = employeeList.shift();

console.log("Removed first employee:", removedFirstEmployee);

// 10. Object Destructuring
//     Array Destructuring

console.log("========== DESTRUCTURING ==========");

let employee = employees[0];

// Object destructuring

let {
name,
department,
salary
} = employee;

console.log("Employee Name:", name);
console.log("Department:", department);
console.log("Salary:", salary);

// Array destructuring

let [
firstSkill,
secondSkill,
thirdSkill
] = employee.skills;

console.log("First Skill:", firstSkill);
console.log("Second Skill:", secondSkill);
console.log("Third Skill:", thirdSkill);

// 11. Spread Operator

let newEmployeeArray = [...employees];

console.log("========== SPREAD OPERATOR ==========");

console.log("Original Employee Array:", employees);

console.log("New Employee Array:", newEmployeeArray);

// Add a new employee to the copied array

newEmployeeArray.push({
id: 111,
name: "Ganesh",
department: "IT",
salary: 50000,
experience: 3,
skills: ["Node.js", "MongoDB"],
joiningDate: new Date("2024-06-01")
});

console.log("Updated New Employee Array:", newEmployeeArray);

console.log("Original Array Remains Unchanged:", employees);

// 12. Rest Operator

function createEmployeeSkills(employeeName, ...skills) {

return {
    name: employeeName,
    skills: skills
};

}

let employeeSkills = createEmployeeSkills(
"Arun",
"HTML",
"CSS",
"JavaScript",
"React"
);

console.log("========== REST OPERATOR ==========");

console.log(employeeSkills);

// 13. Employee Management Functions

// Add Employee

function addEmployee(employee) {

employees.push(employee);

console.log("Employee added successfully:");
console.log(employee);

}

// Delete Employee

function deleteEmployee(id) {

let index = employees.findIndex(function(employee) {
    return employee.id === id;
});

if (index !== -1) {

    let deletedEmployee = employees.splice(index, 1);

    console.log("Employee deleted:");
    console.log(deletedEmployee[0]);

} else {

    console.log("Employee not found");

}

}

// Search Employee

function searchEmployee(id) {

let employee = employees.find(function(employee) {
    return employee.id === id;
});

if (employee) {

    console.log("Employee Found:");
    console.log(employee);

    return employee;

} else {

    console.log("Employee not found");

    return null;

}

}

// Calculate Total Salary

function totalSalary(employeeList) {

return employeeList.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

}

// Display Employees

function showEmployees() {

employees.forEach(function(employee) {

    console.log(
        employee.id +
        " - " +
        employee.name +
        " - " +
        employee.department +
        " - ₹" +
        employee.salary
    );

});

}

// Test Employee Management Functions

console.log("========== FUNCTION TESTING ==========");

let testEmployee = {
id: 112,
name: "Raj",
department: "Testing",
salary: 48000,
experience: 2,
skills: ["JavaScript", "Testing"],
joiningDate: new Date("2024-07-01")
};

addEmployee(testEmployee);

searchEmployee(112);

console.log("Total Salary: ₹" + totalSalary(employees));

deleteEmployee(112);

showEmployees();

// 14. Salary Category

function salaryCategory(salary) {

if (salary >= 0 && salary <= 30000) {

    return "Junior";

} else if (salary >= 30001 && salary <= 60000) {

    return "Mid Level";

} else if (salary > 60000) {

    return "Senior";

} else {

    return "Invalid Salary";

}

}

console.log("========== SALARY CATEGORY ==========");

employees.forEach(function(employee) {

console.log(
    employee.name +
    " - ₹" +
    employee.salary +
    " - " +
    salaryCategory(employee.salary)
);

});

// 15. Joining Date
//     getFullYear()
//     getMonth()


console.log("========== JOINING DATE DETAILS ==========");

employees.forEach(function(employee) {

let joiningYear = employee.joiningDate.getFullYear();

let joiningMonth = employee.joiningDate.getMonth();

console.log(
    employee.name +
    " | Joining Year: " +
    joiningYear +
    " | Joining Month: " +
    joiningMonth
);

});


// Note:
// getMonth() returns:
// January = 0
// February = 1
// March = 2
// ...
// December = 11

// 16. User Input
//     Search Employee Using ID


let userId = prompt("Enter Employee ID to search:");

let numericUserId = Number(userId);

let userEmployee = employees.find(function(employee) {

return employee.id === numericUserId;

});


if (userEmployee) {

console.log("========== USER SEARCH RESULT ==========");

console.log("Employee ID:", userEmployee.id);
console.log("Name:", userEmployee.name);
console.log("Department:", userEmployee.department);
console.log("Salary:", userEmployee.salary);
console.log("Experience:", userEmployee.experience);
console.log("Skills:", userEmployee.skills);

} else {

console.log("Employee with ID " + userId + " not found.");

}

// BONUS TASK
// Menu-Driven Employee Management System

function employeeManagementMenu() {

let choice;

while (true) {

    choice = prompt(
`========== EMPLOYEE MANAGEMENT SYSTEM ==========

1. Display All Employees
2. Add Employee
3. Search Employee
4. Filter High Salary Employees
5. Calculate Total Salary
6. Sort By Salary
7. Delete Employee
8. Exit

Enter your choice:`
    );


    switch (choice) {


        // --------------------------------------------
        // 1. Display All Employees
        // --------------------------------------------

        case "1":

            console.log("========== ALL EMPLOYEES ==========");

            displayEmployees(employees);

            break;


        // --------------------------------------------
        // 2. Add Employee
        // --------------------------------------------

        case "2":

            let id = Number(prompt("Enter Employee ID:"));

            let employeeName = prompt("Enter Employee Name:");

            let department = prompt("Enter Department:");

            let salary = Number(prompt("Enter Salary:"));

            let experience = Number(prompt("Enter Experience:"));

            let skillsInput = prompt(
                "Enter Skills separated by comma:"
            );

            let skills = skillsInput
                .split(",")
                .map(function(skill) {
                    return skill.trim();
                });


            let joiningDate = prompt(
                "Enter Joining Date (YYYY-MM-DD):"
            );


            let newEmployee = {

                id: id,

                name: employeeName,

                department: department,

                salary: salary,

                experience: experience,

                skills: skills,

                joiningDate: new Date(joiningDate)

            };


            addEmployee(newEmployee);

            break;


        // --------------------------------------------
        // 3. Search Employee
        // --------------------------------------------

        case "3":

            let searchEmployeeId = Number(
                prompt("Enter Employee ID:")
            );

            searchEmployee(searchEmployeeId);

            break;


        // --------------------------------------------
        // 4. Filter High Salary Employees
        // --------------------------------------------

        case "4":

            let highSalary = employees.filter(function(employee) {

                return employee.salary > 40000;

            });


            console.log(
                "========== EMPLOYEES WITH SALARY > ₹40,000 =========="
            );

            displayEmployees(highSalary);

            break;


        // --------------------------------------------
        // 5. Calculate Total Salary
        // --------------------------------------------

        case "5":

            let total = calculateTotalSalary(employees);

            console.log("Total Salary: ₹" + total);

            break;


        // --------------------------------------------
        // 6. Sort By Salary
        // --------------------------------------------

        case "6":

            let sorted = [...employees].sort(function(a, b) {

                return b.salary - a.salary;

            });


            console.log("========== SALARY HIGH → LOW ==========");

            sorted.forEach(function(employee) {

                console.log(
                    employee.name +
                    " - ₹" +
                    employee.salary
                );

            });

            break;


        // --------------------------------------------
        // 7. Delete Employee
        // --------------------------------------------

        case "7":

            let deleteId = Number(
                prompt("Enter Employee ID to delete:")
            );

            deleteEmployee(deleteId);

            break;


        // --------------------------------------------
        // 8. Exit
        // --------------------------------------------

        case "8":

            console.log(
                "Employee Management System Closed."
            );

            return;


        // --------------------------------------------
        // Invalid Choice
        // --------------------------------------------

        default:

            console.log(
                "Invalid choice. Please select 1 to 8."
            );

    }

}

}

// Start Bonus Menu

// Uncomment the following line to enable the
// menu-driven Employee Management System.

// employeeManagementMenu();