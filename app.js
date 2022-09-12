const express =require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Make a Post...")
});

app.get("*", (req, res) => {
    res.status(404)
    .send ("Page not found.")
});

module.exports= app;