//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.
/*****************************************************************
Task 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
// part 1;

const numbers = [10, 13, 20, 25, 38, 35, 40];
const newArrays = numbers.filter(function (num) {
  // filteration transform array.
  return num >= 25;
});

console.log(newArrays, "task-1-part-1");

// part 2;
const newArrays1 = numbers.filter(function (num) {
  // filteration transform array.
  return num % 5 === 0;
});

console.log(newArrays1, "task-1-part-2");

//___________________________________________________________________________//

/*****************************************************************
task 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

// part 1:
let squares = [];

for (let i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] ** 2);
}

console.log(squares, "task-2-part-1");
squares = numbers.map(function (num) {
  return num * num;
});

// part 2:

squares = numbers.map(function (num) {
  return num * 2;
});
console.log(squares, "task-2-part-2");
//.................................................
/*****************************************************************
Task 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
//Part 1:

const newArrays3 = numbers.filter(function (num) {
  // filteration transform array.
  return num >= 20;
});
squares = newArrays3.map(function (num) {
  return num * num;
});

console.log(squares, "task-3-part-1");
