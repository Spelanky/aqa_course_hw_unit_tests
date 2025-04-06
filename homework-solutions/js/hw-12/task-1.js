// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат его резолва в консоль

const p = new Promise((resolve) => resolve(1));
p.then((result) => console.log(result));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его реджекта в консоль

const rejectPromise = new Promise((_, reject) => reject('Promise failed'));
rejectPromise.catch(console.error);

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number) {
  return Promise.resolve(number);
}

/*
  5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNaumber(3)]), обработайте его результаты и последовательно выведите
    в консоль результаты работы каждого промиса через .then 
  */

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((res) => console.log(res));
  })
  .catch((error) => console.error(`Promise.all error: ${error}`));

/*
  6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
     в консоль статус и результат каждого промиса через .then
  */

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((res) => console.log(res.status, res));
});

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function handlePromises() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }

  const settledResults = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
  settledResults.forEach((res) => console.log(res.status, res));
}

handlePromises();
