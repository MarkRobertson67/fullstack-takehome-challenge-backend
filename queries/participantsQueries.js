
const db = require("../db/dbConfig");

const getAllparticipants = async () => {
  return db.any(`
  SELECT *
  FROM participants
  `);
};


// Get participant by ID
const getParticipantById = async (id) => {
  return db.oneOrNone("SELECT * FROM participants WHERE id = $1", [id]);
};





module.exports = {
  getAllparticipants,
  getParticipantById,
};