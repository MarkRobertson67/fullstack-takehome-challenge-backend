
const { Router } = require("express");

const {
    getAllRaffles,
    createRaffle,
    getRaffleById,
    getAllParticipantsByRaffleId,
    signUpParticipantForRaffle,
    pickWinnerForRaffle,
    getWinnerOfRaffle,
} = require("../queries/rafflesQueries");

const {
    validateIdMiddleware,
    validateParticipantExistsMiddleware,
    validateRaffleExistsMiddleware,
} = require("../middleware");

const rafflesController = Router();


// GET all raffles
rafflesController.get("/", async (request, response) => {
    try {
        const raffles = await getAllRaffles();
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
            const { id } = request.params;
            const raffle = await getRaffleById(id);
            response.status(200).json({ data: raffle });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    },
);

// Create a new raffle 
rafflesController.post("/", async (request, response) => {
    try {
        const { name, secret_token } = request.body;
        const newRaffle = await createRaffle(name, secret_token);
        response.status(201).json({ data: newRaffle });
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
});


// Retrieve all participants for a raffle
rafflesController.get(
    "/:id/participants",
    validateIdMiddleware,
    validateRaffleExistsMiddleware,
    async (request, response) => {
        try {
            const { id } = request.params;
            const participants = await getAllParticipantsByRaffleId(id);
            response.status(200).json({ data: participants });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    }
);


// Sign up a participant for a raffle
rafflesController.post(
    "/:id/participants",
    validateIdMiddleware,
    validateRaffleExistsMiddleware,
    validateParticipantExistsMiddleware,
    async (request, response) => {
        try {
            const { id } = request.params;
            const { first_name, last_name, email, phone } = request.body;
            const newParticipant = await signUpParticipantForRaffle(
                id,
                first_name,
                last_name,
                email,
                phone
            );
            response.status(201).json({ data: newParticipant });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    }
);

// Pick a winner from the participants at random for a raffle
rafflesController.put(
    "/:id/winner",
    validateIdMiddleware,
    validateRaffleExistsMiddleware,
    async (request, response) => {
        try {
            const { id } = request.params;
            const { secret_token } = request.body;
            const winner = await pickWinnerForRaffle(id, secret_token);
            response.status(200).json({ data: winner });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    }
);

// Retrieve the winner of a raffle
rafflesController.get(
    "/:id/winner",
    validateIdMiddleware,
    validateRaffleExistsMiddleware,
    async (request, response) => {
        try {
            const { id } = request.params;
            const winner = await getWinnerOfRaffle(id);
            response.status(200).json({ data: winner });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    }
);


module.exports = rafflesController;