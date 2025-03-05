/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];
const vowelsList = 'aeiou';
const sortedByVowels = (wordsArr) => {
  const vowelsAmount = (element) =>
    element.split('').reduce((count, el) => (vowelsList.includes(el) ? count + 1 : count), 0);

  return wordsArr.sort((a, b) => vowelsAmount(a) - vowelsAmount(b));
};
console.log(sortedByVowels(words));

export { sortedByVowels };
