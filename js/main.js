//Функция, возвращающая случайное целое число из переданного диапазона включительно - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomInteger = (min,max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min +1)) + min;
};


//Функция для проверки максимальной длины строки
const checkStringLength = (str, max) => str.length <= max;

console.log(getRandomInteger(1,2));
console.log(checkStringLength('Привет, VS!', 5));
