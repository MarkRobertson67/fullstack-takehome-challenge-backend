
const db = require("../db/dbConfig");

const getAllRaffles = async () => {
    try {
        return await db.any("SELECT * FROM raffles ORDER BY id ASC");
    } catch (error) {
        throw new Error(`Error retrieving all raffles: ${error.message}`);
    }
};


const getRaffleById = async (id) => {
    try {
        return await db.oneOrNone("SELECT * FROM raffles WHERE id = $1", [id]);
    } catch (error) {
        throw new Error(`Error retrieving raffle with ID ${id}: ${error.message}`);
    }
};


const createRaffle = async (name, secret_token) => {
    try {
        // Check if name and secret_token are provided (not null or undefined)
        if (name && secret_token) {
            const newRaffle = await db.one(
                "INSERT INTO raffles (name, secret_token, created_at) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *",
                [name, secret_token]
            );
            return newRaffle;
        } else {
            throw new Error("Name and secret_token are required");
        }
    } catch (error) {
        throw new Error(`Error creating new raffle: ${error.message}`);
    }
};


const getAllParticipantsByRaffleId = async (id) => {
    try {
        const participants = await db.any("SELECT * FROM participants WHERE raffle_id = $1", [id]);
        return participants;
    } catch (error) {
        throw new Error(`Error fetching participants for raffle with ID ${id}: ${error.message}`);
    }
};


const signUpParticipantForRaffle = async (raffleId, first_name, last_name, email, phone) => {
    try {
        const newParticipant = await db.one(
            "INSERT INTO participants (raffle_id, first_name, last_name, email, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [raffleId, first_name, last_name, email, phone]
        );
        return newParticipant;
    } catch (error) {
        throw new Error(`Error signing up participant for raffle: ${error.message}`);
    }
};


const pickWinnerForRaffle = async (raffleId, secret_token) => {
    try {
        // Retrieve the raffle details including the secret_token
        const raffle = await db.oneOrNone(
            "SELECT * FROM raffles WHERE id = $1",
            [raffleId]
        );

        if (!raffle) {
            throw new Error(`Raffle with ID ${raffleId} not found`);
        }

        const storedToken = raffle.secret_token;

        // Validate the provided secret_token
        if (storedToken !== secret_token) {
            throw new Error("Invalid secret_token");
        }

        // Retrieve all participants for the specified raffle
        const participants = await getAllParticipantsByRaffleId(raffleId);

        if (!participants || participants.length === 0) {
            throw new Error(`No participants found for raffle with ID ${raffleId}`);
        }

        // Get the number of participants
        const numParticipants = participants.length;

        // Generate a random index within the range of participants
        const randomIndex = Math.floor(Math.random() * numParticipants);

        // Get the randomly selected winner (participant) based on the random index
        const winner = participants[randomIndex];

        if (!winner) {
            throw new Error(`There is no winner for the raffle with ID ${raffleId}`)
        }


        // Update the raffle record with the winner's ID and end_at date
        await db.none("UPDATE raffles SET winner_id = $1, end_at = CURRENT_TIMESTAMP WHERE id = $2",
            [
                winner.id,
                raffleId
            ]);

        return winner; // Return the selected winner
    } catch (error) {
        throw new Error(`Error picking winner for raffle: ${error.message}`);
    }
};

const getWinnerOfRaffle = async (raffleId) => {
    try {
        // Query the database to retrieve the winner's details based on the raffleId
        const winner = await db.oneOrNone(
            `SELECT p.id, p.first_name, p.last_name, p.email, p.phone
         FROM participants p
         INNER JOIN raffles r ON p.id = r.winner_id
         WHERE r.id = $1`,
            [raffleId]
        );

        if (winner) {
            return winner;
        } else {
            return { message: `No winner found for raffle with ID ${raffleId}` };
        }
    } catch (error) {
        throw new Error(`Error fetching winner of raffle: ${error.message}`);
    }
};


module.exports = {
    getAllRaffles,
    getRaffleById,
    createRaffle,
    getAllParticipantsByRaffleId,
    signUpParticipantForRaffle,
    pickWinnerForRaffle,
    getWinnerOfRaffle
};