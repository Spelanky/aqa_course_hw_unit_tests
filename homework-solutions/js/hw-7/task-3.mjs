/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  const numberArray = String(number).split('');
  let sumArray = 0;
  for (number of numberArray) {
    sumArray += Number(number);
  }

  return sumArray > 9 ? digitalRoot(sumArray) : sumArray;
}
console.log(digitalRoot(144));

export { digitalRoot };
