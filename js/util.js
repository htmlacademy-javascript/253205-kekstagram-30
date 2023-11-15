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

export {getRandomInteger};
export {generateId};
export {getRandomArrayElement};
