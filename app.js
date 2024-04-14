// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const rafflesController = require("./controllers/rafflesController");
const participantsController = require("./controllers/participantsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());


//Controllers
app.use("/raffles", rafflesController);
app.use("/participants", participantsController);


// HEALTH CHECK ROUTE
app.get("/", (req, res) => {
    const htmlContent = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
            <p style="text-align: center; font-size: 24px;">
                Welcome to the fullstack takehome challenge <strong>Back-end</strong>
            </p>
        </div>
    `;
    
    // Send the HTML content as the response
    res.send(htmlContent);
    // res.json({ message: "Welcome to the fullstack takehome challenge **Back-end**" });
}
);

// NOT FOUND ROUTE
app.get("*", (req, res) => {
    res.status(404).json({ message: "Page Not Found" });
});


module.exports = app;