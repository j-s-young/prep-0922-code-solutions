function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

/** */
function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

/** */
function getGreeting(name) {
  return 'Hello ' + name;
}
var greeting = getGreeting('World');
console.log('greeting', greeting);

/** */
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var result1 = addAndMultiplyBy5(10, 5);
console.log('result1', result1);

/** */
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var result2 = multiplyAndDivideBy5(35, 10);
console.log('result2', result2);

/** */
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var result3 = subtractTwoNumbers(22, 7);
console.log('result3', result3);

/** */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

/** */
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var FullName = getFullName('Juan', 'Ramirez');
console.log('FullName', FullName);

/** */
function cube(number) {
  return number * number * number;
}
var cubeNumber = cube(5);
console.log('cubeNumber', cubeNumber);
