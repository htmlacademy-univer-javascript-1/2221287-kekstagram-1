//Функция, возвращающая случайное целое число из переданного диапазона включительно - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  if(rand < 0){
    return('Запись отрицательного числа некорректна');
  } else {
    if (min >= max) {
      return('Введите данные в порядке возрастания и проверьте, не одинаковы ли они');
    }
  } return Math.floor(rand);
}

//Функция для проверки максимальной длины строки
function commentLength(testString, maxLength) {
  if(testString.length <= maxLength) {
    return true;
  } return false;
}
