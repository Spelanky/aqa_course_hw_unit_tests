/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

const vowelsList = 'AEIOUaeiou';
const consonantsList = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
let wowelQuantity = 0;
let consonantsQuantity = 0;

for (let i = 0; i < word.length; i++) {
  if (vowelsList.includes(word[i])) {
    wowelQuantity += 1;
  } else if (consonantsList.includes(word[i])) {
    consonantsQuantity += 1;
  }
}

let vowelsAndConsonantsResult = `${word} contains ${wowelQuantity} vowels and ${consonantsQuantity} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
