const Todo = require('./model');

const data = [
  {
    name: 'Todo 1'
  },
  {
    name: 'Todo 2'
  },
  {
    name: 'Todo 3'
  }
]

Todo
  .sync({ force: false })
  .then(() => {
    Todo.bulkCreate(data)
      .then(() => console.log('Added data'));
  });