
const { Router } = require("express");
const {
  getAllraffles,
  getRaffleById,
  getParticipantsByRaffleId,
  createRaffle,
  DeleteRaffle,
} = require("../queries/rafflesQueries");

const {
    validateIdMiddleware,
    // validateParticipantExistsMiddleware,
    validateRaffleExistsMiddleware,
  } = require("../middleware");

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

    
// Get raffle by ID
    rafflesController.get(
    "/:id",
    validateIdMiddleware,
    validateRaffleExistsMiddleware,
    async (request, response) => {
      try {
        const { raffle } = request; // from middleware
        response.status(200).json({ data: raffle });
      } catch (err) {
        response.status(500).json({ error: err.message });
      }
    },
  );





module.exports = rafflesController;