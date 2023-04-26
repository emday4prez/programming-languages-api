require('dotenv').config();

const config = {
  db: {
    host: 'db4free.net',
    user: process.env.USERNAME,
    password: process.env.PW,
    database: process.env.DB,
  },
  listPerPage: 10,
};
module.exports = config;
