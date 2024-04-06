
-- Drop tables if they exist
DROP TABLE IF EXISTS participants;
DROP TABLE IF EXISTS raffles;

-- Create 'raffles' table
CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    secret_token VARCHAR(255) NOT NULL UNIQUE -- Ensure secret_token is unique
);

-- Create 'participants' table
CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(12),
    raffle_id INTEGER REFERENCES raffles(id) ON DELETE CASCADE
);

-- Create an index on the raffle_id column
CREATE INDEX idx_participants_raffle_id ON participants(raffle_id);