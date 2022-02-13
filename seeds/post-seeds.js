const { Post } = require('../models');

const postdata = [
  {
    title: 'TITLE OF POST',
    content: 'Donec posuere metus vitae ipsum.',
    user_id: 1
  },
  {
    title: 'testing post content',
    content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 2
  },
  {
    title: 'Cool Content',
    content: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;