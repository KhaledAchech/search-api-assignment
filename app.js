global.__basedir = __dirname;

const express = require('express');
const app = express();
const PORT = 7070;

const artist_routes = require("./routes/artists_routes");
app.use("/artist", artist_routes);

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
