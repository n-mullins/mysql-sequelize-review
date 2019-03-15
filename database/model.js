const Sequelize = require('sequelize');
const db = require('./index');

const Model = db.define('Todo', 
  {
    name: 
      {type: Sequelize.STRING, allowNull: false},
  },
    {timestamps: false},
  );

db
  .sync()
  .then(() => console.log('Synced with mySQL'))
  .catch(err => console.error(err));

module.exports = Model;
