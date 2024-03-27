// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the fullstack takehome challenge Back-end" });
}
);

// ROUTES
app.get("*", (req, res) => {
    res.status(404).json({ message: "Page Not Found" });
});


module.exports = app;