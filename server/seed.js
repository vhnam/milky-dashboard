const fs = require('fs');
const faker = require('faker');
const {v4: uuidv4} = require('uuid');

const customers = [];

for (let i = 0; i < 1000; i++) {
  customers.push({
    id: uuidv4(),
    name: faker.name.findName(),
    point: Math.floor(Math.random() * 5000 + 1000),
    avatar: `${('000' + Math.floor(Math.random() * 40 + 1)).substr(-3)}.png`,
  });
}

fs.writeFile('./server/db.json', JSON.stringify({customers}), (err) => {
  if (err) throw err;
  console.log("It's saved!");
});
