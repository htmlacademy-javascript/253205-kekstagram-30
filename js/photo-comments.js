import { getRandomInteger } from './util.js';
import { generateId } from './util.js';
import { getRandomArrayElement } from './util.js';

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

const createPhotoComments = () => {
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
const similiarComemnts = Array.from({length: randomComments}, createPhotoComments);

export {similiarComemnts};
