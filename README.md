# Raffles-backend

## Brief project description.

The backend part of this project involves building a Raffle App REST API using Node.js and Express. This API will support various endpoints to manage raffles, participants, and winners. The API will interact with a PostgreSQL database hosted on ElephantSQL, to store and retrieve data in JSON format. Key functionalities include creating raffles, listing all raffles, adding participants to raffles, and picking random winners for raffles based on specified conditions.

The API will adhere to RESTful principles, accepting and returning JSON payloads for all operations. It will implement robust validation and error handling practices, following best practices for API design and security. Each endpoint will have specific requirements, such as providing a secret token for certain operations to ensure security and integrity.

The overall goal is to create a scalable and maintainable backend solution that seamlessly integrates with a React frontend to deliver a complete Raffle application. The backend API will serve as the foundation for managing raffles and participants, allowing users to interact with the application's core functionalities efficiently and securely.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Set Up Environment Variables](#set-up-environment-variables)
  - [Database Configuration](#database-configuration)
  - [Initialize the Database](#initialize-the-database)
  - [Start the Server](#start-the-server)
- [API Endpoints](#api-endpoints)



## Getting Started

### [Prerequisites](#prerequisites)

Ensure you have the following prerequisites installed on your machine:

- **Node.js and npm:** Download and install from [nodejs.org](https://nodejs.org).
- **ElephantSQL Database:** Sign up and create a database at [ElephantSQL](https://www.elephantsql.com) to obtain your database connection URL.
- **Follow the instructions to set up the ElephantSQL database [here](https://docs.google.com/document/d/1XJq1FzFShWGnDTuVfvdtjQxH8IY3v-6jtBHjMK5_-7A/edit?usp=sharing).


### Clone the Repository

git clone the repo to your machine


## Install Dependencies

Navigate into the project directory and install the required dependencies using npm.

npm install

## Set Up Environment Variables

Create a .env file in the root directory of your project to store environment variables.

Example .env file:

PORT=2020
DB_URL=<insert_your_elephantsql_url_here>

Replace <insert_your_elephantsql_url_here> with your ElephantSQL database connection URL obtained during the signup process.


## Database Configuration

Ensure that your ElephantSQL database is running and accessible.


# Initialize the Database

Use the following command to set up the database schema and seed data:

npm run db:setup

This command executes the db:setup script defined in your package.json, which runs the schema and seed SQL files on your ElephantSQL database using the DATABASE_URL environment variable.


## Start the Server
Start the backend server by running the following command:

npm start

The server should now be running locally on the specified port (e.g., http://localhost:2020).


## API Endpoints

Use API endpoints to interact with the application:

/raffles: Retrieve a list of raffles.
/participants: Retrieve a list of participants.

Example Request:

http://localhost:2020/raffles

Example Response:

```json
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
```

