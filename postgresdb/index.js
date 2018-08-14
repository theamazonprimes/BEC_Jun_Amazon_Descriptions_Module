const Sequelize = require('sequelize');

const db = new Sequelize('bec_amazon', 'jkim', 'junkim123', {
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});

const Description = db.define('description', {
  brand: Sequelize.STRING,
  name: Sequelize.STRING,
  star2: Sequelize.INTEGER,
  star1: Sequelize.INTEGER,
  star3: Sequelize.INTEGER,
  star4: Sequelize.INTEGER,
  star5: Sequelize.INTEGER,
  reviews: Sequelize.INTEGER,
  questions: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  color: Sequelize.STRING,
  size: Sequelize.STRING,
  weight: Sequelize.INTEGER,
  text: Sequelize.TEXT
});

db.sync().catch(err => console.log(err));

module.exports = Description;
// bulkCreate
