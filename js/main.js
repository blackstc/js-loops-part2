// add scripts

console.log("sanity check!");

var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

//problem 1
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

//problem 2
// for (var i = 0; i < students.length; i++) {
//   if (i % 2 === 0) {
//     console.log(students[i]);
//   }
// }

//problem 3
// var reverseStudents = students.reverse();
// for (var i = 0; i < students.length; i++) {
//   console.log(reverseStudents[i]);
// }

//problem 4
for (var i = 0; i < students.length; i++) {
  if (students[i] === students[0] || students[i] === students[students.length - 1]) {
    console.log(students[i]);
  } else {
    console.log(students[i]);
    console.log(students[i]);
  }
}
