import { createPhotos } from './photo.js';

const userPicture = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const listPicture = document.createDocumentFragment();

const userRandomPicture = createPhotos();

userRandomPicture.forEach(({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContet = comments;
  pictureElement.querySelector('.picture__likes').textContet = likes;

  listPicture.appendChild(pictureElement);
});

userPicture.appendChild(listPicture);
