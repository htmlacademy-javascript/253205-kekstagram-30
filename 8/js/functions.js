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

//Делу — время
const START_WORKDAY = '08:00';
const END_WORKDAY = '17:30';
const START_MEETING = '14:00';
const TIMING = 90;

const isMeetingTime = () => {
  const startTime = START_WORKDAY.split(':');
  const startTimeMinutes = parseInt(startTime[0],10) * 60 + parseInt(startTime[1],10);

  const endTime = END_WORKDAY.split(':');
  const endTimeMinutes = parseInt(endTime[0],10) * 60 + parseInt(endTime[1],10);

  const meetingTime = START_MEETING.split(':');
  const meetingStartMinutes = parseInt(meetingTime[0],10) * 60 + parseInt(meetingTime[1],10);
  const meetingEndMinutes = meetingStartMinutes + TIMING;

  if(meetingStartMinutes < startTimeMinutes || meetingEndMinutes > endTimeMinutes) {
    return false;
  } else {
    return true;
  }
};

isMeetingTime();
