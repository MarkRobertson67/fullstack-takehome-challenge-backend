# Raffles-backend

## Brief project description.

The backend part of this project involves building a Raffle App REST API using Node.js and Express. This API will support various endpoints to manage raffles, participants, and winners. The API will interact with a PostgreSQL database to store and retrieve data in JSON format. Key functionalities include creating raffles, listing all raffles, adding participants to raffles, and picking random winners for raffles based on specified conditions.

The API will adhere to RESTful principles, accepting and returning JSON payloads for all operations. It will implement robust validation and error handling practices, following best practices for API design and security. Each endpoint will have specific requirements, such as providing a secret token for certain operations to ensure security and integrity.

The overall goal is to create a scalable and maintainable backend solution that seamlessly integrates with a React frontend to deliver a complete Raffle application. The backend API will serve as the foundation for managing raffles and participants, allowing users to interact with the application's core functionalities efficiently and securely.

## Table of Contents

  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Set Up Environment Variables](#set-up-environment-variables)
  - [Database Configuration](#database-configuration)
  - [Start the Server](#start-the-server)



## Getting Started

### [Prerequisites](#prerequisites)

Node.js and npm: Ensure you have Node.js and npm installed. You can download and install them from nodejs.org.

PostgreSQL: Install PostgreSQL on your machine. You can download and install it from postgresql.org.

### Clone the Repository

git clone the repo to your machine


## Install Dependencies

Navigate into the project directory and install the required dependencies using npm.

npm install

## Set Up Environment Variables

Create a .env file in the root directory of your project to store environment variables.

Example .env file:

PORT=2020
DB_URL=postgres://<username>:<password>@<host>:<port>/<database_name>

Replace <username>, <password>, <host>, <port>, and <database_name> with your PostgreSQL database connection details.

## Database Configuration

# Setting Up the Database
Ensure that PostgreSQL is installed and running on your machine. Create a new database for this project if it doesn't exist.

Use the following command to set up the database schema and seed data:

npm run db:start
then,
npm run db:setup

This command executes the db:setup script defined in your package.json, which runs the schema and seed SQL files on your database using the DATABASE_URL environment variable.


To reset the database and seed new data, you can use:

npm run db:shutdown
npm run db:start
npm run db:setup

## Start the Server
Start the backend server by running the following command:

npm start

The server should now be running locally on the specified port (e.g., http://localhost:2020).

To see the data in the tables navigate to /raffles and/or /participants where you should see the data from the tables. 

Example Request:

curl http://localhost:2020/raffles
Example Response:

{
  "data": [
    {
      "id": 1,
      "name": "Help the aged",
      "secret_token": "H63T2Yb4pL",
      "winner_id": null
    },
    {
      "id": 2,
      "name": "Buy me a new car",
      "secret_token": "gR6dF7sP9W",
      "winner_id": null
    },
    {
      "id": 3,
      "name": "Buy a wheelchair for Alice",
      "secret_token": "e8jWq2vKuX",
      "winner_id": null
    }
  ]
}


