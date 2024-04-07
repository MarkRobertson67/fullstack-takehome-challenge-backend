
const { Router } = require("express");
const {
  getAllraffles,
  getRafflesBtId,
  getParticipantsByRaffleId,
  createraffle,
  Deleteraffle
  
} = require("../queries/rafflesQueries");

const rafflesController = Router();


// GET all raffles
    rafflesController.get("/", async (request, response) => {
  try {
    const raffles = await getAllraffles();
    response.status(200).json({ data: raffles });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});


module.exports = rafflesController;