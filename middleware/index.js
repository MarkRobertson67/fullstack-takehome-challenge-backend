
const { getRaffleById } = require("../queries/rafflesQueries");
const { getParticipantById } = require("../queries/participantsQueries");




const validateIdMiddleware = (request, response, next) => {
    // If the id is not valid, return 400 and do NOT call next()
    const { id } = request.params;
    if (!Number.isInteger(Number(id)) || Number(id) < 1) {
      return response
        .status(400)
        .json({ error: `id param must be positive integer; received ${id}` });
    } else {
      // Else "annotate" request with parsed id as number and call next
      request.id = Number(id);
      next();
    }
  };

  const validateParticipantExistsMiddleware = async (request, response, next) => {
    const { id } = request; // assumes this is called AFTER validateIdMiddleware
    const participant = await getParticipantById(id);
    if (!participant) {
      return response
        .status(404)
        .json({ error: `Cannot find participant with id ${id}` });
    }
    request.participant = participant;
    next();
  };

  const validateRaffleExistsMiddleware = async (request, response, next) => {
    const { id } = request; // assumes this is called AFTER validateIdMiddleware
    const raffle = await getRaffleById(id);
    if (!raffle) {
      return response
        .status(404)
        .json({ error: `Cannot find raffle with id ${id}` });
    }
    request.raffle = raffle;
    next();
  };


  module.exports = {
    validateIdMiddleware,
    validateParticipantExistsMiddleware,
    validateRaffleExistsMiddleware,
  };

