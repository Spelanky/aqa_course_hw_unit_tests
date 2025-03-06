/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
   //   [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

// 1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
let forEach = [];
numbers.forEach((element) => {
  if (element % 3 === 0) forEach.push(element);
});
console.log(forEach);

// 2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива
let map = numbers.map((element) => element - numbers.length);
console.log(map);

// 3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
let filter = numbers.filter((element, index, arr) => index > 0 && element > arr[index - 1]);
console.log(filter);

// 4. find - присвойте элемент, равный своему индексу //2
let find = numbers.find((element, index) => element === index);
console.log(find);

// 5. sort - отсортируйте массив по возрастанию, не изменив изначальный
let sort = [...numbers].sort((a, b) => a - b);
console.log(sort);

// 6. reduce - получите сумму всех чисел массива //466
let reduce = numbers.reduce((element, num) => element + num, 0);
console.log(reduce);

// 7. some - проверьте, есть ли в массиве элементы больше 90 //true
let some = numbers.some((element) => element > 90);
console.log(some);

// 8. every - проверьте, что все элементы массива двухзначные //false
let every = numbers.every((element) => element >= 10 && element < 100);
console.log(every);

export { forEach, map, filter, find, sort, reduce, some, every };
