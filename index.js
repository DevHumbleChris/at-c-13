const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const ROUTER = require("./routes/router");
const cors = require("cors");
//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
///

app.use("/", ROUTER);
app.listen(port, () => console.log(`app is running at port: ${port}`));

module.exports = {
    app
}
