// ============================================================
// IYF WEEKEND ACADEMY - SEASON 10
// WEEK 4: JAVASCRIPT FUNDAMENTALS
// Student: [Your Name]
// Date: 2026-03-20
// ============================================================

console.log("🚀 Week 4 JavaScript Practice Loaded!");
console.log("=====================================");

// ============================================================
// TASK 7.1: JAVASCRIPT SETUP & VARIABLES 🟢
// Time: 30 minutes
// ============================================================

console.log("\n📦 TASK 7.1: Variables & Data Types");
console.log("-------------------------------------");

// Variable declarations
let myName = "Your Name";           // Change to your actual name
let myAge = 25;                      // Change to your actual age
const birthYear = 2000;              // Change to your actual birth year
let isStudent = true;
let favoriteColors = ["blue", "green", "purple", "orange"];
let today = new Date();

// typeof operator demonstrations
console.log("typeof myName:", typeof myName);           // string
console.log("typeof myAge:", typeof myAge);             // number
console.log("typeof isStudent:", typeof isStudent);     // boolean
console.log("typeof favoriteColors:", typeof favoriteColors); // object (arrays are objects in JS)
console.log("typeof today:", typeof today);             // object

// let vs const demonstration
let score = 100;
console.log("Initial score:", score);
score = 150;  // Works with let!
console.log("Updated score:", score);

const PI = 3.14159;
// PI = 3.14; // ❌ ERROR! Cannot reassign const
console.log("PI value:", PI);

// Exercise: Variable Practice with descriptive messages
console.log("\n--- My Info ---");
console.log(`Hello! My name is ${myName} and I am ${myAge} years old.`);
console.log(`Am I a student? ${isStudent ? "Yes!" : "No"}`);
console.log(`My favorite colors are: ${favoriteColors.join(", ")}`);
console.log(`Today's date is: ${today.toDateString()}`);

// ============================================================
// TASK 7.2: DATA TYPES & OPERATORS 🟢
// Time: 40 minutes
// ============================================================

console.log("\n🔢 TASK 7.2: Data Types & Operators");
console.log("-------------------------------------");

// Exercise 1: Number Operations
console.log("\n--- Number Operations ---");
let a = 10;
let b = 3;

console.log(`${a} + ${b} =`, a + b);        // Addition: 13
console.log(`${a} - ${b} =`, a - b);        // Subtraction: 7
console.log(`${a} * ${b} =`, a * b);        // Multiplication: 30
console.log(`${a} / ${b} =`, a / b);        // Division: 3.333...
console.log(`${a} % ${b} =`, a % b);        // Modulus: 1
console.log(`${a} ** ${b} =`, a ** b);      // Exponentiation: 1000

// Increment/Decrement
let count = 0;
console.log("\n--- Increment/Decrement ---");
console.log("Initial count:", count);
count++;
console.log("After count++:", count);
count--;
console.log("After count--:", count);

// Exercise 2: String Operations
console.log("\n--- String Operations ---");
let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullNameConcat = firstName + " " + lastName;
console.log("Concatenation:", fullNameConcat);

// Template literals (preferred method)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;
console.log("Greeting:", greeting);
console.log("Message:", message);

// String methods
console.log("\n--- String Methods ---");
console.log("toUpperCase:", fullNameConcat.toUpperCase());
console.log("toLowerCase:", fullNameConcat.toLowerCase());
console.log("charAt(0):", firstName.charAt(0));
console.log("includes('John'):", fullNameConcat.includes("John"));

// Exercise 3: Comparison & Logical Operators
console.log("\n--- Comparison Operators ---");
console.log("5 > 3:", 5 > 3);           // true
console.log("5 < 3:", 5 < 3);           // false
console.log("5 === 5:", 5 === 5);       // true (strict equality - USE THIS!)
console.log("5 == '5':", 5 == "5");     // true (loose equality - avoid!)
console.log("5 !== 3:", 5 !== 3);       // true

console.log("\n--- Logical Operators ---");
console.log("true && true:", true && true);     // AND: true
console.log("true && false:", true && false);   // AND: false
console.log("true || false:", true || false);   // OR: true
console.log("!true:", !true);                   // NOT: false

// CHALLENGE: Age Calculations
console.log("\n--- CHALLENGE: Age Calculations ---");
let currentAge = 25;  // Change to your age
let ageInDays = currentAge * 365;
let ageInHours = ageInDays * 24;
let yearTurns100 = new Date().getFullYear() + (100 - currentAge);

console.log(`Age: ${currentAge} years`);
console.log(`Approximately ${ageInDays} days old`);
console.log(`Approximately ${ageInHours} hours old`);
console.log(`Will turn 100 in year: ${yearTurns100}`);

// ============================================================
// TASK 7.3: FUNCTIONS 🟡
// Time: 45 minutes
// ============================================================

console.log("\n⚙️ TASK 7.3: Functions");
console.log("-------------------------------------");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function (concise)
const multiply = (a, b) => a * b;

// Arrow function with body (for multiple lines)
const divide = (a, b) => {
    if (b === 0) {
        return "❌ Cannot divide by zero!";
    }
    return a / b;
};

// Testing different function types
console.log("\n--- Function Types ---");
console.log("greet('Alice'):", greet("Alice"));
console.log("add(5, 3):", add(5, 3));
console.log("multiply(4, 7):", multiply(4, 7));
console.log("divide(10, 2):", divide(10, 2));
console.log("divide(10, 0):", divide(10, 0));

// Exercise 2: Build These Functions
console.log("\n--- Exercise Functions ---");

// 1. Calculate rectangle area
function calculateArea(width, height) {
    return width * height;
}

// 2. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 3. Check if even
function isEven(number) {
    return number % 2 === 0;
}

// 4. Get initials from full name
function getInitials(fullName) {
    return fullName
        .split(' ')
        .map(name => name.charAt(0).toUpperCase())
        .join('');
}

// 5. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Testing the functions
console.log("calculateArea(5, 3):", calculateArea(5, 3));
console.log("celsiusToFahrenheit(0):", celsiusToFahrenheit(0), "°F");
console.log("celsiusToFahrenheit(100):", celsiusToFahrenheit(100), "°F");
console.log("isEven(4):", isEven(4));
console.log("isEven(7):", isEven(7));
console.log("getInitials('John Doe'):", getInitials("John Doe"));
console.log("getInitials('mary jane watson'):", getInitials("mary jane watson"));
console.log("reverseString('hello'):", reverseString("hello"));

// Exercise 3: Default Parameters
console.log("\n--- Default Parameters ---");
function greetWithDefaults(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefaults());                    // Hello, Guest!
console.log(greetWithDefaults("Alice"));             // Hello, Alice!
console.log(greetWithDefaults("Bob", "Hi"));         // Hi, Bob!
console.log(greetWithDefaults("Carol", "Good morning")); // Good morning, Carol!

// Calculate tip with default 15%
function calculateTip(bill, tipPercent = 15) {
    let tipAmount = bill * (tipPercent / 100);
    return {
        bill: bill,
        tipPercent: tipPercent,
        tipAmount: tipAmount.toFixed(2),
        total: (bill + tipAmount).toFixed(2)
    };
}

console.log("\n--- Tip Calculator ---");
console.log("Bill $100, default 15%:", calculateTip(100));
console.log("Bill $200, 20% tip:", calculateTip(200, 20));
console.log("Bill $50, 10% tip:", calculateTip(50, 10));

// ============================================================
// TASK 7.4: CONTROL FLOW 🟡
// Time: 45 minutes
// ============================================================

console.log("\n🔄 TASK 7.4: Control Flow");
console.log("-------------------------------------");

// Exercise 1: If/Else - Grade Calculator
console.log("\n--- If/Else: Grade Calculator ---");
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test grades
let testScores = [95, 85, 75, 65, 55];
testScores.forEach(score => {
    console.log(`Score ${score} = Grade ${getGrade(score)}`);
});

// Exercise 2: Switch Statement - Day Names
console.log("\n--- Switch: Day Names ---");
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log("Day 0:", getDayName(0));
console.log("Day 3:", getDayName(3));
console.log("Day 6:", getDayName(6));
console.log("Day 9:", getDayName(9));

// Exercise 3: Loops
console.log("\n--- Loops ---");

// For loop: Print 1-5
console.log("For loop 0-4:");
for (let i = 0; i < 5; i++) {
    console.log("  i =", i);
}

// While loop
console.log("While loop 0-4:");
let whileCount = 0;
while (whileCount < 5) {
    console.log("  count =", whileCount);
    whileCount++;
}

// For...of loop (arrays)
console.log("For...of loop with colors:");
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log("  Color:", color);
}

// Build These Programs
console.log("\n--- Loop Challenges ---");

// 1. Print numbers 1-100 (showing first 10 and last 5)
console.log("Numbers 1-100:");
for (let i = 1; i <= 100; i++) {
    if (i <= 5 || i > 95) console.log(" ", i);
    if (i === 6) console.log("  ...");
}

// 2. Print even numbers 1-50
console.log("\nEven numbers 1-50:");
let evens = [];
for (let i = 2; i <= 50; i += 2) {
    evens.push(i);
}
console.log(" ", evens.join(", "));

// 3. FizzBuzz (1-20 shown)
console.log("\nFizzBuzz (1-20):");
for (let i = 1; i <= 20; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(`  ${i}: ${output || i}`);
}

// 4. Triangle of stars
console.log("\nTriangle of stars:");
for (let i = 1; i <= 5; i++) {
    console.log("  " + "*".repeat(i));
}

// ============================================================
// MINI-PROJECT: INTERACTIVE CALCULATOR 🔴
// Time: 60 minutes
// ============================================================

console.log("\n🧮 MINI-PROJECT: Calculator");
console.log("-------------------------------------");

// Basic operation functions
function calcAdd(a, b) {
    return a + b;
}

function calcSubtract(a, b) {
    return a - b;
}

function calcMultiply(a, b) {
    return a * b;
}

function calcDivide(a, b) {
    if (b === 0) {
        return "❌ Error: Cannot divide by zero!";
    }
    return a / b;
}

function calcModulus(a, b) {
    if (b === 0) {
        return "❌ Error: Cannot divide by zero!";
    }
    return a % b;
}

function calcPower(a, b) {
    return a ** b;
}

// Main calculator function
function calculate(num1, operator, num2) {
    // Validate inputs
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "❌ Error: Both inputs must be numbers!";
    }

    switch (operator) {
        case "+":
            return calcAdd(num1, num2);
        case "-":
            return calcSubtract(num1, num2);
        case "*":
            return calcMultiply(num1, num2);
        case "/":
            return calcDivide(num1, num2);
        case "%":
            return calcModulus(num1, num2);
        case "**":
            return calcPower(num1, num2);
        default:
            return `❌ Error: Invalid operator "${operator}". Use +, -, *, /, %, or **`;
    }
}

// Test the calculator
console.log("\n--- Calculator Tests ---");
console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 / 0 =", calculate(10, "/", 0));     // Error handling
console.log("10 % 3 =", calculate(10, "%", 3));
console.log("2 ** 8 =", calculate(2, "**", 8));
console.log("10 $ 5 =", calculate(10, "$", 5));      // Invalid operator

// ============================================================
// TASK 8.1: ARRAYS 🟢
// Time: 40 minutes
// ============================================================

console.log("\n📚 TASK 8.1: Arrays");
console.log("-------------------------------------");

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log("\n--- Array Basics ---");
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);

// Modifying arrays
console.log("\n--- Modifying Arrays ---");
fruits.push("grape");           // Add to end
console.log("After push('grape'):", fruits);

fruits.unshift("mango");        // Add to start
console.log("After unshift('mango'):", fruits);

let removedEnd = fruits.pop();  // Remove from end
console.log("After pop():", fruits, "(removed:", removedEnd + ")");

let removedStart = fruits.shift(); // Remove from start
console.log("After shift():", fruits, "(removed:", removedStart + ")");

// Reset fruits for next exercises
const fruitsFresh = ["apple", "banana", "orange", "grape", "mango"];

// Exercise 2: Array Methods
console.log("\n--- Array Methods ---");
const numArray = [1, 2, 3, 4, 5];

// forEach - do something with each element
console.log("forEach (double each):");
numArray.forEach(num => console.log(" ", num * 2));

// map - transform each element
const doubled = numArray.map(num => num * 2);
console.log("map (doubled):", doubled);

// filter - keep elements that pass test
const evenNumbers = numArray.filter(num => num % 2 === 0);
console.log("filter (even only):", evenNumbers);

// find - get first element that passes test
const firstEven = numArray.find(num => num % 2 === 0);
console.log("find (first even):", firstEven);

// reduce - combine all elements
const sum = numArray.reduce((total, num) => total + num, 0);
console.log("reduce (sum):", sum);

// includes - check if element exists
console.log("includes(3):", numArray.includes(3));
console.log("includes(10):", numArray.includes(10));

// Build: Array Method Exercises
console.log("\n--- Array Method Exercises ---");

// 1. Double all numbers
const numbersToDouble = [2, 4, 6, 8, 10];
const allDoubled = numbersToDouble.map(n => n * 2);
console.log("Original:", numbersToDouble, "→ Doubled:", allDoubled);

// 2. Filter out negative numbers
const mixedNumbers = [10, -5, 3, -8, 15, -2, 20];
const positivesOnly = mixedNumbers.filter(n => n >= 0);
console.log("Original:", mixedNumbers, "→ Positives:", positivesOnly);

// 3. Find first number > 10
const searchNumbers = [5, 8, 12, 3, 15, 7];
const firstOverTen = searchNumbers.find(n => n > 10);
console.log("First number > 10 in", searchNumbers, "is:", firstOverTen);

// 4. Calculate product of all numbers
const factors = [2, 3, 4, 5];
const product = factors.reduce((total, num) => total * num, 1);
console.log("Product of", factors, "is:", product);

// ============================================================
// TASK 8.2: OBJECTS 🟡
// Time: 40 minutes
// ============================================================

console.log("\n🎯 TASK 8.2: Objects");
console.log("-------------------------------------");

// Exercise 1: Object Basics
console.log("\n--- Object Basics ---");
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

// Accessing properties
console.log("Dot notation - firstName:", person.firstName);
console.log("Bracket notation - lastName:", person["lastName"]);
console.log("Nested - city:", person.address.city);

// Modifying properties
person.age = 31;
person.email = "john@example.com";  // Add new property
delete person.isStudent;            // Remove property

console.log("Modified person:", person);

// Exercise 2: Object Methods
console.log("\n--- Object Methods ---");
const calculator = {
    // Traditional method
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax (preferred)
    subtract(a, b) {
        return a - b;
    },
    // Arrow function (be careful with 'this')
    multiply: (a, b) => a * b,
    // Method using other methods
    calculate(a, b, operation) {
        switch(operation) {
            case 'add': return this.add(a, b);
            case 'subtract': return this.subtract(a, b);
            case 'multiply': return this.multiply(a, b);
            default: return 'Unknown operation';
        }
    }
};

console.log("calculator.add(5, 3):", calculator.add(5, 3));
console.log("calculator.subtract(10, 4):", calculator.subtract(10, 4));
console.log("calculator.multiply(6, 7):", calculator.multiply(6, 7));
console.log("calculator.calculate(8, 2, 'add'):", calculator.calculate(8, 2, 'add'));

// Exercise 3: Object Iteration
console.log("\n--- Object Iteration ---");
const scores = {
    math: 95,
    english: 88,
    science: 92,
    history: 85
};

// Get keys
const subjects = Object.keys(scores);
console.log("Object.keys(scores):", subjects);

// Get values
const grades = Object.values(scores);
console.log("Object.values(scores):", grades);

// Get entries (key-value pairs)
const entries = Object.entries(scores);
console.log("Object.entries(scores):", entries);

// Loop through with for...of
console.log("\nGrade Report:");
let totalScore = 0;
for (const [subject, score] of Object.entries(scores)) {
    console.log(`  ${subject}: ${score}`);
    totalScore += score;
}
console.log(`Average: ${(totalScore / Object.keys(scores).length).toFixed(1)}`);

// ============================================================
// TASK 8.3: ARRAY OF OBJECTS 🔴
// Time: 45 minutes
// ============================================================

console.log("\n👥 TASK 8.3: Array of Objects");
console.log("-------------------------------------");

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

console.log("Student Data:", students);

// 1. Get all student names
const names = students.map(student => student.name);
console.log("\n1. All names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("2. High achievers (grade > 80):", highAchievers.map(s => s.name));

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log("3. Found Charlie:", charlie);

// 4. Calculate average grade
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("4. Average grade:", avgGrade.toFixed(2));

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("5. CS majors:", csMajors.map(s => s.name));

// 6. Sort by grade (highest first) - use spread to avoid mutating original
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("6. Sorted by grade (high to low):");
sortedByGrade.forEach(s => console.log(`   ${s.name}: ${s.grade}`));

const hasTopStudent = students.some(student => student.grade >= 90);
console.log("7. Is there a student with grade >= 90?", hasTopStudent);

const allPassing = students.every(student => student.grade >= 60);
console.log("8. Do all students have grade >= 60?", allPassing);

// MINI-PROJECT: STUDENT GRADE TRACKER
console.log("\n📊 MINI-PROJECT: Student Grade Tracker");
console.log("-------------------------------------");

const gradeTracker = {
    students: [],
    addStudent(name, grade) {
        this.students.push({ name, grade });
        console.log(`Added student: ${name}`);
        return this; //Allow chaining
    },
    //Get student by name
    getStudent(name) {
        const student = this.students.find(s => s.name === name);
        if (!student) {
            console.log(`Student "${name}" not found.`);
        }
        return student || null;
    },
    //Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) { 
            console.log(`Cannot calculate average. Student "${name}" not found.`);
            return 0;
        }
        if (!student.grades || typeof student.grades !== "object" || Object.keys(student.grades).length === 0) {
            console.log(`No grades found for student "${name}".`);
            return 0;
        }

        const grades = Object.values(student.grades);
        if (grades.length === 0) return 0;

        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        return parseFloat(average.toFixed(2));
    },
    //Get class average for a subject
    getSubjectAverage(subject) {
        const grades = this.students
            .map(student => {
                //check if grade object exists and has the subject
                return student.grades ?student.grades[subject] : undefined;
            })
            .filter(grade => grade !== undefined);

        if (grades.length === 0) {
            return 0;
        }
        const total = grades.reduce((sum, grade) => sum + grade, 0);
        return parseFloat((total/grades.length).toFixed(2));
    },
    //Get top performer (highest overall average)
    getTopStudent() {
        if (this.students.length === 0) return null;
        //1.Initialize variables OUTSIDE and BEFORE the loop

        let topStudent = this.students[0];
        let topAverage = this.getStudentAverage(topStudent.name);
        for (let i = 1; i < this.students.length; i++) {
            const student = this.students[i];
            const currentAvg = this.getStudentAverage(student.name);
    
            if (currentAvg > topAverage) {
                topStudent = student;
                topAverage = currentAvg;
            }
        }
        return topStudent;
    },
    //Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => {
            const avg = this.getStudentAverage(student.name);
            return avg < 70;
        });
    },
    //Get letter grade 
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    //generate formatted report card 
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "student not found";

        const average = this.getStudentAverage(name);
        const letterGrade = this.getLetterGrade(average);

        let report = '\n --- Report Card ---\n';
        report += `REPORT CARD: ${name.padEnd(19)}\n`;
        report += '-----------------------------\n';
        
        for (const [subject, grade] of Object.entries(student.grades)) {
            const subjLetter = this.getLetterGrade(grade);
            report += `${subject.padEnd(12)} ${grade.toString().padStart(3)}  ${subjLetter}\n`;
        }
        report += '-----------------------------\n';
        report += `Average: ${average.toFixed(2).padStart(5)} (${letterGrade})${' '.repeat(11)}\n`;
        report += '-----------------------------\n';
        return report;
    },

    //list all students
    listAllStudents() {
        console.log("\n--- All Students ---");
        this.students.forEach(s => {
            const avg = this.getStudentAverage(s.name);
            console.log(` . ${s.name}: Avg: ${avg})`);
        });
        return this;
    }
};
//Test the grade tracker
console.log("\n--- Testing Grade Tracker ---");

// Add students
gradeTracker
    .addStudent("Alice", { math: 95, english: 88, science: 92 })
    .addStudent("Bob", { math: 72, english: 80, history: 85 })
    .addStudent("Charlie", { math: 90, physics: 91 })
    .addStudent("Diana", { english: 88, science: 90 })
    .addStudent("Eve", { math: 95, english: 95, science: 98 });

    // Test all methods
    console.log("\n------ Results ------");
console.log("Get Alice's average:", gradeTracker.getStudentAverage("Alice"));
console.log("Get Math average:", gradeTracker.getSubjectAverage("math"));
console.log("Top student:", gradeTracker.getTopStudent()?.name || "No students");

const struggling = gradeTracker.getStrugglingStudents();
console.log("Struggling students:", struggling.map(s => s.name));

//List all
gradeTracker.listAllStudents();

// ============================================================
// DAILY CHALLENGES
// ============================================================

console.log("\n🏆 DAILY CHALLENGES");

// Day 1: FizzBuzz
console.log("\n📅 Day 1: FizzBuzz");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Day 2: Reverse String
console.log("\n📅 Day 2: Reverse String");
const reverseStringDaily = str => str.split('').reverse().join('');
console.log(reverseStringDaily("hello"));

// Day 3: Find Largest
console.log("\n📅 Day 3: Find Largest");
const findLargest = arr => arr.reduce((max, num) => num > max ? num : max);
console.log(findLargest([3, 1, 4, 1, 5, 9]));

// Day 4: Remove Duplicates
console.log("\n📅 Day 4: Remove Duplicates");
const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 3, 3]));

// Day 5: Palindrome
console.log("\n📅 Day 5: Palindrome");
const isPalindrome = str => {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
};
console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man a plan a canal Panama"));