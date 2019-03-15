const Sequelize = require('sequelize');
const db = new Sequelize('TodoList', 'root', '', {
  dialect: 'mysql',
  define: {
    timestamp: false,
    allowNull: false
  }
});

db
  .authenticate()
  .then(() => console.log('Connected to MySQL Database'))
  .catch(err => console.error(err));

module.exports = db
