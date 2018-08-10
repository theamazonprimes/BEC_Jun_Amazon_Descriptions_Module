const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

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

const writer = csvWriter();
writer.pipe(fs.createWriteStream('data.csv'));
// since data is an object, we should be able to use it to use it as the object needed as auto headers
// if it doesn't work, write it out manually
// https://www.npmjs.com/package/csv-write-stream
// https://www.sitepoint.com/basics-node-js-streams/
// https://stackoverflow.com/questions/40948879/append-to-a-csv-file-in-nodejs-using-csv-write-stream
// https://nodejs.org/api/stream.html#stream_event_drain
writer.write(data);
writer.end('ENDED! DONE!! FINISHED!!!');
// use while loop with fs.drain to create
