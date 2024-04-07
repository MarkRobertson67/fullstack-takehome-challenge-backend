
const db = require("../db/dbConfig");

const getAllraffles = async () => {
  return db.any(`
  SELECT *
  FROM raffles
  `);
};


module.exports = {
  getAllraffles,
};