const COUNT = 25;
const NAMES = ['Артём', 'Евгений', 'Александр'];

const Likes = {
  MIN: 15,
  MAX: 200
};

const getRandomInteger = (min,max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min +1)) + min;
};

const addComments = () => ({
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const addPhoto = (id) => {
  id++;
  return {
    id: id,
    url: `img/avatar-${id + 1}.svg`,
    description: 'В целом всё неплохо. Но не всё.',
    likes: getRandomInteger(Likes.MIN, Likes.MAX),
    comments: addComments()
  };
};

const photos = Array.from({length: COUNT}, addPhoto);

export {photos};
