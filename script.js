/* Practice Exercises*/
var shoutIt = function (name) {
  var shout = `Hello, ${name}, nice to meet you!`.toUpperCase();
  return shout;
};

console.log(shoutIt("Shaunte"));
console.log(shoutIt("Jessica"));

var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return "You need to provide 2 numbers!";
  } else if (typeof num2 !== "number") {
    return "You need to provide 2 numbers!";
  } else {
    return num1 * num2;
  }
};

console.log(multiply(2, 3));
console.log(multiply(8, 10));
console.log(multiply(4.7, 0.056));
console.log(multiply("hello", 3));
