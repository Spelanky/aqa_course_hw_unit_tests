/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  let reverseword = '';

  if (typeof word !== 'string') {
    return false;
  }
  for (let i = word.length - 1; i >= 0; i--) {
    reverseword += word[i];
  }

  return word.toLowerCase() === reverseword.toLowerCase();
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  const resultArray = [];
  if (!sentence || typeof sentence !== 'string') {
    return resultArray;
  }

  const sentenceArray = sentence.split(' ');
  let maxLength = 0;

  for (let element of sentenceArray) {
    if (element.length > maxLength) {
      maxLength = element.length;
    }
  }
  for (let element of sentenceArray) {
    if (element.length === maxLength) {
      resultArray.push(element);
    }
  }
  return resultArray;
}
console.log(findLongestWords('i dont know javascrypt javascrypt'));

export { isPalindrom, findLongestWords };
