require("dotenv").config();
const express = require("express");
const loginRouter = require("./src/routes/loginRouter");
const router = require("./src/routes/router");
const app = express();

app.use(express.json());
app.use("/", loginRouter);
app.use("/", router);

app.listen(3000, () => console.log("initialized at 3000."));
