
const { Router } = require("express");
const {
  getAllparticipants,

} = require("../queries/participantsQueries");

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



module.exports = participantsController;