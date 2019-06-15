const uuid = require('uuid/v4');

const bookmarks = [
  {
  id: uuid(),
  title: 'Thinkful',
  url: 'https://www.thinkful.com',
  desription: 'Web development program',
  rating: 5
  },

  {
  id: uuid(),
  title: 'Google',
  url: 'https://www.google.com',
  description: 'Information search engine',
  rating: 5
  },

  {
  id: uuid(),
  title: 'IMDB',
  url: 'https://www.imdb.com/',
  desription: 'Movie information database',
  rating: 4
  },
]

module.exports = { bookmarks };