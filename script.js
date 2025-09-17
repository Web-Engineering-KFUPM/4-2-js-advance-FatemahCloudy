/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const student = {
     firstName: 'Fatemah',
     LastName: 'Almarhoon',
     _gpa: 4.0,
     get fullName() {
          return firstName + " " + LastName;
     },
     set updateGpa(newGpa) {
          if (newGpa >= 0.0 && newGpa <= 4.0) {
               this._gpa = newGpa;
          }
     }
};
console.log("----Task 1----");
console.log(student.fullName);
student.updateGpa(3.2);

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
console.log("----Task 2----");
const courseTitles = {"SWE206": "Intro. to Software Engineering", "SWE216": "Requirements Engineering", "SWE316": "Software Design & Construction"};
for (const key in courseTitles) {
   console.log(courseTitles[key]);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
console.log("----Task 3----");
const str = "Hello World";
console.log(str.length);
for (let i = 0; i < str.length; i++) {
   console.log(str.charAt(i));
}

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
console.log("----Task 4----");
const d = new Date();
console.log("Day: " + d.getDate());
console.log("Month: " + d.getMonth());
console.log("Year: " + d.getFullYear());

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
console.log("----Task 5----");
const nums = [10, 2, 30, 15, 20, 17, 80, 91, 1, 41];
const min = Math.min(...nums);
const max = Math.max(...nums);
console.log("min value: " + min);
console.log("max value: " + max);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
console.log("----Task 6----");
function maxItem(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must be non-empty.");
  }
  return Math.max(...arr);
}

try {
  const x = maxItem([]);
} catch (e) {
  console.log("Error: " + e);
} finally {
  console.log("The code was executed");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
