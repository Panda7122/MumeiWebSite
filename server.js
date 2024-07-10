const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const port = 3300;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Server running on http://localhost:${port}`);
});