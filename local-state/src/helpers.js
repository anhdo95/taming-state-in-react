export const getArrayOfObject = object => {
  return Object.keys(object).map(key => object[key]);
};