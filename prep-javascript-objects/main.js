var person = {
  firstName: 'James',
  lastName: 'Young',
  hobby: 'Basketball'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'bum';
console.log("The person's current job is: ", person.job);

person.previousJob = 'student';
console.log("The person's previous job was: ", person.previousJob);

console.log('The complete person object: ', person);
