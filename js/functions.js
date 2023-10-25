//Функция для проверки длины строки

const checkStringLength = function (string, stringLength) {
  if (string.length > stringLength){
    return false;
  }
  return true;
};

checkStringLength('How are you?',30);

//Функция для проверки, является ли строка палиндромом

const checkPolydrome = function (string) {
  const stringNoSpaces = string.replaceAll(' ','');
  const stringLowCase = stringNoSpaces.toLowerCase();

  let newString = '';

  for(let i = stringLowCase.length - 1; i >= 0; i--) {
    newString = newString + stringLowCase.at(i);
  }

  if (stringLowCase === newString) {
    return true;
  }

  return false;
};

checkPolydrome('Лёша на полке клопа нашёл ');
