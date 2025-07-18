function calculateStudentGrade(score) {
  // Start coding here
  let result;
  if (score >= 90) {
    result = "A";
  } else if (score >= 80 && score <= 89) {
    result = "B";
  } else if (score >= 70 && score <= 79) {
    result = "C";
  } else if (score >= 60 && score <= 69) {
    result = "D";
  } else if (score <= 59) {
    result = "F";
  }

  return result;
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
