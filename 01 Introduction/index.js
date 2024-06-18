/** 
 -------- THEORY
**** DATA STRUCTURE
     A data structure is a specific way of organizinng, storing and accessing data.

**** ALGORIGHTM
     A set of instructure that tells a computer how to do something or you can also say step-by-step solution of the problem is called algorithm.

 -------- PROBLEM
 Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents & studentName) iterate over all students and find that specific user "studentName".

 */

// -------- ANSWER
// Data Structure
const studentDatabase = ["Abhijeet", "Bibek", "Carrie", "Dan"];

// Algorithme for finding a specific user
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Student '${studentName}' found at position ${i}`);
    }
  }
};

findStudent(studentDatabase, "Bibek");
