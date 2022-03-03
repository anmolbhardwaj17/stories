const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Intiialise");
})

app.listen(3000, () => {
    console.log(`Server running on port localhost:${3000}`)
})