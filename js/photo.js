import { getRandomInteger } from './util.js';
import { getRandomArrayElement } from './util.js';
import { similiarComemnts } from './create-photo-comments.js';

const MIN_PHOTO = 1;
const MAX_PHOTO = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const DESCRIPTIONS = [
  'Самый лучший день!',
  'Классная погода!',
  'Я и моя любимая еда.',
  'Летний отпуск на Мальдивах.',
  'Происки соседей'
];

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

export {createPhoto};

