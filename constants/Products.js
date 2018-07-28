import faker from 'faker';
import generate from 'nanoid/generate';

var products = (times) => {
  var result = [];
  for (var i = 0; i < times; ++i) {
    result.push({
      id: generate('1234567890abcdef', 10),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      imageUrl: faker.image.technics(),
    });
  }
  return result;
};

export default products(10);
