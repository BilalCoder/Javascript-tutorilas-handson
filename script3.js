let studentObject = {
  rollNo: '101',
  fullName: 'Bilal Khan',
  age: 21,
  subjects: ['Maths', 'Science', 'English', 'Hindi'],
}

console.log(studentObject);

console.log(studentObject.fullName);
console.log(studentObject['fullName']);

var studentName = 'fullName';
console.log(studentObject[studentName]);

console.log(studentObject[fullName]); //Uncaught ReferenceError: fullName is not defined

