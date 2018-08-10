const faker = require('faker');
const fs = require('fs');

// create a csv file with appropriate headers for data
fs.writeFile(
  'data.csv',
  'id, brand, name, reviews, questions, price, color, size, weight, text',
  err => {
    if (err) console.log(err);
  }
);

const data = {
  brand: faker.company.companyName(),
  name: faker.random.words(8),
  reviews: faker.random.number(100000),
  questions: faker.random.number(1000),
  price: Math.random() * 5000,
  color: faker.commerce.color(),
  size: faker.random.word(),
  weight: faker.random.number(1000),
  text: faker.lorem.sentences(Math.floor(Math.random() * 10) + 10)
};
const sizes = [
  'X-Small X-Large XX-Large',
  'Small Medium Large',
  'Medium Large XX-Large',
  'X-Small Medium Large',
  'XXX-Large XXXX-Large XXXXX-Large',
  'XXXX-Small XXX-Small Small Large'
];
data.size = sizes[Math.floor(Math.random() * sizes.length)];
data.star1 = Math.floor(Math.random() * (data.reviews + 1));
data.star2 = Math.floor(Math.random() * (data.reviews - data.star1 + 1));
data.star3 = Math.floor(
  Math.random() * (data.reviews - data.star1 - data.star2 + 1)
);
data.star4 = Math.floor(
  Math.random() * (data.reviews - data.star1 - data.star2 - data.star3 + 1)
);
data.star5 = data.reviews - data.star1 - data.star2 - data.star3 - data.star4;

// create a csv file (use fs.appendFile())
// push data object into csv file using recursion
