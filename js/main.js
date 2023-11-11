const MIN_PHOTO = 1;
const MAX_PHOTO = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

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

const createId = () => {
  let currentId = 0;

  return () => {
    currentId += 1;
    return currentId;
  };

};

const generateId = createId();
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const photoComments = () => {
  const randomNumber = generateId();
  const randomAvatar = getRandomInteger(MIN_AVATAR, MAX_AVATAR);
  const randomMessage = getRandomArrayElement(MESSAGES);
  const randomName = getRandomArrayElement(NAMES);

  return {
    id: randomNumber,
    avatar: `img/avatar${randomAvatar}.svg`,
    message: randomMessage,
    name: randomName,
  };
};

const randomComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
const similiarComemnts = Array.from({length: randomComments}, photoComments);

const createPhoto = () => {
  const randomId = getRandomInteger(MIN_PHOTO, MAX_PHOTO);
  const randomPhotoNumber = getRandomInteger(MIN_PHOTO, MAX_PHOTO);
  const randomDescription = getRandomArrayElement(DESCRIPTIONS);
  const randomLike = getRandomInteger(MIN_LIKES, MAX_LIKES);

  return {
    id: randomId,
    url: `photos/${randomPhotoNumber}.jpg`,
    description: randomDescription,
    likes: randomLike,
    comments: similiarComemnts,
  };
};

createPhoto();
