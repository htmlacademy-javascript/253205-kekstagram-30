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

const DESCRIPTIONS = [
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

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const photoComments = () => {
  const randomNumber = getRandomIntInclusive(0, 200);
  const randomAvatar = getRandomInteger(1, 6);
  const randomMessage = getRandomArrayElement(MESSAGES);
  const randomName = getRandomArrayElement(NAMES);

  return {
    id: randomNumber,
    avatar: `img/avatar${randomAvatar}.svg`,
    message: randomMessage,
    name: randomName,
  };
};

const randomComments = getRandomInteger(0, 30);
const similiarComemnts = Array.from({length: randomComments}, photoComments);

const photoDescription = () => {
  const randomId = getRandomInteger(1, 25);
  const randomPhotoNumber = getRandomInteger(1, 25);
  const randomDescription = getRandomArrayElement(DESCRIPTIONS);
  const randomLike = getRandomInteger(15, 200);

  return {
    id: randomId,
    url: `photos/${randomPhotoNumber}.jpg`,
    description: randomDescription,
    likes: randomLike,
    comments: similiarComemnts,
  };
};

photoDescription();
