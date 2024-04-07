
const { Router } = require("express");
const {
  getAllparticipants,
  getParticipantById
} = require("../queries/participantsQueries");

// Import middleware functions
const {
  validateIdMiddleware,
  validateParticipantExistsMiddleware
} = require("../middleware");


const participantsController = Router();


// GET all participants
    participantsController.get("/", async (request, response) => {
  try {
    const participants = await getAllparticipants();
    response.status(200).json({ data: participants });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// Get participant by ID
participantsController.get(
  "/:id",
  validateIdMiddleware,
  validateParticipantExistsMiddleware,
  async (request, response) => {
    try {
      const { participant } = request; // from middleware
      response.status(200).json({ data: participant });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  },
);

module.exports = participantsController;