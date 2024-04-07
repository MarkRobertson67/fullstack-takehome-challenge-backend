
const db = require("../db/dbConfig");

const getAllraffles = async () => {
  return db.any(`
  SELECT *
  FROM raffles
  `);
};


const getRaffleById = async (id) => {
    return db.oneOrNone("SELECT * FROM raffles WHERE id = $1", [id]);
  };


module.exports = {
  getAllraffles,
  getRaffleById,
};