/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
for (let i = 10; i >= 0; i--) {
  if (i % 2 === 0) {
    // Если i делится на 2 без остатка (чётное число)
    evenNumbersResult += i;
  } else {
    // Если i не делится на 2 без остатка (нечётное), то добавляем в строку '-'
    evenNumbersResult += '-';
  }
}
console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

// Внешний цикл создает ряды смайликов
// Вложенный цикл добавляет смайлики в строку
let smilePatternResult = '';
let smile = `:)`;
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    smilePatternResult += `${smile}`;
  }
  smilePatternResult += `\n`;
}
smilePatternResult = smilePatternResult.trimEnd();

console.log(smilePatternResult);
// После каждого ряда смайликов добавляем переход на новую строку.
// В конце окажется лишний \n, который убираем с .trimEnd().

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
console.log((replaceSpacesWithOneResult = text.replace(/\s/g, '1')));

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
