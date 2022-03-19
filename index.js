require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const userRoute = require("./routes");
const config = require("./config");

const { port, allowedDomains } = config;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors({ origin: allowedDomains, credentials: true }));

app.use(helmet());

app.use(compression());

app.use("/api", userRoute);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
