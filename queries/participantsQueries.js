
const db = require("../db/dbConfig");

const getAllparticipants = async () => {
  return db.any(`
  SELECT *
  FROM participants
  `);
};


module.exports = {
  getAllparticipants,
};