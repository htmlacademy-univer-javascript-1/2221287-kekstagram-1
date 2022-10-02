import {getRandomInteger} from  './utils.js';

const COUNT = 25;

const NAMES = [
  'Артём',
  'Евгений',
  'Александр'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const descriptions = [
  'Фотокарточка',
  'Получился случайный снимок!',
  'Как вам эти фотографии?'
];

const Likes = {
  MIN: 15,
  MAX: 200
};

const arrayObjects = [];

const arrayComments = (item) => {
  const array = [];
  for (let i = 0; i < item; i++){
    array.push({
      id: i,
      avatar: 'img/avatar-{{getRandomInt(1, 6)}}.svg',
      message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
      name: NAMES[getRandomInteger(0, NAMES.length - 1)]
    });
  }
  return array;
};

const addPhotos = () => {
  for (let i = 0; i < COUNT; i++){
    arrayObjects.push({
      id: i,
      url: 'photos/{{i + 1}}.jpg',
      description: descriptions[getRandomInteger(0, descriptions.length - 1)],
      likes: getRandomInteger(Likes.MIN, Likes.MAX),
      comments: arrayComments(getRandomInteger(0, 2))
    });
  }
};

addPhotos();

export {arrayObjects};
