const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTION = [
  'Самый лучший день!',
  'Классная погода!',
  'Я и моя любимая еда.',
  'Летний отпуск на Мальдивах.',
  'Происки соседей'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const photoComments = () => {
  const randomNumber = getRandomInteger(1,999);
  const randomAvatar = getRandomInteger(1,6);
  const randomMessageIndex = getRandomInteger(0,MESSAGES.length - 1);
  const randomNameIndex = getRandomInteger(0,NAMES.length - 1);

  return {
    id: randomNumber,
    avatar: `img/avatar${randomAvatar}.svg`,
    message: MESSAGES[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };
};

const randomComments = getRandomInteger(0,30);
const similiarComemnts = Array.from({length: randomComments}, photoComments);

const photoDescription = () => {
  const randomId = getRandomInteger(1, 25);
  const randomPhotoNumber = getRandomInteger(1, 25);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);
  const randomLike = getRandomInteger(15, 200);

  return {
    id: randomId,
    url: `photos/${randomPhotoNumber}.jpg`,
    description: DESCRIPTION[randomDescriptionIndex],
    likes: randomLike,
    comments: similiarComemnts,
  };
};

console.log(photoDescription());
